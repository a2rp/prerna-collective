import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbGavel,
    TbShieldLock,
    TbFileDescription,
    TbExternalLink,
    TbPrinter,
    TbClipboardCheck,
    TbLink,
    TbArrowUp,
    TbAlertTriangle,
    TbInfoCircle,
    TbMail,
    TbShield,
    TbFileText,
    TbHome,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";

/* Stable hero image */
function getImg(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* Sections model (id must match heading id) */
const SECTIONS = [
    {
        id: "scope",
        title: "Scope of this Policy",
        icon: <TbFileDescription size={18} />,
        body: (
            <>
                <p>
                    This Unsolicited Submission Policy governs any idea, proposal, pitch, business plan,
                    suggestion, creative work, technology, or related materials you send to us without a prior
                    written request or agreement. It applies to submissions made by email, contact forms, postal
                    mail, social media, events, or any other channel.
                </p>
                <p className="note">
                    <TbInfoCircle /> This policy coexists with our <NavLink to="/legal/terms">Terms &amp; Conditions</NavLink>{" "}
                    and <NavLink to="/legal/privacy-policy">Privacy Policy</NavLink>. If there is a conflict, the most
                    protective provision for Prerna Collective applies.
                </p>
            </>
        ),
    },
    {
        id: "no-confidentiality",
        title: "No Confidentiality or Compensation",
        icon: <TbShieldLock size={18} />,
        body: (
            <>
                <ul className="bullets">
                    <li>
                        <strong>No Confidential Relationship:</strong> Your unsolicited submission is not received in confidence.
                        We do not assume any duty to keep, hold, or treat the submission as confidential.
                    </li>
                    <li>
                        <strong>No Compensation:</strong> You agree we are under no obligation to pay any fee, commission,
                        royalty, or other compensation in connection with the submission.
                    </li>
                    <li>
                        <strong>No Return of Materials:</strong> We may retain or destroy your materials at our discretion and are
                        not obligated to return any copies.
                    </li>
                </ul>
                <div className="callout warn">
                    <TbAlertTriangle /> Do not include trade secrets or information you are not authorized to share.
                </div>
            </>
        ),
    },
    {
        id: "similarity",
        title: "Similar Ideas and Independent Development",
        icon: <TbShield size={18} />,
        body: (
            <>
                <p>
                    We are active across philanthropy, venture capital, and fellowships. We may independently
                    develop, evaluate, or fund ideas similar or identical to your submission. You agree that any
                    similarity does not give rise to a claim against Prerna Collective, our partners, grantees, or portfolio
                    companies.
                </p>
                <ul className="bullets">
                    <li>
                        <strong>No Restriction:</strong> We may use, build, or fund similar concepts without obligation to you.
                    </li>
                    <li>
                        <strong>No Implied License:</strong> Sending a submission does not grant us any license; likewise, our activities
                        do not grant you any rights in our work.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "ownership",
        title: "Ownership and License You Grant",
        icon: <TbFileText size={18} />,
        body: (
            <>
                <p>
                    You represent that you own or control all rights to your submission. By sending it, you grant
                    Prerna Collective a worldwide, non-exclusive, irrevocable, perpetual, royalty-free license to
                    use, reproduce, distribute, publicly display, modify, adapt, and create derivative works for the
                    limited purpose of evaluation and internal decision-making.
                </p>
                <p className="note">
                    <TbInfoCircle /> This license is necessary to review and route submissions within a complex organization.
                </p>
            </>
        ),
    },
    {
        id: "no-agreement",
        title: "No Offer, No Agency, No Partnership",
        icon: <TbGavel size={18} />,
        body: (
            <>
                <p>
                    Your submission does not create a contract, partnership, agency, joint venture, or employment
                    relationship with Prerna Collective. Any collaboration must be governed by a mutually executed
                    written agreement.
                </p>
            </>
        ),
    },
    {
        id: "how-to-submit",
        title: "How to Submit If Invited",
        icon: <TbMail size={18} />,
        body: (
            <>
                <p>
                    We only review materials through formal, invited channels. If we invite you to submit, you will
                    receive instructions and, where applicable, a separate Non-Disclosure Agreement (NDA).
                </p>
                <ul className="bullets">
                    <li>Use the provided intake form or secure upload link.</li>
                    <li>Label documents clearly and avoid sensitive personal data.</li>
                    <li>Keep one version history and include a brief executive summary.</li>
                </ul>
                <div className="callout info">
                    <TbInfoCircle /> For partnership or media inquiries, visit{" "}
                    <NavLink to="/contact">Contact</NavLink>.
                </div>
            </>
        ),
    },
    {
        id: "governing-law",
        title: "Governing Law and Disputes",
        icon: <TbGavel size={18} />,
        body: (
            <>
                <p>
                    This Policy is governed by the laws applicable in our principal place of business, without
                    regard to conflict-of-law provisions. Disputes arising from unsolicited submissions shall be
                    resolved in the competent courts of that jurisdiction.
                </p>
            </>
        ),
    },
    {
        id: "changes",
        title: "Changes to this Policy",
        icon: <TbInfoCircle size={18} />,
        body: (
            <>
                <p>
                    We may update this Policy from time to time. Material changes will be indicated by an updated
                    “Last updated” date. Continued submission after changes constitutes acceptance of the revised Policy.
                </p>
            </>
        ),
    },
    {
        id: "faq",
        title: "Frequently Asked Questions",
        icon: <TbInfoCircle size={18} />,
        body: (
            <div className="faq">
                <details>
                    <summary>Can I mark my email “Confidential” to bypass this Policy?</summary>
                    <div>
                        No. Unsolicited materials are not confidential. Only a signed NDA or explicit written invite
                        changes how we treat materials.
                    </div>
                </details>
                <details>
                    <summary>Will I get paid if you use a similar idea?</summary>
                    <div>
                        No. We often encounter similar concepts independently. Similarity does not entitle you to compensation.
                    </div>
                </details>
                <details>
                    <summary>How do I get my idea considered?</summary>
                    <div>
                        We periodically open themed programs or calls. Follow announcements on{" "}
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            LinkedIn <TbExternalLink aria-hidden />
                        </a>{" "}
                        or check <NavLink to="/our-work">Our Work</NavLink>.
                    </div>
                </details>
            </div>
        ),
    },
];

export default function LegalUnsolicitedSubmissionPolicy() {
    const { hash, pathname } = useLocation();
    const topRef = useRef(null);
    const [copied, setCopied] = useState("");
    const [activeId, setActiveId] = useState(SECTIONS[0].id);

    /* Smooth scroll to hash on mount/route change with visual flash */
    useEffect(() => {
        if (!hash) return;
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.classList.add("flash");
            const t = setTimeout(() => el.classList.remove("flash"), 800);
            return () => clearTimeout(t);
        }
    }, [hash, pathname]);

    /* Reveal + scroll-spy */
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("[data-section='true']"));
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("in");
                    const id = entry.target.getAttribute("id");
                    if (entry.intersectionRatio > 0.5 && id) setActiveId(id);
                });
            },
            { rootMargin: "0px 0px -40% 0px", threshold: [0, 0.5, 1] }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    const toc = useMemo(
        () => SECTIONS.map(({ id, title, icon }) => ({ id, title, icon })),
        []
    );

    const copyLink = async (id) => {
        try {
            const url = `${window.location.origin}${window.location.pathname}#${id}`;
            await navigator.clipboard.writeText(url);
            setCopied(id);
            setTimeout(() => setCopied(""), 1200);
        } catch { }
    };

    const handlePrint = () => window.print();

    return (
        <Styled.Page aria-labelledby="pageTitle">
            <a ref={topRef} id="top" className="anchorTop" aria-hidden="true" />
            <Styled.Hero>
                <img
                    src={getImg("legal-unsolicited-prerna-collective-hero", 2400, 1200)}
                    alt=""
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                />
                <div className="overlay" />
                <div className="heroContent">
                    <div className="pill">
                        <TbShieldLock size={16} /> Legal
                    </div>
                    <h1 id="pageTitle">Unsolicited Submission Policy</h1>
                    <p className="sub">How we handle ideas and materials sent without a prior request.</p>
                    <div className="heroActions">
                        <NavLink to="/legal/terms" className="btn-primary">
                            <TbGavel size={16} /> Terms
                        </NavLink>
                        <NavLink to="/legal/privacy-policy" className="btn-ghost">
                            <TbShieldLock size={16} /> Privacy Policy
                        </NavLink>
                        <button type="button" className="iconBtn" onClick={handlePrint} title="Print / Save as PDF">
                            <TbPrinter size={18} />
                        </button>
                    </div>
                    <div className="metaRow">
                        <span className="chip"><TbFileText /> Last updated: Nov 12, 2025</span>
                        <NavLink to="/home" className="chip linky"><TbHome /> Home</NavLink>
                        <NavLink to="/contact" className="chip linky"><TbMail /> Contact</NavLink>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            <Styled.Layout>
                <aside className="toc" aria-label="On this page">
                    <div className="tocHead">On this page</div>
                    <ul>
                        {toc.map((t) => (
                            <li key={t.id}>
                                <a
                                    href={`#${t.id}`}
                                    className={`tocLink ${activeId === t.id ? "active" : ""}`}
                                    title={t.title}
                                >
                                    <span className="ico">{t.icon}</span>
                                    <span className="txt">{t.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tocFooter">
                        <button className="upBtn" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}>
                            <TbArrowUp /> Back to top
                        </button>
                    </div>
                </aside>

                <main className="content">
                    {SECTIONS.map((sec) => (
                        <section
                            key={sec.id}
                            id={sec.id}
                            data-section="true"
                            className="section"
                            tabIndex={-1}
                            aria-labelledby={`${sec.id}-h`}
                        >
                            <header className="secHeader">
                                <div className="ico">{sec.icon}</div>
                                <h2 id={`${sec.id}-h`}>{sec.title}</h2>
                                <div className="actions">
                                    <button
                                        className="iconBtn"
                                        onClick={() => copyLink(sec.id)}
                                        aria-label="Copy link to this section"
                                        title="Copy link"
                                    >
                                        {copied === sec.id ? <TbClipboardCheck size={18} /> : <TbLink size={18} />}
                                    </button>
                                </div>
                            </header>
                            <div className="secBody">{sec.body}</div>
                        </section>
                    ))}
                    <Styled.Divider />
                    <Styled.ChangeLog className="card">
                        <div className="head">
                            <h3><TbFileText /> Change Log</h3>
                        </div>
                        <ul>
                            <li>
                                <span className="date">Nov 12, 2025</span>
                                <span className="desc">Initial publication of the Unsolicited Submission Policy.</span>
                            </li>
                        </ul>
                    </Styled.ChangeLog>

                    <Styled.Related className="card">
                        <div className="head">
                            <h3><TbShieldLock /> Related Policies</h3>
                        </div>
                        <div className="links">
                            <NavLink to="/legal/terms" className="rel">
                                <TbGavel /> Terms &amp; Conditions
                            </NavLink>
                            <NavLink to="/legal/privacy-policy" className="rel">
                                <TbShieldLock /> Privacy Policy
                            </NavLink>
                            <NavLink to="/contact" className="rel">
                                <TbMail /> Contact
                            </NavLink>
                        </div>
                    </Styled.Related>
                </main>
            </Styled.Layout>
        </Styled.Page>
    );
}
