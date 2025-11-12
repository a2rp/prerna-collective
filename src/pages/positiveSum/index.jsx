import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";
import { TbBook2, TbSearch, TbFilter, TbChevronDown, TbChevronRight, TbCategory, TbHash, TbClock, TbCalendar, TbEye, TbHeart, TbBookmark, TbShare3, TbArrowLeft, TbShieldCheck, TbExternalLink, TbPlayerPlay, TbDownload } from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";


/* Stable image seeds via Picsum */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* Data model */
const CATEGORIES = [
    { id: "philanthropy", label: "Philanthropy" },
    { id: "venture", label: "Venture Capital" },
    { id: "fellows", label: "Fellowships" },
    { id: "education", label: "Education" },
    { id: "climate", label: "Climate" },
    { id: "health", label: "Health" },
    { id: "civics", label: "Civic Innovation" },
];

const TAGS = [
    "grantmaking",
    "impact-metrics",
    "founder-stories",
    "policy",
    "design",
    "education",
    "ai",
    "frontier-tech",
    "climate",
    "health",
];

const ARTICLES = [
    {
        id: "evidence-led-grantmaking",
        title: "Scaling Philanthropy with Evidence",
        category: "philanthropy",
        tags: ["grantmaking", "impact-metrics", "policy"],
        imgSeed: "ps-evidence-led-grantmaking",
        date: "2025-06-12",
        mins: 8,
        views: 21840,
        heroBadge: "Insight",
        excerpt:
            "Why measurement and feedback loops turn donations into durable compounding outcomes.",
        content: [
            "We explore a simple loop: hypothesis → grant → measurement → iteration. The velocity of this loop sets the pace of learning.",
            "Evidence-led models change incentives. Teams race to close the gap between their estimates and the observed world.",
            "This piece offers a practical rubric for grant design, including baseline counterfactuals, instrumentation, and public reporting."
        ],
    },
    {
        id: "public-good-spillovers",
        title: "Backing Frontier Companies with Public-Good Spillovers",
        category: "venture",
        tags: ["frontier-tech", "policy"],
        imgSeed: "ps-public-good-spillovers",
        date: "2025-03-30",
        mins: 7,
        views: 15560,
        heroBadge: "Portfolio",
        excerpt:
            "Some products are privately valuable and publicly catalytic. Here’s how we detect those early.",
        content: [
            "We walk through three case studies where product-market fit coincided with society-level externalities.",
            "Spillovers often appear as lower costs for non-customers or new scientific capabilities for other builders.",
            "Diligence playbook: map beneficiaries beyond buyers; score positive externality surface area."
        ],
    },
    {
        id: "catalytic-ecosystems",
        title: "Catalytic Ecosystems for Fellows & Founders",
        category: "fellows",
        tags: ["founder-stories", "education", "design"],
        imgSeed: "ps-catalytic-ecosystems",
        date: "2025-01-18",
        mins: 6,
        views: 12402,
        heroBadge: "Story",
        excerpt:
            "Communities compound when you reduce friction between capital, mentorship, and distribution.",
        content: [
            "Ecosystems amplify when the connective tissue is strong—shared rituals, strong social graphs, and low-latency intros.",
            "We document tactics to increase serendipity: demo cycles, critique clubs, and ‘open office hours’ across subdomains."
        ],
    },
    {
        id: "climate-flywheels",
        title: "Climate Flywheels: Financing the Transition",
        category: "climate",
        tags: ["policy", "frontier-tech"],
        imgSeed: "ps-climate-flywheels",
        date: "2024-12-02",
        mins: 9,
        views: 9803,
        heroBadge: "Analysis",
        excerpt:
            "From green premiums to deployment curves—how financing mechanics accelerate adoption.",
        content: [
            "We connect the dots between learning curves and catalytic capital instruments.",
            "Playbook for local policymakers: how to derisk early-stage deployment to unlock private capital."
        ],
    },
    {
        id: "designing-for-learning",
        title: "Designing for Learning: Evidence in Classrooms",
        category: "education",
        tags: ["education", "design", "impact-metrics"],
        imgSeed: "ps-designing-for-learning",
        date: "2024-10-09",
        mins: 5,
        views: 11290,
        heroBadge: "Playbook",
        excerpt:
            "Instructional design, when instrumented, becomes a system that learns—just like a good team.",
        content: [
            "This note shows how interface-level nudges and content-level feedback loops can raise mastery without burnout.",
            "We include a minimal instrumentation checklist any school network can adopt."
        ],
    },
];

/* Utilities */
const fmtDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};

function useLocalApplause(key) {
    const [map, setMap] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : {};
        } catch { return {}; }
    });
    useEffect(() => {
        try { localStorage.setItem(key, JSON.stringify(map)); } catch { }
    }, [key, map]);
    const toggle = useCallback((id) => {
        setMap((m) => {
            const next = { ...m };
            next[id] = (next[id] || 0) + 1;
            return next;
        });
    }, []);
    return [map, toggle];
}

export default function PositiveSum() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [activeCats, setActiveCats] = useState(() => new Set());
    const [activeTags, setActiveTags] = useState(() => new Set());
    const [sort, setSort] = useState("newest");
    const [applause, applaud] = useLocalApplause("ps:applause:v1");
    const [openId, setOpenId] = useState(searchParams.get("article"));
    const [mounted, setMounted] = useState(false);
    const gridRef = useRef(null);

    /* Reveal-on-intersect */
    useEffect(() => {
        const root = gridRef.current;
        if (!root) return;
        const items = root.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (ents) => {
                ents.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    /* Mount flag for subtle hero load */
    useEffect(() => { setMounted(true); }, []);

    /* Sync modal with URL */
    useEffect(() => {
        const id = searchParams.get("article");
        setOpenId(id);
    }, [searchParams]);

    const filtered = useMemo(() => {
        let list = ARTICLES.slice();
        // category filter
        if (activeCats.size) list = list.filter((a) => activeCats.has(a.category));
        // tag filter
        if (activeTags.size) list = list.filter((a) => a.tags.some((t) => activeTags.has(t)));
        // search
        if (query.trim()) {
            const q = query.trim().toLowerCase();
            list = list.filter(
                (a) =>
                    a.title.toLowerCase().includes(q) ||
                    a.excerpt.toLowerCase().includes(q) ||
                    a.tags.join(" ").includes(q)
            );
        }
        // sort
        if (sort === "newest") list.sort((a, b) => b.date.localeCompare(a.date));
        if (sort === "popular") list.sort((a, b) => b.views - a.views);
        if (sort === "shortest") list.sort((a, b) => a.mins - b.mins);
        return list;
    }, [query, activeCats, activeTags, sort]);

    const heroPick = ARTICLES[0];

    function toggleSet(setter, id) {
        setter((s) => {
            const n = new Set(s);
            if (n.has(id)) n.delete(id);
            else n.add(id);
            return n;
        });
    }

    function openArticle(id) {
        setSearchParams((prev) => {
            const p = new URLSearchParams(prev);
            p.set("article", id);
            return p;
        }, { replace: false });
    }

    function closeArticle() {
        setSearchParams((prev) => {
            const p = new URLSearchParams(prev);
            p.delete("article");
            return p;
        }, { replace: false });
    }

    function copyShareLink(id) {
        const url = new URL(window.location.href);
        url.searchParams.set("article", id);
        navigator.clipboard?.writeText(url.toString());
    }

    const openArticleData = useMemo(
        () => ARTICLES.find((a) => a.id === openId) || null,
        [openId]
    );

    useEffect(() => {
        if (!openArticleData) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => { if (e.key === "Escape") closeArticle(); };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [openArticleData]);

    return (
        <Styled.Page>
            {/* Hero */}
            <Styled.Hero className={mounted ? "mount" : ""}>
                <div className="bg" aria-hidden="true">
                    <img
                        src={getImg("positive-sum-hero", 2400, 1200)}
                        alt=""
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        srcSet={`${getImg("positive-sum-hero", 1200, 600)} 1200w, ${getImg("positive-sum-hero", 1800, 900)} 1800w, ${getImg("positive-sum-hero", 2400, 1200)} 2400w`}
                        sizes="(max-width: 720px) 100vw, 1200px"
                    />
                    <div className="vignette" />
                </div>

                <div className="content">
                    <div className="badge">
                        <TbShieldCheck size={16} />
                        Positive Sum • Publications
                    </div>
                    <h1>
                        Ideas that <span className="accent">compound</span> in public
                    </h1>
                    <p className="sub">
                        Essays, playbooks, and analyses from across the collective—grounded in evidence and built for builders.
                    </p>
                    <div className="actions">
                        <NavLink to="/our-work" className="btn-ghost">
                            <TbExternalLink size={16} />
                            Explore Our Work
                        </NavLink>
                        <NavLink to="/contact" className="btn-primary">
                            <TbPlayerPlay size={16} />
                            Pitch a Story
                        </NavLink>
                    </div>
                </div>

                <Styled.HeroFeature onClick={() => openArticle(heroPick.id)} title={heroPick.title}>
                    <div className="media">
                        <img
                            src={getImg(heroPick.imgSeed, 1600, 900)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            srcSet={`${getImg(heroPick.imgSeed, 800, 450)} 800w, ${getImg(heroPick.imgSeed, 1200, 675)} 1200w, ${getImg(heroPick.imgSeed, 1600, 900)} 1600w`}
                            sizes="(max-width: 900px) 100vw, 800px"
                        />
                        <div className="overlay" />
                        <div className="chip">{heroPick.heroBadge}</div>
                    </div>
                    <div className="txt">
                        <h3>{heroPick.title}</h3>
                        <p>{heroPick.excerpt}</p>
                        <span className="read">
                            Read now <TbChevronRight size={16} />
                        </span>
                    </div>
                </Styled.HeroFeature>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* Toolbar */}
            <Styled.Toolbar>
                <div className="group">
                    <div className="search">
                        <TbSearch className="ico" size={18} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles, tags, or topics…"
                            aria-label="Search Positive Sum articles"
                        />
                    </div>

                    <div className="sort">
                        <TbFilter size={18} />
                        <label htmlFor="sortby" className="sr">Sort</label>
                        <select
                            id="sortby"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            aria-label="Sort articles"
                        >
                            <option value="newest">Newest</option>
                            <option value="popular">Most viewed</option>
                            <option value="shortest">Shortest read</option>
                        </select>
                        <TbChevronDown size={16} className="arrow" />
                    </div>
                </div>

                <div className="quicklinks">
                    <NavLink to="/our-work/philanthropy" className="btn-ghost sm">
                        Philanthropy
                    </NavLink>
                    <NavLink to="/our-work/venture-capital" className="btn-ghost sm">
                        Venture Capital
                    </NavLink>
                    <NavLink to="/our-work/fellowships" className="btn-ghost sm">
                        Fellowships
                    </NavLink>
                </div>
            </Styled.Toolbar>

            {/* Filters */}
            <Styled.Filters>
                <div className="row">
                    <div className="label">
                        <TbCategory size={16} /> Categories
                    </div>
                    <div className="chips">
                        {CATEGORIES.map((c) => {
                            const on = activeCats.has(c.id);
                            return (
                                <button
                                    key={c.id}
                                    type="button"
                                    className={"chip" + (on ? " on" : "")}
                                    onClick={() => toggleSet(setActiveCats, c.id)}
                                >
                                    {c.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="row">
                    <div className="label">
                        <TbHash size={16} /> Tags
                    </div>
                    <div className="chips">
                        {TAGS.map((t) => {
                            const on = activeTags.has(t);
                            return (
                                <button
                                    key={t}
                                    type="button"
                                    className={"chip" + (on ? " on" : "")}
                                    onClick={() => toggleSet(setActiveTags, t)}
                                >
                                    {t}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Styled.Filters>

            {/* Grid */}
            <Styled.Grid ref={gridRef}>
                {filtered.map((a) => (
                    <article key={a.id} className="card reveal">
                        <button
                            type="button"
                            className="media"
                            onClick={() => openArticle(a.id)}
                            title={a.title}
                            aria-label={`Open article ${a.title}`}
                        >
                            <img
                                src={getImg(a.imgSeed, 1200, 675)}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                srcSet={`${getImg(a.imgSeed, 600, 338)} 600w, ${getImg(a.imgSeed, 900, 506)} 900w, ${getImg(a.imgSeed, 1200, 675)} 1200w`}
                                sizes="(max-width: 900px) 100vw, 400px"
                            />
                            <div className="overlay" />
                            <div className="tag chip">{a.heroBadge}</div>
                        </button>

                        <div className="meta">
                            <div className="row1">
                                <span className="cat">{CATEGORIES.find((c) => c.id === a.category)?.label}</span>
                                <span className="dot">•</span>
                                <span className="date">
                                    <TbCalendar size={14} /> {fmtDate(a.date)}
                                </span>
                            </div>
                            <h3 className="title">
                                <button type="button" onClick={() => openArticle(a.id)}>{a.title}</button>
                            </h3>
                            <p className="excerpt">{a.excerpt}</p>
                            <div className="row2">
                                <span className="stat">
                                    <TbClock size={14} /> {a.mins} min
                                </span>
                                <span className="stat">
                                    <TbEye size={14} /> {Intl.NumberFormat().format(a.views)}
                                </span>
                                <button
                                    type="button"
                                    className="stat btn"
                                    onClick={() => applaud(a.id)}
                                    title="Applause"
                                >
                                    <TbHeart size={15} />
                                    <span>{(applause[a.id] || 0).toLocaleString()}</span>
                                </button>
                                <button
                                    type="button"
                                    className="stat btn"
                                    onClick={() => copyShareLink(a.id)}
                                    title="Copy link"
                                >
                                    <TbShare3 size={15} />
                                    <span>Share</span>
                                </button>
                                <button
                                    type="button"
                                    className="save"
                                    title="Save (local)"
                                    onClick={() => applaud(a.id)} // playful double-use
                                >
                                    <TbBookmark size={16} />
                                </button>
                            </div>
                            <div className="tags">
                                {a.tags.map((t) => (
                                    <button
                                        type="button"
                                        key={t}
                                        className="chip sm"
                                        onClick={() => toggleSet(setActiveTags, t)}
                                        title={`Filter by ${t}`}
                                    >
                                        #{t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}

                {filtered.length === 0 && (
                    <Styled.Empty>
                        <div className="ico"><TbBook2 size={22} /></div>
                        <div className="title">No results</div>
                        <p className="sub">Try clearing filters or using a simpler search term.</p>
                        <div className="act">
                            <button type="button" className="btn-primary" onClick={() => { setQuery(""); setActiveCats(new Set()); setActiveTags(new Set()); setSort("newest"); }}>
                                Reset filters
                            </button>
                        </div>
                    </Styled.Empty>
                )}
            </Styled.Grid>

            {/* Footer CTA */}
            <Styled.CTA className="card brandish">
                <h3>Have a piece for Positive Sum?</h3>
                <p>We publish evidence-first work. Share your draft or outline—let’s refine it together.</p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary">
                        <TbPlayerPlay size={16} />
                        Submit a draft
                    </NavLink>
                    <a className="btn-ghost" href={getImg("positive-sum-guidelines", 1200, 700)} download>
                        <TbDownload size={16} />
                        Download guidelines
                    </a>
                </div>
            </Styled.CTA>

            {/* Modal */}
            {openArticleData && (
                <Styled.Modal role="dialog" aria-modal="true" aria-label={openArticleData.title}>
                    <div className="blank" onClick={closeArticle} />
                    <div className="panel">
                        <div className="topbar">
                            <button type="button" className="iconBtn" onClick={closeArticle} title="Back">
                                <TbArrowLeft size={18} />
                            </button>
                            <div className="grow" />
                            <button
                                type="button"
                                className="iconBtn"
                                onClick={() => copyShareLink(openArticleData.id)}
                                title="Copy link"
                            >
                                <TbShare3 size={18} />
                            </button>
                        </div>

                        <div className="hero">
                            <img
                                src={getImg(openArticleData.imgSeed, 1600, 900)}
                                alt=""
                                loading="eager"
                                decoding="async"
                                srcSet={`${getImg(openArticleData.imgSeed, 900, 506)} 900w, ${getImg(openArticleData.imgSeed, 1200, 675)} 1200w, ${getImg(openArticleData.imgSeed, 1600, 900)} 1600w`}
                                sizes="(max-width: 900px) 100vw, 900px"
                            />
                            <div className="overlay" />
                            <div className="badge chip">{openArticleData.heroBadge}</div>
                        </div>

                        <div className="body">
                            <div className="meta">
                                <span className="cat">{CATEGORIES.find((c) => c.id === openArticleData.category)?.label}</span>
                                <span className="dot">•</span>
                                <span className="date"><TbCalendar size={14} /> {fmtDate(openArticleData.date)}</span>
                                <span className="dot">•</span>
                                <span className="mins"><TbClock size={14} /> {openArticleData.mins} min</span>
                            </div>
                            <h2 className="title">{openArticleData.title}</h2>
                            <p className="excerpt">{openArticleData.excerpt}</p>

                            {openArticleData.content.map((p, i) => (
                                <p className="para" key={i}>{p}</p>
                            ))}

                            <div className="tags">
                                {openArticleData.tags.map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        className="chip sm"
                                        onClick={() => { toggleSet(setActiveTags, t); closeArticle(); }}
                                    >
                                        #{t}
                                    </button>
                                ))}
                            </div>

                            <div className="actions">
                                <button type="button" className="btn-ghost" onClick={() => applaud(openArticleData.id)}>
                                    <TbHeart size={16} /> Applaud
                                </button>
                                <button type="button" className="btn-ghost" onClick={() => copyShareLink(openArticleData.id)}>
                                    <TbShare3 size={16} /> Share
                                </button>
                                <a className="btn-primary" href="#top" onClick={(e) => { e.preventDefault(); closeArticle(); }}>
                                    Back to list
                                </a>
                            </div>
                        </div>
                    </div>
                </Styled.Modal>
            )}
        </Styled.Page>
    );
}
