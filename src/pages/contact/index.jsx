import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbMail,
    TbBrandLinkedin,
    TbBrandTwitter,   // ✅ use this instead of TbBrandX for older versions
    TbBrandYoutube,
    TbBrandGithub,
    TbPhone,
    TbMapPin,
    TbNews,
    TbUsersGroup,
    TbBriefcase,
    TbIdBadge2,
    TbHelpCircle,
    TbMessageCircle,  // ✅ use this instead of TbMessageCircle2
    TbShieldCheck,
    TbArrowRight,
    TbCheck,
    TbLoader2,
    TbWorld,
    TbCalendarEvent,
} from "react-icons/tb";
import Breadcrumbs from "../../components/breadcrumbs";


/* deterministic image helper (same pattern as home) */
function img(seed, w = 1600, h = 900) {
    const s = encodeURIComponent(seed);
    return `https://picsum.photos/seed/${s}/${w}/${h}`;
}

/* simple email masks (so you can swap to real later easily) */
const MAIL = {
    general: "hello@prerna.org",
    media: "press@prerna.org",
    partnerships: "partners@prerna.org",
    internships: "internships@prerna.org",
    careers: "careers@prerna.org",
};

export default function Contact() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 900);
        return () => clearTimeout(t);
    }, []);

    const methods = useMemo(
        () => [
            {
                key: "general",
                title: "General",
                blurb: "Questions, ideas, or notes for the team.",
                icon: <TbMessageCircle size={20} />,
                email: MAIL.general,
                to: "/collective",
                cta: "About us",
                seed: "contact-general",
            },
            {
                key: "media",
                title: "Media",
                blurb: "Press inquiries, interviews, and speaking.",
                icon: <TbNews size={20} />,
                email: MAIL.media,
                to: "/positive-sum",
                cta: "Read stories",
                seed: "contact-media",
            },
            {
                key: "partnerships",
                title: "Partnerships",
                blurb: "Philanthropy, venture, and ecosystem partners.",
                icon: <TbUsersGroup size={20} />,
                email: MAIL.partnerships,
                to: "/our-work",
                cta: "Explore our work",
                seed: "contact-partners",
            },
            {
                key: "careers",
                title: "Careers",
                blurb: "Open roles and how we hire.",
                icon: <TbBriefcase size={20} />,
                email: MAIL.careers,
                to: "/careers",
                cta: "View careers",
                seed: "contact-careers",
            },
            {
                key: "internships",
                title: "Internships",
                blurb: "Programs, eligibility, and timelines.",
                icon: <TbIdBadge2 size={20} />,
                email: MAIL.internships,
                to: "/internships",
                cta: "Internships hub",
                seed: "contact-internships",
            },
            {
                key: "events",
                title: "Events",
                blurb: "Demo Day and community gatherings.",
                icon: <TbCalendarEvent size={20} />,
                email: MAIL.general,
                to: "/demo-day",
                cta: "Demo Day",
                seed: "contact-events",
            },
        ],
        []
    );

    return (
        <Styled.Page>
            {/* ───────────── Hero ───────────── */}
            <Styled.Hero ref={heroRef}>
                <div className="bg" aria-hidden="true">
                    <img
                        src={img("contact-hero-constellation", 2400, 1400)}
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
                        We read every message
                    </div>
                    <h1>
                        Contact <span className="accent">Prerna Collective</span>
                    </h1>
                    <p className="sub">
                        Reach the right team quickly. For opportunities, partnerships, and media—use the
                        dedicated channels below so we can route you fast.
                    </p>
                    <div className="socials" aria-label="Social links">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social">
                            <TbBrandLinkedin size={18} />
                            LinkedIn
                        </a>
                        <a href="https://x.com" target="_blank" rel="noreferrer" className="social">
                            <TbBrandTwitter size={18} />
                            X
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="social">
                            <TbBrandYoutube size={18} />
                            YouTube
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="social">
                            <TbBrandGithub size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </Styled.Hero>

            <Breadcrumbs
                exclude={["/", "/home"]}  // hide on home
                hideIfSingle={false}      // set true if you want to hide when single segment
            />

            {/* ───────────── Methods Grid ───────────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>Talk to the right team</h2>
                    <p className="secSub">Pick a lane so we can help you faster.</p>
                </header>

                <Styled.MethodGrid>
                    {methods.map((m) => (
                        <div className="card" key={m.key}>
                            <div className="media">
                                <img src={img(m.seed, 1200, 800)} alt="" loading="lazy" decoding="async" />
                                <div className="overlay" />
                            </div>
                            <div className="meta">
                                <div className="icon">{m.icon}</div>
                                <div className="txt">
                                    <div className="title">{m.title}</div>
                                    <div className="blurb">{m.blurb}</div>
                                    <div className="links">
                                        <a className="email" href={`mailto:${m.email}`}>
                                            <TbMail size={16} />
                                            {m.email}
                                        </a>
                                        <NavLink className="inline" to={m.to}>
                                            {m.cta}
                                            <TbArrowRight size={16} />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Styled.MethodGrid>
            </Styled.Section>

            {/* ───────────── Contact Form ───────────── */}
            <ContactForm />

            {/* ───────────── Offices / Map strip ───────────── */}
            <Styled.Section className="brand">
                <header className="secHeader">
                    <h2>Where we work</h2>
                    <p className="secSub">Distributed by design, anchored in community.</p>
                </header>

                <Styled.Offices>
                    <div className="mapCard">
                        <div className="mapHeader">
                            <TbWorld size={18} />
                            Global presence
                        </div>
                        <div className="map">
                            {/* Decorative SVG map-ish grid (no external API) */}
                            <svg viewBox="0 0 600 200" aria-hidden="true">
                                <defs>
                                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0" stopColor="var(--link)" />
                                        <stop offset="1" stopColor="var(--primary)" />
                                    </linearGradient>
                                </defs>
                                <rect x="0" y="0" width="600" height="200" fill="rgb(var(--primary-rgb)/0.07)" />
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <circle key={i} cx={10 + i * 20} cy={100 + Math.sin(i / 2) * 16} r="2.2" fill="url(#g)" />
                                ))}
                            </svg>
                        </div>
                        <div className="legend">
                            <span className="dot" /> Active hubs
                        </div>
                    </div>

                    <div className="officeList">
                        <div className="office">
                            <div className="ico"><TbMapPin size={16} /></div>
                            <div className="place">
                                <div className="city">Bengaluru (IN)</div>
                                <div className="addr">Indiranagar / HSR • Hybrid</div>
                            </div>
                            <a className="phone" href="tel:+910000000000">
                                <TbPhone size={16} /> +91 00000 00000
                            </a>
                        </div>
                        <div className="office">
                            <div className="ico"><TbMapPin size={16} /></div>
                            <div className="place">
                                <div className="city">Mumbai (IN)</div>
                                <div className="addr">BKC • Partnerships</div>
                            </div>
                            <a className="phone" href="tel:+910000000000">
                                <TbPhone size={16} /> +91 00000 00000
                            </a>
                        </div>
                        <div className="office">
                            <div className="ico"><TbMapPin size={16} /></div>
                            <div className="place">
                                <div className="city">San Francisco (US)</div>
                                <div className="addr">SoMa • Venture</div>
                            </div>
                            <a className="phone" href="tel:+10000000000">
                                <TbPhone size={16} /> +1 000 000 0000
                            </a>
                        </div>
                    </div>
                </Styled.Offices>
            </Styled.Section>

            {/* ───────────── FAQ ───────────── */}
            <Styled.Section>
                <header className="secHeader">
                    <h2>FAQ</h2>
                    <p className="secSub">Quick answers to common questions.</p>
                </header>
                <FAQ />
            </Styled.Section>

            {/* ───────────── CTA ───────────── */}
            <Styled.CTA className="card brandish">
                <h3>Prefer email?</h3>
                <p>Write to <a href={`mailto:${MAIL.general}`}>{MAIL.general}</a> and we’ll route it.</p>
                <div className="actions">
                    <NavLink to="/internships" className="btn-ghost" aria-label="Internships">
                        Internships
                    </NavLink>
                    <NavLink to="/careers" className="btn-primary" aria-label="Careers">
                        Careers <TbArrowRight size={18} />
                    </NavLink>
                </div>
            </Styled.CTA>
        </Styled.Page>
    );
}

/* ───────────────────────────── Subcomponents ───────────────────────────── */

function ContactForm() {
    const [busy, setBusy] = useState(false);
    const [done, setDone] = useState(false);
    const [err, setErr] = useState("");
    const formRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        setErr("");
        const fd = new FormData(formRef.current);
        const name = fd.get("name")?.trim();
        const email = fd.get("email")?.trim();
        const topic = fd.get("topic")?.trim();
        const message = fd.get("message")?.trim();

        if (!name || !email || !message) {
            setErr("Please fill name, email, and message.");
            return;
        }
        // simple email check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErr("Please provide a valid email address.");
            return;
        }

        setBusy(true);
        // Simulate a request
        setTimeout(() => {
            setBusy(false);
            setDone(true);
            try {
                formRef.current?.reset();
            } catch { }
        }, 900);
    }

    return (
        <Styled.Section id="contact-form">
            <header className="secHeader">
                <h2>Write to us</h2>
                <p className="secSub">We usually respond within 2–3 working days.</p>
            </header>

            <Styled.FormWrapper>
                <div className="visual">
                    <img
                        src={img("contact-desk-collab", 1400, 1200)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="orb" aria-hidden="true" />
                </div>

                <form ref={formRef} onSubmit={onSubmit} noValidate>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="name">Your name</label>
                            <input id="name" name="name" type="text" placeholder="Jane Doe" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="jane@example.com" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="field">
                            <label htmlFor="topic">Topic</label>
                            <select id="topic" name="topic" defaultValue="General">
                                <option>General</option>
                                <option>Media</option>
                                <option>Partnerships</option>
                                <option>Careers</option>
                                <option>Internships</option>
                                <option>Events</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Phone (optional)</label>
                            <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={6} placeholder="Tell us a bit about your goal..." />
                    </div>

                    {err && <div className="error" role="alert"><TbHelpCircle size={16} /> {err}</div>}

                    <div className="actions">
                        <button className="btn-primary" type="submit" disabled={busy}>
                            {busy ? <><TbLoader2 className="spin" size={18} /> Sending…</> : <>Send message <TbArrowRight size={18} /></>}
                        </button>
                        {done && (
                            <div className="success" aria-live="polite">
                                <TbCheck size={16} /> Sent. We’ll get back soon.
                            </div>
                        )}
                    </div>

                    <div className="hint">
                        Prefer direct email? <a href={`mailto:${MAIL.general}`}>{MAIL.general}</a>
                    </div>
                </form>
            </Styled.FormWrapper>
        </Styled.Section>
    );
}

function FAQ() {
    const items = useMemo(
        () => [
            {
                q: "How do I pitch a partnership?",
                a: "Use the Partnerships card above to email a brief (problem, approach, why now). If relevant to philanthropy or venture, we’ll route internally.",
            },
            {
                q: "Do you fund students or early career fellows?",
                a: "Yes—see Internships. For independent fellows, check Fellowships under Our Work to view typical tracks and cycles.",
            },
            {
                q: "Can I request a speaker for an event?",
                a: "Email Media with your date, audience size, topic, and preferred format (keynote, panel, fireside).",
            },
            {
                q: "What is your typical response time?",
                a: "Most inquiries get a response within 2–3 working days. Time-sensitive press requests are prioritized.",
            },
            {
                q: "Where can I find updates and stories?",
                a: "Browse Positive Sum for essays, founder stories, and annual notes.",
            },
        ],
        []
    );

    const [open, setOpen] = useState(0);

    return (
        <Styled.FAQ>
            {items.map((it, i) => {
                const expanded = i === open;
                return (
                    <div key={i} className={"item" + (expanded ? " open" : "")}>
                        <button
                            className="q"
                            aria-expanded={expanded}
                            onClick={() => setOpen(expanded ? -1 : i)}
                        >
                            <TbHelpCircle size={18} />
                            {it.q}
                        </button>
                        <div className="a" role="region">
                            <p>{it.a}</p>
                            <div className="links">
                                <NavLink to="/our-work">Our Work</NavLink>
                                <NavLink to="/positive-sum">Positive Sum</NavLink>
                                <NavLink to="/internships">Internships</NavLink>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Styled.FAQ>
    );
}
