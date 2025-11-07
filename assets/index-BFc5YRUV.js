import{d as a,j as r,N as i}from"./index-7b32lTvK.js";const e={Wrapper:a.div`
        display: flex;
        justify-content: center;
        background: var(--bg);
        color: var(--text);
    `,Main:a.main`
        position: relative;
        width: 100%;
        max-width: 1200px;
        padding: calc(var(--site-header-h) + 24px) 16px 80px;
        display: grid;
        gap: 28px;
    `,Hero:a.section`
        border-radius: var(--radius-lg);
        padding: 28px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);

        .hero__eyebrow {
            font-size: 12px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom: 10px;
            color: var(--text);
            opacity: 0.8;
        }

        .hero__title {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 12px;
            background: linear-gradient(
                0deg,
                transparent 0 88%,
                rgb(var(--primary-rgb) / 0.22) 88% 100%
            );
            display: inline;
        }

        .hero__dek {
            font-size: 14px;
            line-height: 1.8;
            max-width: 62ch;
            color: var(--text);
            opacity: 0.9;
        }

        @media (min-width: 768px) {
            padding: 36px;
            .hero__title {
                font-size: 36px;
            }
            .hero__dek {
                font-size: 15px;
            }
        }
    `,CTAs:a.div`
        display: flex;
        gap: 10px;
        margin: 18px 0 6px;

        .btn-primary,
        .btn-ghost {
            min-height: 40px;
            padding-inline: 16px;
            text-decoration: none;
        }
    `,MetaRow:a.div`
        display: flex;
        gap: 8px;
        margin-top: 10px;

        .chip {
            background: rgb(var(--primary-rgb) / 0.08);
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
        }
    `,Grid:a.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;

        @media (min-width: 700px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `,GridCard:a.article`
        padding: 18px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--card);
        display: grid;
        gap: 8px;

        h3 {
            font-size: 18px;
            line-height: 1.3;
        }

        p {
            font-size: 13px;
            line-height: 1.9;
            color: var(--text);
            opacity: 0.92;
        }

        .link {
            width: fit-content;
            color: var(--link);
            text-decoration: none;
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .link:hover {
            color: var(--link-hover);
            border-bottom-color: rgb(var(--primary-rgb) / 0.55);
            text-decoration: none;
        }
    `};function s(){return r.jsx(e.Wrapper,{children:r.jsxs(e.Main,{children:[r.jsxs(e.Hero,{className:"card brandish",children:[r.jsx("div",{className:"hero__eyebrow",children:"Prerna Collective"}),r.jsx("h1",{className:"hero__title",children:"Stories, capital, and programs for ideas that move people."}),r.jsx("p",{className:"hero__dek",children:"A frontend-only site—no backend. Content will load from simple JSON files. Clean routes, strong typography, and a blue-forward UI on pure black/white themes."}),r.jsxs(e.CTAs,{children:[r.jsx(i,{to:"/our-work",className:"btn-primary",children:"Explore Our Work"}),r.jsx(i,{to:"/articles",className:"btn-ghost",children:"Read Articles"})]}),r.jsxs(e.MetaRow,{children:[r.jsx("span",{className:"chip",children:"Frontend-only"}),r.jsx("span",{className:"chip",children:"JSON-driven"}),r.jsx("span",{className:"chip",children:"Responsive"})]})]}),r.jsxs(e.Grid,{children:[r.jsxs(e.GridCard,{className:"card",children:[r.jsx("h3",{children:"Philanthropy"}),r.jsx("p",{children:"Frictionless support for missions that matter—multi-year, general operating, focused on outcomes."}),r.jsx(i,{to:"/our-work/philanthropy",className:"link",children:"Learn more →"})]}),r.jsxs(e.GridCard,{className:"card",children:[r.jsx("h3",{children:"Venture Capital"}),r.jsx("p",{children:"Market-scale solutions in climate, health, education, and media. Filterable portfolio, client-side."}),r.jsx(i,{to:"/our-work/venture-capital",className:"link",children:"View portfolio →"})]}),r.jsxs(e.GridCard,{className:"card",children:[r.jsx("h3",{children:"Articles"}),r.jsx("p",{children:"Stories and interviews rendered from JSON/MDX. Clean slugs, good SEO, fast paint."}),r.jsx(i,{to:"/articles",className:"link",children:"Browse articles →"})]})]})]})})}export{s as default};
