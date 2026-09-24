import { useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiCoffee, FiHeart, FiMail } from "react-icons/fi";
import {
    TbBrandCodepen,
    TbBrandFacebook,
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandPatreon,
    TbBrandYoutube,
    TbWorld,
} from "react-icons/tb";
import { TbArrowUp } from "react-icons/tb";
import { Styled } from "./styled";

const EXTERNAL_LINKS = [
    { href: "https://www.ashishranjan.net/", label: "Portfolio", icon: <TbWorld size={18} /> },
    { href: "https://github.com/a2rp", label: "GitHub", icon: <TbBrandGithub size={18} /> },
    { href: "https://codepen.io/ash1198", label: "CodePen", icon: <TbBrandCodepen size={18} /> },
    { href: "https://www.linkedin.com/in/aashishranjan", label: "LinkedIn", icon: <TbBrandLinkedin size={18} /> },
    { href: "https://www.facebook.com/theash.ashish/", label: "Facebook", icon: <TbBrandFacebook size={18} /> },
    { href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", label: "YouTube", icon: <TbBrandYoutube size={18} /> },
    { href: "mailto:ash.ranjan09@gmail.com", label: "Email", icon: <FiMail size={18} /> },
];

const SUPPORT_LINKS = [
    { href: "https://a2rp-donation-page.netlify.app/", label: "Support", icon: <FiHeart size={18} /> },
    { href: "https://buymeacoffee.com/a2rp", label: "Buy Me a Coffee", icon: <FiCoffee size={18} /> },
    { href: "https://patreon.com/a2rp", label: "Patreon", icon: <TbBrandPatreon size={18} /> },
];

const FOOTER_COLUMNS = [
    {
        title: "Explore",
        links: [
            ["/our-work", "Our Work"],
            ["/our-work/philanthropy", "Philanthropy"],
            ["/our-work/venture-capital", "Venture Capital"],
            ["/our-work/fellowships", "Fellowships"],
            ["/collective", "Collective"],
            ["/positive-sum", "Positive Sum"],
        ],
    },
    {
        title: "Programs",
        links: [
            ["/internships", "Internships"],
            ["/demo-day", "Demo Day"],
            ["/careers", "Careers"],
            ["/contact", "Contact"],
        ],
    },
    {
        title: "Legal",
        links: [
            ["/legal/terms", "Terms & Conditions"],
            ["/legal/privacy-policy", "Privacy Policy"],
            ["/legal/unsolicited-submission-policy", "Submission Policy"],
        ],
    },
];

export default function Footer() {
    const rootRef = useRef(null);
    const year = new Date().getFullYear();

    const scrollParent = useCallback((node) => {
        let element = node?.parentElement;
        while (element) {
            const style = getComputedStyle(element);
            if (/(auto|scroll)/.test(style.overflowY) && element.scrollHeight > element.clientHeight) return element;
            element = element.parentElement;
        }
        return null;
    }, []);

    const toTop = useCallback(() => {
        scrollParent(rootRef.current)?.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [scrollParent]);

    return (
        <Styled.Wrap ref={rootRef}>
            <Styled.Inner className="card">
                <div className="brandArea" role="navigation" aria-label="Footer brand and socials">
                    <NavLink to="/home" className="brandLink" aria-label="Go to Home">
                        <img src="/prerna-collective/logo.png" alt="Prerna Collective logo" className="brandImg" loading="lazy" decoding="async" />
                        <div className="brandText">
                            <div className="title">Prerna Collective</div>
                            <div className="tagline">Mission-first, evidence-led.</div>
                        </div>
                    </NavLink>

                    <div className="socials" aria-label="Social links">
                        {EXTERNAL_LINKS.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="iconBtn" aria-label={link.label} title={link.label}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="cols">
                    {FOOTER_COLUMNS.map((column) => (
                        <div className="col" key={column.title}>
                            <div className="colTitle">{column.title}</div>
                            <ul>
                                {column.links.map(([to, label]) => (
                                    <li key={to}>
                                        <NavLink to={to} className="fLink">{label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="col">
                        <div className="colTitle">Support</div>
                        <div className="supportIcons">
                            {SUPPORT_LINKS.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="iconBtn" aria-label={link.label} title={link.label}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="copy">
                        Copyright {"©"} {year}{" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
                    </div>
                    <button className="iconBtn toTop" type="button" title="Back to top" aria-label="Back to top" onClick={toTop}>
                        <TbArrowUp size={18} />
                    </button>
                </div>
            </Styled.Inner>
        </Styled.Wrap>
    );
}
