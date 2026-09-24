import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Styled } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import {
    TbSunMoon,
    TbHome,
    TbBriefcase2,
    TbHeartHandshake,
    TbBuildingSkyscraper,
    TbCertificate,
    TbUsersGroup,
    TbBook2,
    TbIdBadge2,
    TbCalendarEvent,
    TbBriefcase,
    TbMail,
    TbGavel,
    TbShieldLock,
    TbFileDescription,
} from "react-icons/tb";

const THEME_KEY = "prerna.theme";

function getInitialTheme() {
    const explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // Keep the default theme when browser storage is unavailable.
    }
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

export default function Header() {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);
    const location = useLocation();
    const navInnerRef = useRef(null);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // Theme still works for the current page when storage is unavailable.
        }
    }, [theme]);

    useEffect(() => {
        document.body.style.overflow = displayDrawer ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [displayDrawer]);

    const closeDrawer = useCallback(() => setDisplayDrawer(false), []);
    const toggleTheme = useCallback(() => setTheme((current) => (current === "light" ? "dark" : "light")), []);

    useEffect(() => {
        if (!displayDrawer) return undefined;
        const onKey = (event) => {
            if (event.key === "Escape") closeDrawer();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [displayDrawer, closeDrawer]);

    useEffect(() => {
        if (!displayDrawer) return;
        const active = navInnerRef.current?.querySelector(".navItem.active");
        active?.scrollIntoView?.({ block: "center", inline: "nearest", behavior: "smooth" });
    }, [displayDrawer, location.pathname]);

    const MAIN_LINKS = useMemo(
        () => [
            { to: "/home", label: "Home", icon: <TbHome size={18} />, end: true },
            { to: "/our-work", label: "Our Work", icon: <TbBriefcase2 size={18} />, end: true },
            { to: "/our-work/philanthropy", label: "Philanthropy", icon: <TbHeartHandshake size={18} />, end: true },
            { to: "/our-work/venture-capital", label: "Venture Capital", icon: <TbBuildingSkyscraper size={18} />, end: true },
            { to: "/our-work/fellowships", label: "Fellowships", icon: <TbCertificate size={18} />, end: true },
            { to: "/collective", label: "Collective", icon: <TbUsersGroup size={18} />, end: true },
            { to: "/positive-sum", label: "Positive Sum", icon: <TbBook2 size={18} />, end: true },
            { to: "/internships", label: "Internships", icon: <TbIdBadge2 size={18} />, end: true },
            { to: "/demo-day", label: "Demo Day", icon: <TbCalendarEvent size={18} />, end: true },
            { to: "/careers", label: "Careers", icon: <TbBriefcase size={18} />, end: true },
            { to: "/contact", label: "Contact", icon: <TbMail size={18} />, end: true },
        ],
        []
    );

    const LEGAL_LINKS = useMemo(
        () => [
            { to: "/legal/terms", label: "Terms & Conditions", icon: <TbGavel size={18} />, end: true },
            { to: "/legal/privacy-policy", label: "Privacy Policy", icon: <TbShieldLock size={18} />, end: true },
            { to: "/legal/unsolicited-submission-policy", label: "Unsolicited Submission Policy", icon: <TbFileDescription size={18} />, end: true },
        ],
        []
    );

    return (
        <>
            <Styled.Wrapper>
                <Styled.Main>
                    <Styled.NameLogoWrapper>
                        <NavLink to="/home" aria-label="Go to home" className="brandLink">
                            <span className="logo">
                                <img src="/prerna-collective/logo.png" alt="Prerna Collective logo" />
                            </span>
                            <span className="brand">
                                <span className="title">Prerna Collective</span>
                                <span className="tag">Mission-first, evidence-led.</span>
                            </span>
                        </NavLink>
                    </Styled.NameLogoWrapper>

                    <Styled.Col>
                        <Styled.ThemeToggleButton
                            type="button"
                            onClick={toggleTheme}
                            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                            aria-label="Toggle theme"
                        >
                            <TbSunMoon size={20} />
                        </Styled.ThemeToggleButton>
                        <Styled.DrawerButton
                            type="button"
                            onClick={() => setDisplayDrawer((current) => !current)}
                            title={displayDrawer ? "Close menu" : "Open menu"}
                            aria-label={displayDrawer ? "Close navigation menu" : "Open navigation menu"}
                            aria-haspopup="dialog"
                            aria-expanded={displayDrawer}
                        >
                            {displayDrawer ? <IoClose size={22} /> : <IoMenu size={22} />}
                        </Styled.DrawerButton>
                    </Styled.Col>
                </Styled.Main>
            </Styled.Wrapper>

            {displayDrawer && (
                <Styled.DrawerWrapper role="dialog" aria-label="Navigation drawer">
                    <button type="button" className="empty" onClick={closeDrawer} aria-label="Close navigation drawer" />
                    <div className="navlinksWrapper">
                        <div className="navlinksInner" ref={navInnerRef}>
                            <nav aria-label="Primary">
                                <div className="sectionLabel">Browse</div>
                                <ul>
                                    {MAIN_LINKS.map((link) => (
                                        <li key={link.to}>
                                            <NavLink
                                                to={link.to}
                                                end={link.end}
                                                className={({ isActive }) => "navItem" + (isActive ? " active" : "")}
                                                onClick={closeDrawer}
                                            >
                                                <span className="ico">{link.icon}</span>
                                                <span className="txt">{link.label}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <nav aria-label="Legal" className="legalBlock">
                                <div className="sectionLabel">Legal</div>
                                <ul>
                                    {LEGAL_LINKS.map((link) => (
                                        <li key={link.to}>
                                            <NavLink
                                                to={link.to}
                                                end={link.end}
                                                className={({ isActive }) => "navItem" + (isActive ? " active" : "")}
                                                onClick={closeDrawer}
                                            >
                                                <span className="ico">{link.icon}</span>
                                                <span className="txt">{link.label}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Styled.DrawerWrapper>
            )}
        </>
    );
}
