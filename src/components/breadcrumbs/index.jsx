import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { navByPath } from "../../nav/navLinks";

function titleCase(s) {
    return s.replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

function buildTrail(pathname) {
    // Normalize & split the path into cumulative segments: /a/b → ["/a", "/a/b"]
    const clean = pathname.replace(/\/+$/, "") || "/";
    if (clean === "/") return [{ path: "/home", label: "Home" }]; // default to Home

    const parts = clean.split("/").filter(Boolean);
    const cumul = [];
    let cur = "";
    for (const p of parts) {
        cur += `/${p}`;
        cumul.push(cur);
    }

    // Try registry; fallback to segment title
    const crumbs = cumul.map((p, i) => {
        const node = navByPath[p];
        if (node) return { path: p, label: node.label };
        const seg = parts[i];
        return { path: p, label: titleCase(seg) };
    });

    // Always start with Home (avoid dupes)
    const hasHome = crumbs.length && crumbs[0].path === "/home";
    return hasHome ? crumbs : [{ path: "/home", label: "Home" }, ...crumbs];
}

export default function Breadcrumbs() {
    const { pathname } = useLocation();

    const trail = useMemo(() => {
        // If registry defines explicit parents, honor them:
        // Walk up parents from deepest known node, else fall back to path split.
        const exact = navByPath[pathname];
        if (exact) {
            const chain = [];
            let n = exact;
            while (n) {
                chain.unshift({ path: n.path, label: n.label });
                n = n.parent ? navByPath[n.parent] : null;
            }
            // Ensure Home at start
            if (!chain.length || chain[0].path !== "/home") {
                chain.unshift({ path: "/home", label: "Home" });
            }
            return chain;
        }
        return buildTrail(pathname);
    }, [pathname]);

    const last = trail.length - 1;

    return (
        <Styled.Wrapper aria-label="breadcrumb">
            <nav>
                <ol>
                    {trail.map((c, i) => (
                        <li key={c.path}>
                            {i === last ? (
                                <span className="current" aria-current="page">{c.label}</span>
                            ) : (
                                <NavLink to={c.path} className="crumb">
                                    {c.label}
                                </NavLink>
                            )}
                            {i !== last && <span className="sep" aria-hidden="true">›</span>}
                        </li>
                    ))}
                </ol>
            </nav>
        </Styled.Wrapper>
    );
}
