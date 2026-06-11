const { motion: motionCertE } = window.Motion;
const { useState: useStateCertE, useEffect: useEffectCertE } = React;

const CERTS_E = [
  { no: "01", title: "Conference Presentation", org: "PCEMS Int'l Conf · 2025", kind: "Conference", img: "assets/cert-pcems-conference.png", link: "https://drive.google.com/file/d/1jJDnKvkm6U1JB-llypfBFRxoph-4-_qU/view" },
  { no: "02", title: "Prompt Engineering for ChatGPT", org: "Vanderbilt · Coursera", kind: "Course", img: "assets/cert-prompt-coursera.png", link: "https://coursera.org/verify/BAKXCMU4QTN7" },
  { no: "03", title: "Generative AI", org: "GUVI · Google for Education", kind: "Course", img: "assets/cert-genai-guvi.png", link: "https://www.guvi.in/certificate?id=0Hmy967u581t97Lf32" },
  { no: "04", title: "Principles of Generative AI", org: "Infosys Springboard", kind: "Course", img: "assets/cert-genai-infosys.png", link: "https://verify.onwingspan.com" },
  { no: "05", title: "Robotics Internship", org: "MVARO · Verzeo", kind: "Internship", img: "assets/cert-robotics-verzeo.jpg" },
  { no: "06", title: "3D Printing", org: "Garuda3D", kind: "Workshop" },
];

function CertModalEd({ cert, onClose }) {
  useEffectCertE(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <motionCertE.div className="paper-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} onClick={onClose}>
      <motionCertE.div className="paper-sheet" style={{ maxWidth: "48rem" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: edEase }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: "clamp(1.4rem,4vw,2.4rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem" }}>
            <div>
              <span className="ed-label">{cert.kind}</span>
              <h3 className="ed-display" style={{ fontSize: "clamp(1.5rem,3.5vw,2.4rem)", marginTop: 10, textTransform: "none" }}>{cert.title}</h3>
              <p className="ed-body ed-muted" style={{ fontSize: 13.5, marginTop: 8 }}>{cert.org}</p>
            </div>
            <button onClick={onClose} aria-label="Close" className="paper-close">×</button>
          </div>
          {cert.img ? (
            <figure style={{ margin: "1.8rem 0 0", background: "#fff", padding: 12 }}>
              <img src={RSRC(cert.img)} alt={cert.title} style={{ width: "100%", display: "block" }} />
            </figure>
          ) : (
            <div style={{ marginTop: "1.8rem", border: "1px solid var(--rule)", padding: "3rem", textAlign: "center" }} className="ed-muted">
              <Award className="h-8 w-8" style={{ margin: "0 auto 12px" }} />
              <p className="ed-body" style={{ fontSize: 13 }}>Certificate available on request.</p>
            </div>
          )}
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noreferrer" className="ed-btn" style={{ marginTop: "1.6rem" }}>
              Verify credential <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </motionCertE.div>
    </motionCertE.div>
  );
}

function CertRowEd({ c, onOpen }) {
  const clickable = !!(c.img || c.link);
  return (
    <button type="button" onClick={() => clickable && onOpen(c)}
      className="ed-cell cert-row" style={{ borderLeft: "none", borderRight: "none", borderTop: "none", padding: "1.5rem 1rem", textAlign: "left", width: "100%", cursor: clickable ? "pointer" : "default", font: "inherit", color: "inherit" }}>
      <span className="ed-num" style={{ fontSize: "1.7rem" }}>{c.no}</span>
      <div className="cert-main">
        <h4 className="ed-display" style={{ fontSize: "clamp(1.2rem,2.4vw,1.7rem)", textTransform: "none" }}>{c.title}</h4>
        <p className="ed-label" style={{ fontSize: 10, marginTop: 6 }}>{c.org}</p>
      </div>
      <span className="ed-chip cert-kind">{c.kind}</span>
      <span className="ed-arrow ed-strong cert-arrow">{clickable ? <ArrowUpRight className="h-5 w-5" /> : null}</span>
    </button>
  );
}

function Certifications() {
  const [active, setActive] = useStateCertE(null);
  return (
    <section id="certifications" className="ed-section" data-screen-label="Certifications">
      <SectionHead label="Credentials" index="06 / 08" title="Certified" />

      <div className="ed-rule">
        {CERTS_E.map((c, i) => (
          <FadeUp key={c.title} delay={i * 0.05}><CertRowEd c={c} onOpen={setActive} /></FadeUp>
        ))}
      </div>

      {active && <CertModalEd cert={active} onClose={() => setActive(null)} />}

      <style>{`
        .cert-row { display: grid; grid-template-columns: auto 1fr auto; gap: 0.5rem 1.2rem; align-items: center; }
        .cert-arrow { display: none; }
        @media (min-width: 760px) {
          .cert-row { grid-template-columns: 60px minmax(0,1fr) 130px 36px; }
          .cert-arrow { display: block; justify-self: end; }
        }
        @media (max-width: 759px) { .cert-kind { grid-column: 2; justify-self: start; } }
      `}</style>
    </section>
  );
}

window.Certifications = Certifications;
