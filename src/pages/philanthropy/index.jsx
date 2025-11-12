// src/pages/philanthropy/index.jsx
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbHeartHandshake,
    TbTargetArrow,
    TbReportAnalytics,
    TbTimelineEventExclamation,
    TbBooks,
    TbArrowRight,
    TbExternalLink,
    TbShieldCheck,
    TbBulb,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* stable image helper */
const img = (seed, w = 1600, h = 900) =>
    `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;

const PILLARS = [
    {
        icon: <TbTargetArrow size={20} />,
        title: "Clear theory of change",
        text:
            "Each grant maps to a testable hypothesis with specific outcomes and learning loops.",
    },
    {
        icon: <TbReportAnalytics size={20} />,
        title: "Evidence & evaluation",
        text:
            "We invest in measurement: baselines, counterfactuals, and transparent reporting.",
    },
    {
        icon: <TbTimelineEventExclamation size={20} />,
        title: "Multi-year patience",
        text:
            "Complex problems need time. Our grants compound through steady iteration.",
    },
    {
        icon: <TbBooks size={20} />,
        title: "Open knowledge",
        text:
            "We encourage reusable playbooks and share lessons so others can build faster.",
    },
];

const FOCUS_AREAS = [
    { title: "Education equity", text: "High-impact interventions to improve access and outcomes." },
    { title: "Public health", text: "Prevention, mental health, and health-systems strengthening." },
    { title: "Climate & resilience", text: "Adaptation, clean air, and community resilience." },
    { title: "Economic mobility", text: "Skills, livelihoods, and small-business enablement." },
];

const HIGHLIGHTS = [
    {
        seed: "grantee-education-labs",
        tag: "Education",
        title: "Community tutoring networks at scale",
        blurb:
            "Neighborhood-led tutoring with rigorous measurement lifted literacy by 18–24% YoY.",
    },
    {
        seed: "grantee-mental-health",
        tag: "Health",
        title: "Low-cost tele-counseling for youth",
        blurb:
            "Hybrid tele-care reduced average wait-times by 42% across 120+ institutions.",
    },
    {
        seed: "grantee-air-quality",
        tag: "Climate",
        title: "Clean air sensors for underserved wards",
        blurb:
            "Open data + policy playbooks helped cities cut PM2.5 peaks during burn seasons.",
    },
];

export default function Philanthropy() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 1000);
        return () => clearTimeout(t);
    }, []);

    return (
        <Styled.Page>
            {/* ───────── Hero ───────── */}
            <Styled.Hero ref={heroRef}>
                <img
                    className="bg"
                    src={img("philanthropy-hero-collab", 2400, 1400)}
                    alt=""
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                />
                <div className="veil" />
                <div className="inner">
                    <div className="kicker chip">
                        <TbHeartHandshake size={16} />
                        Philanthropy
                    </div>
                    <h1>Evidence-led grants for durable public good</h1>
                    <p className="sub">
                        We support organizations solving hard problems with a bias for learning,
                        transparency, and community-level outcomes.
                    </p>
                    <div className="actions">
                        <NavLink to="/positive-sum" className="btn-primary">
                            Read case studies <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </NavLink>
                        <NavLink to="/contact" className="btn-ghost">
                            Partner with us
                        </NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

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

            {/* ───────── Focus Areas ───────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Focus areas</h2>
                    <p className="secSub">
                        Where we direct capital today — informed by data, shaped with partners.
                    </p>
                </header>

                <Styled.FocusGrid>
                    {FOCUS_AREAS.map((f) => (
                        <div className="focus card" key={f.title}>
                            <div className="ico">
                                <TbShieldCheck size={20} />
                            </div>
                            <div className="t">
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </div>
                        </div>
                    ))}
                </Styled.FocusGrid>
            </Styled.Section>

            {/* ───────── Highlights / Grantees ───────── */}
            <Styled.Section className="brand">
                <header className="secHeader">
                    <h2>Highlights</h2>
                    <p className="secSub">Signals from current and past grantees.</p>
                </header>

                <Styled.HighlightGrid>
                    {HIGHLIGHTS.map((h, i) => (
                        <a
                            key={i}
                            className="highlight card"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label={`${h.title} (preview)`}
                        >
                            <div className="media">
                                <img src={img(h.seed, 1400, 900)} alt="" loading="lazy" decoding="async" />
                                <div className="overlay" />
                                <div className="tag chip">{h.tag}</div>
                            </div>
                            <div className="txt">
                                <h3>{h.title}</h3>
                                <p>{h.blurb}</p>
                                <span className="read">
                                    Learn more <TbExternalLink size={16} />
                                </span>
                            </div>
                        </a>
                    ))}
                </Styled.HighlightGrid>
            </Styled.Section>

            {/* ───────── How we evaluate ───────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>How we evaluate</h2>
                    <p className="secSub">
                        Simple rubric; strong signals. We co-design metrics with grantees.
                    </p>
                </header>

                <Styled.Rubric className="card">
                    <div className="row">
                        <div className="point">
                            <div className="dot" />
                            <div className="k">Need & additionality</div>
                            <div className="v">
                                Is the problem under-funded? Does our grant unlock something otherwise impossible?
                            </div>
                        </div>
                        <div className="point">
                            <div className="dot" />
                            <div className="k">Evidence & learning</div>
                            <div className="v">
                                Are hypotheses clear? Are baselines and counterfactuals defined for iteration?
                            </div>
                        </div>
                        <div className="point">
                            <div className="dot" />
                            <div className="k">Execution & team</div>
                            <div className="v">
                                Do leaders show ownership, ethics, and a plan that compounds with community?
                            </div>
                        </div>
                        <div className="point">
                            <div className="dot" />
                            <div className="k">Spillovers</div>
                            <div className="v">
                                Will success create reusable playbooks or policy improvements beyond one site?
                            </div>
                        </div>
                    </div>
                </Styled.Rubric>
            </Styled.Section>

            {/* ───────── CTA ───────── */}
            <Styled.CTA className="card brandish">
                <h3>Have a bold hypothesis?</h3>
                <p>
                    Share a concise proposal with context, existing evidence, and how learning will be shared.
                </p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary">
                        Start a conversation <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                    </NavLink>
                    <NavLink to="/positive-sum" className="btn-ghost">
                        Read case studies
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
