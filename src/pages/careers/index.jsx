import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbBriefcase2, TbMapPin, TbAdjustmentsAlt, TbSearch, TbTag,
    TbUsersGroup, TbSparkles, TbShieldCheck, TbHeartHandshake,
    TbBuildingSkyscraper, TbCertificate, TbBolt, TbClock, TbWorld,
    TbMoodSmile, TbZoomQuestion, TbCircleCheck, TbChevronDown,
    TbArrowRight, TbCircleDashed, TbHome, TbCurrencyDollar, TbPlant2,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Deterministic images via Picsum seeds */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* ----------------------------- Data ----------------------------- */
const DEPARTMENTS = ["Engineering", "Design", "Storytelling", "Philanthropy", "Venture", "Operations"];
const LOCATIONS = ["Remote", "Bengaluru", "San Francisco", "New York", "Hybrid"];
const TYPES = ["Full-time", "Internship", "Contract"];

/* Sample roles (no external routes; apply CTA routes to /contact or /internships) */
const ROLES = [
    {
        id: "eng-fe-01",
        title: "Frontend Engineer (React)",
        dept: "Engineering",
        location: "Remote",
        type: "Full-time",
        img: getImg("role-frontend-react", 1200, 800),
        tags: ["React", "Performance", "Animations"],
        about:
            "Build premium, accessible user interfaces that feel fast and alive. You’ll own features end-to-end and ship iteratively.",
        responsibilities: [
            "Architect SPA modules with clean, testable code.",
            "Collaborate with Design to deliver pixel-perfect UI.",
            "Own performance budgets; instrument and optimize.",
            "Elevate DX with tooling, linting, and CI hygiene.",
        ],
        requirements: [
            "2+ years with modern React (hooks), routing, bundlers.",
            "Strong CSS architecture (styled-components preferred).",
            "Accessibility and web performance fundamentals.",
        ],
        niceToHave: ["Vite, SSR/SSG basics, Node/Express familiarity"],
        applyTo: "/contact",
    },
    {
        id: "eng-fe-intern-01",
        title: "Frontend Intern (React + Storytelling)",
        dept: "Engineering",
        location: "Bengaluru",
        type: "Internship",
        img: getImg("role-frontend-intern", 1200, 800),
        tags: ["React", "Content", "Visual Demos"],
        about:
            "Prototype interactive narratives that surface our work and data. Learn rapidly, ship weekly.",
        responsibilities: [
            "Create micro-sites and interactive explainers.",
            "Polish motion/interaction details in UI.",
            "Pair with mentors; write clean, readable code.",
        ],
        requirements: ["Solid JS/React basics, eagerness to learn, eye for detail"],
        niceToHave: ["Canvas/WebGL curiosity, markdown/MDX, charts"],
        applyTo: "/internships",
    },
    {
        id: "story-01",
        title: "Multimedia Producer (Story)",
        dept: "Storytelling",
        location: "Hybrid",
        type: "Full-time",
        img: getImg("role-storytelling", 1200, 800),
        tags: ["Script", "Edit", "Publish"],
        about:
            "Craft human-centered stories across video, web, and social. Translate complex topics into resonant, shareable pieces.",
        responsibilities: [
            "Develop concepts and scripts with program partners.",
            "Edit and ship multi-format assets with consistency.",
            "Track metrics and iterate content playbooks.",
        ],
        requirements: [
            "Portfolio with narrative clarity and polish.",
            "Comfort collaborating with technical/subject experts.",
        ],
        niceToHave: ["Motion graphics chops, captions/localization workflow"],
        applyTo: "/contact",
    },
    {
        id: "phil-01",
        title: "Program Associate (Philanthropy)",
        dept: "Philanthropy",
        location: "San Francisco",
        type: "Full-time",
        img: getImg("role-philanthropy", 1200, 800),
        tags: ["Grants", "Evaluation", "Partners"],
        about:
            "Support evidence-led grantmaking and partner success. Help surface learnings and scale what works.",
        responsibilities: [
            "Manage grant cycles and partner communications.",
            "Synthesize outcomes; maintain transparent dashboards.",
            "Coordinate cross-org initiatives with clarity.",
        ],
        requirements: ["Ops rigor, comms clarity, data-curious mindset"],
        niceToHave: ["Policy exposure, RCT/meta-analysis literacy"],
        applyTo: "/contact",
    },
    {
        id: "vc-01",
        title: "Investment Analyst (Venture)",
        dept: "Venture",
        location: "New York",
        type: "Full-time",
        img: getImg("role-venture", 1200, 800),
        tags: ["Diligence", "Frontier", "Research"],
        about:
            "Source and evaluate founders building for massive public-good spillovers. Map spaces, test thesis, and support the fund.",
        responsibilities: [
            "Deal flow triage and first-pass diligence.",
            "Market mapping, founder references, memo writing.",
            "Portfolio analytics and quarterly updates.",
        ],
        requirements: ["Structured research, crisp writing, curiosity"],
        niceToHave: ["Technical background or founder empathy a plus"],
        applyTo: "/contact",
    },
    {
        id: "ops-01",
        title: "People Operations Generalist",
        dept: "Operations",
        location: "Remote",
        type: "Contract",
        img: getImg("role-operations", 1200, 800),
        tags: ["Hiring", "Onboarding", "Culture"],
        about:
            "Keep our people systems smooth and humane—hiring loops, onboarding, and day-to-day support.",
        responsibilities: [
            "Run hiring logistics and candidate experience.",
            "Curate onboarding checklists and resources.",
            "Maintain policy docs and rituals calendar.",
        ],
        requirements: ["Systems thinking, crisp comms, reliable execution"],
        niceToHave: ["Notion/GSuite wizardry, a11y practices"],
        applyTo: "/contact",
    },
];

/* Benefits */
const BENEFITS = [
    { icon: <TbCurrencyDollar size={22} />, title: "Competitive Pay", desc: "Transparent bands, equity where applicable." },
    { icon: <TbPlant2 size={22} />, title: "Growth Budget", desc: "Conferences, courses, and books on us." },
    { icon: <TbHome size={22} />, title: "Hybrid & Remote", desc: "Flexible location with async-first culture." },
    { icon: <TbMoodSmile size={22} />, title: "Well-Being", desc: "Health cover, mental health stipend, recharge days." },
    { icon: <TbWorld size={22} />, title: "Global Impact", desc: "Work that compounds for public good." },
    { icon: <TbBolt size={22} />, title: "Fast Shipping", desc: "Small teams, high ownership, quick iterations." },
];

/* FAQs */
const FAQS = [
    {
        q: "Do I need to meet every requirement to apply?",
        a: "No. If you’re excited by the role and meet most criteria, we want to hear from you.",
    },
    {
        q: "What does the hiring process look like?",
        a: "Screen → Portfolio/Work Review → Role Conversation → Practical Exercise → Panel → Offer.",
    },
    {
        q: "Are internships paid?",
        a: "Yes. Internships are paid and structured with a mentor, goals, and clear deliverables.",
    },
    {
        q: "Can I work fully remote?",
        a: "Many roles are remote-friendly. Some teams choose hybrid hubs for in-person rituals.",
    },
];

/* ----------------------------- Helpers ----------------------------- */
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => e.isIntersecting && e.target.classList.add("in"));
        }, { threshold: 0.12 });
        el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
        return () => io.disconnect();
    }, []);
    return ref;
}

/* ----------------------------- Component ----------------------------- */
export default function Careers() {
    const [query, setQuery] = useState("");
    const [dept, setDept] = useState("All");
    const [loc, setLoc] = useState("All");
    const [type, setType] = useState("All");
    const [openCard, setOpenCard] = useState(null);

    const rootRef = useReveal();

    const departments = useMemo(() => ["All", ...DEPARTMENTS], []);
    const locations = useMemo(() => ["All", ...LOCATIONS], []);
    const types = useMemo(() => ["All", ...TYPES], []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return ROLES.filter((r) => {
            const okDept = dept === "All" || r.dept === dept;
            const okLoc = loc === "All" || r.location === loc;
            const okType = type === "All" || r.type === type;
            const okQuery =
                !q ||
                r.title.toLowerCase().includes(q) ||
                r.about.toLowerCase().includes(q) ||
                r.tags.some((t) => t.toLowerCase().includes(q));
            return okDept && okLoc && okType && okQuery;
        });
    }, [query, dept, loc, type]);

    const resetFilters = useCallback(() => {
        setQuery("");
        setDept("All");
        setLoc("All");
        setType("All");
    }, []);

    /* Prefers reduced motion: avoid auto-expanding on mount */
    useEffect(() => {
        const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (prefersReduced) return;
    }, []);

    return (
        <Styled.Page ref={rootRef}>
            {/* Hero */}
            <Styled.Hero>
                <div className="bg" aria-hidden="true">
                    <img
                        src={getImg("careers-hero-network", 2400, 1400)}
                        srcSet={`${getImg("careers-hero-network", 1200, 700)} 1200w, ${getImg("careers-hero-network", 1600, 900)} 1600w, ${getImg("careers-hero-network", 2400, 1400)} 2400w`}
                        sizes="(max-width: 720px) 100vw, 1200px"
                        alt=""
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                    />
                    <div className="vignette" />
                </div>

                <div className="content" data-reveal>
                    <div className="badge">
                        <TbShieldCheck size={16} />
                        Mission-first, evidence-led hiring
                    </div>
                    <h1>
                        Join the <span className="accent">Prerna Collective</span>
                    </h1>
                    <p className="sub">
                        Small, thoughtful teams building public-spirited products, programs, and stories. High trust, high ownership.
                    </p>
                    <div className="actions">
                        <NavLink to="/internships" className="btn-primary" aria-label="Browse internships">
                            Explore Internships <TbArrowRight size={18} />
                        </NavLink>
                        <NavLink to="/contact" className="btn-ghost" aria-label="Contact us">
                            Contact
                        </NavLink>
                    </div>
                    <div className="sparkles" aria-hidden="true">
                        <TbSparkles size={18} />
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* Highlights */}
            <Styled.Section className="brand">
                <header className="secHeader" data-reveal>
                    <h2>Why work with us</h2>
                    <p className="secSub">Benefits that support focus, growth, and a generous pace.</p>
                </header>

                <Styled.BenefitGrid>
                    {BENEFITS.map((b, i) => (
                        <div className="benefit cardish" key={b.title} data-reveal style={{ "--i": i }}>
                            <div className="ico">{b.icon}</div>
                            <div className="t">{b.title}</div>
                            <p className="d">{b.desc}</p>
                        </div>
                    ))}
                </Styled.BenefitGrid>
            </Styled.Section>

            {/* Filters */}
            <Styled.Section>
                <Styled.FilterBar role="search" aria-label="Filter open roles">
                    <div className="left">
                        <div className="label"><TbAdjustmentsAlt /> Filter</div>
                        <div className="control">
                            <TbSearch className="prefix" />
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search title, skills, or keywords…"
                                aria-label="Search roles"
                            />
                        </div>
                    </div>

                    <div className="right">
                        <div className="select">
                            <TbBriefcase2 className="prefix" />
                            <select aria-label="Department" value={dept} onChange={(e) => setDept(e.target.value)}>
                                {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                        <div className="select">
                            <TbMapPin className="prefix" />
                            <select aria-label="Location" value={loc} onChange={(e) => setLoc(e.target.value)}>
                                {locations.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                        <div className="select">
                            <TbClock className="prefix" />
                            <select aria-label="Type" value={type} onChange={(e) => setType(e.target.value)}>
                                {types.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        <button type="button" className="btn-ghost small" onClick={resetFilters} aria-label="Reset filters">
                            Reset
                        </button>
                    </div>
                </Styled.FilterBar>
            </Styled.Section>

            {/* Roles */}
            <Styled.Section>
                <header className="secHeader" data-reveal>
                    <h2>Open roles</h2>
                    <p className="secSub">
                        {filtered.length} position{filtered.length !== 1 ? "s" : ""} match your filters.
                    </p>
                </header>

                <Styled.RoleGrid>
                    {filtered.map((r, idx) => {
                        const isOpen = openCard === r.id;
                        return (
                            <article className={"role cardish" + (isOpen ? " open" : "")} key={r.id} data-reveal style={{ "--i": idx }}>
                                <div className="media">
                                    <img
                                        src={r.img}
                                        srcSet={`${getImg(r.id + "-thumb", 800, 500)} 800w, ${r.img} 1200w`}
                                        sizes="(max-width: 720px) 100vw, 560px"
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                <div className="summary">
                                    <div className="left">
                                        <h3 className="title">{r.title}</h3>
                                        <div className="meta">
                                            <span className="chip"><TbUsersGroup /> {r.dept}</span>
                                            <span className="chip"><TbMapPin /> {r.location}</span>
                                            <span className="chip"><TbClock /> {r.type}</span>
                                        </div>
                                        <p className="about">{r.about}</p>
                                        <div className="tags">
                                            {r.tags.map((t) => (
                                                <span className="tag" key={t}><TbTag /> {t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="right">
                                        <NavLink to={r.applyTo} className="btn-primary" aria-label={`Apply for ${r.title}`}>
                                            Apply <TbArrowRight size={18} />
                                        </NavLink>
                                        <button
                                            className="btn-ghost"
                                            aria-expanded={isOpen}
                                            aria-controls={`details-${r.id}`}
                                            onClick={() => setOpenCard(isOpen ? null : r.id)}
                                        >
                                            {isOpen ? "Hide details" : "View details"} <TbChevronDown className="chev" />
                                        </button>
                                    </div>
                                </div>

                                <div className="details" id={`details-${r.id}`} hidden={!isOpen}>
                                    <div className="col">
                                        <h4><TbCircleCheck /> Responsibilities</h4>
                                        <ul>{r.responsibilities.map((x) => <li key={x}>{x}</li>)}</ul>
                                    </div>
                                    <div className="col">
                                        <h4><TbShieldCheck /> Requirements</h4>
                                        <ul>{r.requirements.map((x) => <li key={x}>{x}</li>)}</ul>
                                    </div>
                                    <div className="col">
                                        <h4><TbCircleDashed /> Nice to have</h4>
                                        <ul>{r.niceToHave.map((x) => <li key={x}>{x}</li>)}</ul>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </Styled.RoleGrid>

                {/* Empty State */}
                {filtered.length === 0 && (
                    <Styled.Empty className="cardish" data-reveal>
                        <TbZoomQuestion size={22} />
                        <p>No roles match your filters. Try clearing search or choose “All”.</p>
                    </Styled.Empty>
                )}
            </Styled.Section>

            {/* Culture Gallery */}
            <Styled.Section className="brand">
                <header className="secHeader" data-reveal>
                    <h2>Life at Prerna</h2>
                    <p className="secSub">Creative sprints, thoughtful rituals, and weekly demos.</p>
                </header>

                <Styled.Gallery>
                    {[
                        "culture-standup", "culture-whiteboard", "culture-demo-day",
                        "culture-pair", "culture-offsite", "culture-reading",
                    ].map((seed, i) => (
                        <div className="shot" key={seed} data-reveal style={{ "--i": i }}>
                            <img src={getImg(seed, 1200, 900)} alt="" loading="lazy" decoding="async" />
                        </div>
                    ))}
                </Styled.Gallery>
            </Styled.Section>

            {/* Process */}
            <Styled.Section>
                <header className="secHeader" data-reveal>
                    <h2>Hiring process</h2>
                    <p className="secSub">Clear, humane, and time-bounded loops.</p>
                </header>

                <Styled.Process>
                    {[
                        { icon: <TbSearch />, t: "1. Screen", d: "Share your work; we learn your goals." },
                        { icon: <TbBriefcase2 />, t: "2. Role chat", d: "Meet the team; discuss the roadmap." },
                        { icon: <TbCertificate />, t: "3. Practical", d: "Small exercise, scoped to hours—not days." },
                        { icon: <TbUsersGroup />, t: "4. Panel", d: "Cross-team conversation; ask us anything." },
                        { icon: <TbSparkles />, t: "5. Offer", d: "Transparent comp, start date, onboarding plan." },
                    ].map((s, i) => (
                        <div className="step cardish" key={s.t} data-reveal style={{ "--i": i }}>
                            <div className="ico">{s.icon}</div>
                            <div className="t">{s.t}</div>
                            <p className="d">{s.d}</p>
                        </div>
                    ))}
                </Styled.Process>
            </Styled.Section>

            {/* FAQs */}
            <Styled.Section>
                <header className="secHeader" data-reveal>
                    <h2>FAQs</h2>
                    <p className="secSub">A few quick answers before you apply.</p>
                </header>

                <Styled.FAQ>
                    {FAQS.map((f, i) => (
                        <details key={f.q} data-reveal style={{ "--i": i }}>
                            <summary>
                                <TbQuestionMarkIcon />
                                <span className="q">{f.q}</span>
                            </summary>
                            <div className="a">{f.a}</div>
                        </details>
                    ))}
                </Styled.FAQ>
            </Styled.Section>

            {/* CTA */}
            <Styled.CTA className="card brandish" data-reveal>
                <h3>Not seeing your role?</h3>
                <p>We hire opportunistically for exceptional people. Tell us how you’ll raise the bar.</p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                        Contact <TbArrowRight size={18} />
                    </NavLink>
                    <NavLink to="/our-work" className="btn-ghost" aria-label="Explore our work">
                        Explore Our Work
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}

/* Local icon alias to keep summary pretty */
function TbQuestionMarkIcon(props) {
    return <TbZoomQuestion {...props} />;
}
