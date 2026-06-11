// Frame — editorial chrome: fixed vertical nameplate rail, top nav,
// and the per-section header (tiny label + index + giant bleeding title).
const { useState: useStateFrame, useEffect: useEffectFrame } = React;

const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Tools", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const EMAIL_F = "vinoothnanadikatla@gmail.com";

// Left rail removed entirely.
function Rail() {
  return null;
}

function Nav() {
  return (
    <nav className="ed-nav">
      <a href="#top" style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.02em" }}>VN</a>
      <div className="ed-nav-links">
        {NAV.map((n) => (
          <a key={n.label} href={n.href}>{n.label}</a>
        ))}
      </div>
    </nav>
  );
}

/* Section header — small uppercase label on the left margin, optional index,
   and the oversized display title that bleeds toward the edge. */
function SectionHead({ label, index, title, sub, titleSize, children }) {
  return (
    <div style={{ position: "relative", marginBottom: "3.5rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "1.6rem" }}>
        <FadeUp as="p" className="ed-label" style={{ margin: 0 }}>{label}</FadeUp>
        {index && <FadeUp as="span" className="ed-label" style={{ margin: 0, opacity: 0.5 }}>{index}</FadeUp>}
      </div>
      <RiseLines>
        <h2 className="ed-display" style={{ fontSize: titleSize || "clamp(3.2rem, 12vw, 11rem)" }}>{title}</h2>
      </RiseLines>
      {sub && (
        <FadeUp delay={0.1}>
          <p className="ed-serif ed-strong" style={{ fontSize: "clamp(1.15rem,2.4vw,1.9rem)", lineHeight: 1.3, marginTop: "1.4rem", maxWidth: "32ch" }}>{sub}</p>
        </FadeUp>
      )}
      {children}
    </div>
  );
}

Object.assign(window, { Rail, Nav, SectionHead, NAV });
