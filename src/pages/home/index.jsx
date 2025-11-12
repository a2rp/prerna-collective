import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbBriefcase2,
    TbHeartHandshake,
    TbBuildingSkyscraper,
    TbCertificate,
    TbUsersGroup,
    TbBook2,
    TbIdBadge2,
    TbCalendarEvent,
    TbBriefcase,
    TbMail,
    TbArrowRight,
    TbStars,
    TbShieldCheck,
    TbBrandYoutube,
    TbBrandGithub,
    TbBrandLinkedin,
    TbExternalLink,
    TbChevronRight,
    TbBrandTwitter,
    TbChecks,
} from "react-icons/tb";

/* ───────────────────────────── Stable image helper ─────────────────────────────
   Picsum always returns a valid image. Using seeds makes them deterministic. */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* ───────────────────────────── Explore cards ───────────────────────────── */
const NAV_CARDS = [
    { to: "/our-work", title: "Our Work", icon: <TbBriefcase2 size={20} />, img: getImg("our-work-ecosystem", 1600, 900) },
    { to: "/our-work/philanthropy", title: "Philanthropy", icon: <TbHeartHandshake size={20} />, img: getImg("philanthropy-impact", 1600, 900) },
    { to: "/our-work/venture-capital", title: "Venture Capital", icon: <TbBuildingSkyscraper size={20} />, img: getImg("venture-frontier", 1600, 900) },
    { to: "/our-work/fellowships", title: "Fellowships", icon: <TbCertificate size={20} />, img: getImg("fellows-learning", 1600, 900) },
    { to: "/collective", title: "Collective", icon: <TbUsersGroup size={20} />, img: getImg("collective-team", 1600, 900) },
    { to: "/positive-sum", title: "Positive Sum", icon: <TbBook2 size={20} />, img: getImg("positive-sum-library", 1600, 900) },
    { to: "/internships", title: "Internships", icon: <TbIdBadge2 size={20} />, img: getImg("internships-students", 1600, 900) },
    { to: "/demo-day", title: "Demo Day", icon: <TbCalendarEvent size={20} />, img: getImg("demoday-stage", 1600, 900) },
    { to: "/careers", title: "Careers", icon: <TbBriefcase size={20} />, img: getImg("careers-work", 1600, 900) },
    { to: "/contact", title: "Contact", icon: <TbMail size={20} />, img: getImg("contact-desk", 1600, 900) },
];

/* ───────────────────────────── Featured stories ───────────────────────────── */
const FEATURED_STORIES = [
    {
        img: getImg("catalytic-ecosystems", 1600, 900),
        tag: "Story",
        title: "Catalytic ecosystems for founders & fellows",
        blurb: "How patient capital and community support produce nonlinear impact.",
        to: "/positive-sum",
    },
    {
        img: getImg("evidence-led-grantmaking", 1600, 900),
        tag: "Insight",
        title: "Philanthropy that scales with evidence",
        blurb: "A data-first approach to grantmaking and measurable outcomes.",
        to: "/our-work/philanthropy",
    },
    {
        img: getImg("public-good-bets", 1600, 900),
        tag: "Portfolio",
        title: "Backing bold companies with public-good spillovers",
        blurb: "Why frontier bets shift the Overton window.",
        to: "/our-work/venture-capital",
    },
];

/* ───────────────────────────── Animated metric (client-only) ───────────────────────────── */
function useCountUp({ to = 0, duration = 1200, startWhenVisibleRef }) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        const node = startWhenVisibleRef?.current;
        let started = false;
        let raf = 0;
        let st = 0;

        const animate = (ts) => {
            if (!st) st = ts;
            const p = Math.min(1, (ts - st) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(Math.round(to * eased));
            if (p < 1) raf = requestAnimationFrame(animate);
        };

        const start = () => {
            if (started) return;
            started = true;
            raf = requestAnimationFrame(animate);
        };

        if (!node) {
            start();
            return () => cancelAnimationFrame(raf);
        }
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && start()),
            { threshold: 0.25 }
        );
        io.observe(node);
        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [to, duration, startWhenVisibleRef]);

    return val;
}

/* ───────────────────────────── Component ───────────────────────────── */
export default function Home() {
    const heroRef = useRef(null);
    const metricsRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 1200);
        return () => clearTimeout(t);
    }, []);

    const primaryGrid = useMemo(() => NAV_CARDS.slice(0, 6), []);
    const secondaryGrid = useMemo(() => NAV_CARDS.slice(6), []);

    // Count-ups
    const m1 = useCountUp({ to: 120, duration: 1000, startWhenVisibleRef: metricsRef });
    const m2 = useCountUp({ to: 35, duration: 1100, startWhenVisibleRef: metricsRef });
    const m3 = useCountUp({ to: 18, duration: 1200, startWhenVisibleRef: metricsRef });

    return (
        <Styled.Page>
            {/* ───────────── Hero ───────────── */}
            <Styled.Hero ref={heroRef}>
                <div className="bg" aria-hidden="true">
                    <img
                        src={getImg("hero-network-graph", 2400, 1400)}
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
                        Mission-first, evidence-led
                    </div>

                    <h1 tabIndex={-1}>
                        Catalyzing ideas <span className="accent">that compound</span>
                    </h1>

                    <p className="sub">
                        We back people and organizations tackling society’s hardest problems—combining philanthropy,
                        venture capital, and storytelling to unlock durable progress.
                    </p>

                    <div className="actions">
                        <NavLink to="/our-work" className="btn-primary" aria-label="Explore Our Work">
                            Explore Our Work <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </NavLink>
                        <NavLink to="/positive-sum" className="btn-ghost" aria-label="Read Positive Sum">
                            Read Positive Sum
                        </NavLink>
                    </div>

                    <div className="sparkles" aria-hidden="true">
                        <TbStars size={18} />
                    </div>
                </div>
            </Styled.Hero>

            {/* ───────────── Explore grid ───────────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Explore</h2>
                    <p className="secSub">Navigate key sections across programs, capital, and community.</p>
                </header>

                <Styled.CardGrid>
                    {primaryGrid.map((c) => (
                        <NavLink to={c.to} key={c.to} className="card">
                            <div className="media">
                                <img src={c.img} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="meta">
                                <div className="icon">{c.icon}</div>
                                <div className="title">{c.title}</div>
                            </div>
                        </NavLink>
                    ))}
                </Styled.CardGrid>
            </Styled.Section>

            {/* ───────────── Metrics strip ───────────── */}
            <Styled.Metrics ref={metricsRef} className="card brandish">
                <div className="metric">
                    <div className="num">{m1}+</div>
                    <div className="label">
                        Organizations <span className="chip"><TbChecks /> active</span>
                    </div>
                </div>
                <div className="metric">
                    <div className="num">{m2}</div>
                    <div className="label">Fellowship tracks</div>
                </div>
                <div className="metric">
                    <div className="num">{m3}</div>
                    <div className="label">Focus areas</div>
                </div>
            </Styled.Metrics>

            {/* ───────────── Featured stories ───────────── */}
            <Styled.Section className="brand">
                <header className="secHeader">
                    <h2>Featured</h2>
                    <p className="secSub">Stories and insights from across the collective.</p>
                </header>

                <Styled.StoryRow>
                    {FEATURED_STORIES.map((s, idx) => (
                        <NavLink to={s.to} key={idx} className="story">
                            <div className="pic">
                                <img src={s.img} alt="" loading="lazy" decoding="async" />
                                <div className="overlay" />
                                <div className="tag chip">{s.tag}</div>
                            </div>
                            <div className="txt">
                                <h3>{s.title}</h3>
                                <p>{s.blurb}</p>
                                <span className="read">Learn more</span>
                            </div>
                        </NavLink>
                    ))}
                </Styled.StoryRow>
            </Styled.Section>

            {/* ───────────── Programs quick tiles ───────────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Programs</h2>
                    <p className="secSub">Where we learn, support, and build together.</p>
                </header>

                <Styled.Programs>
                    <NavLink to="/our-work/philanthropy" className="tile">
                        <div className="ico"><TbHeartHandshake size={18} /></div>
                        <div className="txt">
                            <strong>Philanthropy</strong>
                            <span>Evidence-led grantmaking</span>
                        </div>
                        <TbChevronRight className="arrow" size={16} />
                    </NavLink>

                    <NavLink to="/our-work/venture-capital" className="tile">
                        <div className="ico"><TbBuildingSkyscraper size={18} /></div>
                        <div className="txt">
                            <strong>Venture Capital</strong>
                            <span>Frontier problem solvers</span>
                        </div>
                        <TbChevronRight className="arrow" size={16} />
                    </NavLink>

                    <NavLink to="/our-work/fellowships" className="tile">
                        <div className="ico"><TbCertificate size={18} /></div>
                        <div className="txt">
                            <strong>Fellowships</strong>
                            <span>Learning in public</span>
                        </div>
                        <TbChevronRight className="arrow" size={16} />
                    </NavLink>
                </Styled.Programs>
            </Styled.Section>

            {/* ───────────── Secondary nav grid ───────────── */}
            <Styled.Section>
                <Styled.CardGrid className="compact">
                    {secondaryGrid.map((c) => (
                        <NavLink to={c.to} key={c.to} className="card small">
                            <div className="media">
                                <img src={c.img} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="meta">
                                <div className="icon">{c.icon}</div>
                                <div className="title">{c.title}</div>
                            </div>
                        </NavLink>
                    ))}
                </Styled.CardGrid>
            </Styled.Section>

            {/* ───────────── Community & socials ───────────── */}
            <Styled.Section>
                <Styled.Community className="card">
                    <div className="col">
                        <h3>Community</h3>
                        <p className="muted">
                            Join conversations, explore projects, and follow updates from the collective.
                        </p>
                        <div className="links">
                            <a href="https://github.com/a2rp" className="linkBtn" target="_blank" rel="noreferrer">
                                <TbBrandGithub size={18} /> GitHub <TbExternalLink size={14} />
                            </a>
                            <a href="https://www.linkedin.com/in/aashishranjan" className="linkBtn" target="_blank" rel="noreferrer">
                                <TbBrandLinkedin size={18} /> LinkedIn <TbExternalLink size={14} />
                            </a>
                            <a href="https://youtube.com/@ashishranjan-ashz" className="linkBtn" target="_blank" rel="noreferrer">
                                <TbBrandYoutube size={18} /> YouTube <TbExternalLink size={14} />
                            </a>
                            <a href="https://x.com" className="linkBtn" target="_blank" rel="noreferrer">
                                <TbBrandTwitter size={18} /> X (Twitter) <TbExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="col media">
                        <img
                            src={getImg("community-grid", 1600, 900)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </Styled.Community>
            </Styled.Section>

            {/* ───────────── CTA ───────────── */}
            <Styled.CTA className="card brandish">
                <h3>Ready to collaborate?</h3>
                <p>
                    Reach out to explore partnerships, internships, or to share a bold idea that moves the needle.
                </p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                        Contact
                    </NavLink>
                    <NavLink to="/internships" className="btn-ghost" aria-label="Internships">
                        Internships
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
