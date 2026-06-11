// Inline lucide-style icons (currentColor stroke) + a couple filled glyphs.
const _stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Svg = ({ className = "h-5 w-5", sw, children }) => (
  <svg className={className} viewBox="0 0 24 24" {..._stroke} strokeWidth={sw || 2}>
    {children}
  </svg>
);

const ArrowUpRight = ({ className = "h-5 w-5" }) => (
  <Svg className={className}><path d="M7 17L17 7" /><path d="M7 7h10v10" /></Svg>
);
const ArrowRight = ({ className = "h-5 w-5" }) => (
  <Svg className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Svg>
);
const Play = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
);
const Download = ({ className = "h-4 w-4" }) => (
  <Svg className={className}><path d="M12 3v12" /><path d="M7 11l5 5 5-5" /><path d="M5 21h14" /></Svg>
);

// Stat icons
const Gauge = ({ className = "h-7 w-7" }) => (
  <Svg className={className} sw={1.6}><path d="M12 14l4-4" /><path d="M3.5 18a9 9 0 1 1 17 0" /><circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" /></Svg>
);
const Cap = ({ className = "h-7 w-7" }) => (
  <Svg className={className} sw={1.6}><path d="M2 9l10-4 10 4-10 4z" /><path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /><path d="M22 9v5" /></Svg>
);

// Project icons
const Bot = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><rect x="3.5" y="10" width="17" height="10" rx="2.5" /><path d="M12 6v4" /><circle cx="12" cy="4" r="1.6" /><circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" /><path d="M3.5 14h-1.2M21.7 14h-1.2" /></Svg>
);
const Shield = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><path d="M12 3l8 3.5v5.2C20 17 16.4 20 12 21.2 7.6 20 4 17 4 11.7V6.5z" /><path d="M9 12l2 2 4-4" /></Svg>
);
const Activity = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><path d="M2.5 12h4l3 7.5 4.5-15 3 7.5h4.5" /></Svg>
);
const Lock = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><rect x="3.5" y="11" width="17" height="10" rx="2" /><path d="M7.5 11V7a4.5 4.5 0 0 1 9 0v4" /></Svg>
);
const Database = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></Svg>
);
const TrendingUp = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></Svg>
);
const BarChart = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><path d="M3 21h18" /><rect x="5" y="11" width="3.4" height="7" /><rect x="10.3" y="6" width="3.4" height="12" /><rect x="15.6" y="14" width="3.4" height="4" /></Svg>
);

// Skill group icons
const Code = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.8}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></Svg>
);
const Cpu = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.6}><rect x="5" y="5" width="14" height="14" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M19 9h3M19 14h3M2 9h3M2 14h3" /></Svg>
);
const Layers = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.8}><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 18l9 5 9-5" /></Svg>
);

// Section / contact icons
const FileText = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.8}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" /></Svg>
);
const Award = ({ className = "h-6 w-6" }) => (
  <Svg className={className} sw={1.7}><circle cx="12" cy="8.5" r="5.5" /><path d="M8.2 13 7 22l5-3 5 3-1.2-9" /></Svg>
);
const Mail = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.8}><rect x="2" y="4.5" width="20" height="15" rx="2.5" /><path d="m3 6 9 6 9-6" /></Svg>
);
const Phone = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.8}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></Svg>
);
const MapPin = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.8}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></Svg>
);
const Github = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.7}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22" /></Svg>
);
const Linkedin = ({ className = "h-5 w-5" }) => (
  <Svg className={className} sw={1.7}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Svg>
);

Object.assign(window, {
  ArrowUpRight, ArrowRight, Play, Download, Gauge, Cap,
  Bot, Shield, Activity, Lock, Database, TrendingUp, BarChart,
  Code, Cpu, Layers, FileText, Award, Mail, Phone, MapPin, Github, Linkedin,
});
