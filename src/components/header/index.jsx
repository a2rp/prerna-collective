// src/components/header/index.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { TbSunMoon } from "react-icons/tb";

const THEME_KEY = "prerna.theme";

/* Resolve initial theme: explicit → saved → system */
function getInitialTheme() {
    const explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch { }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
}

export default function Header() {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    /* persist + apply theme */
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch { }
    }, [theme]);

    const handleDisplayDrawer = useCallback(
        () => setDisplayDrawer((prev) => !prev),
        []
    );
    const closeDrawer = useCallback(() => setDisplayDrawer(false), []);
    const toggleTheme = useCallback(
        () => setTheme((t) => (t === "light" ? "dark" : "light")),
        []
    );

    /* Close drawer on Escape */
    useEffect(() => {
        if (!displayDrawer) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeDrawer();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [displayDrawer, closeDrawer]);

    return (
        <>
            <Styled.Wrapper>
                <Styled.Main>
                    <Styled.NameLogoWrapper>
                        <NavLink to="/home" aria-label="Go to home">
                            Prerna Collective
                        </NavLink>
                    </Styled.NameLogoWrapper>

                    <Styled.Col>
                        <Styled.ThemeToggleLink
                            onClick={toggleTheme}
                            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                            aria-label="Toggle theme"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === "Enter" ? toggleTheme() : null)}
                        >
                            <TbSunMoon size={20} />
                        </Styled.ThemeToggleLink>

                        <Styled.DrawerLinkWrapper
                            onClick={handleDisplayDrawer}
                            title="Menu"
                            aria-haspopup="dialog"
                            aria-expanded={displayDrawer}
                        >
                            <IoMenu size={20} />
                        </Styled.DrawerLinkWrapper>
                    </Styled.Col>
                </Styled.Main>
            </Styled.Wrapper>

            {displayDrawer && (
                <Styled.DrawerWrapper role="dialog" aria-label="Navigation drawer">
                    <div className="empty" onClick={closeDrawer} />
                    <div className="navlinksWrapper">
                        <div className="navlinksInner">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={"/home"}
                                            className={({ isActive }) => "navItem" + (isActive ? " active" : "")}
                                            onClick={closeDrawer}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Styled.DrawerWrapper>
            )}
        </>
    );
}


