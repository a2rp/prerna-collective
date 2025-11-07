// src/components/footer/index.jsx
import React from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";

function scrollAppToTop() {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const el = document.querySelector("#root > *"); // your scrolling Wrapper
    const behavior = prefersReduced ? "auto" : "smooth";
    if (el?.scrollTo) el.scrollTo({ top: 0, behavior });
    else window.scrollTo({ top: 0, behavior });
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper role="contentinfo">
            <Styled.Bar>
                <div className="left">
                    <span>© {year} Prerna Collective</span>
                </div>

                <div className="right">
                    <NavLink to="/terms" className="small">Terms</NavLink>
                    <span className="dot" aria-hidden="true">•</span>
                    <NavLink to="/privacy" className="small">Privacy</NavLink>
                    <button
                        type="button"
                        className="top"
                        onClick={scrollAppToTop}
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        Back to top
                    </button>
                </div>
            </Styled.Bar>
        </Styled.Wrapper>
    );
}
