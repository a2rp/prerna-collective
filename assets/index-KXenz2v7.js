import{d as n,m as b,r as i,j as e,T as j,N as x,a as v,W as w,X as O,Y as N,p as k,K as S,Q as T,q as C,Z as B,_ as D,$,a0 as G,a1 as z,h as L,a2 as W,a3 as Q,a4 as V,a5 as U,P as X,a6 as J}from"./index-f_zt6Rys.js";import{B as K}from"./index-ekvE1CPL.js";const Z=b`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,_=b`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,ee=b`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,ae=b`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`,s={Page:n.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        /* staggered reveal */
        [data-reveal] {
            opacity: 0;
            transform: translateY(6px);
        }
        .in [data-reveal],
        [data-reveal].in {
            animation: ${ae} 0.45s ease both;
            animation-delay: calc(var(--i, 0) * 60ms);
        }

        @media (prefers-reduced-motion: reduce) {
            [data-reveal],
            .in [data-reveal],
            [data-reveal].in {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
            }
        }
    `,Hero:n.section`
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
            transform: scale(1.02);
            opacity: 0.35;
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
            animation: ${Z} 0.6s ease both;
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
            margin-bottom: 14px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
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

        .sparkles {
            position: absolute;
            right: clamp(12px, 4vw, 32px);
            top: clamp(12px, 2vw, 24px);
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${_} 3.6s ease-in-out infinite;
        }

        & .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${ee} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 34px;
            }
        }
    `,Section:n.section`
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
    `,BenefitGrid:n.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .benefit {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 14px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .benefit:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            display: grid;
            place-items: center;
            width: 48px;
            height: 48px;
            border: 1px solid var(--border);
            border-radius: 12px;
        }
        .t {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .d {
            grid-column: 1 / -1;
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `,FilterBar:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .left {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
        .control {
            position: relative;
            input {
                width: 280px;
                max-width: 60vw;
                padding: 8px 12px 8px 34px;
                border: 1px solid var(--border);
                background: var(--card);
                color: var(--text);
                border-radius: var(--radius-md);
                outline: none;
            }
            .prefix {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.75;
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        .select {
            position: relative;
            select {
                appearance: none;
                padding: 8px 12px 8px 34px;
                border: 1px solid var(--border);
                background: var(--card);
                color: var(--text);
                border-radius: var(--radius-md);
                outline: none;
            }
            .prefix {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.75;
            }
        }

        .btn-ghost.small {
            min-height: 32px;
            padding: 0 12px;
        }
    `,RoleGrid:n.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;

        .role {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .role:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .media {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .media img {
            width: 100%;
            height: auto;
            aspect-ratio: 16/9;
            object-fit: cover;
        }

        .summary {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 12px;
        }
        .title {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid var(--border);
            border-radius: 999px;
            font-size: 12px;
            background: var(--card);
        }
        .about {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 6px;
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border: 1px dashed rgb(var(--primary-rgb) / 0.35);
            border-radius: 999px;
            font-size: 12px;
            color: var(--link);
        }

        .right {
            display: grid;
            align-content: start;
            gap: 8px;
        }
        .right .btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .right .chev {
            transition: transform 0.2s ease;
        }
        .role.open .right .chev {
            transform: rotate(180deg);
        }

        .details {
            border-top: 1px solid var(--border);
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            background: var(--surface-brand-1);
        }
        .details[hidden] {
            display: none;
        }
        .details h4 {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            margin-bottom: 6px;
        }
        .details ul {
            padding-left: 18px;
            margin: 0;
            display: grid;
            gap: 6px;
            font-size: 13px;
            color: var(--text);
        }

        @media (max-width: 900px) {
            .summary {
                grid-template-columns: 1fr;
            }
            .right {
                grid-auto-flow: column;
                justify-content: start;
            }
            .details {
                grid-template-columns: 1fr;
            }
        }
    `,Empty:n.div`
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        border: 1px dashed var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        padding: 24px;
        color: var(--text-muted);
    `,Gallery:n.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .shot {
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: rgb(var(--primary-rgb) / 0.06);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .shot:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .shot img {
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .shot:hover img {
            transform: scale(1.06);
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `,Process:n.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 14px;

        .step {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 14px;
            display: grid;
            gap: 6px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .step:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
        }
        .t {
            font-weight: 700;
        }
        .d {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    `,FAQ:n.div`
        display: grid;
        gap: 10px;

        details {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 12px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        details[open] {
            border-color: rgb(var(--primary-rgb) / 0.28);
            box-shadow: var(--shadow-sm);
        }
        summary {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        .q {
            font-weight: 700;
        }
        .a {
            color: var(--text-muted);
            margin-top: 8px;
            font-size: 14px;
        }
    `,CTA:n.section`
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
            margin-bottom: var(--space-4);
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
    `};function o(l,p=1600,c=900){return`https://picsum.photos/seed/${encodeURIComponent(l)}/${p}/${c}`}const re=["Engineering","Design","Storytelling","Philanthropy","Venture","Operations"],se=["Remote","Bengaluru","San Francisco","New York","Hybrid"],te=["Full-time","Internship","Contract"],ie=[{id:"eng-fe-01",title:"Frontend Engineer (React)",dept:"Engineering",location:"Remote",type:"Full-time",img:o("role-frontend-react",1200,800),tags:["React","Performance","Animations"],about:"Build premium, accessible user interfaces that feel fast and alive. You’ll own features end-to-end and ship iteratively.",responsibilities:["Architect SPA modules with clean, testable code.","Collaborate with Design to deliver pixel-perfect UI.","Own performance budgets; instrument and optimize.","Elevate DX with tooling, linting, and CI hygiene."],requirements:["2+ years with modern React (hooks), routing, bundlers.","Strong CSS architecture (styled-components preferred).","Accessibility and web performance fundamentals."],niceToHave:["Vite, SSR/SSG basics, Node/Express familiarity"],applyTo:"/contact"},{id:"eng-fe-intern-01",title:"Frontend Intern (React + Storytelling)",dept:"Engineering",location:"Bengaluru",type:"Internship",img:o("role-frontend-intern",1200,800),tags:["React","Content","Visual Demos"],about:"Prototype interactive narratives that surface our work and data. Learn rapidly, ship weekly.",responsibilities:["Create micro-sites and interactive explainers.","Polish motion/interaction details in UI.","Pair with mentors; write clean, readable code."],requirements:["Solid JS/React basics, eagerness to learn, eye for detail"],niceToHave:["Canvas/WebGL curiosity, markdown/MDX, charts"],applyTo:"/internships"},{id:"story-01",title:"Multimedia Producer (Story)",dept:"Storytelling",location:"Hybrid",type:"Full-time",img:o("role-storytelling",1200,800),tags:["Script","Edit","Publish"],about:"Craft human-centered stories across video, web, and social. Translate complex topics into resonant, shareable pieces.",responsibilities:["Develop concepts and scripts with program partners.","Edit and ship multi-format assets with consistency.","Track metrics and iterate content playbooks."],requirements:["Portfolio with narrative clarity and polish.","Comfort collaborating with technical/subject experts."],niceToHave:["Motion graphics chops, captions/localization workflow"],applyTo:"/contact"},{id:"phil-01",title:"Program Associate (Philanthropy)",dept:"Philanthropy",location:"San Francisco",type:"Full-time",img:o("role-philanthropy",1200,800),tags:["Grants","Evaluation","Partners"],about:"Support evidence-led grantmaking and partner success. Help surface learnings and scale what works.",responsibilities:["Manage grant cycles and partner communications.","Synthesize outcomes; maintain transparent dashboards.","Coordinate cross-org initiatives with clarity."],requirements:["Ops rigor, comms clarity, data-curious mindset"],niceToHave:["Policy exposure, RCT/meta-analysis literacy"],applyTo:"/contact"},{id:"vc-01",title:"Investment Analyst (Venture)",dept:"Venture",location:"New York",type:"Full-time",img:o("role-venture",1200,800),tags:["Diligence","Frontier","Research"],about:"Source and evaluate founders building for massive public-good spillovers. Map spaces, test thesis, and support the fund.",responsibilities:["Deal flow triage and first-pass diligence.","Market mapping, founder references, memo writing.","Portfolio analytics and quarterly updates."],requirements:["Structured research, crisp writing, curiosity"],niceToHave:["Technical background or founder empathy a plus"],applyTo:"/contact"},{id:"ops-01",title:"People Operations Generalist",dept:"Operations",location:"Remote",type:"Contract",img:o("role-operations",1200,800),tags:["Hiring","Onboarding","Culture"],about:"Keep our people systems smooth and humane—hiring loops, onboarding, and day-to-day support.",responsibilities:["Run hiring logistics and candidate experience.","Curate onboarding checklists and resources.","Maintain policy docs and rituals calendar."],requirements:["Systems thinking, crisp comms, reliable execution"],niceToHave:["Notion/GSuite wizardry, a11y practices"],applyTo:"/contact"}],oe=[{icon:e.jsx(W,{size:22}),title:"Competitive Pay",desc:"Transparent bands, equity where applicable."},{icon:e.jsx(Q,{size:22}),title:"Growth Budget",desc:"Conferences, courses, and books on us."},{icon:e.jsx(V,{size:22}),title:"Hybrid & Remote",desc:"Flexible location with async-first culture."},{icon:e.jsx(U,{size:22}),title:"Well-Being",desc:"Health cover, mental health stipend, recharge days."},{icon:e.jsx(X,{size:22}),title:"Global Impact",desc:"Work that compounds for public good."},{icon:e.jsx(J,{size:22}),title:"Fast Shipping",desc:"Small teams, high ownership, quick iterations."}],ne=[{q:"Do I need to meet every requirement to apply?",a:"No. If you’re excited by the role and meet most criteria, we want to hear from you."},{q:"What does the hiring process look like?",a:"Screen → Portfolio/Work Review → Role Conversation → Practical Exercise → Panel → Offer."},{q:"Are internships paid?",a:"Yes. Internships are paid and structured with a mentor, goals, and clear deliverables."},{q:"Can I work fully remote?",a:"Many roles are remote-friendly. Some teams choose hybrid hubs for in-person rituals."}];function le(){const l=i.useRef(null);return i.useEffect(()=>{const p=l.current;if(!p||typeof IntersectionObserver>"u")return;const c=new IntersectionObserver(m=>{m.forEach(h=>h.isIntersecting&&h.target.classList.add("in"))},{threshold:.12});return p.querySelectorAll("[data-reveal]").forEach(m=>c.observe(m)),()=>c.disconnect()},[]),l}function me(){const[l,p]=i.useState(""),[c,m]=i.useState("All"),[h,f]=i.useState("All"),[g,y]=i.useState("All"),[A,P]=i.useState(null),R=le(),E=i.useMemo(()=>["All",...re],[]),H=i.useMemo(()=>["All",...se],[]),q=i.useMemo(()=>["All",...te],[]),u=i.useMemo(()=>{const a=l.trim().toLowerCase();return ie.filter(r=>{const d=c==="All"||r.dept===c,t=h==="All"||r.location===h,I=g==="All"||r.type===g,Y=!a||r.title.toLowerCase().includes(a)||r.about.toLowerCase().includes(a)||r.tags.some(M=>M.toLowerCase().includes(a));return d&&t&&I&&Y})},[l,c,h,g]),F=i.useCallback(()=>{p(""),m("All"),f("All"),y("All")},[]);return i.useEffect(()=>{var r,d;(d=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)"))!=null&&d.matches},[]),e.jsxs(s.Page,{ref:R,children:[e.jsxs(s.Hero,{children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:o("careers-hero-network",2400,1400),srcSet:`${o("careers-hero-network",1200,700)} 1200w, ${o("careers-hero-network",1600,900)} 1600w, ${o("careers-hero-network",2400,1400)} 2400w`,sizes:"(max-width: 720px) 100vw, 1200px",alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content","data-reveal":!0,children:[e.jsxs("div",{className:"badge",children:[e.jsx(j,{size:16}),"Mission-first, evidence-led hiring"]}),e.jsxs("h1",{children:["Join the ",e.jsx("span",{className:"accent",children:"Prerna Collective"})]}),e.jsx("p",{className:"sub",children:"Small, thoughtful teams building public-spirited products, programs, and stories. High trust, high ownership."}),e.jsxs("div",{className:"actions",children:[e.jsxs(x,{to:"/internships",className:"btn-primary","aria-label":"Browse internships",children:["Explore Internships ",e.jsx(v,{size:18})]}),e.jsx(x,{to:"/contact",className:"btn-ghost","aria-label":"Contact us",children:"Contact"})]}),e.jsx("div",{className:"sparkles","aria-hidden":"true",children:e.jsx(w,{size:18})})]})]}),e.jsx(K,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(s.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader","data-reveal":!0,children:[e.jsx("h2",{children:"Why work with us"}),e.jsx("p",{className:"secSub",children:"Benefits that support focus, growth, and a generous pace."})]}),e.jsx(s.BenefitGrid,{children:oe.map((a,r)=>e.jsxs("div",{className:"benefit cardish","data-reveal":!0,style:{"--i":r},children:[e.jsx("div",{className:"ico",children:a.icon}),e.jsx("div",{className:"t",children:a.title}),e.jsx("p",{className:"d",children:a.desc})]},a.title))})]}),e.jsx(s.Section,{children:e.jsxs(s.FilterBar,{role:"search","aria-label":"Filter open roles",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"label",children:[e.jsx(O,{})," Filter"]}),e.jsxs("div",{className:"control",children:[e.jsx(N,{className:"prefix"}),e.jsx("input",{type:"search",value:l,onChange:a=>p(a.target.value),placeholder:"Search title, skills, or keywords…","aria-label":"Search roles"})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"select",children:[e.jsx(k,{className:"prefix"}),e.jsx("select",{"aria-label":"Department",value:c,onChange:a=>m(a.target.value),children:E.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{className:"select",children:[e.jsx(S,{className:"prefix"}),e.jsx("select",{"aria-label":"Location",value:h,onChange:a=>f(a.target.value),children:H.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{className:"select",children:[e.jsx(T,{className:"prefix"}),e.jsx("select",{"aria-label":"Type",value:g,onChange:a=>y(a.target.value),children:q.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsx("button",{type:"button",className:"btn-ghost small",onClick:F,"aria-label":"Reset filters",children:"Reset"})]})]})}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader","data-reveal":!0,children:[e.jsx("h2",{children:"Open roles"}),e.jsxs("p",{className:"secSub",children:[u.length," position",u.length!==1?"s":""," match your filters."]})]}),e.jsx(s.RoleGrid,{children:u.map((a,r)=>{const d=A===a.id;return e.jsxs("article",{className:"role cardish"+(d?" open":""),"data-reveal":!0,style:{"--i":r},children:[e.jsx("div",{className:"media",children:e.jsx("img",{src:a.img,srcSet:`${o(a.id+"-thumb",800,500)} 800w, ${a.img} 1200w`,sizes:"(max-width: 720px) 100vw, 560px",alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{className:"title",children:a.title}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"chip",children:[e.jsx(C,{})," ",a.dept]}),e.jsxs("span",{className:"chip",children:[e.jsx(S,{})," ",a.location]}),e.jsxs("span",{className:"chip",children:[e.jsx(T,{})," ",a.type]})]}),e.jsx("p",{className:"about",children:a.about}),e.jsx("div",{className:"tags",children:a.tags.map(t=>e.jsxs("span",{className:"tag",children:[e.jsx(B,{})," ",t]},t))})]}),e.jsxs("div",{className:"right",children:[e.jsxs(x,{to:a.applyTo,className:"btn-primary","aria-label":`Apply for ${a.title}`,children:["Apply ",e.jsx(v,{size:18})]}),e.jsxs("button",{className:"btn-ghost","aria-expanded":d,"aria-controls":`details-${a.id}`,onClick:()=>P(d?null:a.id),children:[d?"Hide details":"View details"," ",e.jsx(D,{className:"chev"})]})]})]}),e.jsxs("div",{className:"details",id:`details-${a.id}`,hidden:!d,children:[e.jsxs("div",{className:"col",children:[e.jsxs("h4",{children:[e.jsx($,{})," Responsibilities"]}),e.jsx("ul",{children:a.responsibilities.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("div",{className:"col",children:[e.jsxs("h4",{children:[e.jsx(j,{})," Requirements"]}),e.jsx("ul",{children:a.requirements.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("div",{className:"col",children:[e.jsxs("h4",{children:[e.jsx(G,{})," Nice to have"]}),e.jsx("ul",{children:a.niceToHave.map(t=>e.jsx("li",{children:t},t))})]})]})]},a.id)})}),u.length===0&&e.jsxs(s.Empty,{className:"cardish","data-reveal":!0,children:[e.jsx(z,{size:22}),e.jsx("p",{children:"No roles match your filters. Try clearing search or choose “All”."})]})]}),e.jsxs(s.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader","data-reveal":!0,children:[e.jsx("h2",{children:"Life at Prerna"}),e.jsx("p",{className:"secSub",children:"Creative sprints, thoughtful rituals, and weekly demos."})]}),e.jsx(s.Gallery,{children:["culture-standup","culture-whiteboard","culture-demo-day","culture-pair","culture-offsite","culture-reading"].map((a,r)=>e.jsx("div",{className:"shot","data-reveal":!0,style:{"--i":r},children:e.jsx("img",{src:o(a,1200,900),alt:"",loading:"lazy",decoding:"async"})},a))})]}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader","data-reveal":!0,children:[e.jsx("h2",{children:"Hiring process"}),e.jsx("p",{className:"secSub",children:"Clear, humane, and time-bounded loops."})]}),e.jsx(s.Process,{children:[{icon:e.jsx(N,{}),t:"1. Screen",d:"Share your work; we learn your goals."},{icon:e.jsx(k,{}),t:"2. Role chat",d:"Meet the team; discuss the roadmap."},{icon:e.jsx(L,{}),t:"3. Practical",d:"Small exercise, scoped to hours—not days."},{icon:e.jsx(C,{}),t:"4. Panel",d:"Cross-team conversation; ask us anything."},{icon:e.jsx(w,{}),t:"5. Offer",d:"Transparent comp, start date, onboarding plan."}].map((a,r)=>e.jsxs("div",{className:"step cardish","data-reveal":!0,style:{"--i":r},children:[e.jsx("div",{className:"ico",children:a.icon}),e.jsx("div",{className:"t",children:a.t}),e.jsx("p",{className:"d",children:a.d})]},a.t))})]}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader","data-reveal":!0,children:[e.jsx("h2",{children:"FAQs"}),e.jsx("p",{className:"secSub",children:"A few quick answers before you apply."})]}),e.jsx(s.FAQ,{children:ne.map((a,r)=>e.jsxs("details",{"data-reveal":!0,style:{"--i":r},children:[e.jsxs("summary",{children:[e.jsx(de,{}),e.jsx("span",{className:"q",children:a.q})]}),e.jsx("div",{className:"a",children:a.a})]},a.q))})]}),e.jsxs(s.CTA,{className:"card brandish","data-reveal":!0,children:[e.jsx("h3",{children:"Not seeing your role?"}),e.jsx("p",{children:"We hire opportunistically for exceptional people. Tell us how you’ll raise the bar."}),e.jsxs("div",{className:"actions",children:[e.jsxs(x,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:["Contact ",e.jsx(v,{size:18})]}),e.jsx(x,{to:"/our-work",className:"btn-ghost","aria-label":"Explore our work",children:"Explore Our Work"})]})]})]})}function de(l){return e.jsx(z,{...l})}export{me as default};
