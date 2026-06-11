const SCHOOLS_E = [
  { no: "01", period: "Jul 2024 — May 2026", school: "Visvesvaraya National Institute of Technology", short: "VNIT", degree: "M.Tech · Applied Artificial Intelligence", gpa: "8.27", scale: "/ 10" },
  { no: "02", period: "Jul 2020 — May 2024", school: "Rajiv Gandhi University of Knowledge Technologies", short: "RGUKT", degree: "B.Tech · Mechanical Engineering", gpa: "7.30", scale: "/ 10" },
];

function Education() {
  return (
    <section id="education" className="ed-section" data-screen-label="Education">
      <SectionHead label="Education" index="05 / 08" title="Studied" />

      <div style={{ borderBottom: "1px solid var(--rule)" }}>
        {SCHOOLS_E.map((s, i) => (
          <FadeUp key={s.short} delay={i * 0.1} className="edu-row ed-rule">
            <span className="ed-num edu-no" style={{ fontSize: "1.8rem" }}>{s.no}</span>
            <div className="edu-period ed-label" style={{ fontSize: 10 }}>{s.period}</div>
            <div className="edu-main">
              <h3 className="ed-display" style={{ fontSize: "clamp(1.5rem,3.4vw,2.6rem)", textTransform: "none" }}>{s.school}</h3>
              <p className="ed-body ed-muted" style={{ fontSize: 13.5, marginTop: 8 }}>
                <span className="ed-strong">{s.short}</span> · {s.degree}
              </p>
            </div>
            <div className="edu-gpa">
              <span className="ed-num" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>{s.gpa}</span>
              <span className="ed-label" style={{ fontSize: 10 }}>{s.scale} GPA</span>
            </div>
          </FadeUp>
        ))}
      </div>

      <style>{`
        .edu-row { display: grid; grid-template-columns: auto 1fr; gap: 0.5rem 1.2rem; align-items: baseline; padding: 2.2rem 0.5rem; }
        .edu-gpa { display: flex; align-items: baseline; gap: 8px; grid-column: 2; }
        @media (min-width: 900px) {
          .edu-row { grid-template-columns: 60px 200px 1fr auto; align-items: center; }
          .edu-gpa { grid-column: auto; justify-content: flex-end; }
        }
        @media (max-width: 899px) { .edu-period { grid-column: 2; } }
      `}</style>
    </section>
  );
}

window.Education = Education;
