// src/pages/notFound/index.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    TbError404,
    TbHome2,
    TbMail,
    TbArrowLeft,
} from "react-icons/tb";

export default function NotFound() {
    const location = useLocation();

    return (
        <Styled.Wrapper>
            <Styled.Card className="card brandish">
                <div className="iconWrap" aria-hidden="true">
                    <TbError404 size={64} />
                </div>

                <h1>Page not found</h1>
                <p className="sub">
                    We couldn’t find <code>{location.pathname}</code>. It may have been moved or never existed.
                </p>

                {/* Action row */}
                <div className="actions">
                    <NavLink to="/home" className="btn-primary" aria-label="Go to Home">
                        <TbHome2 size={18} style={{ marginRight: 8 }} />
                        Home
                    </NavLink>

                    <NavLink to="/" className="btn-ghost" aria-label="Back to previous section">
                        <TbArrowLeft size={18} style={{ marginRight: 8 }} />
                        Back
                    </NavLink>

                    <NavLink to="/contact" className="btn-ghost" aria-label="Contact support">
                        <TbMail size={18} style={{ marginRight: 8 }} />
                        Contact
                    </NavLink>
                </div>

                {/* Optional hint / tips block */}
                <div className="hint">
                    Try checking the URL for typos, or use the menu to navigate to a different section.
                </div>
            </Styled.Card>
        </Styled.Wrapper>
    );
}
