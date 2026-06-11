// About — the "WHO I AM" editorial page: oversized ABOUT, portrait slot,
// serif thesis line + bio, and a focus-words strip.
const { useRef: useRefAbout, useState: useStateAbout } = React;

// Interactive 3D portrait — tilts toward the cursor, lifts on hover, with a
// moving glare. Resets smoothly on leave; idles with a gentle float.
function Portrait3D() {
  const ref = useRefAbout(null);
  const [t, setT] = useStateAbout({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;   // 0..1
    const py = (e.clientY - r.top) / r.height;   // 0..1
    const MAX = 14; // degrees
    setT({
      ry: (px - 0.5) * 2 * MAX,
      rx: -(py - 0.5) * 2 * MAX,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };
  const onLeave = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  return (
    <div
      className={"portrait-3d" + (t.active ? " is-active" : "")}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--rx": t.rx + "deg", "--ry": t.ry + "deg", "--gx": t.gx + "%", "--gy": t.gy + "%" }}
    >
      <div className="portrait-3d-float">
      <div className="portrait-3d-inner">
        <div className="portrait-wrap">
          <image-slot
            id="vn-headshot"
            shape="rect"
            fit="contain"
            position="50% 50%"
            placeholder="Drop your headshot"
            style={{ width: "100%", height: "440px", display: "block" }}
          ></image-slot>
          <div className="portrait-hint">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="3" width="18" height="18" rx="1"></rect><circle cx="8.5" cy="8.5" r="1.6"></circle><path d="M21 15l-5-5L5 21"></path></svg>
            <span>Drop your headshot</span>
          </div>
          <div className="portrait-glare" aria-hidden="true"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="ed-section" data-screen-label="About">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.4rem" }}>
        <FadeUp as="p" className="ed-label" style={{ margin: 0 }}>Who I Am</FadeUp>
        <FadeUp as="span" className="ed-label" style={{ margin: 0, opacity: 0.5 }}>01 / 08</FadeUp>
      </div>

      <div className="about-grid" style={{ display: "grid", gap: "2.5rem", alignItems: "start" }}>
        {/* left — giant word + thesis + bio */}
        <div>
          <RiseLines>
            <h2 className="ed-display" style={{ fontSize: "clamp(4rem, 18vw, 13rem)" }}>About</h2>
          </RiseLines>

          <FadeUp delay={0.08}>
            <p className="ed-serif ed-strong" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", lineHeight: 1.22, marginTop: "1.6rem", maxWidth: "20ch" }}>
              Building AI that reasons, perceives, and explains its decisions.
            </p>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="ed-body ed-muted" style={{ fontSize: 15, lineHeight: 1.8, marginTop: "1.6rem", maxWidth: "52ch" }}>
              I'm Vinoothna — an AI engineer driven by using machine learning to solve real,
              measurable problems. My path runs from predictive maintenance and vibration-signal
              analysis through explainable ML to agentic, multimodal generative-AI systems. I care
              about models that don't just perform, but can be trusted, deployed, and understood.
            </p>
          </FadeUp>

          {/* focus words strip */}
          <FadeUp delay={0.24} className="ed-rule" style={{ marginTop: "2.4rem", paddingTop: "1.4rem", display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem" }}>
            {["Research", "Models", "Explainability", "Impact"].map((w, i) => (
              <span key={w} className="ed-display ed-strong" style={{ fontSize: "clamp(1.1rem,2.4vw,1.7rem)", display: "inline-flex", alignItems: "baseline", gap: 8 }}>
                <span className="ed-label" style={{ fontSize: 10, opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}</span>{w}
              </span>
            ))}
          </FadeUp>
        </div>

        {/* right — portrait slot (interactive 3D) */}
        <FadeUp delay={0.12} className="about-portrait">
          <div className="about-portrait-shift">
            <Portrait3D />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.9rem" }}>
              <span className="ed-label" style={{ fontSize: 10 }}>Vinoothna Nadikatla</span>
              <span className="ed-label" style={{ fontSize: 10, opacity: 0.5 }}>Hyderabad, India</span>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        .about-grid > div:first-child { min-width: 0; }
        .about-portrait { width: 100%; max-width: 340px; }
        .portrait-wrap { position: relative; }
        .portrait-hint { position: absolute; inset: 0; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 10px; pointer-events: none;
          color: rgba(21,18,12,0.5); font-family: var(--font-body); font-size: 11px;
          letter-spacing: 0.22em; text-transform: uppercase; }
        .portrait-wrap image-slot[data-filled] ~ .portrait-hint { display: none; }

        /* ---- interactive 3D portrait ---- */
        .portrait-3d { perspective: 1100px; }
        /* outer element owns the idle float (its own transform property) */
        .portrait-3d-float {
          transform-style: preserve-3d;
          animation: portraitFloat 7s ease-in-out infinite;
          will-change: transform;
        }
        .portrait-3d.is-active .portrait-3d-float { animation-play-state: paused; }
        /* inner element owns the cursor-driven tilt only */
        .portrait-3d-inner {
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease;
          will-change: transform;
        }
        .portrait-3d.is-active .portrait-3d-inner {
          transition: transform 0.12s ease-out;
          box-shadow: 0 40px 80px -28px rgba(0,0,0,0.65);
        }
        .portrait-3d .portrait-wrap {
          transform: translateZ(40px);
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        /* moving glare highlight */
        .portrait-glare {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          border-radius: inherit; opacity: 0; transition: opacity 0.4s ease;
          background: radial-gradient(220px circle at var(--gx,50%) var(--gy,50%),
            rgba(255,255,255,0.35), rgba(255,255,255,0) 60%);
          mix-blend-mode: overlay;
        }
        .portrait-3d.is-active .portrait-glare { opacity: 1; }
        @keyframes portraitFloat {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg) translateY(0); }
          50%      { transform: rotateX(1.5deg) rotateY(-2.5deg) translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .portrait-3d-float { animation: none; }
        }

        @media (min-width: 900px) {
          .about-grid { grid-template-columns: minmax(0, 1fr) 320px; gap: 4rem; }
          .about-portrait { position: sticky; top: 6rem; }
          .about-portrait-shift { transform: translateX(-2rem); }
        }
      `}</style>
    </section>
  );
}

window.About = About;
