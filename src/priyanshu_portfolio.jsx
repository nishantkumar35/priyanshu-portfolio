import { useState, useEffect, useRef } from "react";
import "./portfolio.css";

/* ── NAV ─────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Skills",       href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

/* ── EXPERIENCE (volunteer removed) ─────────────────────── */
const EXPERIENCE = [
  {
    date: "Jun 2025 – Jul 2025",
    role: "Undergraduate Intern",
    org: "Longjian Kec JV Construction Company",
    type: "Internship",
    bullets: [
      "Assisted in execution and supervision of metro and bridge construction activities under DMRC Phase IV.",
      "Gained hands-on exposure to construction methods, safety practices, and quality control standards.",
      "Developed understanding of project planning, structural works, and on-site coordination in large-scale infrastructure projects.",
    ],
  },
];

/* ── PROJECTS ────────────────────────────────────────────── */
const PROJECTS = [
  {
    tag: "Hydraulics & Foundation",
    title: "Coffer Dam Working Model",
    period: "Jan 2025 – May 2025",
    desc: "Designed and developed a working model of a Coffer Dam to demonstrate water retention and dewatering techniques. Showcased practical application in foundation construction for bridges and hydraulic structures.",
    img: "/coffer_dam.png",
    skills: ["Hydraulics", "Foundation Engineering", "Model Making", "Structural Analysis"],
    icon: "🏗️",
  },
  {
    tag: "Sustainable Materials",
    title: "Sewage Water Concrete",
    period: "Mar 2025 – May 2025",
    desc: "Developed concrete mixes using treated sewage water as a replacement for conventional water. Performed testing as per IS codes to evaluate strength, durability, and workability.",
    img: "/sewage_concrete.png",
    skills: ["Concrete Technology", "IS Code Testing", "Sustainability", "Lab Analysis"],
    icon: "🧱",
  },
  {
    tag: "BIM & Digital Design",
    title: "Institutional Building BIM Design",
    period: "Feb 2025 – Apr 2025",
    desc: "Modeled a BIM design for a multi-story educational institute building using 2D plans and 3D models. Designed complete building aspects including structural model, MEP systems, and duct fabrication.",
    img: "/bim_design.png",
    skills: ["Autodesk Revit", "BIM Modeling", "MEP Systems", "Coordination"],
    icon: "📐",
  },
];

/* ── SKILLS ──────────────────────────────────────────────── */
const SOFTWARE_SKILLS = [
  { name: "AutoCAD",         img: "/skill_autocad.png",  level: 85, color: "#ef4444" },
  { name: "Autodesk Revit",  img: "/skill_revit.png",    level: 80, color: "#3b82f6" },
  { name: "STAAD Pro",       img: "/skill_staad.png",    level: 70, color: "#f59e0b" },
];

const DOMAIN_SKILLS = [
  { name: "Problem Solving",             icon: "🧩" },
  { name: "Building Design & Modelling", icon: "🏛️" },
  { name: "Structural Analysis",         icon: "⚙️" },
  { name: "Construction Management",     icon: "📋" },
  { name: "Site Supervision",            icon: "🦺" },
  { name: "Quality Control",             icon: "🔍" },
  { name: "Project Planning",            icon: "📅" },
  { name: "Sustainable Construction",    icon: "🌱" },
];

/* ── CERTIFICATES ────────────────────────────────────────── */
const CERTIFICATES = [
  {
    type: "nptel",
    org: "NPTEL – IIT Madras",
    name: "GIS, Satellite & Drone Imagery for Resource Mapping",
    detail: "Certificate of Completion — 4-Week Online Course",
    period: "Aug – Oct 2025",
    instructors: "Prof. Abhijit P. Deshpande (IIT Madras) & Prof. Nagesh Kolagani (CUTM, AP)",
    coordinator: "Prof. Ramkrishna Pasumarthy, NPTEL Coordinator, IIT Madras",
    certImg: "/cert_nptel.jpg",
    icon: "🛰️",
  },
  {
    type: "lpu",
    org: "LPU – School of Civil Engineering",
    name: "Survey Training by Total Station",
    detail: "Workshop Certificate — Participation",
    period: "24 Apr – 26 Apr 2025",
    certNo: "388734",
    venue: "Lovely Professional University Campus, Phagwara (Punjab), India",
    certImg: "/cert_lpu.jpg",
    icon: "📡",
  },
];

/* ── EDUCATION ───────────────────────────────────────────── */
const EDUCATION = [
  {
    year: "2023 – 2027",
    degree: "B.Tech – Civil Engineering",
    inst: "Lovely Professional University",
    loc: "Phagwara, Punjab",
    grade: "CGPA: 6.25",
    cls: "edu-card-1", gradeCls: "edu-grade-1",
  },
  {
    year: "2021 – 2023",
    degree: "Senior Secondary (Class XII)",
    inst: "Swami Vivekanand Public School",
    loc: "Begusarai, Bihar",
    grade: "60%",
    cls: "edu-card-2", gradeCls: "edu-grade-2",
  },
  {
    year: "2020 – 2021",
    degree: "Secondary (Class X)",
    inst: "Delhi Public School",
    loc: "Begusarai, Bihar",
    grade: "75%",
    cls: "edu-card-3", gradeCls: "edu-grade-3",
  },
];

/* ── HOOKS ───────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── SKILL BAR ───────────────────────────────────────────── */
function SkillBar({ level, delay = 0, color }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div className="skill-bar-track" ref={ref}>
      <div
        className={`skill-bar-fill${inView ? " animated" : ""}`}
        style={{
          width: `${level}%`,
          background: color
            ? `linear-gradient(90deg, ${color}cc, ${color})`
            : "linear-gradient(90deg,#3b82f6,#60a5fa)",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

/* ── FADE-UP ─────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`fade-up${inView ? " visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── CERT MODAL ──────────────────────────────────────────── */
function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={cert.certImg} alt={cert.name} className="modal-img" />
        <div className="modal-caption">
          <strong style={{ color: "var(--slate-200)" }}>{cert.name}</strong>
          <span style={{ color: "var(--slate-500)", fontSize: 12 }}> · {cert.period}</span>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN ────────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on link click */
  const handleNavClick = () => setMenuOpen(false);

  return (
    <div>
      {/* ── CERT MODAL ── */}
      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">P<span>.</span>Kumar</div>

        {/* desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* burger */}
        <button
          className={`nav-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* mobile drawer */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavClick}>{l.label}</a>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          {/* TEXT */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open to Opportunities
            </div>
            <h1 className="hero-name">
              Priyanshu<br />
              <span className="highlight">Kumar</span>
            </h1>
            <div className="hero-title">Civil Engineering Student · LPU Punjab</div>
            <div className="hero-divider" />

            {/* meta row */}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Phagwara, Punjab, India
              </div>
              <div className="hero-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 91426 59361
              </div>
            </div>

            <div className="hero-ctas">
              <a
                href="https://www.linkedin.com/in/priyanshu-kumar-9142dp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* PHOTO + STATS */}
          <div className="hero-visual">
            <div className="hero-avatar-wrap">
              <img
                src="/profile.jpg"
                alt="Priyanshu Kumar"
                className="hero-avatar-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero-avatar-placeholder" style={{ display: "none" }}>PK</div>
            </div>
            <div className="hero-stats">
              {[
                { num: "3+", label: "Projects" },
                { num: "2",  label: "Certificates" },
                { num: "1",  label: "Internship" },
                { num: "3rd", label: "Year B.Tech" },
              ].map((s) => (
                <div className="hero-stat" key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT — updated, no useless info
      ══════════════════════════════════════ */}
      <section id="about" style={{ background: "var(--navy-900)", padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Who I Am</div>
              <h2 className="section-title">About Me</h2>
            </div>
          </FadeUp>

          <div className="about-single-col">
            {/* summary */}
            <FadeUp delay={200} className="about-summary-col">
              <h3 className="about-summary-heading">
                Aspiring Civil Engineer with a passion for<br />
                <span style={{ color: "var(--accent-light)" }}>sustainable infrastructure</span> and{" "}
                <span style={{ color: "var(--gold)" }}>digital design</span>.
              </h3>

              <p className="about-para">
                I'm <strong style={{ color: "var(--slate-200)" }}>Priyanshu Kumar</strong>, a 3rd-year
                B.Tech Civil Engineering student at Lovely Professional University, Punjab. My academic
                journey has equipped me with strong fundamentals in structural analysis, hydraulic
                engineering, and Building Information Modeling (BIM).
              </p>

              <p className="about-para">
                During my internship with{" "}
                <strong style={{ color: "var(--accent-light)" }}>Longjian Kec JV Construction Company</strong>{" "}
                on the DMRC Phase IV metro &amp; bridge project, I gained real-world exposure to large-scale
                infrastructure execution — from site coordination and quality control to structural works
                and safety management.
              </p>

              <p className="about-para">
                I'm proficient in <strong style={{ color: "var(--slate-200)" }}>Autodesk Revit</strong>,{" "}
                <strong style={{ color: "var(--slate-200)" }}>STAAD Pro</strong>, and{" "}
                <strong style={{ color: "var(--slate-200)" }}>AutoCAD</strong>, and hold an NPTEL+ certificate
                in <em>GIS, Satellite &amp; Drone Imagery for Resource Mapping</em> from IIT Madras. I am
                committed to applying technology-driven solutions to build smarter, safer, and greener structures.
              </p>

              <div className="about-tags">
                {["BIM Modeling", "Structural Design", "GIS & Remote Sensing", "Sustainable Construction", "Infrastructure Projects"].map((t) => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/priyanshu-kumar-9142dp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: 28, alignSelf: "flex-start", display: "inline-flex" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                View LinkedIn Profile
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPERIENCE — only internship
      ══════════════════════════════════════ */}
      <section id="experience" style={{ padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Professional Journey</div>
              <h2 className="section-title">Experience</h2>
              <p className="section-sub">
                Real-world exposure through internship in civil construction and infrastructure.
              </p>
            </div>
          </FadeUp>

          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i} delay={i * 150}>
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-date">{exp.date}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                    <div className="timeline-role">{exp.role}</div>
                    <span className="exp-badge exp-badge-intern">{exp.type}</span>
                  </div>
                  <div className="timeline-org">{exp.org}</div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════ */}
      <section id="projects" style={{ background: "var(--navy-900)", padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">What I've Built</div>
              <h2 className="section-title">Academic Projects</h2>
              <p className="section-sub">
                Hands-on engineering projects spanning hydraulic structures, sustainable materials, and advanced BIM design.
              </p>
            </div>
          </FadeUp>

          <div className="projects-grid">
            {PROJECTS.map((proj, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="project-card">
                  <div className="project-img-wrap">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="project-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="project-img-placeholder" style={{ display: "none" }}>
                      {proj.icon}
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-tag">{proj.tag}</div>
                    <div className="project-title">{proj.title}</div>
                    <div className="project-period">{proj.period}</div>
                    <div className="project-desc">{proj.desc}</div>
                    <div className="project-skills">
                      {proj.skills.map((s) => (
                        <span key={s} className="project-skill-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS — with software logos
      ══════════════════════════════════════ */}
      <section id="skills" className="skills-section" style={{ padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Expertise</div>
              <h2 className="section-title">Skills &amp; Tools</h2>
              <p className="section-sub">
                Software proficiency and domain knowledge built through academic projects, workshops, and professional training.
              </p>
            </div>
          </FadeUp>

          {/* SOFTWARE CARDS WITH LOGOS */}
          <FadeUp delay={100}>
            <div className="skill-software-label">Software Proficiency</div>
          </FadeUp>
          <div className="software-cards-row">
            {SOFTWARE_SKILLS.map((skill, i) => (
              <FadeUp key={skill.name} delay={i * 120}>
                <div className="software-card">
                  <div className="software-logo-wrap">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="software-logo"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="software-logo-fallback" style={{ display: "none" }}>
                      {skill.name[0]}
                    </div>
                  </div>
                  <div className="software-info">
                    <div className="software-name">{skill.name}</div>
                    <div className="software-pct-row">
                      <SkillBar level={skill.level} delay={i * 180} color={skill.color} />
                      <span className="software-pct" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* DOMAIN SKILLS */}
          <FadeUp delay={200}>
            <div className="skill-software-label" style={{ marginTop: 52 }}>Domain Knowledge</div>
          </FadeUp>
          <div className="domain-skills-grid">
            {DOMAIN_SKILLS.map((s, i) => (
              <FadeUp key={s.name} delay={i * 60}>
                <div className="domain-skill-chip">
                  <span className="chip-icon">{s.icon}</span>
                  {s.name}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CERTIFICATES — with real images
      ══════════════════════════════════════ */}
      <section id="certificates" style={{ padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Credentials</div>
              <h2 className="section-title">Certificates</h2>
              <p className="section-sub">
                Verified certifications from prestigious institutions — click any certificate to view it.
              </p>
            </div>
          </FadeUp>

          <div className="certs-grid">
            {CERTIFICATES.map((cert, i) => (
              <FadeUp key={i} delay={i * 150}>
                <div
                  className="cert-card cert-card-clickable"
                  onClick={() => setActiveCert(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveCert(cert)}
                >
                  {/* thumbnail */}
                  <div className="cert-thumbnail-wrap">
                    <img
                      src={cert.certImg}
                      alt={cert.name}
                      className="cert-thumbnail"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="cert-thumbnail-fallback" style={{ display: "none" }}>
                      {cert.icon}
                    </div>
                    <div className="cert-view-overlay">
                      <span className="cert-view-icon">🔍 View Certificate</span>
                    </div>
                  </div>

                  {/* info */}
                  <div className="cert-body">
                    <div className="cert-header-row">
                      <div className={`cert-icon-wrap cert-icon-${cert.type}`}>{cert.icon}</div>
                      <div>
                        <div className="cert-org">{cert.org}</div>
                        <div className="cert-name">{cert.name}</div>
                      </div>
                    </div>

                    <div className="cert-meta">
                      <span className={`cert-badge cert-badge-${cert.type}`}>
                        {cert.type === "nptel" ? "✓ NPTEL Verified" : "✓ LPU Certified"}
                      </span>
                      <span className="cert-badge cert-badge-date">📅 {cert.period}</span>
                      {cert.certNo && (
                        <span className="cert-badge cert-badge-date">
                          #{cert.certNo}
                        </span>
                      )}
                    </div>

                    <div className="cert-detail-text">
                      {cert.type === "nptel"
                        ? `Instructors: ${cert.instructors}`
                        : `Venue: ${cert.venue}`}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* extra activity card */}
          <FadeUp delay={320}>
            <div className="extra-card">
              <div style={{ fontSize: 36 }}>🔧</div>
              <div className="extra-card-body">
                <div className="extra-label">Extra / Co-Curricular Activity</div>
                <div className="extra-title">Total Station Surveying Workshop</div>
                <div className="extra-org">Lovely Professional University (LPU) · Apr 2025</div>
              </div>
              <span className="extra-badge">✓ Participated</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════ */}
      <section id="education" style={{ background: "var(--navy-900)", padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Academic Background</div>
              <h2 className="section-title">Education</h2>
              <p className="section-sub">
                Building a strong engineering foundation through academic excellence and continuous skill development.
              </p>
            </div>
          </FadeUp>

          <div className="edu-grid">
            {EDUCATION.map((ed, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className={`edu-card ${ed.cls}`}>
                  <div className="edu-year">{ed.year}</div>
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-inst">{ed.inst}</div>
                  <div className="edu-loc">📍 {ed.loc}</div>
                  <div className={`edu-grade-chip ${ed.gradeCls}`}>{ed.grade}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="contact-section" style={{ padding: "var(--section-pad)" }}>
        <div className="container">
          <FadeUp>
            <div className="section-header">
              <div className="section-eyebrow">Let's Connect</div>
              <h2 className="section-title">Get In Touch</h2>
            </div>
          </FadeUp>

          <div className="contact-grid">
            <FadeUp delay={100}>
              <div>
                <p className="contact-intro">
                  I'm actively looking for internships and opportunities in civil engineering.
                  Whether you have a project, a question, or just want to connect — feel free to reach out!
                </p>
                {[
                  { icon: "📧", label: "Email",    val: "ps2362204@gmail.com",                       href: "mailto:ps2362204@gmail.com" },
                  { icon: "📞", label: "Phone",    val: "+91 91426 59361",                            href: "tel:+919142659361" },
                  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/priyanshu-kumar-9142dp",     href: "https://www.linkedin.com/in/priyanshu-kumar-9142dp" },
                ].map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-card">
                    <div className="contact-icon">{c.icon}</div>
                    <div>
                      <div className="contact-label">{c.label}</div>
                      <div className="contact-value">{c.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="contact-cta-box">
                <div style={{ fontSize: 64, marginBottom: 20 }}>🤝</div>
                <h3 className="contact-cta-title">Open to Collaborate</h3>
                <p className="contact-cta-desc">
                  Available for internships, project collaborations, research opportunities,
                  and networking within the civil engineering field.
                </p>
                <a href="mailto:ps2362204@gmail.com" className="btn-primary">
                  Send a Message
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-copy">© 2025 Priyanshu Kumar · Civil Engineering · LPU Punjab</div>
        <div className="footer-right">Built with React &amp; ❤️</div>
      </footer>
    </div>
  );
}
