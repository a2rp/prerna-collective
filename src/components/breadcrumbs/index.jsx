import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { TbHome, TbChevronRight } from "react-icons/tb";

/* Human titles for known slugs */
const TITLE_MAP = {
    home: "Home",
    "our-work": "Our Work",
    philanthropy: "Philanthropy",
    "venture-capital": "Venture Capital",
    fellowships: "Fellowships",
    collective: "Collective",
    careers: "Careers",
    contact: "Contact",
    "positive-sum": "Positive Sum",
    internships: "Internships",
    "demo-day": "Demo Day",
    legal: "Legal",
    terms: "Terms & Conditions",
    "privacy-policy": "Privacy Policy",
    "unsolicited-submission-policy": "Unsolicited Submission Policy",
};

/* Fallback: "nice case" for any slug */
function toTitle(slug) {
    const s = decodeURIComponent(slug || "").trim();
    if (!s) return "";
    if (TITLE_MAP[s]) return TITLE_MAP[s];
    return s
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

/* Build cumulative crumbs from a pathname */
function buildCrumbs(pathname) {
    const segs = pathname.split("/").filter(Boolean);
    const crumbs = [];
    let acc = "";
    for (let i = 0; i < segs.length; i++) {
        acc += `/${segs[i]}`;
        crumbs.push({
            label: toTitle(segs[i]),
            path: acc,
            isLast: i === segs.length - 1,
        });
    }
    return crumbs;
}

export default function Breadcrumbs({
    /* Hide on these paths (exact match). Defaults: / and /home */
    exclude = ["/", "/home"],
    /* Hide when there is only one segment (like /collective)? default false */
    hideIfSingle = false,
}) {
    const { pathname } = useLocation();

    const model = useMemo(() => {
        if (exclude.includes(pathname)) return null;
        const crumbs = buildCrumbs(pathname);
        if (hideIfSingle && crumbs.length <= 1) return null;
        return crumbs;
    }, [pathname, exclude, hideIfSingle]);

    if (!model || model.length === 0) return null;

    return (
        <Styled.Wrap aria-label="Breadcrumb" role="navigation">
            <ol>
                <li className="crumb">
                    <NavLink to="/home" className="homeLink" aria-label="Home">
                        <TbHome size={16} />
                        <span className="vis">Home</span>
                    </NavLink>
                </li>

                {model.map((c) => (
                    <li className="sep" key={`${c.path}-sep`}>
                        <TbChevronRight size={14} aria-hidden />
                    </li>
                ) && null)}

                {model.map((c, idx) => (
                    <React.Fragment key={c.path}>
                        <li className="sep">
                            <TbChevronRight size={14} aria-hidden />
                        </li>
                        <li className="crumb">
                            {c.isLast ? (
                                <span className="current" aria-current="page" title={c.label}>
                                    {c.label}
                                </span>
                            ) : (
                                <NavLink to={c.path} className="link" title={c.label}>
                                    {c.label}
                                </NavLink>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </Styled.Wrap>
    );
}
