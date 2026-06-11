const { motion: motionHero } = window.Motion;
const { useState: useStateHero, useEffect: useEffectHero } = React;

const H_EMAIL = "vinoothnanadikatla@gmail.com";
const H_GITHUB = "https://github.com/Vinoo-nadikatla";
const H_RESUME = "Vinoothna-Nadikatla-Resume.pdf";

const HERO_ROLES = ["AI ENGINEER", "MACHINE LEARNING", "DATA SCIENTIST", "GENERATIVE AI"];

function HeroRole() {
  const [i, setI] = useStateHero(0);
  useEffectHero(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ display: "inline-block", position: "relative", minHeight: "1em", overflow: "hidden", whiteSpace: "nowrap" }}>
      <motionHero.span
        key={i}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-110%" }}
        transition={{ duration: 0.6, ease: edEase }}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        
        {HERO_ROLES[i]}
      </motionHero.span>
    </span>);

}

function Hero() {
  return (
    <section id="home" className="ed-section" data-screen-label="Hero"
    style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "6rem" }}>

      {/* top meta row */}
      <FadeUp as="div" className="ed-rule-b" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "1rem", marginBottom: "2.5rem" }}>
        <span className="ed-label">Portfolio</span>
        <span className="ed-label" style={{ letterSpacing: "0.3em" }}>Applied AI · 2026</span>
      </FadeUp>

      {/* giant stacked name — rendered plainly (no clip-reveal) so it can
          never get caught mid-animation and clip the glyphs */}
      <div className="hero-name">
        <h1 className="ed-display" style={{ fontSize: "130px" }}>Vinoothna</h1>
        <h1 className="ed-display" style={{ fontSize: "136px" }}>Nadikatla</h1>
      </div>

      {/* role + tagline + actions row */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "2.5rem", marginTop: "2.8rem" }}>
        <div className="hero-grid" style={{ display: "grid", gap: "2.5rem" }}>
          {/* left: rotating role + degree */}
          <FadeUp delay={0.2}>
            <div className="ed-display ed-strong" style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)", letterSpacing: "-0.01em" }}>
              <HeroRole />
            </div>
            <p className="ed-label" style={{ marginTop: "1rem", lineHeight: 1.8 }}>
              M.Tech Applied AI · VNIT Nagpur
            </p>
          </FadeUp>

          {/* right: one-liner */}
          <FadeUp delay={0.28}>
            <p className="ed-serif ed-strong" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", lineHeight: 1.28, maxWidth: "26ch" }}>
              I build intelligent systems that reason, see, and explain themselves.
            </p>
            <p className="ed-body ed-muted" style={{ fontSize: 14.5, lineHeight: 1.7, marginTop: "1.2rem", maxWidth: "42ch" }}>
              From predictive maintenance and signal analysis to production ML and generative-AI
              applications — research-grade work, shipped end to end.
            </p>
          </FadeUp>
        </div>

        {/* actions + stats */}
        <FadeUp delay={0.36} className="ed-rule" style={{ paddingTop: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", alignItems: "center" }}>
            <a className="ed-btn" href={RSRC(H_RESUME)} download="Vinoothna-Nadikatla-Resume.pdf">
              Résumé <Download className="h-4 w-4" />
            </a>
            <a className="ed-btn-ghost" href="#work">Selected Work <ArrowUpRight className="h-4 w-4" /></a>
            <a className="ed-link ed-strong" href={H_GITHUB} target="_blank" rel="noreferrer"
            style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div>
              <div className="ed-num" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>96<span style={{ fontSize: "0.45em", verticalAlign: "top" }}>%</span></div>
              <div className="ed-label" style={{ marginTop: 6, fontSize: 10 }}>Unseen-test accuracy</div>
            </div>
            <div>
              <div className="ed-num" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>8.27</div>
              <div className="ed-label" style={{ marginTop: 6, fontSize: 10 }}>M.Tech GPA · VNIT</div>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (min-width: 880px) {
          .hero-grid { grid-template-columns: 1fr 1fr; align-items: start; }
        }
      `}</style>
    </section>);

}

window.Hero = Hero;