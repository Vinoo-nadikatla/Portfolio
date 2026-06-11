const { motion: motionRes } = window.Motion;
const { useState: useStateRes, useEffect: useEffectRes } = React;

const PUB_TITLE_R = "Hybrid Gradient Boosting–Deep Learning Framework for Bearing-Fault Classification Using Statistical–Wavelet Vibration Features";

const AUTHORS_R = [
  { name: "Vinoothna Nadikatla", orcid: "0009-0009-1191-7440", you: true },
  { name: "Dr. Shital Raut", orcid: "0000-0001-6736-7497", you: false },
];

const KEYWORDS_R = ["Bearing Fault Detection", "Gradient Boosting", "Vibration Signal Analysis", "Statistical Features", "Predictive Maintenance", "Machine Learning", "Wavelet Packet Decomposition", "CNN", "LSTM", "RNN", "SHAP", "Time–Frequency Features"];
const VENUES_R = ["PCEMS Int'l Conf · 2025", "Springer LNNS", "Indexed in IEEE Xplore"];

const STEPS_R = [
  { no: "01", k: "Problem", t: "Bearings are critical to rotating machinery, yet small faults cascade into costly, unsafe failures. Early, reliable detection is essential for predictive maintenance." },
  { no: "02", k: "Approach", t: "Engineered statistical and wavelet-packet time–frequency features from raw vibration signals — capturing fault signatures across both domains." },
  { no: "03", k: "Model", t: "Benchmarked LR, SVM, Random Forest, XGBoost, LightGBM and Gradient Boosting; tuned the leader, then trained 1D-CNN, LSTM and Simple RNN on combined features." },
  { no: "04", k: "Result", t: "97.24% baseline → 98.27% tuned → 96% on unseen data. SHAP isolated peak-to-peak amplitude, kurtosis and RMS as the dominant predictors." },
];

const FIGS_R = [
  { src: "assets/shap-importance.png", title: "Fig. 1 — Global feature importance", caption: "Mean |SHAP| values rank peak-to-peak amplitude and kurtosis as dominant predictors." },
  { src: "assets/shap-summary.png", title: "Fig. 2 — Feature impact & direction", caption: "SHAP summary (beeswarm) showing how each feature's value pushes model output." },
];

/* ── Full-paper modal (editorial restyle) ─────────────────────── */
function PaperModalEd({ onClose }) {
  useEffectRes(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <motionRes.div className="paper-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} onClick={onClose}>
      <motionRes.div className="paper-sheet" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: edEase }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem" }}>
            <span className="ed-label" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><FileText className="h-4 w-4" /> Peer-reviewed publication</span>
            <button onClick={onClose} aria-label="Close" className="paper-close">×</button>
          </div>

          <h2 className="ed-display" style={{ fontSize: "clamp(1.6rem,4vw,3rem)", marginTop: "1.5rem", lineHeight: 0.95, textTransform: "none" }}>{PUB_TITLE_R}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: "1.6rem" }}>
            {AUTHORS_R.map((a) => (
              <span key={a.name} className="ed-chip" style={{ padding: "0.4rem 0.8rem" }}>
                {a.you && <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--ink-strong)", display: "inline-block" }}></span>}
                <span className={a.you ? "ed-strong" : ""}>{a.name}</span>
                <a href={`https://orcid.org/${a.orcid}`} target="_blank" rel="noreferrer" style={{ fontFamily: "monospace", fontSize: 10, opacity: 0.6, borderLeft: "1px solid var(--rule)", paddingLeft: 8 }}>{a.orcid}</a>
              </span>
            ))}
          </div>

          <p className="ed-body ed-muted" style={{ fontSize: 13, lineHeight: 1.6, marginTop: "1.2rem" }}>
            Dept. of Electronics &amp; Communication Engineering, Applied AI · Visvesvaraya National Institute of Technology, Nagpur, India
          </p>

          <div className="paper-metrics">
            {[{ big: "97.24%", small: "GB baseline" }, { big: "98.27%", small: "Tuned accuracy" }, { big: "96%", small: "Unseen test" }, { big: "91–94%", small: "CNN / LSTM / RNN" }].map((m) => (
              <div key={m.small} style={{ border: "1px solid var(--rule)", padding: "1rem" }}>
                <div className="ed-num" style={{ fontSize: "1.9rem" }}>{m.big}</div>
                <div className="ed-label" style={{ fontSize: 9, marginTop: 8 }}>{m.small}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.4rem" }}>
            <h3 className="ed-display" style={{ fontSize: "1.6rem" }}>Abstract</h3>
            <p className="ed-body ed-muted" style={{ fontSize: 14, lineHeight: 1.8, marginTop: "0.9rem" }}>
              Bearings are crucial to rotating machinery, yet small malfunctions can lead to costly, unsafe service failures — making early fault detection essential for predictive maintenance. This study develops a hybrid fault-classification framework integrating statistical and wavelet-packet time–frequency features from vibration signals. Logistic Regression, SVM, Random Forest, XGBoost, LightGBM and Gradient Boosting were evaluated, with Gradient Boosting reaching a <span className="ed-strong">97.24%</span> baseline that improved to <span className="ed-strong">98.27%</span> after hyperparameter optimization and generalized at <span className="ed-strong">96%</span> on unseen data. SHAP analysis identified <span className="ed-strong">peak-to-peak amplitude</span>, <span className="ed-strong">kurtosis</span> and <span className="ed-strong">RMS</span> as most influential. Deep architectures (1D-CNN, LSTM, Simple RNN) reached 91–94%. Wavelet features sharpened separability while statistical validation confirmed reliability under noise — a high-performance, interpretable, scalable approach for real-world predictive maintenance.
            </p>
          </div>

          <div style={{ marginTop: "2.4rem" }}>
            <h3 className="ed-display" style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Explainability — SHAP</h3>
            <div className="paper-figs">
              {FIGS_R.map((f) => (
                <figure key={f.src} style={{ margin: 0, background: "#fff", padding: 12 }}>
                  <img src={RSRC(f.src)} alt={f.title} style={{ width: "100%", display: "block" }} />
                  <figcaption style={{ paddingTop: 10 }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#111" }}>{f.title}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#555", marginTop: 4, lineHeight: 1.5 }}>{f.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="paper-manuscript" style={{ marginTop: "2.4rem" }}>
            <figure style={{ margin: 0, background: "#fff", padding: 10 }}>
              <img src={RSRC("assets/paper-firstpage.png")} alt="Manuscript first page" style={{ width: "100%", display: "block" }} />
              <figcaption style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 11, color: "#555", paddingTop: 8 }}>Manuscript — first page</figcaption>
            </figure>
            <div>
              <h3 className="ed-display" style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Keywords</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {KEYWORDS_R.map((k) => <span key={k} className="ed-chip">{k}</span>)}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "1.6rem" }}>
                {VENUES_R.map((v) => <span key={v} className="ed-chip ed-strong" style={{ borderColor: "var(--ink)" }}>{v}</span>)}
              </div>
            </div>
          </div>
        </div>
      </motionRes.div>
    </motionRes.div>
  );
}

function Research() {
  const [open, setOpen] = useStateRes(false);
  return (
    <section id="research" className="ed-section" data-screen-label="Research">
      <SectionHead label="Research · Case Study" index="04 / 08" title="Research" />

      {/* featured case study */}
      <div className="case-grid">
        {/* left: meta + title */}
        <FadeUp>
          <span className="ed-chip ed-strong" style={{ borderColor: "var(--ink)" }}>Springer LNNS · IEEE Xplore</span>
          <h3 className="ed-serif ed-strong" style={{ fontSize: "clamp(1.4rem,3vw,2.3rem)", lineHeight: 1.2, marginTop: "1.4rem" }}>{PUB_TITLE_R}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem 2.5rem", marginTop: "1.8rem", alignItems: "flex-end" }}>
            <div>
              <div className="ed-label" style={{ fontSize: 9, marginBottom: 6 }}>Authors</div>
              <div className="ed-body ed-strong" style={{ fontSize: 14 }}>Vinoothna Nadikatla · Dr. Shital Raut</div>
            </div>
            <div>
              <div className="ed-label" style={{ fontSize: 9, marginBottom: 6 }}>Tuned accuracy</div>
              <div className="ed-num" style={{ fontSize: "2.4rem" }}>98.27<span style={{ fontSize: "0.4em", verticalAlign: "top" }}>%</span></div>
            </div>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="ed-btn" style={{ marginTop: "2rem" }}>
            Full paper, abstract &amp; SHAP <ArrowUpRight className="h-4 w-4" />
          </button>
        </FadeUp>

        {/* right: featured SHAP figure */}
        <FadeUp delay={0.1}>
          <figure style={{ margin: 0, background: "#fff", padding: 14 }}>
            <img src={RSRC("assets/shap-summary.png")} alt="SHAP summary plot" style={{ width: "100%", display: "block" }} />
            <figcaption style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#555", paddingTop: 10, letterSpacing: "0.04em" }}>SHAP summary — feature impact &amp; direction on model output.</figcaption>
          </figure>
        </FadeUp>
      </div>

      {/* numbered case-study steps */}
      <div className="case-steps">
        {STEPS_R.map((s, i) => (
          <FadeUp key={s.no} delay={i * 0.07} className="case-step">
            <span className="ed-num" style={{ fontSize: "2.2rem" }}>{s.no}</span>
            <h4 className="ed-label" style={{ fontSize: 11, marginTop: 12, marginBottom: 10 }}>{s.k}</h4>
            <p className="ed-body ed-muted" style={{ fontSize: 13, lineHeight: 1.65 }}>{s.t}</p>
          </FadeUp>
        ))}
      </div>

      {open && <PaperModalEd onClose={() => setOpen(false)} />}

      <style>{`
        .case-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: start; }
        @media (min-width: 900px) { .case-grid { grid-template-columns: 1.1fr 1fr; gap: 4rem; } }

        .case-steps { display: grid; grid-template-columns: 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin-top: 4rem; }
        @media (min-width: 720px) { .case-steps { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1040px) { .case-steps { grid-template-columns: repeat(4, 1fr); } }
        .case-step { background: var(--bg); padding: 1.8rem 1.6rem; }

        .paper-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: flex-start; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); overflow-y: auto; }
        @media (min-width: 768px) { .paper-overlay { align-items: center; padding: 2rem; } }
        .paper-sheet { background: var(--bg); border: 1px solid var(--rule); width: 100%; max-width: 60rem; max-height: 92vh; overflow-y: auto; }
        .paper-close { width: 40px; height: 40px; border: 1px solid var(--rule); background: transparent; color: var(--ink); font-size: 22px; line-height: 1; cursor: pointer; flex-shrink: 0; transition: background .3s, color .3s; }
        .paper-close:hover { background: var(--invert-bg); color: var(--invert-ink); }
        .paper-metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 2rem; }
        @media (min-width: 640px) { .paper-metrics { grid-template-columns: repeat(4, 1fr); } }
        .paper-figs { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 700px) { .paper-figs { grid-template-columns: repeat(2, 1fr); } }
        .paper-manuscript { display: grid; grid-template-columns: 1fr; gap: 1.8rem; align-items: start; }
        @media (min-width: 700px) { .paper-manuscript { grid-template-columns: 240px 1fr; } }
      `}</style>
    </section>
  );
}

window.Research = Research;
