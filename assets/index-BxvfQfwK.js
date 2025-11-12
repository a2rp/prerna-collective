import{d,m as P,ad as U,r as o,j as e,T as J,N as u,k as Q,ae as F,f as V,Y as K,I as Z,_,af as X,ag as ee,ah as R,Q as Y,ai as ae,aj as D,ak as C,al as te,s as se,am as ie,A as re}from"./index-f_zt6Rys.js";import{B as oe}from"./index-ekvE1CPL.js";const H=P`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;P`
  0% { transform: translateY(0) }
  50% { transform: translateY(-6px) }
  100% { transform: translateY(0) }
`;const ne=P`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,m={Page:d.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        .sr {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
        }
    `,Hero:d.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;
        border-bottom: 1px solid var(--border);

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
                    900px 420px at 20% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.08),
                    transparent 50%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 24px;
            display: grid;
            gap: 12px;
            animation: ${H} 0.6s ease both;
        }
        .badge {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            color: var(--text);
            border-radius: 999px;
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }
        h1 {
            font-size: 42px;
            line-height: 1.1;
            letter-spacing: 0.2px;
        }
        .accent {
            background: linear-gradient(90deg, var(--link), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .sub {
            max-width: 820px;
            color: var(--text-muted);
            margin-top: 8px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .actions a {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${ne} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 16px;
            }
            h1 {
                font-size: 34px;
            }
        }
    `,HeroFeature:d.button`
        all: unset;
        max-width: 1200px;
        margin: 0 auto var(--space-6);
        display: grid;
        grid-template-columns: 520px 1fr;
        gap: 14px;
        cursor: pointer;

        .media {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
        }
        .media img {
            width: 100%;
            height: auto;
            display: block;
            aspect-ratio: 16/9;
            transition: transform 0.8s ease;
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .chip {
            position: absolute;
            left: 10px;
            bottom: 10px;
        }
        .txt {
            display: grid;
            gap: 6px;
            align-content: center;
        }
        .txt h3 {
            font-size: 20px;
            line-height: 1.3;
        }
        .txt p {
            color: var(--text-muted);
            font-size: 13px;
        }
        .read {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        &:hover .media img {
            transform: scale(1.05);
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,Toolbar:d.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6) var(--space-6) var(--space-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .group {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .search {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 8px 10px;
            min-width: 260px;
            box-shadow: var(--shadow-sm);
        }
        .search .ico {
            opacity: 0.8;
        }
        .search input {
            background: transparent;
            border: 0;
            outline: 0;
            color: var(--text);
            width: 260px;
        }

        .sort {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 6px 10px;
            box-shadow: var(--shadow-sm);
        }
        .sort select {
            appearance: none;
            background: transparent;
            border: 0;
            color: var(--text);
            padding-right: 16px;
        }
        .sort .arrow {
            position: absolute;
            right: 8px;
            pointer-events: none;
            opacity: 0.8;
        }

        .quicklinks {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btn-ghost.sm {
            min-height: 30px;
            padding: 0 10px;
            border-radius: var(--radius-md);
        }
    `,Filters:d.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-6) var(--space-4);
        display: grid;
        gap: 10px;

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            align-items: start;
        }
        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .chip.on {
            border-color: rgb(var(--primary-rgb) / 0.3);
            background: rgb(var(--primary-rgb) / 0.07);
        }
        .chip:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .chip.sm {
            padding: 4px 8px;
            font-size: 11px;
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `,Grid:d.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-6) var(--space-8);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .card {
            display: grid;
            grid-template-rows: auto 1fr;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
            transform: translateZ(0);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .media {
            all: unset;
            cursor: pointer;
            position: relative;
            display: block;
        }
        .media img {
            width: 100%;
            height: auto;
            aspect-ratio: 16/9;
            display: block;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
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
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .row1 {
            color: var(--text-muted);
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .row1 .date {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .title {
            font-size: 16px;
            line-height: 1.3;
        }
        .title button {
            all: unset;
            cursor: pointer;
            color: var(--text);
        }
        .excerpt {
            color: var(--text-muted);
            font-size: 13px;
        }

        .row2 {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .stat {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }
        .stat.btn {
            cursor: pointer;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 999px;
            padding: 4px 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .stat.btn:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }
        .save {
            margin-left: auto;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 8px;
            padding: 6px;
            cursor: pointer;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
        }

        /* Reveal sequence */
        .reveal {
            opacity: 0;
            transform: translateY(8px);
        }
        .reveal.in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Empty:d.div`
        grid-column: 1 / -1;
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        padding: var(--space-8);
        border: 1px dashed var(--border);
        border-radius: var(--radius-lg);
        .ico {
            opacity: 0.8;
        }
        .title {
            font-weight: 700;
        }
        .sub {
            color: var(--text-muted);
        }
        .act {
            margin-top: 6px;
        }
    `,CTA:d.section`
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
        }
        .actions a {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
        }
    `,Modal:d.div`
        position: fixed;
        inset: 0;
        z-index: 80;
        display: grid;
        grid-template-columns: 1fr min(980px, 100%) 1fr;
        .blank {
            grid-column: 1 / 2;
            background: rgb(0 0 0 / 0.4);
        }
        .panel {
            grid-column: 2 / 3;
            height: 100vh;
            overflow: auto;
            background: var(--bg);
            border-left: 1px solid var(--border);
            border-right: 1px solid var(--border);
            animation: ${H} 0.25s ease both;
        }

        .topbar {
            position: sticky;
            top: 0;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            z-index: 2;
        }
        .iconBtn {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            padding: 8px;
            display: inline-grid;
            place-items: center;
            cursor: pointer;
        }
        .grow {
            flex: 1;
        }

        .hero {
            position: relative;
        }
        .hero img {
            width: 100%;
            height: auto;
            display: block;
            aspect-ratio: 16/9;
        }
        .hero .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .hero .badge {
            position: absolute;
            left: 12px;
            bottom: 12px;
        }

        .body {
            max-width: 820px;
            margin: 0 auto;
            padding: var(--space-6);
            display: grid;
            gap: 10px;
        }
        .meta {
            color: var(--text-muted);
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .dot {
            opacity: 0.6;
        }
        .title {
            font-size: 26px;
            line-height: 1.2;
        }
        .excerpt {
            color: var(--text-muted);
        }
        .para {
            line-height: 1.7;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 6px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .actions .btn-ghost,
        .actions .btn-primary {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
        }

        @media (max-width: 1080px) {
            grid-template-columns: 0 1fr 0;
            .blank {
                display: none;
            }
        }
    `};d.div`
    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }
`;function r(n,c=1600,x=900){return`https://picsum.photos/seed/${encodeURIComponent(n)}/${c}/${x}`}const T=[{id:"philanthropy",label:"Philanthropy"},{id:"venture",label:"Venture Capital"},{id:"fellows",label:"Fellowships"},{id:"education",label:"Education"},{id:"climate",label:"Climate"},{id:"health",label:"Health"},{id:"civics",label:"Civic Innovation"}],le=["grantmaking","impact-metrics","founder-stories","policy","design","education","ai","frontier-tech","climate","health"],E=[{id:"evidence-led-grantmaking",title:"Scaling Philanthropy with Evidence",category:"philanthropy",tags:["grantmaking","impact-metrics","policy"],imgSeed:"ps-evidence-led-grantmaking",date:"2025-06-12",mins:8,views:21840,heroBadge:"Insight",excerpt:"Why measurement and feedback loops turn donations into durable compounding outcomes.",content:["We explore a simple loop: hypothesis → grant → measurement → iteration. The velocity of this loop sets the pace of learning.","Evidence-led models change incentives. Teams race to close the gap between their estimates and the observed world.","This piece offers a practical rubric for grant design, including baseline counterfactuals, instrumentation, and public reporting."]},{id:"public-good-spillovers",title:"Backing Frontier Companies with Public-Good Spillovers",category:"venture",tags:["frontier-tech","policy"],imgSeed:"ps-public-good-spillovers",date:"2025-03-30",mins:7,views:15560,heroBadge:"Portfolio",excerpt:"Some products are privately valuable and publicly catalytic. Here’s how we detect those early.",content:["We walk through three case studies where product-market fit coincided with society-level externalities.","Spillovers often appear as lower costs for non-customers or new scientific capabilities for other builders.","Diligence playbook: map beneficiaries beyond buyers; score positive externality surface area."]},{id:"catalytic-ecosystems",title:"Catalytic Ecosystems for Fellows & Founders",category:"fellows",tags:["founder-stories","education","design"],imgSeed:"ps-catalytic-ecosystems",date:"2025-01-18",mins:6,views:12402,heroBadge:"Story",excerpt:"Communities compound when you reduce friction between capital, mentorship, and distribution.",content:["Ecosystems amplify when the connective tissue is strong—shared rituals, strong social graphs, and low-latency intros.","We document tactics to increase serendipity: demo cycles, critique clubs, and ‘open office hours’ across subdomains."]},{id:"climate-flywheels",title:"Climate Flywheels: Financing the Transition",category:"climate",tags:["policy","frontier-tech"],imgSeed:"ps-climate-flywheels",date:"2024-12-02",mins:9,views:9803,heroBadge:"Analysis",excerpt:"From green premiums to deployment curves—how financing mechanics accelerate adoption.",content:["We connect the dots between learning curves and catalytic capital instruments.","Playbook for local policymakers: how to derisk early-stage deployment to unlock private capital."]},{id:"designing-for-learning",title:"Designing for Learning: Evidence in Classrooms",category:"education",tags:["education","design","impact-metrics"],imgSeed:"ps-designing-for-learning",date:"2024-10-09",mins:5,views:11290,heroBadge:"Playbook",excerpt:"Instructional design, when instrumented, becomes a system that learns—just like a good team.",content:["This note shows how interface-level nudges and content-level feedback loops can raise mastery without burnout.","We include a minimal instrumentation checklist any school network can adopt."]}],W=n=>new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});function de(n){const[c,x]=o.useState(()=>{try{const l=localStorage.getItem(n);return l?JSON.parse(l):{}}catch{return{}}});o.useEffect(()=>{try{localStorage.setItem(n,JSON.stringify(c))}catch{}},[n,c]);const b=o.useCallback(l=>{x(y=>{const g={...y};return g[l]=(g[l]||0)+1,g})},[]);return[c,b]}function me(){var I;const[n,c]=U(),[x,b]=o.useState(""),[l,y]=o.useState(()=>new Set),[g,w]=o.useState(()=>new Set),[v,$]=o.useState("newest"),[q,k]=de("ps:applause:v1"),[B,M]=o.useState(n.get("article")),[O,G]=o.useState(!1),L=o.useRef(null);o.useEffect(()=>{const a=L.current;if(!a)return;const t=a.querySelectorAll(".reveal"),s=new IntersectionObserver(h=>{h.forEach(z=>{z.isIntersecting&&(z.target.classList.add("in"),s.unobserve(z.target))})},{threshold:.12});return t.forEach(h=>s.observe(h)),()=>s.disconnect()},[]),o.useEffect(()=>{G(!0)},[]),o.useEffect(()=>{const a=n.get("article");M(a)},[n]);const A=o.useMemo(()=>{let a=E.slice();if(l.size&&(a=a.filter(t=>l.has(t.category))),g.size&&(a=a.filter(t=>t.tags.some(s=>g.has(s)))),x.trim()){const t=x.trim().toLowerCase();a=a.filter(s=>s.title.toLowerCase().includes(t)||s.excerpt.toLowerCase().includes(t)||s.tags.join(" ").includes(t))}return v==="newest"&&a.sort((t,s)=>s.date.localeCompare(t.date)),v==="popular"&&a.sort((t,s)=>s.views-t.views),v==="shortest"&&a.sort((t,s)=>t.mins-s.mins),a},[x,l,g,v]),p=E[0];function j(a,t){a(s=>{const h=new Set(s);return h.has(t)?h.delete(t):h.add(t),h})}function N(a){c(t=>{const s=new URLSearchParams(t);return s.set("article",a),s},{replace:!1})}function f(){c(a=>{const t=new URLSearchParams(a);return t.delete("article"),t},{replace:!1})}function S(a){var s;const t=new URL(window.location.href);t.searchParams.set("article",a),(s=navigator.clipboard)==null||s.writeText(t.toString())}const i=o.useMemo(()=>E.find(a=>a.id===B)||null,[B]);return o.useEffect(()=>{if(!i)return;const a=document.body.style.overflow;document.body.style.overflow="hidden";const t=s=>{s.key==="Escape"&&f()};return window.addEventListener("keydown",t),()=>{document.body.style.overflow=a,window.removeEventListener("keydown",t)}},[i]),e.jsxs(m.Page,{children:[e.jsxs(m.Hero,{className:O?"mount":"",children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:r("positive-sum-hero",2400,1200),alt:"",loading:"eager",decoding:"async",fetchpriority:"high",srcSet:`${r("positive-sum-hero",1200,600)} 1200w, ${r("positive-sum-hero",1800,900)} 1800w, ${r("positive-sum-hero",2400,1200)} 2400w`,sizes:"(max-width: 720px) 100vw, 1200px"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"badge",children:[e.jsx(J,{size:16}),"Positive Sum • Publications"]}),e.jsxs("h1",{children:["Ideas that ",e.jsx("span",{className:"accent",children:"compound"})," in public"]}),e.jsx("p",{className:"sub",children:"Essays, playbooks, and analyses from across the collective—grounded in evidence and built for builders."}),e.jsxs("div",{className:"actions",children:[e.jsxs(u,{to:"/our-work",className:"btn-ghost",children:[e.jsx(Q,{size:16}),"Explore Our Work"]}),e.jsxs(u,{to:"/contact",className:"btn-primary",children:[e.jsx(F,{size:16}),"Pitch a Story"]})]})]}),e.jsxs(m.HeroFeature,{onClick:()=>N(p.id),title:p.title,children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:r(p.imgSeed,1600,900),alt:"",loading:"lazy",decoding:"async",srcSet:`${r(p.imgSeed,800,450)} 800w, ${r(p.imgSeed,1200,675)} 1200w, ${r(p.imgSeed,1600,900)} 1600w`,sizes:"(max-width: 900px) 100vw, 800px"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"chip",children:p.heroBadge})]}),e.jsxs("div",{className:"txt",children:[e.jsx("h3",{children:p.title}),e.jsx("p",{children:p.excerpt}),e.jsxs("span",{className:"read",children:["Read now ",e.jsx(V,{size:16})]})]})]})]}),e.jsx(oe,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(m.Toolbar,{children:[e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"search",children:[e.jsx(K,{className:"ico",size:18}),e.jsx("input",{value:x,onChange:a=>b(a.target.value),placeholder:"Search articles, tags, or topics…","aria-label":"Search Positive Sum articles"})]}),e.jsxs("div",{className:"sort",children:[e.jsx(Z,{size:18}),e.jsx("label",{htmlFor:"sortby",className:"sr",children:"Sort"}),e.jsxs("select",{id:"sortby",value:v,onChange:a=>$(a.target.value),"aria-label":"Sort articles",children:[e.jsx("option",{value:"newest",children:"Newest"}),e.jsx("option",{value:"popular",children:"Most viewed"}),e.jsx("option",{value:"shortest",children:"Shortest read"})]}),e.jsx(_,{size:16,className:"arrow"})]})]}),e.jsxs("div",{className:"quicklinks",children:[e.jsx(u,{to:"/our-work/philanthropy",className:"btn-ghost sm",children:"Philanthropy"}),e.jsx(u,{to:"/our-work/venture-capital",className:"btn-ghost sm",children:"Venture Capital"}),e.jsx(u,{to:"/our-work/fellowships",className:"btn-ghost sm",children:"Fellowships"})]})]}),e.jsxs(m.Filters,{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"label",children:[e.jsx(X,{size:16})," Categories"]}),e.jsx("div",{className:"chips",children:T.map(a=>{const t=l.has(a.id);return e.jsx("button",{type:"button",className:"chip"+(t?" on":""),onClick:()=>j(y,a.id),children:a.label},a.id)})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"label",children:[e.jsx(ee,{size:16})," Tags"]}),e.jsx("div",{className:"chips",children:le.map(a=>{const t=g.has(a);return e.jsx("button",{type:"button",className:"chip"+(t?" on":""),onClick:()=>j(w,a),children:a},a)})})]})]}),e.jsxs(m.Grid,{ref:L,children:[A.map(a=>{var t;return e.jsxs("article",{className:"card reveal",children:[e.jsxs("button",{type:"button",className:"media",onClick:()=>N(a.id),title:a.title,"aria-label":`Open article ${a.title}`,children:[e.jsx("img",{src:r(a.imgSeed,1200,675),alt:"",loading:"lazy",decoding:"async",srcSet:`${r(a.imgSeed,600,338)} 600w, ${r(a.imgSeed,900,506)} 900w, ${r(a.imgSeed,1200,675)} 1200w`,sizes:"(max-width: 900px) 100vw, 400px"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"tag chip",children:a.heroBadge})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"row1",children:[e.jsx("span",{className:"cat",children:(t=T.find(s=>s.id===a.category))==null?void 0:t.label}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"date",children:[e.jsx(R,{size:14})," ",W(a.date)]})]}),e.jsx("h3",{className:"title",children:e.jsx("button",{type:"button",onClick:()=>N(a.id),children:a.title})}),e.jsx("p",{className:"excerpt",children:a.excerpt}),e.jsxs("div",{className:"row2",children:[e.jsxs("span",{className:"stat",children:[e.jsx(Y,{size:14})," ",a.mins," min"]}),e.jsxs("span",{className:"stat",children:[e.jsx(ae,{size:14})," ",Intl.NumberFormat().format(a.views)]}),e.jsxs("button",{type:"button",className:"stat btn",onClick:()=>k(a.id),title:"Applause",children:[e.jsx(D,{size:15}),e.jsx("span",{children:(q[a.id]||0).toLocaleString()})]}),e.jsxs("button",{type:"button",className:"stat btn",onClick:()=>S(a.id),title:"Copy link",children:[e.jsx(C,{size:15}),e.jsx("span",{children:"Share"})]}),e.jsx("button",{type:"button",className:"save",title:"Save (local)",onClick:()=>k(a.id),children:e.jsx(te,{size:16})})]}),e.jsx("div",{className:"tags",children:a.tags.map(s=>e.jsxs("button",{type:"button",className:"chip sm",onClick:()=>j(w,s),title:`Filter by ${s}`,children:["#",s]},s))})]})]},a.id)}),A.length===0&&e.jsxs(m.Empty,{children:[e.jsx("div",{className:"ico",children:e.jsx(se,{size:22})}),e.jsx("div",{className:"title",children:"No results"}),e.jsx("p",{className:"sub",children:"Try clearing filters or using a simpler search term."}),e.jsx("div",{className:"act",children:e.jsx("button",{type:"button",className:"btn-primary",onClick:()=>{b(""),y(new Set),w(new Set),$("newest")},children:"Reset filters"})})]})]}),e.jsxs(m.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Have a piece for Positive Sum?"}),e.jsx("p",{children:"We publish evidence-first work. Share your draft or outline—let’s refine it together."}),e.jsxs("div",{className:"actions",children:[e.jsxs(u,{to:"/contact",className:"btn-primary",children:[e.jsx(F,{size:16}),"Submit a draft"]}),e.jsxs("a",{className:"btn-ghost",href:r("positive-sum-guidelines",1200,700),download:!0,children:[e.jsx(ie,{size:16}),"Download guidelines"]})]})]}),i&&e.jsxs(m.Modal,{role:"dialog","aria-modal":"true","aria-label":i.title,children:[e.jsx("div",{className:"blank",onClick:f}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"topbar",children:[e.jsx("button",{type:"button",className:"iconBtn",onClick:f,title:"Back",children:e.jsx(re,{size:18})}),e.jsx("div",{className:"grow"}),e.jsx("button",{type:"button",className:"iconBtn",onClick:()=>S(i.id),title:"Copy link",children:e.jsx(C,{size:18})})]}),e.jsxs("div",{className:"hero",children:[e.jsx("img",{src:r(i.imgSeed,1600,900),alt:"",loading:"eager",decoding:"async",srcSet:`${r(i.imgSeed,900,506)} 900w, ${r(i.imgSeed,1200,675)} 1200w, ${r(i.imgSeed,1600,900)} 1600w`,sizes:"(max-width: 900px) 100vw, 900px"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"badge chip",children:i.heroBadge})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"cat",children:(I=T.find(a=>a.id===i.category))==null?void 0:I.label}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"date",children:[e.jsx(R,{size:14})," ",W(i.date)]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"mins",children:[e.jsx(Y,{size:14})," ",i.mins," min"]})]}),e.jsx("h2",{className:"title",children:i.title}),e.jsx("p",{className:"excerpt",children:i.excerpt}),i.content.map((a,t)=>e.jsx("p",{className:"para",children:a},t)),e.jsx("div",{className:"tags",children:i.tags.map(a=>e.jsxs("button",{type:"button",className:"chip sm",onClick:()=>{j(w,a),f()},children:["#",a]},a))}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",className:"btn-ghost",onClick:()=>k(i.id),children:[e.jsx(D,{size:16})," Applaud"]}),e.jsxs("button",{type:"button",className:"btn-ghost",onClick:()=>S(i.id),children:[e.jsx(C,{size:16})," Share"]}),e.jsx("a",{className:"btn-primary",href:"#top",onClick:a=>{a.preventDefault(),f()},children:"Back to list"})]})]})]})]})]})}export{me as default};
