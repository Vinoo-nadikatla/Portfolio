const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "paper",
  "display": "anton",
  "motion": true,
  "grain": true
}/*EDITMODE-END*/;

const PALETTE_ATTR = { ink: null, paper: "paper", graphite: "graphite" };
const DISPLAY_ATTR = { anton: null, oswald: "oswald", "archivo-black": "archivo-black" };

// Wave color per palette (matches CSS --wave-color)
const WAVE_COLOR = { ink: 0x171a1f, paper: 0xdcd2bf, graphite: 0x2a3038 };

function Background({ palette, motionOn }) {
  if (!motionOn) return <div id="ed-bg"><div className="ed-grade" /></div>;
  return (
    <div id="ed-bg">
      <VantaWaves
        key={palette}
        className="ed-wave"
        color={WAVE_COLOR[palette] ?? 0x171a1f}
        shininess={38}
        waveHeight={20}
        waveSpeed={1.15}
        zoom={0.92}
      />
      <div className="ed-grade" />
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // reflect palette + display onto <html> so the CSS vars switch
  useEffectApp(() => {
    const root = document.documentElement;
    const pa = PALETTE_ATTR[t.palette];
    if (pa) root.setAttribute("data-palette", pa); else root.removeAttribute("data-palette");
    const da = DISPLAY_ATTR[t.display];
    if (da) root.setAttribute("data-display", da); else root.removeAttribute("data-display");
  }, [t.palette, t.display]);

  return (
    <React.Fragment>
      <Background palette={t.palette} motionOn={t.motion} />

      <div id="ed-content">
        <span id="top"></span>
        <Rail />
        <Nav />
        <main>
          <Hero />
          <About />
          <Work />
          <Skills />
          <Research />
          <Education />
          <Certifications />
          <Contact />
        </main>
      </div>

      {t.grain && <div className="ed-grain" aria-hidden="true"></div>}

      <TweaksPanel>
        <TweakSection label="Palette" />
        <TweakRadio
          label="Theme"
          value={t.palette}
          options={["ink", "paper", "graphite"]}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Typography" />
        <TweakSelect
          label="Display face"
          value={t.display}
          options={["anton", "oswald", "archivo-black"]}
          onChange={(v) => setTweak("display", v)}
        />
        <TweakSection label="Atmosphere" />
        <TweakToggle label="Wave motion" value={t.motion} onChange={(v) => setTweak("motion", v)} />
        <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak("grain", v)} />
      </TweaksPanel>

      <style>{`
        .ed-grain {
          position: fixed; inset: 0; z-index: 2; pointer-events: none; opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }
      `}</style>
    </React.Fragment>
  );
}

const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(<App />);
