import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbShieldCheck,
    TbUsersGroup,
    TbHeartHandshake,
    TbBulb,
    TbRocket,
    TbBuildingSkyscraper,
    TbCertificate,
    TbBriefcase2,
    TbStar,
    TbWorld,
    TbTimeline,
    TbQuote,
    TbArrowRight,
    TbExternalLink,
    TbBrandLinkedin,
    TbMail,
    TbMapPin,
    TbClock,
    TbBook2,
    TbCalendarEvent,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* deterministic placeholder images (stable across reloads) */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* in-view helper: add 'seen' class for staggered reveals */
function useInViewStagger(selector = "[data-animate]", rootMargin = "0px 0px -10% 0px") {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add("seen");
                        io.unobserve(e.target);
                    }
                }
            },
            { root: null, rootMargin, threshold: 0.15 }
        );

        els.forEach((el, i) => {
            el.style.setProperty("--dly", `${Math.min(i, 6) * 60}ms`);
            io.observe(el);
        });

        return () => io.disconnect();
    }, [selector, rootMargin]);
}

/* small stat counter */
function useCountUp(target = 0, duration = 900, active = true) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        let raf = 0;
        const start = performance.now();
        const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration, active]);
    return val;
}

export default function Collective() {
    useInViewStagger();

    /* Stats become active when their section is seen */
    const statsRef = useRef(null);
    const [statsActive, setStatsActive] = useState(false);
    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStatsActive(true);
                    io.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const STATS = useMemo(
        () => [
            { label: "Team members", val: 120, icon: <TbUsersGroup size={18} /> },
            { label: "Active fellows", val: 48, icon: <TbCertificate size={18} /> },
            { label: "Portfolio orgs", val: 75, icon: <TbBuildingSkyscraper size={18} /> },
            { label: "Countries reached", val: 22, icon: <TbWorld size={18} /> },
        ],
        []
    );

    const PILLARS = useMemo(
        () => [
            {
                title: "Philanthropy",
                icon: <TbHeartHandshake size={22} />,
                copy:
                    "Evidence-led grantmaking focused on durable social outcomes and compounding public good.",
                to: "/our-work/philanthropy",
                img: getImg("pillar-philanthropy", 1200, 800),
            },
            {
                title: "Venture Capital",
                icon: <TbBuildingSkyscraper size={22} />,
                copy:
                    "Backing founders solving frontier problems where market incentives and impact align.",
                to: "/our-work/venture-capital",
                img: getImg("pillar-vc", 1200, 800),
            },
            {
                title: "Fellowships",
                icon: <TbCertificate size={22} />,
                copy:
                    "Time, community, and runway for bold operators to test ideas and scale what works.",
                to: "/our-work/fellowships",
                img: getImg("pillar-fellowships", 1200, 800),
            },
            {
                title: "Storytelling",
                icon: <TbBook2 size={22} />,
                copy:
                    "Narratives that widen the Overton window, translating complex work into shared understanding.",
                to: "/positive-sum",
                img: getImg("pillar-storytelling", 1200, 800),
            },
        ],
        []
    );

    const TEAM = useMemo(
        () => [
            {
                name: "A. Menon",
                role: "Managing Partner",
                city: "San Francisco",
                img: getImg("team-amenon", 900, 900),
                li: "#",
                mail: "#",
            },
            {
                name: "N. Patel",
                role: "Head of Philanthropy",
                city: "Bengaluru",
                img: getImg("team-npatel", 900, 900),
                li: "#",
                mail: "#",
            },
            {
                name: "R. Tan",
                role: "Director, Fellowships",
                city: "Singapore",
                img: getImg("team-rtan", 900, 900),
                li: "#",
                mail: "#",
            },
            {
                name: "J. Alvarez",
                role: "Partner, VC",
                city: "New York",
                img: getImg("team-jalvarez", 900, 900),
                li: "#",
                mail: "#",
            },
            {
                name: "P. Iyer",
                role: "Product & Data",
                city: "Delhi NCR",
                img: getImg("team-piyer", 900, 900),
                li: "#",
                mail: "#",
            },
            {
                name: "S. Kumar",
                role: "Programs",
                city: "Mumbai",
                img: getImg("team-skumar", 900, 900),
                li: "#",
                mail: "#",
            },
        ],
        []
    );

    const PARTNERS = useMemo(
        () => [
            { name: "Frontier Lab", img: getImg("logo-frontier", 640, 360) },
            { name: "CivicX", img: getImg("logo-civicx", 640, 360) },
            { name: "OpenHealth", img: getImg("logo-openhealth", 640, 360) },
            { name: "Atlas EDU", img: getImg("logo-atlasedu", 640, 360) },
            { name: "Parity AI", img: getImg("logo-parity", 640, 360) },
            { name: "GreenField", img: getImg("logo-greenfield", 640, 360) },
        ],
        []
    );

    const TIMELINE = useMemo(
        () => [
            {
                year: "2017",
                title: "Origins",
                copy:
                    "Seeded the collective with a thesis: pair patient capital with evidence and narrative.",
            },
            {
                year: "2019",
                title: "First Fellowships",
                copy:
                    "Launched an annual cohort to derisk early exploration for high-upside ideas.",
            },
            {
                year: "2021",
                title: "Portfolio Flywheel",
                copy:
                    "Investments in frontier tech meeting public-good criteria; created positive spillovers.",
            },
            {
                year: "2023",
                title: "Learning Loop",
                copy:
                    "Codified measurement and shared learnings via Positive Sum to compound impact.",
            },
            {
                year: "2025",
                title: "Global Chapters",
                copy:
                    "Regional nodes with shared infra across programs, capital, and storytelling.",
            },
        ],
        []
    );

    const s1 = useCountUp(STATS[0].val, 900, statsActive);
    const s2 = useCountUp(STATS[1].val, 900, statsActive);
    const s3 = useCountUp(STATS[2].val, 900, statsActive);
    const s4 = useCountUp(STATS[3].val, 900, statsActive);

    return (
        <Styled.Page>
            {/* ───────────── Hero ───────────── */}
            <Styled.Hero>
                <div className="bg" aria-hidden="true">
                    <img
                        src={getImg("collective-hero-network", 2400, 1400)}
                        alt=""
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        srcSet={`
              ${getImg("collective-hero-network", 1200, 700)} 1200w,
              ${getImg("collective-hero-network", 1800, 1050)} 1800w,
              ${getImg("collective-hero-network", 2400, 1400)} 2400w
            `}
                        sizes="(max-width: 720px) 100vw, 1200px"
                    />
                    <div className="vignette" />
                </div>

                <div className="content">
                    <div className="badge">
                        <TbShieldCheck size={16} />
                        Mission-first, evidence-led
                    </div>
                    <h1>
                        The Collective: <span className="accent">people before playbooks</span>
                    </h1>
                    <p className="sub">
                        A multidisciplinary group of operators, scientists, policy thinkers, engineers, and
                        storytellers. We combine philanthropy, venture capital, and fellowships to help
                        ambitious people work on hard problems—responsibly and at scale.
                    </p>
                    <div className="actions">
                        <NavLink to="/our-work" className="btn-primary" aria-label="Explore Our Work">
                            Explore Our Work <TbArrowRight size={18} />
                        </NavLink>
                        <NavLink to="/positive-sum" className="btn-ghost" aria-label="Read Positive Sum">
                            Positive Sum
                        </NavLink>
                    </div>
                    <div className="heroTickers">
                        <span className="chip"><TbMapPin /> SF • NYC • BLR • SG</span>
                        <span className="chip"><TbClock /> Always learning</span>
                        <span className="chip"><TbStar /> Outcomes &gt; optics</span>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────────── Intro / Mission ───────────── */}
            <Styled.Section data-animate>
                <header className="secHeader">
                    <h2><TbBulb /> Our approach</h2>
                    <p className="secSub">
                        We operate like a lab with field sites: test, measure, share, and scale. Programs are
                        designed to produce public-good spillovers—not just private returns.
                    </p>
                </header>

                <Styled.Pillars>
                    {PILLARS.map((p) => (
                        <NavLink to={p.to} key={p.title} className="pillar" data-animate>
                            <div className="media">
                                <img src={p.img} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="meta">
                                <div className="icon">{p.icon}</div>
                                <div className="title">{p.title}</div>
                            </div>
                            <p className="copy">{p.copy}</p>
                            <span className="cta">Learn more <TbArrowRight size={16} /></span>
                        </NavLink>
                    ))}
                </Styled.Pillars>
            </Styled.Section>

            {/* ───────────── Stats ───────────── */}
            <Styled.Stats ref={statsRef} data-animate>
                {[s1, s2, s3, s4].map((v, i) => (
                    <div className="stat" key={i} data-animate>
                        <div className="icon">{STATS[i].icon}</div>
                        <div className="val" aria-live="polite">{v.toLocaleString()}</div>
                        <div className="lbl">{STATS[i].label}</div>
                    </div>
                ))}
            </Styled.Stats>

            {/* ───────────── Team ───────────── */}
            <Styled.Section data-animate>
                <header className="secHeader">
                    <h2><TbUsersGroup /> Team</h2>
                    <p className="secSub">A small, senior team with a bias for shipping and sharing learnings.</p>
                </header>

                <Styled.TeamGrid>
                    {TEAM.map((m) => (
                        <article className="card" key={m.name} data-animate>
                            <div className="pic">
                                <img src={m.img} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="txt">
                                <h3>{m.name}</h3>
                                <div className="role chip"><TbBriefcase2 /> {m.role}</div>
                                <div className="sub"><TbMapPin /> {m.city}</div>
                                <div className="links">
                                    <a href={m.li} aria-label="LinkedIn" className="ico" onClick={(e) => e.preventDefault()}>
                                        <TbBrandLinkedin size={18} />
                                    </a>
                                    <a href={m.mail} aria-label="Email" className="ico" onClick={(e) => e.preventDefault()}>
                                        <TbMail size={18} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </Styled.TeamGrid>

                <Styled.Note>
                    <TbQuote /> We’re always meeting unusual minds.{" "}
                    <NavLink to="/careers" className="lnk">Careers</NavLink>{" "}
                    and{" "}
                    <NavLink to="/internships" className="lnk">Internships</NavLink>.
                </Styled.Note>
            </Styled.Section>

            {/* ───────────── Partners carousel (auto-scroll) ───────────── */}
            <Styled.Partners data-animate>
                <div className="row">
                    {PARTNERS.map((p, i) => (
                        <div className="logo" key={i} title={p.name}>
                            <img src={p.img} alt="" loading="lazy" decoding="async" />
                        </div>
                    ))}
                    {PARTNERS.map((p, i) => (
                        <div className="logo" key={`dup-${i}`} title={p.name}>
                            <img src={p.img} alt="" loading="lazy" decoding="async" />
                        </div>
                    ))}
                </div>
            </Styled.Partners>

            {/* ───────────── Timeline ───────────── */}
            <Styled.Section data-animate>
                <header className="secHeader">
                    <h2><TbTimeline /> Milestones</h2>
                    <p className="secSub">A brief history of how we’ve compounded impact.</p>
                </header>

                <Styled.Timeline>
                    {TIMELINE.map((t, i) => (
                        <div className="item" key={i} data-animate>
                            <div className="year">{t.year}</div>
                            <div className="dot" aria-hidden="true" />
                            <div className="card">
                                <h3>{t.title}</h3>
                                <p>{t.copy}</p>
                            </div>
                        </div>
                    ))}
                </Styled.Timeline>
            </Styled.Section>

            {/* ───────────── Values ───────────── */}
            <Styled.Section data-animate>
                <header className="secHeader">
                    <h2><TbStar /> Operating values</h2>
                    <p className="secSub">Principles that guide decisions across programs.</p>
                </header>

                <Styled.Values>
                    <div className="val" data-animate>
                        <div className="ico"><TbShieldCheck size={18} /></div>
                        <h4>Safety & integrity first</h4>
                        <p>High-agency work demands high standards. We choose reversibility where possible.</p>
                    </div>
                    <div className="val" data-animate>
                        <div className="ico"><TbBulb size={18} /></div>
                        <h4>Test and show your work</h4>
                        <p>Hypotheses, measurements, and public debriefs turn mistakes into assets.</p>
                    </div>
                    <div className="val" data-animate>
                        <div className="ico"><TbRocket size={18} /></div>
                        <h4>Default to action</h4>
                        <p>Small, safe-to-try bets compound faster than perfect plans.</p>
                    </div>
                    <div className="val" data-animate>
                        <div className="ico"><TbWorld size={18} /></div>
                        <h4>Global, local</h4>
                        <p>Central infra, local judgment. Chapters adapt constraints to context.</p>
                    </div>
                </Styled.Values>
            </Styled.Section>

            {/* ───────────── CTA ───────────── */}
            <Styled.CTA className="card brandish" data-animate>
                <h3>Want to collaborate with the Collective?</h3>
                <p>
                    Whether you’re a founder, a researcher, or an operator with a strange and strong idea,
                    we’d love to meet you.
                </p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                        Contact <TbExternalLink size={16} />
                    </NavLink>
                    <NavLink to="/demo-day" className="btn-ghost" aria-label="Demo Day">
                        Demo Day <TbCalendarEvent size={16} />
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
