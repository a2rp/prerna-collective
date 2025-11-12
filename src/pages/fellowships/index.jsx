// src/pages/fellowships/index.jsx
import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbCertificate,
    TbFilter,
    TbSchool,
    TbMicrophone,
    TbUsersGroup,
    TbArrowRight,
    TbMapPin,
    TbCalendarTime,
    TbBuildingCommunity,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Stable image helper (deterministic, always returns) */
function getImg(seed, w = 1400, h = 900) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

/* Programs (static routes; details are data-driven inside this page) */
const PROGRAMS = [
    {
        key: "policy",
        title: "Policy & Civic Tech Fellows",
        icon: <TbBuildingCommunity size={20} />,
        img: getImg("fellows-policy-civic"),
        blurb:
            "Technologists and policy thinkers building modern public infrastructure and civic tools.",
        to: "/fellowships", // hub route; details render in-page (no deep slugs)
        chips: ["GovTech", "Civic Data", "Open Source"],
    },
    {
        key: "science",
        title: "Science & Research Fellows",
        icon: <TbSchool size={20} />,
        img: getImg("fellows-science-research"),
        blurb:
            "Researchers translating frontier science into public-good breakthroughs.",
        to: "/fellowships",
        chips: ["Bio", "Climate", "ML"],
    },
    {
        key: "story",
        title: "Storytelling & Media Fellows",
        icon: <TbMicrophone size={20} />,
        img: getImg("fellows-storytelling-media"),
        blurb:
            "Journalists and creators amplifying underrepresented voices with evidence-led narratives.",
        to: "/fellowships",
        chips: ["Longform", "Docs", "Data Viz"],
    },
];

/* Fellows directory (sample data; can be expanded or loaded from API later) */
const FELLOWS = [
    {
        id: "aanya",
        name: "Aanya Kapoor",
        program: "science",
        tagline: "Waste-to-energy catalyst discovery",
        img: getImg("fellow-aanya-portrait", 900, 900),
        location: "Bengaluru, IN",
        year: "2025",
    },
    {
        id: "rahul",
        name: "Rahul Mehta",
        program: "policy",
        tagline: "Civic identity & benefits rails",
        img: getImg("fellow-rahul-portrait", 900, 900),
        location: "New Delhi, IN",
        year: "2024",
    },
    {
        id: "mira",
        name: "Mira Chatterjee",
        program: "story",
        tagline: "Climate risk storytelling through data",
        img: getImg("fellow-mira-portrait", 900, 900),
        location: "Kolkata, IN",
        year: "2025",
    },
    {
        id: "arjun",
        name: "Arjun Varma",
        program: "science",
        tagline: "Low-cost genome diagnostics",
        img: getImg("fellow-arjun-portrait", 900, 900),
        location: "Hyderabad, IN",
        year: "2024",
    },
    {
        id: "sana",
        name: "Sana Hussain",
        program: "policy",
        tagline: "Digital public goods for cities",
        img: getImg("fellow-sana-portrait", 900, 900),
        location: "Mumbai, IN",
        year: "2025",
    },
    {
        id: "kabir",
        name: "Kabir Singh",
        program: "story",
        tagline: "Explainers for complicated systems",
        img: getImg("fellow-kabir-portrait", 900, 900),
        location: "Jaipur, IN",
        year: "2024",
    },
];

export default function Fellowships() {
    const [filter, setFilter] = useState("all");
    const [year, setYear] = useState("all");

    const years = useMemo(
        () => ["all", ...Array.from(new Set(FELLOWS.map((f) => f.year))).sort().reverse()],
        []
    );

    const visible = useMemo(() => {
        return FELLOWS.filter((f) => (filter === "all" ? true : f.program === filter))
            .filter((f) => (year === "all" ? true : f.year === year));
    }, [filter, year]);

    return (
        <Styled.Page>
            {/* Hero */}
            <Styled.Hero>
                <div className="media" aria-hidden="true">
                    <img src={getImg("fellows-hero-collage", 2400, 1200)} alt="" />
                    <div className="vignette" />
                </div>

                <div className="inner">
                    <div className="badge chip">
                        <TbCertificate size={16} />
                        Fellowships
                    </div>
                    <h1>Backing people who bend the curve</h1>
                    <p className="sub">
                        Multi-disciplinary fellows exploring civic technology, frontier science, and powerful storytelling.
                    </p>
                    <div className="actions">
                        <NavLink to="/contact" className="btn-primary">
                            Get in touch <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </NavLink>
                        <NavLink to="/internships" className="btn-ghost">Internships</NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* Programs */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Programs</h2>
                    <p className="secSub">Three tracks. One mission: public-good outcomes.</p>
                </header>

                <Styled.ProgramGrid>
                    {PROGRAMS.map((p) => (
                        <article key={p.key} className="program card">
                            <div className="pic">
                                <img src={p.img} alt="" loading="lazy" />
                                <div className="overlay" />
                            </div>
                            <div className="body">
                                <div className="title">
                                    <span className="ico">{p.icon}</span>
                                    <h3>{p.title}</h3>
                                </div>
                                <p className="blurb">{p.blurb}</p>
                                <div className="chips">
                                    {p.chips.map((c) => (
                                        <span key={c} className="chip">{c}</span>
                                    ))}
                                </div>
                                <div className="actions">
                                    <NavLink to={p.to} className="btn-ghost">
                                        Learn more
                                    </NavLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </Styled.ProgramGrid>
            </Styled.Section>

            {/* Directory / Filters */}
            <Styled.Section className="brand">
                <header className="secHeader">
                    <h2>Fellows directory</h2>
                    <p className="secSub">Browse current and recent fellows across programs.</p>
                </header>

                <Styled.Filters>
                    <div className="left">
                        <span className="ico"><TbFilter size={18} /></span>
                        <button
                            className={`chip ${filter === "all" ? "active" : ""}`}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </button>
                        <button
                            className={`chip ${filter === "policy" ? "active" : ""}`}
                            onClick={() => setFilter("policy")}
                            title="Policy & Civic Tech"
                        >
                            Policy
                        </button>
                        <button
                            className={`chip ${filter === "science" ? "active" : ""}`}
                            onClick={() => setFilter("science")}
                            title="Science & Research"
                        >
                            Science
                        </button>
                        <button
                            className={`chip ${filter === "story" ? "active" : ""}`}
                            onClick={() => setFilter("story")}
                            title="Storytelling & Media"
                        >
                            Story
                        </button>
                    </div>

                    <div className="right">
                        <span className="ico"><TbCalendarTime size={18} /></span>
                        <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            aria-label="Select year"
                        >
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y === "all" ? "All years" : y}
                                </option>
                            ))}
                        </select>
                    </div>
                </Styled.Filters>

                <Styled.FellowGrid>
                    {visible.map((f) => (
                        <article className="fellow card" key={f.id}>
                            <div className="photo">
                                <img src={f.img} alt="" loading="lazy" />
                                <div className="tag chip">{f.year}</div>
                            </div>
                            <div className="meta">
                                <h3>{f.name}</h3>
                                <p className="tagline">{f.tagline}</p>
                                <div className="row">
                                    <span className={`badge ${f.program}`}>
                                        {f.program === "policy" ? "Policy" : f.program === "science" ? "Science" : "Story"}
                                    </span>
                                    <span className="loc">
                                        <TbMapPin size={16} /> {f.location}
                                    </span>
                                </div>
                                <div className="actions">
                                    <NavLink to="/collective" className="btn-ghost">
                                        Profile
                                    </NavLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </Styled.FellowGrid>

                {visible.length === 0 && (
                    <Styled.Empty className="card brandish">
                        <TbUsersGroup size={24} />
                        <div className="t">
                            No fellows match your filters.
                            <span>Try a different program or year.</span>
                        </div>
                    </Styled.Empty>
                )}
            </Styled.Section>
        </Styled.Page>
    );
}
