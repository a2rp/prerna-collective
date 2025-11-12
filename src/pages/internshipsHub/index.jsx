// src/pages/internshipsHub/index.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbArrowRight,
    TbShieldCheck,
    TbSearch,
    TbAdjustmentsHorizontal,
    TbMapPin,
    TbBriefcase2,
    TbClockHour4,
    TbCalendarDue,
    TbCurrencyDollar,
    TbFileDescription,
    TbExternalLink,
    TbBookmark,
    TbBookmarkFilled,
    TbShare3,
    TbTag,
    TbBrightnessUp,
    TbPuzzle2,
    TbCheck,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* ───────────────────────── helpers ───────────────────────── */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}
const BOOKMARK_KEY = "internshipBookmarks:v1";

/* ───────────────────────── mock data (simulate backend) ───────────────────────── */
const INTERNSHIPS = [
    {
        id: "eng-ai-remote",
        title: "Software Engineering Intern — AI Tools",
        track: "Engineering",
        location: "Remote",
        duration: "12 weeks",
        stipend: "₹40,000 / mo",
        deadline: "2025-12-05",
        tags: ["React", "Node", "LLMs", "Vector DB"],
        hero: getImg("eng-ai-tools"),
        applyLink: "mailto:internships@prerna.collective?subject=Application%20-%20AI%20Tools%20Intern",
        detailsLink: "/contact",
    },
    {
        id: "product-research-sf",
        title: "Product Research Intern — Positive Sum",
        track: "Product",
        location: "San Francisco",
        duration: "10 weeks",
        stipend: "$2,000 / mo",
        deadline: "2025-12-20",
        tags: ["User Research", "Figma", "A/B Testing"],
        hero: getImg("product-research-sf"),
        applyLink: "https://forms.gle/9z4qvDemoForm", // working external link type
        detailsLink: "/positive-sum",
    },
    {
        id: "design-storytelling-blr",
        title: "Design & Storytelling Intern",
        track: "Design",
        location: "Bengaluru",
        duration: "8–12 weeks",
        stipend: "₹30,000 / mo",
        deadline: "2025-12-15",
        tags: ["Motion", "Brand", "After Effects"],
        hero: getImg("design-storytelling-blr"),
        applyLink: "/contact",
        detailsLink: "https://www.emersoncollective.com/",
    },
    {
        id: "philanthropy-analyst-remote",
        title: "Philanthropy Analyst Intern",
        track: "Philanthropy",
        location: "Remote",
        duration: "8 weeks",
        stipend: "₹25,000 / mo",
        deadline: "2025-12-01",
        tags: ["Impact Eval", "Data Viz", "R/Python"],
        hero: getImg("philanthropy-analyst-remote"),
        applyLink: "mailto:grants@prerna.collective?subject=Application%20-%20Philanthropy%20Analyst%20Intern",
        detailsLink: "/our-work/philanthropy",
    },
    {
        id: "vc-scout-remote",
        title: "Venture Capital Scout Intern",
        track: "Venture",
        location: "Remote",
        duration: "12–16 weeks",
        stipend: "$1,500 / mo",
        deadline: "2025-12-28",
        tags: ["Deal Flow", "Market Maps", "Unit Economics"],
        hero: getImg("vc-scout-remote"),
        applyLink: "https://forms.gle/9z4qvDemoForm2",
        detailsLink: "/our-work/venture-capital",
    },
];

/* distinct filter values */
const TRACKS = ["All Tracks", "Engineering", "Product", "Design", "Philanthropy", "Venture"];
const LOCATIONS = ["All Locations", "Remote", "Bengaluru", "San Francisco"];

/* ───────────────────────── component ───────────────────────── */
export default function InternshipsHub() {
    const [q, setQ] = useState("");
    const [track, setTrack] = useState("All Tracks");
    const [location, setLocation] = useState("All Locations");
    const [paidOnly, setPaidOnly] = useState(false);
    const [remoteOnly, setRemoteOnly] = useState(false);
    const [sort, setSort] = useState("deadlineAsc");
    const [bookmarks, setBookmarks] = useState(() => {
        try {
            const raw = localStorage.getItem(BOOKMARK_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    const listRef = useRef(null);
    const heroRef = useRef(null);

    /* mount anim */
    useEffect(() => {
        heroRef.current?.classList.add("mount");
        const t = setTimeout(() => heroRef.current?.classList.remove("mount"), 1200);
        return () => clearTimeout(t);
    }, []);

    /* persist bookmarks */
    useEffect(() => {
        try {
            localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
        } catch { }
    }, [bookmarks]);

    const filtered = useMemo(() => {
        let out = INTERNSHIPS.slice();

        if (q.trim()) {
            const qq = q.toLowerCase();
            out = out.filter(
                (r) =>
                    r.title.toLowerCase().includes(qq) ||
                    r.track.toLowerCase().includes(qq) ||
                    r.location.toLowerCase().includes(qq) ||
                    r.tags.some((t) => t.toLowerCase().includes(qq))
            );
        }
        if (track !== "All Tracks") out = out.filter((r) => r.track === track);
        if (location !== "All Locations") out = out.filter((r) => r.location === location);
        if (remoteOnly) out = out.filter((r) => r.location.toLowerCase() === "remote");
        if (paidOnly) out = out.filter((r) => /\d/.test(r.stipend));

        out.sort((a, b) => {
            const da = new Date(a.deadline).getTime();
            const db = new Date(b.deadline).getTime();
            if (sort === "deadlineAsc") return da - db;
            if (sort === "deadlineDesc") return db - da;
            return a.title.localeCompare(b.title);
        });

        return out;
    }, [q, track, location, paidOnly, remoteOnly, sort]);

    /* stagger on appear for cards */
    useEffect(() => {
        const root = listRef.current;
        if (!root) return;
        const cards = root.querySelectorAll(".roleCard");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("reveal");
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
        );
        cards.forEach((c) => io.observe(c));
        return () => io.disconnect();
    }, [filtered]);

    function toggleBookmark(id) {
        setBookmarks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    }

    function isBookmarked(id) {
        return bookmarks.includes(id);
    }

    return (
        <Styled.Page>
            {/* ───────────── breadcrumbs ───────────── */}
            {/* <Styled.Breadcrumbs>
                <NavLink to="/home" className="crumb">
                    Home
                </NavLink>
                <span className="sep">/</span>
                <NavLink to="/internships" className="crumb current" aria-current="page">
                    Internships
                </NavLink>
            </Styled.Breadcrumbs> */}

            {/* ───────────── hero ───────────── */}
            <Styled.Hero ref={heroRef}>
                <div className="bg" aria-hidden="true">
                    <img
                        src={getImg("internships-hero", 2400, 1200)}
                        srcSet={`${getImg("internships-hero", 1200, 600)} 1200w, ${getImg(
                            "internships-hero",
                            1800,
                            900
                        )} 1800w, ${getImg("internships-hero", 2400, 1200)} 2400w`}
                        sizes="(max-width: 720px) 100vw, 1200px"
                        alt=""
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                    />
                    <div className="vignette" />
                </div>

                <div className="content">
                    <div className="badge">
                        <TbShieldCheck size={16} />
                        Mission-first internships, built for learning
                    </div>
                    <h1>
                        Internships <span className="accent">Hub</span>
                    </h1>
                    <p className="sub">
                        Explore open roles across engineering, product, design, philanthropy, and venture. Learn fast, ship
                        real work, and amplify public-good outcomes.
                    </p>
                    <div className="actions">
                        <a href="#open-roles" className="btn-primary">
                            View open roles <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </a>
                        <a
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            className="btn-ghost"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Program guide <TbExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────────── filters ───────────── */}
            <Styled.Filters>
                <div className="row">
                    <div className="search">
                        <TbSearch size={18} className="ico" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search title, skills, tags…"
                            aria-label="Search internships"
                        />
                    </div>

                    <div className="selects">
                        <label className="select">
                            <TbBriefcase2 size={16} />
                            <select value={track} onChange={(e) => setTrack(e.target.value)} aria-label="Track">
                                {TRACKS.map((t) => (
                                    <option key={t}>{t}</option>
                                ))}
                            </select>
                        </label>

                        <label className="select">
                            <TbMapPin size={16} />
                            <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Location">
                                {LOCATIONS.map((l) => (
                                    <option key={l}>{l}</option>
                                ))}
                            </select>
                        </label>

                        <label className="select">
                            <TbAdjustmentsHorizontal size={16} />
                            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
                                <option value="deadlineAsc">Deadline ↑</option>
                                <option value="deadlineDesc">Deadline ↓</option>
                                <option value="title">Title A–Z</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="toggles">
                    <button
                        type="button"
                        className={"chip" + (remoteOnly ? " active" : "")}
                        onClick={() => setRemoteOnly((v) => !v)}
                        aria-pressed={remoteOnly}
                    >
                        <TbBrightnessUp size={15} />
                        Remote only
                    </button>
                    <button
                        type="button"
                        className={"chip" + (paidOnly ? " active" : "")}
                        onClick={() => setPaidOnly((v) => !v)}
                        aria-pressed={paidOnly}
                    >
                        <TbCurrencyDollar size={15} />
                        Paid only
                    </button>

                    <div className="metaRight">
                        <span className="count">
                            {filtered.length} roles • {bookmarks.length} saved
                        </span>
                    </div>
                </div>
            </Styled.Filters>

            {/* ───────────── list ───────────── */}
            <Styled.List id="open-roles" ref={listRef}>
                {filtered.map((r, idx) => (
                    <article className="roleCard" key={r.id} style={{ "--i": idx }}>
                        <div className="media">
                            <img
                                src={r.hero}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                srcSet={`${getImg(r.id, 600, 360)} 600w, ${getImg(r.id, 900, 540)} 900w, ${getImg(
                                    r.id,
                                    1200,
                                    720
                                )} 1200w`}
                                sizes="(max-width: 720px) 100vw, 560px"
                            />
                            <div className="shade" />
                            <div className="tagRow">
                                <span className="tag">
                                    <TbTag size={14} />
                                    {r.track}
                                </span>
                                <span className="tag">
                                    <TbMapPin size={14} />
                                    {r.location}
                                </span>
                            </div>
                            <button
                                className="bookmark"
                                title={isBookmarked(r.id) ? "Remove bookmark" : "Save for later"}
                                onClick={() => toggleBookmark(r.id)}
                                aria-pressed={isBookmarked(r.id)}
                            >
                                {isBookmarked(r.id) ? <TbBookmarkFilled size={18} /> : <TbBookmark size={18} />}
                            </button>
                        </div>

                        <div className="body">
                            <h3 className="title">{r.title}</h3>
                            <div className="facts">
                                <span className="fact">
                                    <TbClockHour4 size={16} />
                                    {r.duration}
                                </span>
                                <span className="fact">
                                    <TbCalendarDue size={16} />
                                    Apply by {new Date(r.deadline).toLocaleDateString()}
                                </span>
                                <span className="fact">
                                    <TbCurrencyDollar size={16} />
                                    {r.stipend}
                                </span>
                            </div>

                            <ul className="skills">
                                {r.tags.map((t) => (
                                    <li key={t} className="chip">
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className="actions">
                                {/* details: internal OR external based on provided link */}
                                {String(r.detailsLink).startsWith("http") ? (
                                    <a href={r.detailsLink} className="btn-ghost" target="_blank" rel="noreferrer">
                                        Details <TbExternalLink size={16} />
                                    </a>
                                ) : (
                                    <NavLink to={r.detailsLink} className="btn-ghost">
                                        Details
                                    </NavLink>
                                )}

                                {/* apply: internal OR external OR mailto */}
                                {String(r.applyLink).startsWith("http") ? (
                                    <a href={r.applyLink} className="btn-primary" target="_blank" rel="noreferrer">
                                        Apply <TbArrowRight size={18} />
                                    </a>
                                ) : String(r.applyLink).startsWith("mailto:") ? (
                                    <a href={r.applyLink} className="btn-primary">
                                        Apply <TbArrowRight size={18} />
                                    </a>
                                ) : (
                                    <NavLink to={r.applyLink} className="btn-primary">
                                        Apply <TbArrowRight size={18} />
                                    </NavLink>
                                )}

                                <button
                                    type="button"
                                    className="btn-icon"
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText(
                                                `${window.location.origin}/internships#${r.id}`
                                            );
                                        } catch { }
                                    }}
                                    title="Copy link"
                                    aria-label="Copy role link"
                                >
                                    <TbShare3 size={18} />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}

                {filtered.length === 0 && (
                    <Styled.Empty>
                        <div className="iconWrap">
                            <TbPuzzle2 size={28} />
                        </div>
                        <h4>No roles match your filters</h4>
                        <p>Try another track, location, or clear the search.</p>
                        <div className="actions">
                            <button className="btn-ghost" onClick={() => setQ("")}>
                                Clear search
                            </button>
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    setTrack("All Tracks");
                                    setLocation("All Locations");
                                    setRemoteOnly(false);
                                    setPaidOnly(false);
                                    setSort("deadlineAsc");
                                }}
                            >
                                Reset filters
                            </button>
                        </div>
                    </Styled.Empty>
                )}
            </Styled.List>

            {/* ───────────── process / timeline ───────────── */}
            <Styled.Process>
                <header className="secHeader">
                    <h2>Application Process</h2>
                    <p className="secSub">Transparent steps with quick turnarounds.</p>
                </header>

                <ol className="timeline">
                    <li>
                        <span className="dot" />
                        <div className="card">
                            <div className="k">
                                <TbFileDescription size={18} />
                                Step 1
                            </div>
                            <h3>Apply</h3>
                            <p>Submit your CV/portfolio and a short “why this track” note. We read every application.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot" />
                        <div className="card">
                            <div className="k">
                                <TbBrightnessUp size={18} />
                                Step 2
                            </div>
                            <h3>Task</h3>
                            <p>A small, real-world task (2–4 hrs). We value clarity, not tricks.</p>
                        </div>
                    </li>
                    <li>
                        <span className="dot" />
                        <div className="card">
                            <div className="k">
                                <TbCheck size={18} />
                                Step 3
                            </div>
                            <h3>Decision</h3>
                            <p>Offer with start dates, mentor pairing, and resources to ramp quickly.</p>
                        </div>
                    </li>
                </ol>
            </Styled.Process>

            {/* ───────────── faq ───────────── */}
            <Styled.FAQ>
                <header className="secHeader">
                    <h2>FAQs</h2>
                    <p className="secSub">A few quick answers before you apply.</p>
                </header>

                <details>
                    <summary>Who can apply?</summary>
                    <p>Students, recent grads, and career switchers with strong fundamentals and curiosity.</p>
                </details>
                <details>
                    <summary>Is the internship paid?</summary>
                    <p>Most roles are paid; see each card’s stipend. We avoid unpaid work unless the candidate insists.</p>
                </details>
                <details>
                    <summary>Remote or on-site?</summary>
                    <p>Both options exist. Filter by location to see what fits best.</p>
                </details>
                <details>
                    <summary>How long is the program?</summary>
                    <p>Typically 8–12 weeks. Exact duration is on each listing.</p>
                </details>
            </Styled.FAQ>

            {/* ───────────── cta ───────────── */}
            <Styled.CTA className="card brandish">
                <h3>Didn’t find the perfect role?</h3>
                <p>Pitch your own internship—propose a project and the mentor you want to learn from.</p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                        Contact
                    </NavLink>
                    <a
                        href="https://forms.gle/9z4qvDemoForm3"
                        className="btn-ghost"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Propose a project <TbExternalLink size={16} />
                    </a>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
