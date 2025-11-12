import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbGavel,
    TbShieldLock,
    TbFileDescription,
    TbFileInfo,
    TbArrowUpRight,
    TbLink,
    TbCheck,
    TbAlertTriangle,
    TbShieldCheck,
    TbUsersGroup,
    TbWorld,
    TbLicense,
    TbBuildingSkyscraper,
    TbBook2,
    TbMail,
    TbHome2,
    TbExternalLink,
    TbCopyCheck,
    TbDownload,
    TbCircleCheck,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Helpers */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* In-page sections (id, title, icon, content) */
const SECTIONS = [
    {
        id: "introduction",
        title: "Introduction",
        icon: <TbFileInfo size={18} />,
        content: (
            <>
                <p>
                    These Terms &amp; Conditions (“Terms”) govern your access to and use of the Prerna
                    Collective website, content, and related materials (collectively, the “Site”). By
                    using the Site, you agree to these Terms. If you do not agree, do not use the Site.
                </p>
                <p className="sub">
                    Prerna Collective combines philanthropy, venture capital, fellowships, and storytelling
                    to support people tackling complex problems. This Site provides information about our
                    mission and activities; it is not an offer to sell or solicit investments.
                </p>
            </>
        ),
    },
    {
        id: "acceptance-eligibility",
        title: "Acceptance & Eligibility",
        icon: <TbCircleCheck size={18} />,
        content: (
            <>
                <ul className="disc">
                    <li>You must be able to form a binding contract to use the Site.</li>
                    <li>Use must comply with applicable laws and these Terms at all times.</li>
                    <li>
                        Certain pages may be intended for specific audiences (for example, internship pages).
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "use-of-site",
        title: "Use of Site & Content",
        icon: <TbBook2 size={18} />,
        content: (
            <>
                <p>
                    The Site and all materials are provided for informational purposes only. You may not
                    reproduce, distribute, or create derivatives except as permitted by law or by explicit
                    written permission from Prerna Collective.
                </p>
                <div className="note">
                    <TbAlertTriangle aria-hidden /> Do not rely on the Site for legal, financial, or
                    investment decisions. Always seek professional advice.
                </div>
            </>
        ),
    },
    {
        id: "intellectual-property",
        title: "Intellectual Property",
        icon: <TbLicense size={18} />,
        content: (
            <>
                <p>
                    All trademarks, logos, service marks, trade dress, graphics, and content on the Site
                    are the property of Prerna Collective or its licensors and are protected by applicable
                    intellectual property laws.
                </p>
                <ul className="disc">
                    <li>No license or right is granted by implication or otherwise.</li>
                    <li>Use of marks without prior consent is strictly prohibited.</li>
                </ul>
            </>
        ),
    },
    {
        id: "prohibited-conduct",
        title: "Prohibited Conduct",
        icon: <TbShieldCheck size={18} />,
        content: (
            <>
                <ul className="disc">
                    <li>Interfering with or disrupting the Site’s security or infrastructure.</li>
                    <li>Using bots/scrapers to harvest data without written permission.</li>
                    <li>Uploading malicious code or violating third-party rights.</li>
                    <li>Impersonation, misrepresentation, or unlawful activity of any kind.</li>
                </ul>
            </>
        ),
    },
    {
        id: "no-offer",
        title: "No Offer, Solicitation, or Advice",
        icon: <TbBuildingSkyscraper size={18} />,
        content: (
            <>
                <p>
                    The Site is not an offer to sell or a solicitation of an offer to buy any securities.
                    Nothing herein constitutes legal, investment, financial, or tax advice. Any portfolio
                    or program references are illustrative and may not be current.
                </p>
            </>
        ),
    },
    {
        id: "third-party-links",
        title: "Third-Party Links & Services",
        icon: <TbWorld size={18} />,
        content: (
            <>
                <p>
                    The Site may reference third-party websites, content, or services. Prerna Collective is
                    not responsible for third-party practices or content. Access them at your own risk and
                    review their respective terms and privacy policies.
                </p>
            </>
        ),
    },
    {
        id: "privacy",
        title: "Privacy & Submissions",
        icon: <TbShieldLock size={18} />,
        content: (
            <>
                <p>
                    Your use of the Site may involve submitting information. Our approach to data is
                    described in our{" "}
                    <NavLink to="/legal/privacy-policy" className="inlineLink">
                        Privacy Policy
                    </NavLink>
                    . Unsolicited ideas are governed by our{" "}
                    <NavLink to="/legal/unsolicited-submission-policy" className="inlineLink">
                        Unsolicited Submission Policy
                    </NavLink>
                    .
                </p>
                <p className="sub">
                    By sending content or feedback, you grant us a non-exclusive, worldwide, royalty-free
                    license to use, reproduce, modify, and display such submissions in connection with the
                    Site and our operations.
                </p>
            </>
        ),
    },
    {
        id: "disclaimers",
        title: "Disclaimers & Limitation of Liability",
        icon: <TbFileDescription size={18} />,
        content: (
            <>
                <p>
                    The Site is provided on an “AS IS” and “AS AVAILABLE” basis without warranties of any
                    kind. To the maximum extent permitted by law, Prerna Collective disclaims all implied
                    warranties and shall not be liable for indirect, incidental, special, consequential, or
                    punitive damages.
                </p>
            </>
        ),
    },
    {
        id: "indemnification",
        title: "Indemnification",
        icon: <TbUsersGroup size={18} />,
        content: (
            <>
                <p>
                    You agree to indemnify and hold harmless Prerna Collective, its affiliates, officers,
                    directors, employees, and agents from claims arising from your use of the Site or
                    violation of these Terms.
                </p>
            </>
        ),
    },
    {
        id: "governing-law",
        title: "Governing Law & Jurisdiction",
        icon: <TbGavel size={18} />,
        content: (
            <>
                <p>
                    These Terms are governed by applicable laws without regard to conflicts of law
                    principles. Venue and jurisdiction shall lie in competent courts as determined by
                    Prerna Collective.
                </p>
            </>
        ),
    },
    {
        id: "changes",
        title: "Changes to These Terms",
        icon: <TbFileInfo size={18} />,
        content: (
            <>
                <p>
                    We may update these Terms from time to time. Material changes will be reflected on this
                    page with an updated effective date. Continued use of the Site constitutes acceptance of
                    the revised Terms.
                </p>
            </>
        ),
    },
    {
        id: "contact",
        title: "Contact",
        icon: <TbMail size={18} />,
        content: (
            <>
                <p>
                    Questions? Reach us via the{" "}
                    <NavLink to="/contact" className="inlineLink">
                        Contact
                    </NavLink>{" "}
                    page. For general navigation, head back{" "}
                    <NavLink to="/home" className="inlineLink">
                        Home
                    </NavLink>
                    .
                </p>
                <p className="sub">
                    Email:{" "}
                    <a
                        href="mailto:hello@prernacollective.example"
                        rel="noopener noreferrer"
                        className="inlineLink"
                    >
                        hello@prernacollective.example
                        <TbExternalLink size={14} style={{ marginLeft: 6 }} />
                    </a>
                </p>
            </>
        ),
    },
];

export default function LegalTerms() {
    const [activeId, setActiveId] = useState(SECTIONS[0].id);
    const [copiedId, setCopiedId] = useState(null);
    const tocRef = useRef(null);
    const sectionRefs = useRef({}); // map id -> element

    const effectiveDate = useMemo(() => {
        const d = new Date();
        return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
    }, []);

    /* Observe section intersections for scroll-spy */
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id");
                    if (entry.isIntersecting) setActiveId(id);
                });
            },
            // Slightly deeper bottom margin so active state changes earlier
            { rootMargin: "0px 0px -40% 0px", threshold: 0.1 }
        );
        Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    /* Copy anchor link */
    const copySectionLink = useCallback((id) => {
        const url = new URL(window.location.href);
        url.hash = id;
        navigator.clipboard
            .writeText(url.toString())
            .then(() => {
                setCopiedId(id);
                setTimeout(() => setCopiedId(null), 1200);
            })
            .catch(() => { });
    }, []);

    /* Smooth scroll to hash on mount (deep links) */
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const target = document.getElementById(hash.replace("#", ""));
            if (target) {
                // Let layout paint first so the offset is respected
                requestAnimationFrame(() => {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        }
    }, []);

    return (
        <Styled.Page>
            {/* anchor for "Back to top" and safe hash jumps with fixed header */}
            <a id="top" className="anchorTop" aria-hidden="true" />

            {/* Hero */}
            <Styled.Hero>
                <div className="media">
                    <img src={getImg("legal-terms-hero-bw-blue", 2000, 900)} alt="" loading="eager" decoding="async" />
                    <div className="overlay" />
                </div>
                <div className="content">
                    <div className="eyebrow chip">
                        <TbGavel size={16} />
                        Legal
                    </div>
                    <h1 tabIndex={-1}>Terms &amp; Conditions</h1>
                    <p className="sub">
                        The rules of the road for using this Site. Transparent, concise, and written for humans.
                    </p>
                    <div className="meta">
                        <div className="tag">
                            <TbFileInfo /> Last updated: {effectiveDate}
                        </div>
                        <a
                            className="btn-primary ghostish"
                            onClick={() => window.print()}
                            role="button"
                            tabIndex={0}
                            aria-label="Print or Save as PDF"
                        >
                            <TbDownload /> Print / Save PDF
                        </a>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* Body: TOC + Sections */}
            <Styled.Body>
                <aside className="toc" ref={tocRef} aria-label="Table of contents">
                    <div className="tocHeader">
                        <TbFileDescription />
                        <span>On this page</span>
                    </div>
                    <ul>
                        {SECTIONS.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className={"tocLink" + (activeId === s.id ? " active" : "")}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const el = document.getElementById(s.id);
                                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        history.replaceState(null, "", `#${s.id}`);
                                    }}
                                >
                                    <span className="ico">{s.icon}</span>
                                    <span className="txt">{s.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="quickLinks">
                        <NavLink to="/legal/privacy-policy" className="ql">
                            <TbShieldLock />
                            Privacy Policy
                            <TbArrowUpRight className="arr" />
                        </NavLink>
                        <NavLink to="/legal/unsolicited-submission-policy" className="ql">
                            <TbFileDescription />
                            Unsolicited Submission
                            <TbArrowUpRight className="arr" />
                        </NavLink>
                        <NavLink to="/home" className="ql">
                            <TbHome2 />
                            Home
                            <TbArrowUpRight className="arr" />
                        </NavLink>
                    </div>
                </aside>

                <div className="content">
                    {/* Banner cards */}
                    <div className="strip">
                        <div className="card">
                            <div className="icon"><TbShieldCheck /></div>
                            <div className="txt">
                                <div className="title">Mission-first</div>
                                <p>We build for durable public-good outcomes across programs and capital.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon"><TbUsersGroup /></div>
                            <div className="txt">
                                <div className="title">Community</div>
                                <p>People and partnerships compound progress. Our Terms reflect that ethos.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon"><TbWorld /></div>
                            <div className="txt">
                                <div className="title">Responsible Web</div>
                                <p>Respect, safety, and lawful use keep this space healthy for everyone.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sections */}
                    {SECTIONS.map((s) => (
                        <section
                            id={s.id}
                            key={s.id}
                            ref={(el) => (sectionRefs.current[s.id] = el)}
                            className={"sec" + (activeId === s.id ? " active" : "")}
                            aria-labelledby={`${s.id}-title`}
                        >
                            <header className="secHeader">
                                <span className="badge chip">
                                    {s.icon}
                                    {s.title}
                                </span>
                                <h2 id={`${s.id}-title`}>{s.title}</h2>

                                <div className="actions">
                                    <button
                                        className="iconBtn"
                                        title="Copy link to this section"
                                        aria-label={`Copy link to ${s.title}`}
                                        onClick={() => copySectionLink(s.id)}
                                    >
                                        {copiedId === s.id ? <TbCopyCheck /> : <TbLink />}
                                    </button>
                                </div>
                            </header>

                            <div className="secBody">{s.content}</div>

                            <footer className="secFooter">
                                <a
                                    href="#top"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="inlineLink"
                                >
                                    Back to top
                                </a>
                            </footer>
                        </section>
                    ))}

                    {/* Closing CTA */}
                    <div className="cta card brandish">
                        <div className="left">
                            <img src={getImg("legal-closing-cta", 1200, 800)} alt="" loading="lazy" decoding="async" />
                        </div>
                        <div className="right">
                            <h3>Need clarity on a clause?</h3>
                            <p>
                                Our team can help you understand how these Terms apply to your specific use of the
                                Site. We aim for clarity and fair play.
                            </p>
                            <div className="row">
                                <NavLink to="/contact" className="btn-primary">
                                    <TbMail /> Contact
                                </NavLink>
                                <NavLink to="/legal/privacy-policy" className="btn-ghost">
                                    <TbShieldLock /> Privacy Policy
                                </NavLink>
                            </div>
                            <div className="tiny">
                                <TbCheck /> We typically respond within 2–3 business days.
                            </div>
                        </div>
                    </div>
                </div>
            </Styled.Body>
        </Styled.Page>
    );
}
