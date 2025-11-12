// src/pages/ourWorkOverview/index.jsx
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbBriefcase2,
    TbHeartHandshake,
    TbBuildingSkyscraper,
    TbCertificate,
    TbArrowRight,
    TbTargetArrow,
    TbCirclesRelation,
    TbTimelineEventExclamation,
    TbShieldCheck,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Stable image helper (deterministic, always returns) */
function img(seed, w = 1600, h = 900) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

const SECTIONS = [
    {
        to: "/our-work/philanthropy",
        title: "Philanthropy",
        icon: <TbHeartHandshake size={22} />,
        img: img("prerna-ow-philanthropy", 1400, 900),
        blurb:
            "Evidence-led grants, measurable outcomes, and partnerships that scale social good.",
    },
    {
        to: "/our-work/venture-capital",
        title: "Venture Capital",
        icon: <TbBuildingSkyscraper size={22} />,
        img: img("prerna-ow-vc", 1400, 900),
        blurb:
            "Backing frontier founders whose work creates positive externalities for society.",
    },
    {
        to: "/our-work/fellowships",
        title: "Fellowships",
        icon: <TbCertificate size={22} />,
        img: img("prerna-ow-fellowships", 1400, 900),
        blurb:
            "Supporting bold individuals with time, capital, and a community that compounds.",
    },
];

const PILLARS = [
    {
        icon: <TbTargetArrow size={22} />,
        title: "Mission-first",
        text:
            "We prioritize durable public benefit over short-term optics; rigor beats noise.",
    },
    {
        icon: <TbCirclesRelation size={22} />,
        title: "Network effects",
        text:
            "Capital, community, and storytelling interlock — outcomes accelerate together.",
    },
    {
        icon: <TbTimelineEventExclamation size={22} />,
        title: "Evidence-led",
        text:
            "Hypotheses, milestones, and learning loops inform where we double down.",
    },
    {
        icon: <TbShieldCheck size={22} />,
        title: "Responsible",
        text:
            "Governance, ethics, and privacy are table stakes — we build trust by design.",
    },
];

const METRICS = [
    { label: "Programs", value: "10+" },
    { label: "Partners", value: "150+" },
    { label: "Countries", value: "25" },
    { label: "Stories", value: "300+" },
];

export default function OurWorkOverview() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 900);
        return () => clearTimeout(t);
    }, []);

    return (
        <Styled.Page>
            {/* ───────── Hero ───────── */}
            <Styled.Hero ref={heroRef}>
                <img
                    className="bg"
                    src={img("our-work-hero-network", 2400, 1400)}
                    alt=""
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                />
                <div className="veil" />

                <div className="inner">
                    <div className="kicker chip">
                        <TbBriefcase2 size={16} />
                        Our Work
                    </div>
                    <h1>Where capital, community, and craft intersect</h1>
                    <p className="sub">
                        We operate across philanthropy, venture capital, and fellowships — combining
                        funding with a network that helps meaningful ideas compound.
                    </p>
                    <div className="actions">
                        <NavLink to="/our-work/philanthropy" className="btn-primary" aria-label="Explore Philanthropy">
                            Explore Philanthropy <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </NavLink>
                        <NavLink to="/our-work/venture-capital" className="btn-ghost" aria-label="Explore Venture Capital">
                            Venture Capital
                        </NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────── Metrics ───────── */}
            <Styled.Metrics className="card brandish">
                {METRICS.map((m) => (
                    <div key={m.label} className="metric">
                        <div className="value">{m.value}</div>
                        <div className="label">{m.label}</div>
                    </div>
                ))}
            </Styled.Metrics>

            {/* ───────── Pillars ───────── */}
            <Styled.Pillars>
                {PILLARS.map((p) => (
                    <div key={p.title} className="pillar card">
                        <div className="ico">{p.icon}</div>
                        <div className="t">
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </div>
                    </div>
                ))}
            </Styled.Pillars>

            {/* ───────── Sections grid ───────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Focus areas</h2>
                    <p className="secSub">
                        Three complementary modes — each reinforcing the others.
                    </p>
                </header>

                <Styled.CardGrid>
                    {SECTIONS.map((s) => (
                        <NavLink to={s.to} key={s.to} className="card">
                            <div className="media">
                                <img src={s.img} alt="" loading="lazy" decoding="async" />
                                <div className="overlay" />
                            </div>
                            <div className="meta">
                                <div className="icon">{s.icon}</div>
                                <div className="title">{s.title}</div>
                            </div>
                            <p className="blurb">{s.blurb}</p>
                        </NavLink>
                    ))}
                </Styled.CardGrid>
            </Styled.Section>

            {/* ───────── CTA ───────── */}
            <Styled.CTA className="card brandish">
                <h3>See how the pieces fit</h3>
                <p>Browse stories where grants, venture, and fellows converge to unlock outsized outcomes.</p>
                <div className="actions">
                    <NavLink to="/positive-sum" className="btn-primary">
                        Read Positive Sum
                    </NavLink>
                    <NavLink to="/collective" className="btn-ghost">
                        Meet the Collective
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
