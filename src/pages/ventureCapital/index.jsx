// src/pages/ventureCapital/index.jsx
import React, { useMemo, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbBuildingSkyscraper,
    TbArrowRight,
    TbBulb,
    TbChartLine,
    TbHeartHandshake,
    TbCertificate,
    TbShieldCheck,
    TbExternalLink,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Stable seeded image helper (predictable + always available) */
function getImg(seed, w = 1600, h = 900) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

/* Example portfolio data (no deep-route slugs; cards can open modals later) */
const PORTFOLIO = [
    {
        name: "Galactic Labs",
        tag: "Climate",
        img: getImg("vc-galactic-labs"),
    },
    {
        name: "NeuVeda",
        tag: "Health",
        img: getImg("vc-neuveda"),
    },
    {
        name: "FieldAI",
        tag: "AgriTech",
        img: getImg("vc-field-ai"),
    },
    {
        name: "Auric Grid",
        tag: "Energy",
        img: getImg("vc-auric-grid"),
    },
    {
        name: "CivicOS",
        tag: "GovTech",
        img: getImg("vc-civicos"),
    },
    {
        name: "LumenPath",
        tag: "EdTech",
        img: getImg("vc-lumenpath"),
    },
];

export default function VentureCapital() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 1200);
        return () => clearTimeout(t);
    }, []);

    const topRow = useMemo(() => PORTFOLIO.slice(0, 3), []);
    const bottomRow = useMemo(() => PORTFOLIO.slice(3, 6), []);

    return (
        <Styled.Page>
            {/* ───────────────── Hero ───────────────── */}
            <Styled.Hero ref={heroRef}>
                <div className="bg" aria-hidden="true">
                    <img src={getImg("vc-hero-network", 2400, 1400)} alt="" loading="eager" />
                    <div className="vignette" />
                </div>

                <div className="content">
                    <div className="eyebrow chip">
                        <TbBuildingSkyscraper size={16} />
                        Venture Capital
                    </div>
                    <h1>Backing bold companies with public-good spillovers</h1>
                    <p className="sub">
                        We invest in founders tackling frontier problems where outcomes compound—
                        climate, health, education, and civic infrastructure. Our thesis: catalytic capital +
                        evidence + storytelling → outsized positive externalities.
                    </p>
                    <div className="actions">
                        <NavLink to="/our-work" className="btn-ghost" aria-label="Our Work">
                            Our Work
                        </NavLink>
                        <NavLink to="/positive-sum" className="btn-primary" aria-label="Read Positive Sum">
                            Read Positive Sum
                            <TbArrowRight size={18} style={{ marginLeft: 8 }} />
                        </NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────────────── Investment Thesis ───────────────── */}
            <Styled.Thesis className="card">
                <div className="tile">
                    <div className="ico">
                        <TbBulb size={20} />
                    </div>
                    Frontier problems
                    <p>We look for ideas with non-linear impact in climate, health, learning, and civic tech.</p>
                </div>
                <div className="tile">
                    <div className="ico">
                        <TbChartLine size={20} />
                    </div>
                    Evidence-led
                    <p>We pair capital with measurement—inputs → outputs → outcomes—so learning compounds.</p>
                </div>
                <div className="tile">
                    <div className="ico">
                        <TbHeartHandshake size={20} />
                    </div>
                    Founder-aligned
                    <p>We optimize for runway, resilience, and community—patient but ambitious partnership.</p>
                </div>
                <div className="tile">
                    <div className="ico">
                        <TbCertificate size={20} />
                    </div>
                    Public spillovers
                    <p>We value the positive externalities created by products beyond direct unit economics.</p>
                </div>
                <div className="tile">
                    <div className="ico">
                        <TbShieldCheck size={20} />
                    </div>
                    Durable progress
                    <p>We care about robustness—governance, privacy, and safety by design.</p>
                </div>
            </Styled.Thesis>

            {/* ───────────────── Portfolio ───────────────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Selected Portfolio</h2>
                    <p className="secSub">A glimpse of teams building at the edges of what’s possible.</p>
                </header>

                <Styled.PortfolioGrid>
                    {[topRow, bottomRow].map((row, ri) => (
                        <div className="row" key={ri}>
                            {row.map((c) => (
                                <div className="card" key={c.name}>
                                    <div className="media">
                                        <img src={c.img} alt="" loading="lazy" />
                                        <div className="overlay" />
                                        <div className="tag chip">{c.tag}</div>
                                    </div>
                                    <div className="meta">
                                        <div className="title">{c.name}</div>
                                        <button className="iconBtn" aria-label="Open company site">
                                            <TbExternalLink size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Styled.PortfolioGrid>
            </Styled.Section>

            {/* ───────────────── Callouts ───────────────── */}
            <Styled.Callouts>
                <div className="call card brandish">
                    <h3>What we look for</h3>
                    <ul>
                        <li>Clear causal story from product to impact</li>
                        <li>Moats from data, science, or networks</li>
                        <li>Infrastructure that unlocks ecosystems</li>
                    </ul>
                </div>
                <div className="call card">
                    <h3>Stage & check size</h3>
                    <ul>
                        <li>Pre-seed to Series A</li>
                        <li>Lead or co-lead flexibility</li>
                        <li>Follow-on reserved</li>
                    </ul>
                </div>
                <div className="call card">
                    <h3>Support</h3>
                    <ul>
                        <li>Research & measurement</li>
                        <li>Hiring & GTM intros</li>
                        <li>Storytelling & distribution</li>
                    </ul>
                </div>
            </Styled.Callouts>

            {/* ───────────────── CTA ───────────────── */}
            <Styled.CTA className="card brandish">
                <h3>Building something ambitious?</h3>
                <p>We’d love to learn about your work and explore a fit.</p>
                <div className="actions">
                    <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                        Contact
                    </NavLink>
                    <NavLink to="/careers" className="btn-ghost" aria-label="Careers">
                        Careers
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}
