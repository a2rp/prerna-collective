import{d as t,m as x,r as n,j as e,h as u,N as c,a as v,I as y,J as f,K as j,q as w,L as N,M as k,O as S}from"./index-f_zt6Rys.js";import{B as z}from"./index-ekvE1CPL.js";const C=x`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to   { opacity: 1; transform: translateY(0)  scale(1); }
`,g=x`
  from { transform: translateY(0); }
  to   { transform: translateY(-2px); }
`,s={Page:t.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,Hero:t.section`
        position: relative;
        overflow: hidden;
        isolation: isolate;

        .media {
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            filter: saturate(1.05) contrast(1.05);
            transform: scale(1.02);
        }
        .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    1000px 400px at 15% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.12),
                    transparent 55%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 70px var(--space-6) 40px;
            display: grid;
            gap: 10px;
            animation: ${C} 0.5s ease both;
        }
        .badge {
            width: fit-content;
        }
        h1 {
            font-size: 36px;
            line-height: 1.15;
        }
        .sub {
            color: var(--text-muted);
            max-width: 860px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 6px;
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

        @media (max-width: 720px) {
            .inner {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 30px;
            }
        }
    `,Section:t.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        &.brand {
            background: var(--surface-brand-1);
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

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
    `,ProgramGrid:t.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .program {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            display: grid;
            grid-template-rows: 160px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .program:hover {
            animation: ${g} 0.15s ease forwards;
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .pic {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .pic img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .program:hover .pic img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.2));
        }

        .body {
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .title .ico {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .blurb {
            color: var(--text-muted);
            font-size: 13px;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .actions {
            display: flex;
            gap: 10px;
            margin-top: 2px;
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

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Filters:t.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: var(--space-4);
        flex-wrap: wrap;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .ico {
            color: var(--text-muted);
            display: grid;
            place-items: center;
        }

        button.chip {
            cursor: pointer;
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
            background: rgb(var(--primary-rgb) / 0.08);
            color: var(--text);
            border-radius: 999px;
            padding: 4px 10px;
            transition: background 0.15s ease, transform 0.06s ease,
                box-shadow 0.2s ease;
        }
        button.chip:hover {
            background: rgb(var(--primary-rgb) / 0.12);
        }
        button.chip:active {
            transform: translateY(1px);
        }
        button.chip.active {
            background: rgb(var(--primary-rgb) / 0.18);
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: inset 0 0 0 1px rgb(var(--primary-rgb) / 0.35);
        }

        select {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 8px 10px;
        }
    `,FellowGrid:t.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .fellow {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            display: grid;
            grid-template-rows: 200px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .fellow:hover {
            animation: ${g} 0.15s ease forwards;
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .photo {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .photo img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .photo .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            backdrop-filter: blur(2px);
        }

        .meta {
            padding: 12px;
            display: grid;
            gap: 6px;
        }
        .meta h3 {
            font-size: 16px;
            line-height: 1.3;
        }
        .tagline {
            color: var(--text-muted);
            font-size: 13px;
        }

        .row {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
        }
        .badge {
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid rgb(var(--primary-rgb) / 0.22);
            background: rgb(var(--primary-rgb) / 0.1);
        }
        .badge.policy {
            background: rgb(59 130 246 / 0.1);
            border-color: rgb(59 130 246 / 0.35);
        }
        .badge.science {
            background: rgb(34 197 94 / 0.12);
            border-color: rgb(34 197 94 / 0.35);
        }
        .badge.story {
            background: rgb(244 114 182 / 0.12);
            border-color: rgb(244 114 182 / 0.35);
        }

        .loc {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text-muted);
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            margin-top: 2px;
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

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Empty:t.div`
        margin-top: var(--space-6);
        display: grid;
        grid-template-columns: 28px 1fr;
        gap: 10px;
        align-items: center;
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface);

        .t {
            color: var(--text-muted);
        }
        .t span {
            display: block;
            font-size: 12px;
            margin-top: 4px;
        }
    `};function r(i,o=1400,l=900){return`https://picsum.photos/seed/${encodeURIComponent(i)}/${o}/${l}`}const T=[{key:"policy",title:"Policy & Civic Tech Fellows",icon:e.jsx(N,{size:20}),img:r("fellows-policy-civic"),blurb:"Technologists and policy thinkers building modern public infrastructure and civic tools.",to:"/fellowships",chips:["GovTech","Civic Data","Open Source"]},{key:"science",title:"Science & Research Fellows",icon:e.jsx(k,{size:20}),img:r("fellows-science-research"),blurb:"Researchers translating frontier science into public-good breakthroughs.",to:"/fellowships",chips:["Bio","Climate","ML"]},{key:"story",title:"Storytelling & Media Fellows",icon:e.jsx(S,{size:20}),img:r("fellows-storytelling-media"),blurb:"Journalists and creators amplifying underrepresented voices with evidence-led narratives.",to:"/fellowships",chips:["Longform","Docs","Data Viz"]}],m=[{id:"aanya",name:"Aanya Kapoor",program:"science",tagline:"Waste-to-energy catalyst discovery",img:r("fellow-aanya-portrait",900,900),location:"Bengaluru, IN",year:"2025"},{id:"rahul",name:"Rahul Mehta",program:"policy",tagline:"Civic identity & benefits rails",img:r("fellow-rahul-portrait",900,900),location:"New Delhi, IN",year:"2024"},{id:"mira",name:"Mira Chatterjee",program:"story",tagline:"Climate risk storytelling through data",img:r("fellow-mira-portrait",900,900),location:"Kolkata, IN",year:"2025"},{id:"arjun",name:"Arjun Varma",program:"science",tagline:"Low-cost genome diagnostics",img:r("fellow-arjun-portrait",900,900),location:"Hyderabad, IN",year:"2024"},{id:"sana",name:"Sana Hussain",program:"policy",tagline:"Digital public goods for cities",img:r("fellow-sana-portrait",900,900),location:"Mumbai, IN",year:"2025"},{id:"kabir",name:"Kabir Singh",program:"story",tagline:"Explainers for complicated systems",img:r("fellow-kabir-portrait",900,900),location:"Jaipur, IN",year:"2024"}];function P(){const[i,o]=n.useState("all"),[l,h]=n.useState("all"),b=n.useMemo(()=>["all",...Array.from(new Set(m.map(a=>a.year))).sort().reverse()],[]),d=n.useMemo(()=>m.filter(a=>i==="all"?!0:a.program===i).filter(a=>l==="all"?!0:a.year===l),[i,l]);return e.jsxs(s.Page,{children:[e.jsxs(s.Hero,{children:[e.jsxs("div",{className:"media","aria-hidden":"true",children:[e.jsx("img",{src:r("fellows-hero-collage",2400,1200),alt:""}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"badge chip",children:[e.jsx(u,{size:16}),"Fellowships"]}),e.jsx("h1",{children:"Backing people who bend the curve"}),e.jsx("p",{className:"sub",children:"Multi-disciplinary fellows exploring civic technology, frontier science, and powerful storytelling."}),e.jsxs("div",{className:"actions",children:[e.jsxs(c,{to:"/contact",className:"btn-primary",children:["Get in touch ",e.jsx(v,{size:18,style:{marginLeft:8}})]}),e.jsx(c,{to:"/internships",className:"btn-ghost",children:"Internships"})]})]})]}),e.jsx(z,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Programs"}),e.jsx("p",{className:"secSub",children:"Three tracks. One mission: public-good outcomes."})]}),e.jsx(s.ProgramGrid,{children:T.map(a=>e.jsxs("article",{className:"program card",children:[e.jsxs("div",{className:"pic",children:[e.jsx("img",{src:a.img,alt:"",loading:"lazy"}),e.jsx("div",{className:"overlay"})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title",children:[e.jsx("span",{className:"ico",children:a.icon}),e.jsx("h3",{children:a.title})]}),e.jsx("p",{className:"blurb",children:a.blurb}),e.jsx("div",{className:"chips",children:a.chips.map(p=>e.jsx("span",{className:"chip",children:p},p))}),e.jsx("div",{className:"actions",children:e.jsx(c,{to:a.to,className:"btn-ghost",children:"Learn more"})})]})]},a.key))})]}),e.jsxs(s.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Fellows directory"}),e.jsx("p",{className:"secSub",children:"Browse current and recent fellows across programs."})]}),e.jsxs(s.Filters,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"ico",children:e.jsx(y,{size:18})}),e.jsx("button",{className:`chip ${i==="all"?"active":""}`,onClick:()=>o("all"),children:"All"}),e.jsx("button",{className:`chip ${i==="policy"?"active":""}`,onClick:()=>o("policy"),title:"Policy & Civic Tech",children:"Policy"}),e.jsx("button",{className:`chip ${i==="science"?"active":""}`,onClick:()=>o("science"),title:"Science & Research",children:"Science"}),e.jsx("button",{className:`chip ${i==="story"?"active":""}`,onClick:()=>o("story"),title:"Storytelling & Media",children:"Story"})]}),e.jsxs("div",{className:"right",children:[e.jsx("span",{className:"ico",children:e.jsx(f,{size:18})}),e.jsx("select",{value:l,onChange:a=>h(a.target.value),"aria-label":"Select year",children:b.map(a=>e.jsx("option",{value:a,children:a==="all"?"All years":a},a))})]})]}),e.jsx(s.FellowGrid,{children:d.map(a=>e.jsxs("article",{className:"fellow card",children:[e.jsxs("div",{className:"photo",children:[e.jsx("img",{src:a.img,alt:"",loading:"lazy"}),e.jsx("div",{className:"tag chip",children:a.year})]}),e.jsxs("div",{className:"meta",children:[e.jsx("h3",{children:a.name}),e.jsx("p",{className:"tagline",children:a.tagline}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:`badge ${a.program}`,children:a.program==="policy"?"Policy":a.program==="science"?"Science":"Story"}),e.jsxs("span",{className:"loc",children:[e.jsx(j,{size:16})," ",a.location]})]}),e.jsx("div",{className:"actions",children:e.jsx(c,{to:"/collective",className:"btn-ghost",children:"Profile"})})]})]},a.id))}),d.length===0&&e.jsxs(s.Empty,{className:"card brandish",children:[e.jsx(w,{size:24}),e.jsxs("div",{className:"t",children:["No fellows match your filters.",e.jsx("span",{children:"Try a different program or year."})]})]})]})]})}export{P as default};
