// Reveal — editorial scroll-entrance (clip-up + blur-up), inline-style driven.
//
// IMPORTANT robustness note: some sandboxed preview environments freeze the CSS
// animation timeline (transitions stick at currentTime 0), which would otherwise
// trap content in its hidden pre-animation state forever. To defend against that,
// every element LOCKS itself to the visible state with `transition:none` a short
// wall-clock delay after it's revealed — instant, no timeline required. Real
// browsers play the transition first; a frozen timeline simply snaps to visible.
const { useRef: useRefRev, useEffect: useEffectRev, useState: useStateRev } = React;

const EE = "cubic-bezier(0.16, 1, 0.3, 1)";
const PRM = typeof window !== "undefined" && window.matchMedia ?
window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

// returns [ref, hidden, locked]
//   hidden  → element should be in its pre-animation (hidden) state
//   locked  → drop the transition and pin the resting state (failsafe / settled)
function useReveal(threshold) {
  const ref = useRefRev(null);
  const [seen, setSeen] = useStateRev(PRM);
  const [locked, setLocked] = useStateRev(PRM);

  // observe → reveal
  useEffectRev(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const inView = r.top < (window.innerHeight || 800) * 0.95 && r.bottom > -60;
    if (inView) {setSeen(true);return;}
    if (typeof IntersectionObserver === "undefined") {setSeen(true);return;}
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {setSeen(true);io.disconnect();}});
    }, { rootMargin: "0px 0px -8% 0px", threshold: threshold || 0.15 });
    io.observe(el);
    // Unconditional failsafe: reveal after a wall-clock delay even if the
    // observer never fires (sandboxed iframes can freeze the timeline / IO).
    const failsafe = setTimeout(() => setSeen(true), 1800);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, [seen]);

  // once revealed, lock to visible after the transition would have finished
  useEffectRev(() => {
    if (!seen || locked) return;
    const t = setTimeout(() => setLocked(true), 1300);
    return () => clearTimeout(t);
  }, [seen, locked]);

  return [ref, !seen, locked];
}

// vertical clip-rise for big display headers
function RiseLines({ children, className = "", delay = 0 }) {
  const [ref, hidden, locked] = useReveal(0.25);
  return (
    <div className={className} style={{ overflow: "hidden", paddingBottom: "0.08em" }}>
      <div
        ref={ref}
        style={{
          transform: hidden ? "translateY(108%)" : "translateY(0)",
          transition: locked ? "none" : `transform 0.9s ${EE} ${delay}s`,
          willChange: "transform"
        }}>
        
        {children}
      </div>
    </div>);

}

// generic blur-up fade for body blocks, cards, rows
function FadeUp({ children, className = "", delay = 0, y = 26, as = "div", style }) {
  const [ref, hidden, locked] = useReveal(0.12);
  const Tag = as;
  const motionStyle = {
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translateY(${y}px)` : "translateY(0)",
    filter: hidden ? "blur(8px)" : "blur(0px)",
    transition: locked ? "none" : `opacity 0.75s ${EE} ${delay}s, transform 0.75s ${EE} ${delay}s, filter 0.75s ease ${delay}s`
  };
  return (
    <Tag ref={ref} className={className} style={Object.assign(motionStyle, style || {})}>
      {children}
    </Tag>);

}

Object.assign(window, { RiseLines, FadeUp, useReveal, edEase: [0.16, 1, 0.3, 1] });