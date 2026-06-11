// VantaWaves — animated 3D wave field used as the site's cinematic backdrop.
// Wraps VANTA.WAVES (three.js r134). Initializes on mount, tears down on
// unmount, and degrades gracefully if the libraries failed to load.
const { useRef: useRefVW, useEffect: useEffectVW } = React;

function VantaWaves({
  className = "",
  color = 0x005588,
  shininess = 30,
  waveHeight = 15,
  waveSpeed = 1,
  zoom = 1,
}) {
  const elRef = useRefVW(null);
  const fxRef = useRefVW(null);

  useEffectVW(() => {
    const el = elRef.current;
    if (!el || !window.VANTA || !window.VANTA.WAVES) return;

    fxRef.current = window.VANTA.WAVES({
      el,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color,
      shininess,
      waveHeight,
      waveSpeed,
      zoom,
    });

    return () => {
      if (fxRef.current) {
        try { fxRef.current.destroy(); } catch (e) {}
        fxRef.current = null;
      }
    };
  }, [color, shininess, waveHeight, waveSpeed, zoom]);

  return <div ref={elRef} className={className} style={{ width: "100%", height: "100%" }} />;
}

window.VantaWaves = VantaWaves;
