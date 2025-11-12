import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbShieldLock,
    TbFileDescription,
    TbCookie,
    TbShieldCheck,
    TbExternalLink,
    TbGavel,
    TbUserShield,
    TbLock,
    TbEye,
    TbClock,
    TbMail,
    TbDeviceAnalytics,
    TbSettings2,
    TbLink,
    TbAlertTriangle,
    TbServerBolt,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Deterministic imagery with Picsum */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

const CONSENT_KEY = "prerna:privacy-consent:v1";

/* Sections model */
const SECTIONS = [
    { id: "overview", icon: <TbFileDescription />, title: "Overview" },
    { id: "data-we-collect", icon: <TbEye />, title: "Data We Collect" },
    { id: "how-we-use-data", icon: <TbDeviceAnalytics />, title: "How We Use Data" },
    { id: "cookies", icon: <TbCookie />, title: "Cookies & Local Storage" },
    { id: "legal-bases", icon: <TbGavel />, title: "Legal Bases" },
    { id: "sharing", icon: <TbServerBolt />, title: "Sharing & Processors" },
    { id: "your-rights", icon: <TbUserShield />, title: "Your Rights" },
    { id: "security", icon: <TbLock />, title: "Security" },
    { id: "retention", icon: <TbClock />, title: "Data Retention" },
    { id: "contact", icon: <TbMail />, title: "Contact & Requests" },
];

/* Small helper to format the last updated string */
function formatUpdated(d = new Date("2025-11-12T00:00:00+05:30")) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = n => String(n).padStart(2, "0");
    return `${months[d.getMonth()]} ${pad(d.getDate())}, ${d.getFullYear()} IST`;
}

export default function LegalPrivacyPolicy() {
    const wrapRef = useRef(null);
    const sectionRefs = useRef({});
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
    const [copiedId, setCopiedId] = useState(null);
    const [consent, setConsent] = useState(() => {
        try {
            const raw = localStorage.getItem(CONSENT_KEY);
            return raw ? JSON.parse(raw) : {
                functional: true,
                analytics: false,
                marketing: false
            };
        } catch {
            return { functional: true, analytics: false, marketing: false };
        }
    });

    /* Persist consent choices */
    useEffect(() => {
        try { localStorage.setItem(CONSENT_KEY, JSON.stringify(consent)); } catch { }
    }, [consent]);

    /* Build refs for intersection observing */
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveId(e.target.id);
                });
            },
            { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
        );
        SECTIONS.forEach(({ id }) => {
            const node = sectionRefs.current[id];
            if (node) obs.observe(node);
        });
        return () => obs.disconnect();
    }, []);

    /* Copy deep link for a section */
    const copyLink = useCallback((id) => {
        const url = new URL(window.location.href);
        url.hash = id;
        navigator.clipboard.writeText(url.toString()).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1200);
        }).catch(() => { });
    }, []);

    /* Scroll to hash on mount (nice-to-have) */
    useEffect(() => {
        const hash = decodeURIComponent(window.location.hash || "").replace("#", "");
        if (!hash) return;
        const target = sectionRefs.current[hash];
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    /* Mock “save preferences” button */
    const savePrefs = useCallback(() => {
        // Already saved on toggle; this is just visual feedback.
        wrapRef.current?.classList.add("saved");
        setTimeout(() => wrapRef.current?.classList.remove("saved"), 800);
    }, []);

    const updatedOn = useMemo(() => formatUpdated(), []);

    return (
        <Styled.Page ref={wrapRef}>
            {/* Page header */}
            <Styled.Hero className="card">
                <div className="media">
                    <img src={getImg("privacy-shield-on-white-and-black-contrast", 2400, 1200)} alt="" loading="eager" decoding="async" fetchpriority="high" />
                    <div className="vignette" />
                </div>
                <div className="txt">
                    <div className="eyebrow chip"><TbShieldLock size={16} /> Privacy Policy</div>
                    <h1 tabIndex={-1}>
                        Your data, your control
                    </h1>
                    <p className="sub">
                        We collect the minimum data needed to operate and improve our services. This page explains what we collect,
                        why, and how you can control it.
                    </p>
                    <div className="actions">
                        <NavLink to="/legal/terms" className="btn-ghost" aria-label="Read Terms & Conditions">
                            <TbGavel size={18} /> Terms
                        </NavLink>
                        <NavLink to="/legal/unsolicited-submission-policy" className="btn-ghost" aria-label="Read Unsolicited Submission Policy">
                            <TbFileDescription size={18} /> Submissions
                        </NavLink>
                        <NavLink to="/contact" className="btn-primary" aria-label="Contact">
                            <TbMail size={18} /> Contact
                        </NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* Status bar */}
            <Styled.StatusRow>
                <div className="stat card">
                    <TbClock size={20} />
                    <div className="meta">
                        <div className="k">Last updated</div>
                        <div className="v">{updatedOn}</div>
                    </div>
                </div>
                <div className="stat card">
                    <TbShieldCheck size={20} />
                    <div className="meta">
                        <div className="k">Data controller</div>
                        <div className="v">Prerna Collective</div>
                    </div>
                </div>
                <div className="stat card">
                    <TbAlertTriangle size={20} />
                    <div className="meta">
                        <div className="k">Report an issue</div>
                        <div className="v">
                            <a
                                href="mailto:privacy@prernacollective.org?subject=Privacy%20Request"
                                className="link"
                                rel="noopener noreferrer"
                            >
                                privacy@prernacollective.org
                            </a>
                        </div>
                    </div>
                </div>
            </Styled.StatusRow>

            <Styled.Layout>
                {/* TOC */}
                <aside className="toc card" aria-label="Table of contents">
                    <div className="tocTitle">On this page</div>
                    <ul>
                        {SECTIONS.map(({ id, title, icon }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={"tocLink" + (activeId === id ? " active" : "")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        history.replaceState(null, "", `#${id}`);
                                    }}
                                >
                                    <span className="ico">{icon}</span>
                                    <span className="txt">{title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tocFooter">
                        <NavLink to="/legal/terms" className="miniLink">
                            <TbGavel /> Terms
                        </NavLink>
                        <NavLink to="/legal/unsolicited-submission-policy" className="miniLink">
                            <TbFileDescription /> Submissions
                        </NavLink>
                    </div>
                </aside>

                {/* Content */}
                <div className="contentCol">
                    {/* Overview */}
                    <section id="overview" ref={(n) => (sectionRefs.current["overview"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbFileDescription size={18} /></div>
                                <h2>Overview</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("overview")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "overview" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <p>
                            We process personal data to provide services, maintain security, and improve performance.
                            We do not sell personal data. You can request access, correction, deletion, or restriction at any time.
                        </p>
                        <div className="twoCol">
                            <div className="panel">
                                <img src={getImg("privacy-abstract-tiles", 1200, 800)} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="panel">
                                <ul className="bullets">
                                    <li><TbShieldCheck /> Minimal collection by default</li>
                                    <li><TbSettings2 /> Granular controls for cookies</li>
                                    <li><TbUserShield /> Rights available under applicable law</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data We Collect */}
                    <section id="data-we-collect" ref={(n) => (sectionRefs.current["data-we-collect"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbEye size={18} /></div>
                                <h2>Data We Collect</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("data-we-collect")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "data-we-collect" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <div className="gridTwo">
                            <div>
                                <h3>Information you provide</h3>
                                <ul className="list">
                                    <li>Contact details (name, email) when you reach out or apply.</li>
                                    <li>Application materials (CV, links) for internships or careers.</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Automatic information</h3>
                                <ul className="list">
                                    <li>Device, browser, and general location (city/country level).</li>
                                    <li>Usage events (pages, actions) to improve UX and reliability.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="note">
                            Sensitive categories are not intentionally collected. If you share such data, we process it only as strictly necessary and delete when appropriate.
                        </p>
                    </section>

                    {/* How We Use Data */}
                    <section id="how-we-use-data" ref={(n) => (sectionRefs.current["how-we-use-data"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbDeviceAnalytics size={18} /></div>
                                <h2>How We Use Data</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("how-we-use-data")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "how-we-use-data" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <ul className="list">
                            <li>Provide and maintain the site and services.</li>
                            <li>Respond to inquiries and process applications.</li>
                            <li>Monitor, prevent, and detect fraud or abuse.</li>
                            <li>Analyze performance and improve features.</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section id="cookies" ref={(n) => (sectionRefs.current["cookies"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbCookie size={18} /></div>
                                <h2>Cookies & Local Storage</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("cookies")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "cookies" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>

                        <div className="prefs card">
                            <div className="row">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={!!consent.functional}
                                        disabled
                                        readOnly
                                    />
                                    <span className="slider" />
                                </label>
                                <div className="meta">
                                    <div className="t">Functional (required)</div>
                                    <div className="d">Things like theme preference and navigation state.</div>
                                </div>
                            </div>

                            <div className="row">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={!!consent.analytics}
                                        onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                                    />
                                    <span className="slider" />
                                </label>
                                <div className="meta">
                                    <div className="t">Analytics</div>
                                    <div className="d">Helps us understand usage to improve the product.</div>
                                </div>
                            </div>

                            <div className="row">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={!!consent.marketing}
                                        onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
                                    />
                                    <span className="slider" />
                                </label>
                                <div className="meta">
                                    <div className="t">Marketing</div>
                                    <div className="d">Content personalization and campaign measurement.</div>
                                </div>
                            </div>

                            <div className="actions">
                                <button className="btn-primary" onClick={savePrefs}><TbShieldCheck size={18} /> Save preferences</button>
                                <a
                                    className="btn-ghost"
                                    href="https://support.google.com/analytics/answer/181881?hl=en"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <TbExternalLink size={18} /> Analytics Opt-out
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Legal Bases */}
                    <section id="legal-bases" ref={(n) => (sectionRefs.current["legal-bases"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbGavel size={18} /></div>
                                <h2>Legal Bases</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("legal-bases")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "legal-bases" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <ul className="list">
                            <li>Performance of a contract (e.g., processing applications).</li>
                            <li>Legitimate interests (site security, service improvement).</li>
                            <li>Consent (non-essential cookies, certain communications).</li>
                            <li>Compliance with legal obligations.</li>
                        </ul>
                    </section>

                    {/* Sharing */}
                    <section id="sharing" ref={(n) => (sectionRefs.current["sharing"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbServerBolt size={18} /></div>
                                <h2>Sharing & Processors</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("sharing")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "sharing" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <p>
                            We may share data with service providers who act on our behalf (hosting, analytics, error monitoring).
                            These providers are bound by confidentiality and process data only under our instructions.
                        </p>
                        <p className="note">We do not sell personal data.</p>
                    </section>

                    {/* Your Rights */}
                    <section id="your-rights" ref={(n) => (sectionRefs.current["your-rights"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbUserShield size={18} /></div>
                                <h2>Your Rights</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("your-rights")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "your-rights" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <ul className="list">
                            <li>Access, correct, or delete your data.</li>
                            <li>Object to or restrict processing in certain circumstances.</li>
                            <li>Withdraw consent where processing is based on consent.</li>
                            <li>Data portability (receive a copy in a common format).</li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section id="security" ref={(n) => (sectionRefs.current["security"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbLock size={18} /></div>
                                <h2>Security</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("security")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "security" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <p>
                            We apply reasonable technical and organizational measures including encryption in transit,
                            role-based access, and regular review of access logs.
                        </p>
                    </section>

                    {/* Retention */}
                    <section id="retention" ref={(n) => (sectionRefs.current["retention"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbClock size={18} /></div>
                                <h2>Data Retention</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("retention")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "retention" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <p>
                            We keep data only as long as necessary for the purposes outlined, or as required by law.
                            When no longer needed, we delete or de-identify it.
                        </p>
                    </section>

                    {/* Contact */}
                    <section id="contact" ref={(n) => (sectionRefs.current["contact"] = n)} className="sec card">
                        <Styled.SecHeader>
                            <div className="left">
                                <div className="iconWrap"><TbMail size={18} /></div>
                                <h2>Contact & Requests</h2>
                            </div>
                            <button className="iconBtn" onClick={() => copyLink("contact")} title="Copy link to section" aria-label="Copy link to section">
                                <TbLink size={16} />
                            </button>
                            {copiedId === "contact" && <span className="copied">Copied</span>}
                        </Styled.SecHeader>
                        <div className="gridTwo">
                            <div>
                                <p>
                                    For privacy inquiries, email us at{" "}
                                    <a
                                        href="mailto:privacy@prernacollective.org?subject=Privacy%20Request"
                                        className="link"
                                        rel="noopener noreferrer"
                                    >
                                        privacy@prernacollective.org
                                    </a>.
                                </p>
                                <p>
                                    Prefer a form? Use our{" "}
                                    <NavLink to="/contact" className="link">contact page</NavLink>.
                                </p>
                            </div>
                            <div>
                                <h3>Helpful references</h3>
                                <ul className="list">
                                    <li>
                                        <a
                                            href="https://foundation.mozilla.org/en/privacynotincluded/learn/what-is-personal-data/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="link"
                                        >
                                            Mozilla: What is personal data? <TbExternalLink />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://globalprivacycontrol.org/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="link"
                                        >
                                            Global Privacy Control <TbExternalLink />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Footer nav row */}
                    <Styled.BottomNav className="card">
                        <NavLink to="/legal/terms" className="btn-ghost"><TbGavel /> Terms & Conditions</NavLink>
                        <NavLink to="/legal/unsolicited-submission-policy" className="btn-ghost"><TbFileDescription /> Unsolicited Submission Policy</NavLink>
                        <NavLink to="/home" className="btn-primary"><TbShieldCheck /> Back to Home</NavLink>
                    </Styled.BottomNav>
                </div>
            </Styled.Layout>
        </Styled.Page>
    );
}
