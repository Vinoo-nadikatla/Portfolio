const GH_PROFILE_W = "https://github.com/Vinoo-nadikatla";

const FLAGSHIP_W = [
{
  no: "01", icon: <Bot />,
  tags: ["LangGraph", "Groq LLMs", "Computer Vision", "STT / TTS"],
  title: "Agentic Multimodal AI Assistant",
  link: "https://github.com/Vinoo-nadikatla/Agentic-multimodal-GenAI-chatbot/tree/phase-2-webapp",
  body: "An agentic assistant fusing LLM reasoning, speech, and vision. Multi-step workflows orchestrated with LangGraph drive real-time, contextual decisions across modalities."
},
{
  no: "02", icon: <Shield />,
  tags: ["YOLOv8n", "FastAPI", "Llama-3.3-70B", "MJPEG"],
  title: "VN AI Safety Monitor",
  link: "https://github.com/Vinoo-nadikatla/Agentic-multimodal-GenAI-chatbot/tree/industrial-safety",
  body: "A multimodal GenAI safety monitor running real-time PPE detection, multilingual voice interaction, and MJPEG streaming on commodity hardware."
},
{
  no: "03", icon: <Activity />,
  tags: ["Gradient Boosting", "SHAP", "TensorFlow", "Wavelets"],
  title: "Explainable Bearing-Fault Framework",
  link: GH_PROFILE_W, metric: "96%", metricLabel: "Test accuracy",
  body: "Hybrid Gradient Boosting–Deep Learning framework with SHAP explainability for real-time bearing-fault diagnosis."
}];


const MORE_W = [
{ no: "04", title: "Cybersecurity Incident Classification", org: "Microsoft GUIDE", link: "https://github.com/Vinoo-nadikatla/Microsoft-Classifying-Cybersecurity-Incidents-with-Machine-Learning", body: "ML triage classifying incidents as true/false-positive or benign — feature engineering, XGBoost tuning, SMOTE balancing.", metric: "−30%", metricLabel: "SOC response", tags: ["XGBoost", "SMOTE", "Scikit-learn"] },
{ no: "05", title: "YouTube Data Harvesting", org: "API + SQL Warehouse", link: "https://github.com/Vinoo-nadikatla/Youtube-data-Harvesting-and-warehousing", body: "Extracted and warehoused data from 15+ channels via APIs and SQL, automating structured storage and reporting.", metric: "20%", metricLabel: "faster reporting", tags: ["Python", "SQL", "Streamlit"] },
{ no: "06", title: "Used Car Price Prediction", org: "CarDekho", link: "https://github.com/Vinoo-nadikatla/Car-Dekho--used-car-price-prediction", body: "A Streamlit app predicting used-car prices across 10,000+ records with cleaning, EDA and feature engineering.", metric: "90%", metricLabel: "accuracy", tags: ["Scikit-learn", "Streamlit", "EDA"] },
{ no: "07", title: "Market Insights — Global Electronics", org: "DataSpark", link: "https://github.com/Vinoo-nadikatla/DATASPARK-Illuminating-Insights-for-Global-Electronics", body: "Analyzed 1M+ records with SQL and Power BI to surface market trends — dashboards that sharpened decisions and inventory forecasting.", metric: "1M+", metricLabel: "records", tags: ["Python", "SQL", "Power BI"] },
{ no: "08", title: "End-to-End MLOps Pipeline", org: "MLOps", link: "https://github.com/Vinoo-nadikatla/MLOPS_Project", body: "A production MLOps workflow — experiment tracking, data and model versioning, automated CI/CD deployment.", tags: ["MLflow", "DVC", "Docker", "CI/CD"] }];


function FlagshipCellEd({ p }) {
  return (
    <a href={p.link} target="_blank" rel="noreferrer"
    className="ed-cell" style={{ padding: "1.6rem", minHeight: 380, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span className="ed-num" style={{ fontSize: "2.6rem" }}>{p.no}</span>
        <span className="ed-strong" style={{ opacity: 0.8 }}>{p.icon}</span>
      </div>
      <div style={{ flex: 1 }}></div>
      {p.metric &&
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
          <span className="ed-num" style={{ fontSize: "2.6rem" }}>{p.metric}</span>
          <span className="ed-label" style={{ fontSize: 10 }}>{p.metricLabel}</span>
        </div>
      }
      <h3 className="ed-display" style={{ fontSize: "clamp(1.5rem,2.6vw,2.1rem)", lineHeight: 1.04, fontWeight: "300" }}>{p.title}</h3>
      <p className="ed-body ed-muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 12, maxWidth: "34ch" }}>{p.body}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
        {p.tags.map((t) => <span key={t} className="ed-chip">{t}</span>)}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 14 }}>
        <span className="ed-arrow ed-strong"><ArrowUpRight className="h-5 w-5" /></span>
      </div>
    </a>);

}

function MoreRowEd({ p }) {
  return (
    <a href={p.link} target="_blank" rel="noreferrer"
    className="ed-cell more-row" style={{ borderLeft: "none", borderRight: "none", borderTop: "none", padding: "1.5rem 1rem" }}>
      <span className="ed-num more-no" style={{ fontSize: "1.8rem" }}>{p.no}</span>
      <div className="more-main">
        <h4 className="ed-display" style={{ fontSize: "clamp(1.25rem,2.4vw,1.7rem)", lineHeight: 1.02, fontWeight: "400" }}>{p.title}</h4>
        <p className="ed-label more-org" style={{ fontSize: 10, marginTop: 6 }}>{p.org}</p>
        <p className="ed-body ed-muted more-body" style={{ fontSize: 13, lineHeight: 1.6, marginTop: 8, maxWidth: "60ch" }}>{p.body}</p>
      </div>
      <div className="more-tags" style={{ display: "flex", flexWrap: "wrap", gap: 6, alignContent: "flex-start" }}>
        {p.tags.map((t) => <span key={t} className="ed-chip">{t}</span>)}
      </div>
      <div className="more-metric" style={{ textAlign: "right" }}>
        {p.metric && <div className="ed-num" style={{ fontSize: "1.9rem" }}>{p.metric}</div>}
        {p.metricLabel && <div className="ed-label" style={{ fontSize: 9, marginTop: 4 }}>{p.metricLabel}</div>}
      </div>
      <span className="ed-arrow ed-strong more-arrow"><ArrowUpRight className="h-5 w-5" /></span>
    </a>);

}

function Work() {
  return (
    <section id="work" className="ed-section" data-screen-label="Selected Work">
      <SectionHead label="Selected Work" index="02 / 08" title="Work"
      sub="Intelligent systems — researched, built, and shipped end to end." />

      <div className="flagship-grid" style={{ display: "grid", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)" }}>
        {FLAGSHIP_W.map((p, i) =>
        <FadeUp key={p.title} delay={i * 0.08} style={{ background: "var(--bg)" }}>
            <FlagshipCellEd p={p} />
          </FadeUp>
        )}
      </div>

      <FadeUp as="p" className="ed-label" style={{ marginTop: "4.5rem", marginBottom: "0.5rem" }}>More builds</FadeUp>
      <div className="ed-rule">
        {MORE_W.map((p, i) =>
        <FadeUp key={p.title} delay={i * 0.05}><MoreRowEd p={p} /></FadeUp>
        )}
      </div>

      <style>{`
        .flagship-grid { grid-template-columns: 1fr; }
        @media (min-width: 880px) { .flagship-grid { grid-template-columns: repeat(3, 1fr); } }
        .flagship-grid > div > a { height: 100%; }

        .more-row { display: grid; grid-template-columns: auto 1fr; gap: 0.6rem 1.4rem; align-items: start; }
        .more-arrow { display: none; }
        @media (min-width: 880px) {
          .more-row { grid-template-columns: 70px minmax(0,1fr) 200px 110px 40px; align-items: center; }
          .more-tags { justify-content: flex-start; }
          .more-metric { }
          .more-arrow { display: block; justify-self: end; }
        }
        @media (max-width: 879px) {
          .more-tags { grid-column: 1 / -1; }
          .more-metric { grid-column: 2; text-align: left; }
        }
      `}</style>
    </section>);

}

window.Work = Work;