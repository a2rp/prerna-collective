import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbCalendarEvent,
    TbMapPin,
    TbClock,
    TbUsersGroup,
    TbMicrophone,
    TbBrandYoutube,
    TbExternalLink,
    TbDownload,
    TbArrowRight,
    TbSparkles,
    TbFilter,
    TbChevronDown,
    TbChevronRight,
    TbCircleCheck,
    TbShieldCheck,
    TbBrandLinkedin,
    TbBrandTwitter,
    TbBrandGithub,
    TbLink,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* ───────────────────────────── Stable image helper ───────────────────────────── */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* ───────────────────────────── Fake data (expandable later) ───────────────────────────── */
const YEARS = ["2025", "2024", "2023"];

const STAGE_LIST = [
    { key: "health", label: "Health & Bio" },
    { key: "climate", label: "Climate & Energy" },
    { key: "civic", label: "Civic Tech" },
    { key: "ai", label: "AI for Public Good" },
];

const DATA_BY_YEAR = {
    "2025": {
        hero: {
            date: "Feb 14, 2025",
            time: "10:00–17:30 IST",
            venue: "Bengaluru • Indiranagar",
            tagline: "Founders building compounding public-good spillovers.",
            bg: getImg("demo-2025-hero", 2400, 1200),
            regLink: "https://forms.gle/PrernaDemoDay2025",
            streamLink: "https://www.youtube.com/",
            agendaPdf: "#",
        },
        highlights: [
            { k: "Startups", v: "18", note: "Seed to Series-A" },
            { k: "Sectors", v: "4", note: "AI, Climate, Health, Civic" },
            { k: "Attendees", v: "350+", note: "Investors & Operators" },
            { k: "Demos", v: "24", note: "Live on stage" },
        ],
        speakers: [
            {
                name: "Ananya Rao",
                title: "Partner, Frontier Capital",
                img: getImg("spk-ananya-rao", 600, 600),
                link: "https://www.linkedin.com/",
            },
            {
                name: "Dr. Vivek Menon",
                title: "AI Safety Researcher",
                img: getImg("spk-vivek-menon", 600, 600),
                link: "https://twitter.com/",
            },
            {
                name: "Neha Kapoor",
                title: "Founder, CivicGrid",
                img: getImg("spk-neha-kapoor", 600, 600),
                link: "https://github.com/",
            },
        ],
        startups: [
            {
                name: "HelixPath",
                stage: "health",
                oneLine: "Point-of-care genomics with ultra-cheap readout.",
                img: getImg("s-helixpath", 900, 600),
                site: "https://example.com/",
            },
            {
                name: "ThermaFlux",
                stage: "climate",
                oneLine: "Heat batteries to decarbonize industrial steam.",
                img: getImg("s-thermaflux", 900, 600),
                site: "https://example.com/",
            },
            {
                name: "CommonsAI",
                stage: "ai",
                oneLine: "Verified models for public-interest tooling.",
                img: getImg("s-commonsai", 900, 600),
                site: "https://example.com/",
            },
            {
                name: "CivicGrid",
                stage: "civic",
                oneLine: "Open infra for city participation at scale.",
                img: getImg("s-civicgrid", 900, 600),
                site: "https://example.com/",
            },
        ],
        schedule: [
            { t: "10:00", title: "Doors & Check-in", sub: "Badges, coffee, maker tables" },
            { t: "10:30", title: "Opening Remarks", sub: "Mission & format" },
            { t: "10:45", title: "Founder Lightning — AI", sub: "5 x 4-min demos + Q&A" },
            { t: "11:25", title: "Panel — Evidence-led Impact", sub: "With investors & practitioners" },
            { t: "12:10", title: "Break & Demos", sub: "Hands-on booths" },
            { t: "13:00", title: "Founder Lightning — Climate", sub: "5 x 4-min demos + Q&A" },
            { t: "14:00", title: "Lunch & Networking", sub: "Meet the teams" },
            { t: "15:00", title: "Founder Lightning — Health", sub: "4 x 4-min demos + Q&A" },
            { t: "15:45", title: "Founder Lightning — Civic", sub: "4 x 4-min demos + Q&A" },
            { t: "16:30", title: "Keynote", sub: "Compounding public-good spillovers" },
            { t: "17:10", title: "Close & Social", sub: "Community announcements" },
        ],
        partners: [
            { name: "Frontier Capital", img: getImg("p-frontier", 400, 200), link: "https://example.com/" },
            { name: "Scale Lab", img: getImg("p-scale-lab", 400, 200), link: "https://example.com/" },
            { name: "Civic Commons", img: getImg("p-civic-commons", 400, 200), link: "https://example.com/" },
        ],
        faqs: [
            { q: "Who should attend?", a: "Investors, operators, researchers, policy folks, and builders who care about AI, climate, health, and civic tech with measurable public-good spillovers." },
            { q: "Is there a livestream?", a: "Yes. We will stream the main stage on YouTube. A few hands-on demos are in-person only." },
            { q: "How are teams selected?", a: "Evidence of traction, clarity of problem framing, credible pathway to scale, and alignment with mission-first outcomes." },
        ],
    },

    "2024": {
        hero: {
            date: "Feb 10, 2024",
            time: "10:00–17:00 IST",
            venue: "Bengaluru • Koramangala",
            tagline: "From prototypes to public goods.",
            bg: getImg("demo-2024-hero", 2400, 1200),
            regLink: "https://forms.gle/PrernaDemoDay2024",
            streamLink: "https://www.youtube.com/",
            agendaPdf: "#",
        },
        highlights: [
            { k: "Startups", v: "14", note: "Prototype to seed" },
            { k: "Sectors", v: "4", note: "AI, Climate, Health, Civic" },
            { k: "Attendees", v: "300+", note: "Full house" },
            { k: "Demos", v: "20", note: "Live" },
        ],
        speakers: [],
        startups: [],
        schedule: [],
        partners: [],
        faqs: [],
    },

    "2023": {
        hero: {
            date: "Feb 05, 2023",
            time: "10:00–16:30 IST",
            venue: "Bengaluru • MG Road",
            tagline: "Early sparks, durable arcs.",
            bg: getImg("demo-2023-hero", 2400, 1200),
            regLink: "https://forms.gle/PrernaDemoDay2023",
            streamLink: "https://www.youtube.com/",
            agendaPdf: "#",
        },
        highlights: [
            { k: "Startups", v: "9", note: "Earliest stage" },
            { k: "Sectors", v: "3", note: "AI, Health, Civic" },
            { k: "Attendees", v: "180+", note: "Community" },
            { k: "Demos", v: "12", note: "Live" },
        ],
        speakers: [],
        startups: [],
        schedule: [],
        partners: [],
        faqs: [],
    },
};

/* ───────────────────────────── Helpers ───────────────────────────── */
function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

function useYear(defaultYear = YEARS[0]) {
    const query = useQuery();
    const navigate = useNavigate();
    const y = query.get("year");
    const year = YEARS.includes(y || "") ? y : defaultYear;

    const setYear = (ny) => {
        const p = new URLSearchParams(window.location.search);
        if (ny) p.set("year", ny);
        else p.delete("year");
        navigate(`/demo-day?${p.toString()}`, { replace: false });
    };

    return [year, setYear];
}

/* ───────────────────────────── Component ───────────────────────────── */
export default function DemoDayHub() {
    const [year, setYear] = useYear("2025");
    const data = DATA_BY_YEAR[year];
    const [stage, setStage] = useState("all");
    const topRef = useRef(null);

    useEffect(() => {
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [year]);

    const filteredStartups = useMemo(() => {
        if (!data?.startups?.length) return [];
        if (stage === "all") return data.startups;
        return data.startups.filter((s) => s.stage === stage);
    }, [data, stage]);

    return (
        <Styled.Page ref={topRef}>
            {/* ───────────── Hero ───────────── */}
            <Styled.Hero>
                <div className="bg" aria-hidden="true">
                    <img src={data.hero.bg} alt="" loading="eager" decoding="async" fetchpriority="high" />
                    <div className="vignette" />
                </div>

                <div className="content">
                    <div className="eyebrow chip">
                        <TbShieldCheck size={14} />
                        Demo Day • {year}
                    </div>
                    <h1>Showcasing builders of positive-sum progress</h1>
                    <p className="sub">{data.hero.tagline}</p>

                    <Styled.MetaBar className="card">
                        <div className="item">
                            <TbCalendarEvent size={18} />
                            <span>{data.hero.date}</span>
                        </div>
                        <div className="item">
                            <TbClock size={18} />
                            <span>{data.hero.time}</span>
                        </div>
                        <div className="item">
                            <TbMapPin size={18} />
                            <span>{data.hero.venue}</span>
                        </div>
                        <nav className="actions">
                            <a href={data.hero.regLink} target="_blank" rel="noreferrer" className="btn-primary" aria-label="Register">
                                Register <TbArrowRight size={18} />
                            </a>
                            <a href={data.hero.streamLink} target="_blank" rel="noreferrer" className="btn-ghost" aria-label="Watch stream">
                                <TbBrandYoutube size={18} />
                                Watch live
                            </a>
                            <a href={data.hero.agendaPdf} className="btn-ghost" aria-label="Download agenda">
                                <TbDownload size={18} />
                                Agenda
                            </a>
                        </nav>
                    </Styled.MetaBar>
                </div>

                <div className="spark">
                    <TbSparkles size={18} />
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────────── Year Switcher ───────────── */}
            <Styled.YearSwitch className="card">
                <div className="left">
                    <TbFilter size={18} />
                    <span>Year</span>
                </div>
                <div className="years">
                    {YEARS.map((y) => (
                        <button
                            key={y}
                            className={"chip yearBtn" + (y === year ? " active" : "")}
                            onClick={() => setYear(y)}
                            aria-pressed={y === year}
                            title={`Switch to ${y}`}
                        >
                            {y}
                        </button>
                    ))}
                </div>

                <div className="links">
                    <NavLink to="/positive-sum" className="link">
                        Highlights <TbChevronRight size={16} />
                    </NavLink>
                    <NavLink to="/our-work/venture-capital" className="link">
                        Venture <TbChevronRight size={16} />
                    </NavLink>
                    <NavLink to="/our-work/fellowships" className="link">
                        Fellowships <TbChevronRight size={16} />
                    </NavLink>
                </div>
            </Styled.YearSwitch>

            {/* ───────────── Stats / Highlights ───────────── */}
            <Styled.HighlightRow>
                {data.highlights.map((h, i) => (
                    <div key={i} className="stat card">
                        <div className="v">{h.v}</div>
                        <div className="k">{h.k}</div>
                        <div className="n">{h.note}</div>
                    </div>
                ))}
            </Styled.HighlightRow>

            {/* ───────────── Speakers ───────────── */}
            {data.speakers.length > 0 && (
                <Styled.SpeakerSection>
                    <header className="secHeader">
                        <h2>Speakers</h2>
                        <p className="secSub">Operators, investors, researchers, and founders.</p>
                    </header>

                    <Styled.SpeakerGrid>
                        {data.speakers.map((s, i) => (
                            <div key={i} className="sp card">
                                <div className="pic">
                                    <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                                </div>
                                <div className="meta">
                                    <div className="name">{s.name}</div>
                                    <div className="title">{s.title}</div>
                                </div>
                                <div className="social">
                                    <a href={s.link} target="_blank" rel="noreferrer" title="Open profile">
                                        <TbExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Styled.SpeakerGrid>
                </Styled.SpeakerSection>
            )}

            {/* ───────────── Startups & Tracks ───────────── */}
            <Styled.TrackFilter className="card">
                <div className="left">
                    <TbUsersGroup size={18} />
                    <span>Tracks</span>
                </div>
                <div className="chips">
                    <button className={"chip" + (stage === "all" ? " active" : "")} onClick={() => setStage("all")}>
                        All
                    </button>
                    {STAGE_LIST.map((t) => (
                        <button
                            key={t.key}
                            className={"chip" + (stage === t.key ? " active" : "")}
                            onClick={() => setStage(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </Styled.TrackFilter>

            <Styled.StartupGrid>
                {filteredStartups.map((s, i) => (
                    <a key={i} href={s.site} target="_blank" rel="noreferrer" className="startup card">
                        <div className="media">
                            <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                            <div className="overlay" />
                            <span className="tag chip">{s.name}</span>
                        </div>
                        <div className="txt">
                            <div className="oneLine">{s.oneLine}</div>
                            <div className="pill">
                                <TbCircleCheck size={14} /> {STAGE_LIST.find((x) => x.key === s.stage)?.label || "Track"}
                            </div>
                        </div>
                    </a>
                ))}
                {filteredStartups.length === 0 && (
                    <div className="empty card">
                        <div className="ico">
                            <TbUsersGroup size={22} />
                        </div>
                        <div className="msg">No startups in this filter.</div>
                    </div>
                )}
            </Styled.StartupGrid>

            {/* ───────────── Schedule ───────────── */}
            {data.schedule.length > 0 && (
                <Styled.Schedule id="schedule" className="card">
                    <header className="secHeader">
                        <h2>Schedule</h2>
                        <p className="secSub">Main stage timings (IST)</p>
                    </header>
                    <ul className="list">
                        {data.schedule.map((r, i) => (
                            <li key={i} className="row">
                                <div className="t">{r.t}</div>
                                <div className="title">
                                    <TbMicrophone size={16} />
                                    {r.title}
                                </div>
                                <div className="sub">{r.sub}</div>
                            </li>
                        ))}
                    </ul>
                </Styled.Schedule>
            )}

            {/* ───────────── Partners ───────────── */}
            {data.partners.length > 0 && (
                <Styled.Partners>
                    <header className="secHeader">
                        <h2>Partners</h2>
                        <p className="secSub">Thanks to the folks who make this possible.</p>
                    </header>

                    <Styled.PartnerRow>
                        {data.partners.map((p, i) => (
                            <a key={i} className="partner card" href={p.link} target="_blank" rel="noreferrer" title={p.name}>
                                <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
                            </a>
                        ))}
                    </Styled.PartnerRow>
                </Styled.Partners>
            )}

            {/* ───────────── FAQ ───────────── */}
            {data.faqs.length > 0 && (
                <Styled.FAQ className="card">
                    <header className="secHeader">
                        <h2>FAQ</h2>
                        <p className="secSub">Everything else you might be wondering.</p>
                    </header>
                    <details className="it" open>
                        <summary>
                            <TbChevronDown size={16} />
                            {data.faqs[0].q}
                        </summary>
                        <div className="ans">{data.faqs[0].a}</div>
                    </details>
                    {data.faqs.slice(1).map((f, i) => (
                        <details className="it" key={i}>
                            <summary>
                                <TbChevronDown size={16} />
                                {f.q}
                            </summary>
                            <div className="ans">{f.a}</div>
                        </details>
                    ))}
                </Styled.FAQ>
            )}

            {/* ───────────── CTA ───────────── */}
            <Styled.CTA className="card brandish">
                <div className="left">
                    <h3>Join the next one</h3>
                    <p>Subscribe for updates, or reach out if you’re building in these spaces.</p>
                    <div className="links">
                        <a href={data.hero.regLink} target="_blank" rel="noreferrer" className="btn-primary">
                            Register interest <TbArrowRight size={18} />
                        </a>
                        <a href={data.hero.streamLink} target="_blank" rel="noreferrer" className="btn-ghost">
                            <TbBrandYoutube size={18} />
                            Watch last stream
                        </a>
                    </div>
                </div>
                <div className="right">
                    <a className="chip" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn">
                        <TbBrandLinkedin size={16} /> LinkedIn
                    </a>
                    <a className="chip" href="https://twitter.com/" target="_blank" rel="noreferrer" title="Twitter">
                        <TbBrandTwitter size={16} /> Twitter
                    </a>
                    <a className="chip" href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
                        <TbBrandGithub size={16} /> GitHub
                    </a>
                    <NavLink className="chip" to="/contact" title="Contact">
                        <TbLink size={16} /> Contact
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
