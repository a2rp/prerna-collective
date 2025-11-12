import{d as a,m as x,r as n,j as e,g,N as d,a as h,G as u,H as b,e as v,h as f,T as j,k as w}from"./index-f_zt6Rys.js";import{B as y}from"./index-ekvE1CPL.js";const N=x`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,k=x`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`,r={Page:a.main`
        /* border: 1px solid #f00; */
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,Hero:a.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;

        .bg {
            position: absolute;
            inset: 0;
            z-index: -1;
            filter: saturate(1.05) contrast(1.05);
        }
        .bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
        }
        .bg .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    1200px 400px at 20% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.12),
                    transparent 50%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 42px;
            display: grid;
            gap: 12px;
            animation: ${N} 0.6s ease both;
        }

        .eyebrow {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }

        h1 {
            font-size: 36px;
            line-height: 1.15;
            letter-spacing: 0.2px;
            background: linear-gradient(
                0deg,
                transparent 0 86%,
                rgb(var(--primary-rgb) / 0.18) 86% 100%
            );
            display: inline;
            padding-bottom: 2px;
        }

        .sub {
            max-width: 860px;
            color: var(--text-muted);
            margin-top: 8px;
            margin-bottom: 14px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            a {
                text-decoration: none;
                line-height: 1;
                min-height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }

        &.mount .eyebrow {
            animation: ${k} 3.2s ease-in-out infinite;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 28px;
            }
        }
    `,Thesis:a.section`
        max-width: 1200px;
        margin: var(--space-8) auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);

        .tile {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 12px;
            display: grid;
            gap: 6px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .tile:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .tile .ico {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--card);
            box-shadow: var(--shadow-sm);
            color: var(--text);
        }
        .tile p {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Section:a.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);
        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
    `,PortfolioGrid:a.div`
        display: grid;
        gap: 14px;

        .row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
        }

        .card {
            display: grid;
            grid-template-rows: 160px auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .media {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
            overflow: hidden;
        }
        .media img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
            transform: scale(1.06);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 /0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            backdrop-filter: blur(2px);
        }

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 12px;
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .iconBtn {
            width: 32px;
            height: 32px;
        }

        @media (max-width: 1080px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }
            .card {
                grid-template-rows: 200px auto;
            }
            .media img {
                height: 200px;
            }
        }
    `,Callouts:a.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .call {
            padding: var(--space-6);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .call h3 {
            font-size: 18px;
            margin-bottom: 8px;
        }
        .call ul {
            padding-left: 18px;
        }
        .call li {
            margin: 6px 0;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,CTA:a.section`
        max-width: 960px;
        margin: var(--space-8) auto;
        padding: var(--space-8);
        text-align: center;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);

        h3 {
            font-size: 22px;
            margin-bottom: 8px;
        }
        p {
            color: var(--text-muted);
            margin-bottom: var(--space-4);
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            a {
                text-decoration: none;
                line-height: 1;
                min-height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }
    `};function i(t,l=1600,c=900){return`https://picsum.photos/seed/${encodeURIComponent(t)}/${l}/${c}`}const m=[{name:"Galactic Labs",tag:"Climate",img:i("vc-galactic-labs")},{name:"NeuVeda",tag:"Health",img:i("vc-neuveda")},{name:"FieldAI",tag:"AgriTech",img:i("vc-field-ai")},{name:"Auric Grid",tag:"Energy",img:i("vc-auric-grid")},{name:"CivicOS",tag:"GovTech",img:i("vc-civicos")},{name:"LumenPath",tag:"EdTech",img:i("vc-lumenpath")}];function C(){const t=n.useRef(null);n.useEffect(()=>{const s=t.current;if(!s)return;s.classList.add("mount");const p=setTimeout(()=>s.classList.remove("mount"),1200);return()=>clearTimeout(p)},[]);const l=n.useMemo(()=>m.slice(0,3),[]),c=n.useMemo(()=>m.slice(3,6),[]);return e.jsxs(r.Page,{children:[e.jsxs(r.Hero,{ref:t,children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:i("vc-hero-network",2400,1400),alt:"",loading:"eager"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"eyebrow chip",children:[e.jsx(g,{size:16}),"Venture Capital"]}),e.jsx("h1",{children:"Backing bold companies with public-good spillovers"}),e.jsx("p",{className:"sub",children:"We invest in founders tackling frontier problems where outcomes compound— climate, health, education, and civic infrastructure. Our thesis: catalytic capital + evidence + storytelling → outsized positive externalities."}),e.jsxs("div",{className:"actions",children:[e.jsx(d,{to:"/our-work",className:"btn-ghost","aria-label":"Our Work",children:"Our Work"}),e.jsxs(d,{to:"/positive-sum",className:"btn-primary","aria-label":"Read Positive Sum",children:["Read Positive Sum",e.jsx(h,{size:18,style:{marginLeft:8}})]})]})]})]}),e.jsx(y,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(r.Thesis,{className:"card",children:[e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(u,{size:20})}),"Frontier problems",e.jsx("p",{children:"We look for ideas with non-linear impact in climate, health, learning, and civic tech."})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(b,{size:20})}),"Evidence-led",e.jsx("p",{children:"We pair capital with measurement—inputs → outputs → outcomes—so learning compounds."})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(v,{size:20})}),"Founder-aligned",e.jsx("p",{children:"We optimize for runway, resilience, and community—patient but ambitious partnership."})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(f,{size:20})}),"Public spillovers",e.jsx("p",{children:"We value the positive externalities created by products beyond direct unit economics."})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(j,{size:20})}),"Durable progress",e.jsx("p",{children:"We care about robustness—governance, privacy, and safety by design."})]})]}),e.jsxs(r.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Selected Portfolio"}),e.jsx("p",{className:"secSub",children:"A glimpse of teams building at the edges of what’s possible."})]}),e.jsx(r.PortfolioGrid,{children:[l,c].map((s,p)=>e.jsx("div",{className:"row",children:s.map(o=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:o.img,alt:"",loading:"lazy"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"tag chip",children:o.tag})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"title",children:o.name}),e.jsx("button",{className:"iconBtn","aria-label":"Open company site",children:e.jsx(w,{size:16})})]})]},o.name))},p))})]}),e.jsxs(r.Callouts,{children:[e.jsxs("div",{className:"call card brandish",children:[e.jsx("h3",{children:"What we look for"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clear causal story from product to impact"}),e.jsx("li",{children:"Moats from data, science, or networks"}),e.jsx("li",{children:"Infrastructure that unlocks ecosystems"})]})]}),e.jsxs("div",{className:"call card",children:[e.jsx("h3",{children:"Stage & check size"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Pre-seed to Series A"}),e.jsx("li",{children:"Lead or co-lead flexibility"}),e.jsx("li",{children:"Follow-on reserved"})]})]}),e.jsxs("div",{className:"call card",children:[e.jsx("h3",{children:"Support"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Research & measurement"}),e.jsx("li",{children:"Hiring & GTM intros"}),e.jsx("li",{children:"Storytelling & distribution"})]})]})]}),e.jsxs(r.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Building something ambitious?"}),e.jsx("p",{children:"We’d love to learn about your work and explore a fit."}),e.jsxs("div",{className:"actions",children:[e.jsx(d,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:"Contact"}),e.jsx(d,{to:"/careers",className:"btn-ghost","aria-label":"Careers",children:"Careers"})]})]})]})}export{C as default};
