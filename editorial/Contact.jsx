const { useState: useStateContactE } = React;

const CT_EMAIL = "vinoothnanadikatla@gmail.com";
const CT_GITHUB = "https://github.com/Vinoo-nadikatla";
const CT_LINKEDIN = "https://www.linkedin.com/in/vinoothna-nadikatla-557354283/";
const CT_RESUME = "Vinoothna-Nadikatla-Resume.pdf";

// ── Direct-to-inbox delivery (optional) ──────────────────────────────────
// Leave WEB3FORMS_KEY = "" and the form opens the visitor's email app with the
// message pre-filled (works everywhere, no setup). To receive messages straight
// in your Gmail instead: get a free access key at https://web3forms.com
// (just enter your email — no account), then paste it below. Done.
const WEB3FORMS_KEY = "";
// ─────────────────────────────────────────────────────────────────────────

const CONTACTS_E = [
  { no: "01", label: "Email", value: "vinoothnanadikatla@gmail.com", href: `mailto:${CT_EMAIL}`, icon: <Mail className="h-5 w-5" /> },
  { no: "02", label: "LinkedIn", value: "in/vinoothna-nadikatla", href: CT_LINKEDIN, icon: <Linkedin className="h-5 w-5" /> },
  { no: "03", label: "GitHub", value: "Vinoo-nadikatla", href: CT_GITHUB, icon: <Github className="h-5 w-5" /> },
];

function MessageForm() {
  const [name, setName] = useStateContactE("");
  const [email, setEmail] = useStateContactE("");
  const [message, setMessage] = useStateContactE("");
  const [status, setStatus] = useStateContactE("idle"); // idle | sending | sent | error

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio message${name ? ` from ${name}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    if (!WEB3FORMS_KEY) {
      mailtoFallback();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: name,
          name, email, message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setStatus("sent");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="msg-sent">
        <span className="ed-num" style={{ fontSize: "2.4rem" }}>✦</span>
        <h4 className="ed-display" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", textTransform: "none", marginTop: 10 }}>
          {WEB3FORMS_KEY ? "Message sent" : "Almost there"}
        </h4>
        <p className="ed-body ed-muted" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8, maxWidth: "34ch" }}>
          {WEB3FORMS_KEY
            ? "Thanks for reaching out — I'll get back to you soon."
            : "Your email app should have opened with the message ready — just hit send and it's on its way."}
        </p>
        <button type="button" className="ed-btn-ghost" style={{ marginTop: "1.4rem" }} onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="msg-form" onSubmit={submit} noValidate>
      <div className="msg-field">
        <label className="ed-label" htmlFor="mf-name">Your name</label>
        <input id="mf-name" className="msg-input" type="text" value={name} placeholder="Jane Doe"
          onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="msg-field">
        <label className="ed-label" htmlFor="mf-email">Your email</label>
        <input id="mf-email" className="msg-input" type="email" value={email} placeholder="jane@company.com"
          onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="msg-field">
        <label className="ed-label" htmlFor="mf-msg">Message</label>
        <textarea id="mf-msg" className="msg-input" rows="4" value={message} placeholder="A quick hello, a role, an idea…"
          onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
        <button type="submit" className="ed-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight className="h-4 w-4" />
        </button>
        {status === "error" && (
          <span className="ed-label" style={{ color: "#e0796b", letterSpacing: "0.04em" }}>
            Couldn't send — <button type="button" onClick={mailtoFallback} className="ed-link" style={{ textTransform: "uppercase" }}>email directly</button>
          </span>
        )}
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="ed-section" data-screen-label="Contact" style={{ paddingBottom: "3rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.4rem" }}>
        <FadeUp as="p" className="ed-label" style={{ margin: 0 }}>Get In Touch</FadeUp>
        <FadeUp as="span" className="ed-label" style={{ margin: 0, opacity: 0.5 }}>07 / 08</FadeUp>
      </div>

      <RiseLines>
        <h2 className="ed-display" style={{ fontSize: "clamp(3rem, 13vw, 12rem)" }}>Let's talk</h2>
      </RiseLines>

      <FadeUp delay={0.1}>
        <p className="ed-serif ed-strong" style={{ fontSize: "clamp(1.2rem,2.6vw,2rem)", lineHeight: 1.3, marginTop: "1.4rem", maxWidth: "26ch" }}>
          Open to AI / ML engineering and research roles, and to collaborations on intelligent systems.
        </p>
      </FadeUp>

      {/* two-column: quick message form + direct channels */}
      <div className="contact-grid">
        <FadeUp delay={0.16} className="contact-col">
          <p className="ed-label" style={{ marginBottom: "1.6rem" }}>Send a quick message</p>
          <MessageForm />
        </FadeUp>

        <FadeUp delay={0.24} className="contact-col">
          <p className="ed-label" style={{ marginBottom: "0.4rem" }}>Or reach me directly</p>
          <div>
            {CONTACTS_E.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="ed-cell contact-row" style={{ borderLeft: "none", borderRight: "none", borderTop: "none", padding: "1.15rem 0.4rem" }}>
                <span className="ed-num" style={{ fontSize: "1.4rem" }}>{c.no}</span>
                <span className="ed-label contact-label" style={{ fontSize: 11 }}>{c.label}</span>
                <span className="ed-display contact-value" style={{ fontSize: "clamp(1.05rem,2.2vw,1.5rem)", textTransform: "none" }}>{c.value}</span>
                <span className="ed-arrow ed-strong contact-arrow"><ArrowUpRight className="h-5 w-5" /></span>
              </a>
            ))}
          </div>
          <a className="ed-btn-ghost" href={RSRC(CT_RESUME)} download="Vinoothna-Nadikatla-Resume.pdf" style={{ marginTop: "1.6rem" }}>
            Download résumé <Download className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>

      {/* footer */}
      <FadeUp className="ed-rule" style={{ marginTop: "4.5rem", paddingTop: "1.6rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
        <span className="ed-display ed-strong" style={{ fontSize: "1.4rem" }}>Vinoothna Nadikatla</span>
        <span className="ed-label" style={{ fontSize: 10 }}>© 2026</span>
        <a href="#top" className="ed-link ed-label" style={{ fontSize: 10 }}>Back to top ↑</a>
      </FadeUp>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; margin-top: 3.2rem; align-items: start; }
        @media (min-width: 880px) { .contact-grid { grid-template-columns: 1.1fr 0.9fr; gap: 4.5rem; } }

        .msg-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .msg-field { display: flex; flex-direction: column; gap: 0.6rem; }
        .msg-input {
          appearance: none; background: transparent; border: none;
          border-bottom: 1px solid var(--rule); color: var(--ink-strong);
          font-family: var(--font-body); font-size: 15px; padding: 0.5rem 0.1rem;
          outline: none; transition: border-color 0.3s ease; width: 100%; resize: vertical;
        }
        .msg-input::placeholder { color: var(--faint); }
        .msg-input:focus { border-bottom-color: var(--ink-strong); }
        textarea.msg-input { min-height: 96px; line-height: 1.5; }

        .msg-sent { border: 1px solid var(--rule); padding: 2.2rem 2rem; background: var(--cell); }

        .contact-row { display: grid; grid-template-columns: auto 1fr auto; gap: 0.3rem 1rem; align-items: center; }
        .contact-arrow { display: none; }
        @media (min-width: 760px) {
          .contact-row { grid-template-columns: 44px 110px minmax(0,1fr) 30px; }
          .contact-arrow { display: block; justify-self: end; }
        }
        @media (max-width: 759px) {
          .contact-label { grid-column: 2; }
          .contact-value { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  );
}

window.Contact = Contact;
