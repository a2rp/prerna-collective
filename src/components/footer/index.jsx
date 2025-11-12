import React, { useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbArrowUp,
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandYoutube,
    TbBrandFacebook,
} from "react-icons/tb";

/* External profiles */
const LINKS_EXTERNAL = [
    { href: "https://github.com/a2rp", label: "GitHub", icon: <TbBrandGithub size={18} /> },
    { href: "https://www.linkedin.com/in/aashishranjan", label: "LinkedIn", icon: <TbBrandLinkedin size={18} /> },
    { href: "https://www.youtube.com/@ashishranjan-ashz", label: "YouTube", icon: <TbBrandYoutube size={18} /> },
    { href: "https://www.facebook.com/theash.ashish/", label: "Facebook", icon: <TbBrandFacebook size={18} /> },
];

/* Internal site map */
const COL_EXPLORE = [
    { to: "/our-work", label: "Our Work" },
    { to: "/our-work/philanthropy", label: "Philanthropy" },
    { to: "/our-work/venture-capital", label: "Venture Capital" },
    { to: "/our-work/fellowships", label: "Fellowships" },
    { to: "/collective", label: "Collective" },
    { to: "/positive-sum", label: "Positive Sum" },
];
const COL_PROGRAMS = [
    { to: "/internships", label: "Internships" },
    { to: "/demo-day", label: "Demo Day" },
];
const COL_COMPANY = [
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
];
const COL_LEGAL = [
    { to: "/legal/terms", label: "Terms & Conditions" },
    { to: "/legal/privacy-policy", label: "Privacy Policy" },
    { to: "/legal/unsolicited-submission-policy", label: "Submission Policy" },
];

export default function Footer() {
    const rootRef = useRef(null);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        el.classList.add("mount");
        const t = setTimeout(() => el.classList.remove("mount"), 900);
        return () => clearTimeout(t);
    }, []);

    const scrollParent = useCallback((node) => {
        let el = node?.parentElement;
        while (el) {
            const style = getComputedStyle(el);
            const canScroll =
                /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;
            if (canScroll) return el;
            el = el.parentElement;
        }
        return null;
    }, []);

    const toTop = useCallback(() => {
        const parent = scrollParent(rootRef.current);
        parent?.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [scrollParent]);

    const year = new Date().getFullYear();

    return (
        <Styled.Wrap ref={rootRef}>
            <Styled.Inner className="card brandish">
                {/* Brand row */}
                <div className="brandArea" role="navigation" aria-label="Footer brand and socials">
                    <NavLink to="/home" className="brandLink" aria-label="Go to Home">
                        <img
                            src="https://picsum.photos/seed/prerna-logo/96/96"
                            alt=""
                            className="brandImg"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="brandText">
                            <div className="title">Prerna Collective</div>
                            <div className="tagline">Mission-first, evidence-led.</div>
                        </div>
                    </NavLink>

                    <div className="socials" aria-label="Social links">
                        {LINKS_EXTERNAL.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="iconBtn"
                                aria-label={l.label}
                                title={l.label}
                            >
                                {l.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Columns */}
                <div className="cols">
                    <div className="col">
                        <div className="colTitle">Explore</div>
                        <ul>
                            {COL_EXPLORE.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} className="fLink">
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col">
                        <div className="colTitle">Programs</div>
                        <ul>
                            {COL_PROGRAMS.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} className="fLink">
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col">
                        <div className="colTitle">Company</div>
                        <ul>
                            {COL_COMPANY.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} className="fLink">
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col">
                        <div className="colTitle">Legal</div>
                        <ul>
                            {COL_LEGAL.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} className="fLink">
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="bottom">
                    <div className="copy">© {year} Prerna Collective</div>

                    <div className="rightCluster">
                        <div className="built">
                            Built by{" "}
                            <a href="https://www.ashishranjan.net" target="_blank" rel="noreferrer">
                                Ashish Ranjan
                            </a>
                        </div>

                        <button
                            className="iconBtn toTop"
                            title="Back to top"
                            aria-label="Back to top"
                            onClick={toTop}
                        >
                            <TbArrowUp size={18} />
                        </button>
                    </div>
                </div>
            </Styled.Inner>
        </Styled.Wrap>
    );
}
