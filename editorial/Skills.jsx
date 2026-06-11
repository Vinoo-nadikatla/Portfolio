const GROUPS_S = [
  { icon: <Code className="h-5 w-5" />, label: "Languages", items: ["Python", "Java", "OOPs", "SQL"] },
  { icon: <Cpu className="h-5 w-5" />, label: "AI / Machine Learning", items: ["Scikit-learn", "XGBoost", "TensorFlow", "PySpark", "Explainable AI (XAI)", "SHAP", "Computer Vision", "MLOps", "MLflow", "Big Data", "NLP", "Deep Learning", "Generative AI", "Prompt Engineering", "LLM", "RAG"] },
  { icon: <Layers className="h-5 w-5" />, label: "Tools & Platforms", items: ["MySQL", "Power BI", "Streamlit", "APIs", "Git / GitHub", "Azure", "Docker", "DVC", "CI/CD", "Kubernetes", "Data Analysis", "Cybersecurity"] },
];

const SI_S = (s) => `https://cdn.simpleicons.org/${s}`;
const LOGO_S = {
  "Python": SI_S("python"), "Java": SI_S("openjdk"), "SQL": SI_S("mysql"), "MySQL": SI_S("mysql"),
  "Scikit-learn": SI_S("scikitlearn"), "TensorFlow": SI_S("tensorflow"), "PySpark": SI_S("apachespark"),
  "MLflow": SI_S("mlflow"), "Streamlit": SI_S("streamlit"), "Git / GitHub": SI_S("github"),
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Docker": SI_S("docker"), "DVC": SI_S("dvc"), "Kubernetes": SI_S("kubernetes"),
};

function ToolChip({ label }) {
  const logo = LOGO_S[label];
  return (
    <span className="tool-chip ed-chip">
      {logo && (
        <span className="tool-logo">
          <img src={RSRC(logo)} alt="" onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }} />
        </span>
      )}
      {label}
    </span>
  );
}

function SkillGroupEd({ group, gi }) {
  return (
    <FadeUp delay={gi * 0.08} className="ed-rule tool-group" style={{ paddingTop: "2.2rem", paddingBottom: "2.2rem" }}>
      <div className="tool-group-head">
        <span className="ed-num" style={{ fontSize: "1.4rem" }}>{String(gi + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="ed-display" style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)" }}>{group.label}</h3>
          <p className="ed-label" style={{ fontSize: 10, marginTop: 6 }}>{String(group.items.length).padStart(2, "0")} technologies</p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignContent: "flex-start" }}>
        {group.items.map((t) => <ToolChip key={t} label={t} />)}
      </div>
    </FadeUp>
  );
}

function Skills() {
  return (
    <section id="skills" className="ed-section" data-screen-label="Skills">
      <SectionHead label="The Stack" index="03 / 08" title="Tools"
        sub="End to end across the ML lifecycle — data, modeling, explainability, deployment, monitoring." />

      <div style={{ borderBottom: "1px solid var(--rule)" }}>
        {GROUPS_S.map((g, gi) => <SkillGroupEd key={g.label} group={g} gi={gi} />)}
      </div>

      <style>{`
        .tool-group { display: grid; grid-template-columns: 1fr; gap: 1.4rem; }
        .tool-group-head { display: flex; align-items: flex-start; gap: 1rem; }
        @media (min-width: 820px) { .tool-group { grid-template-columns: 300px 1fr; gap: 3rem; } }

        .tool-chip { position: relative; overflow: visible; cursor: default; transition: border-color .35s ease, color .35s ease, background .35s ease, transform .35s cubic-bezier(.16,1,.3,1); }
        .tool-chip:hover { transform: translateY(-2px); background: var(--invert-bg); color: var(--invert-ink); border-color: var(--invert-bg); }
        .tool-logo {
          position: absolute; left: 50%; top: 0; width: 38px; height: 38px; border-radius: 50%;
          background: #fff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 26px rgba(0,0,0,0.4);
          opacity: 0; transform: translate(-50%, 2px) scale(0.5); transform-origin: bottom center;
          transition: opacity .35s ease, transform .4s cubic-bezier(.34,1.56,.64,1); pointer-events: none; z-index: 30;
        }
        .tool-logo img { width: 20px; height: 20px; display: block; }
        .tool-chip:hover .tool-logo { opacity: 1; transform: translate(-50%, -44px) scale(1); }
      `}</style>
    </section>
  );
}

window.Skills = Skills;
