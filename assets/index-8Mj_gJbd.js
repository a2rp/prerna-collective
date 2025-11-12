import{d as l,m as v,r as d,j as e,q as y,h as j,g as w,P as k,e as M,s as I,T as N,N as x,a as z,K as S,Q as L,R as T,G as P,p as R,l as Y,w as H,S as F,U as $,V as D,k as B,u as O}from"./index-f_zt6Rys.js";import{B as W}from"./index-ekvE1CPL.js";const G=v`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,V=v`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,q=v`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,U=v`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,s={Page:l.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        /* reveal on scroll */
        [data-animate] {
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.5s ease var(--dly, 0ms),
                transform 0.5s ease var(--dly, 0ms), box-shadow 0.2s ease;
        }
        [data-animate].seen {
            opacity: 1;
            transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            [data-animate] {
                transition: none !important;
                transform: none !important;
                opacity: 1 !important;
            }
        }
    `,Hero:l.section`
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
            animation: ${G} 0.6s ease both;
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
            max-width: 880px;
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
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }

        .heroTickers {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
            font-size: 12px;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 34px;
            }
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${U} 1.2s ease both;
        }
    `,Section:l.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
    `,Pillars:l.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .pillar {
            position: relative;
            display: grid;
            grid-template-rows: 140px auto auto auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .pillar:hover {
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
            height: 140px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .pillar:hover .media img {
            transform: scale(1.06);
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
        }
        .icon {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }

        .copy {
            padding: 0 12px 10px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .cta {
            padding: 0 12px 14px;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Stats:l.section`
        max-width: 1100px;
        margin: var(--space-6) auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface-brand-1);
        box-shadow: var(--shadow-sm);

        .stat {
            display: grid;
            gap: 6px;
            place-items: center;
            padding: 10px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .stat:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .icon {
            opacity: 0.9;
        }
        .val {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .lbl {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,TeamGrid:l.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .card {
            display: grid;
            grid-template-rows: 220px auto;
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

        .pic {
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .pic img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .pic img {
            transform: scale(1.05);
        }

        .txt {
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .txt h3 {
            font-size: 16px;
            line-height: 1.3;
        }
        .role {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .sub {
            color: var(--text-muted);
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .links {
            display: flex;
            gap: 8px;
        }
        .ico {
            display: grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--border);
            border-radius: 8px;
            text-decoration: none;
            color: var(--text);
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .ico:hover {
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,Note:l.p`
        margin-top: var(--space-4);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 8px;
        .lnk {
            color: var(--link);
            text-decoration: underline;
        }
    `,Partners:l.section`
        max-width: 1200px;
        margin: var(--space-6) auto;
        padding: var(--space-6) 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        overflow: hidden;

        .row {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: ${q} 18s linear infinite;
        }
        .logo {
            width: 160px;
            height: 90px;
            flex: 0 0 auto;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            filter: grayscale(0.15);
            transition: filter 0.2s ease, transform 0.15s ease,
                border-color 0.2s ease;
        }
        .logo img {
            max-width: 120px;
            max-height: 60px;
            object-fit: contain;
        }
        .logo:hover {
            filter: grayscale(0);
            transform: translateY(-2px);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        @media (prefers-reduced-motion: reduce) {
            .row {
                animation: none;
            }
        }
    `,Timeline:l.div`
        position: relative;
        padding-left: 24px;
        border-left: 2px dashed rgb(var(--primary-rgb) / 0.35);
        display: grid;
        gap: 14px;

        .item {
            position: relative;
            display: grid;
            grid-template-columns: 80px 16px 1fr;
            gap: 12px;
            align-items: start;
        }
        .year {
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--text);
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: var(--primary);
            margin-top: 6px;
            filter: drop-shadow(0 4px 16px rgb(var(--primary-rgb) / 0.6));
            animation: ${V} 3.6s ease-in-out infinite;
        }
        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 12px;
        }
        .card h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
            .dot {
                animation: none;
            }
        }
    `,Values:l.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .val {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 14px;
            display: grid;
            gap: 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .val:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        h4 {
            font-size: 15px;
        }
        p {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,CTA:l.section`
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
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }
    `};function r(c,o=1600,p=900){return`https://picsum.photos/seed/${encodeURIComponent(c)}/${o}/${p}`}function X(c="[data-animate]",o="0px 0px -10% 0px"){d.useEffect(()=>{const p=Array.from(document.querySelectorAll(c));if(!p.length)return;const t=new IntersectionObserver(m=>{for(const n of m)n.isIntersecting&&(n.target.classList.add("seen"),t.unobserve(n.target))},{root:null,rootMargin:o,threshold:.15});return p.forEach((m,n)=>{m.style.setProperty("--dly",`${Math.min(n,6)*60}ms`),t.observe(m)}),()=>t.disconnect()},[c,o])}function u(c=0,o=900,p=!0){const[t,m]=d.useState(0);return d.useEffect(()=>{if(!p)return;let n=0;const g=performance.now(),h=f=>{const b=Math.min(1,(f-g)/o);m(Math.round(c*(1-Math.pow(1-b,3)))),b<1&&(n=requestAnimationFrame(h))};return n=requestAnimationFrame(h),()=>cancelAnimationFrame(n)},[c,o,p]),t}function J(){X();const c=d.useRef(null),[o,p]=d.useState(!1);d.useEffect(()=>{const a=c.current;if(!a)return;const i=new IntersectionObserver(E=>{E[0].isIntersecting&&(p(!0),i.disconnect())},{threshold:.25});return i.observe(a),()=>i.disconnect()},[]);const t=d.useMemo(()=>[{label:"Team members",val:120,icon:e.jsx(y,{size:18})},{label:"Active fellows",val:48,icon:e.jsx(j,{size:18})},{label:"Portfolio orgs",val:75,icon:e.jsx(w,{size:18})},{label:"Countries reached",val:22,icon:e.jsx(k,{size:18})}],[]),m=d.useMemo(()=>[{title:"Philanthropy",icon:e.jsx(M,{size:22}),copy:"Evidence-led grantmaking focused on durable social outcomes and compounding public good.",to:"/our-work/philanthropy",img:r("pillar-philanthropy",1200,800)},{title:"Venture Capital",icon:e.jsx(w,{size:22}),copy:"Backing founders solving frontier problems where market incentives and impact align.",to:"/our-work/venture-capital",img:r("pillar-vc",1200,800)},{title:"Fellowships",icon:e.jsx(j,{size:22}),copy:"Time, community, and runway for bold operators to test ideas and scale what works.",to:"/our-work/fellowships",img:r("pillar-fellowships",1200,800)},{title:"Storytelling",icon:e.jsx(I,{size:22}),copy:"Narratives that widen the Overton window, translating complex work into shared understanding.",to:"/positive-sum",img:r("pillar-storytelling",1200,800)}],[]),n=d.useMemo(()=>[{name:"A. Menon",role:"Managing Partner",city:"San Francisco",img:r("team-amenon",900,900),li:"#",mail:"#"},{name:"N. Patel",role:"Head of Philanthropy",city:"Bengaluru",img:r("team-npatel",900,900),li:"#",mail:"#"},{name:"R. Tan",role:"Director, Fellowships",city:"Singapore",img:r("team-rtan",900,900),li:"#",mail:"#"},{name:"J. Alvarez",role:"Partner, VC",city:"New York",img:r("team-jalvarez",900,900),li:"#",mail:"#"},{name:"P. Iyer",role:"Product & Data",city:"Delhi NCR",img:r("team-piyer",900,900),li:"#",mail:"#"},{name:"S. Kumar",role:"Programs",city:"Mumbai",img:r("team-skumar",900,900),li:"#",mail:"#"}],[]),g=d.useMemo(()=>[{name:"Frontier Lab",img:r("logo-frontier",640,360)},{name:"CivicX",img:r("logo-civicx",640,360)},{name:"OpenHealth",img:r("logo-openhealth",640,360)},{name:"Atlas EDU",img:r("logo-atlasedu",640,360)},{name:"Parity AI",img:r("logo-parity",640,360)},{name:"GreenField",img:r("logo-greenfield",640,360)}],[]),h=d.useMemo(()=>[{year:"2017",title:"Origins",copy:"Seeded the collective with a thesis: pair patient capital with evidence and narrative."},{year:"2019",title:"First Fellowships",copy:"Launched an annual cohort to derisk early exploration for high-upside ideas."},{year:"2021",title:"Portfolio Flywheel",copy:"Investments in frontier tech meeting public-good criteria; created positive spillovers."},{year:"2023",title:"Learning Loop",copy:"Codified measurement and shared learnings via Positive Sum to compound impact."},{year:"2025",title:"Global Chapters",copy:"Regional nodes with shared infra across programs, capital, and storytelling."}],[]),f=u(t[0].val,900,o),b=u(t[1].val,900,o),C=u(t[2].val,900,o),A=u(t[3].val,900,o);return e.jsxs(s.Page,{children:[e.jsxs(s.Hero,{children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:r("collective-hero-network",2400,1400),alt:"",loading:"eager",decoding:"async",fetchpriority:"high",srcSet:`
              ${r("collective-hero-network",1200,700)} 1200w,
              ${r("collective-hero-network",1800,1050)} 1800w,
              ${r("collective-hero-network",2400,1400)} 2400w
            `,sizes:"(max-width: 720px) 100vw, 1200px"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"badge",children:[e.jsx(N,{size:16}),"Mission-first, evidence-led"]}),e.jsxs("h1",{children:["The Collective: ",e.jsx("span",{className:"accent",children:"people before playbooks"})]}),e.jsx("p",{className:"sub",children:"A multidisciplinary group of operators, scientists, policy thinkers, engineers, and storytellers. We combine philanthropy, venture capital, and fellowships to help ambitious people work on hard problems—responsibly and at scale."}),e.jsxs("div",{className:"actions",children:[e.jsxs(x,{to:"/our-work",className:"btn-primary","aria-label":"Explore Our Work",children:["Explore Our Work ",e.jsx(z,{size:18})]}),e.jsx(x,{to:"/positive-sum",className:"btn-ghost","aria-label":"Read Positive Sum",children:"Positive Sum"})]}),e.jsxs("div",{className:"heroTickers",children:[e.jsxs("span",{className:"chip",children:[e.jsx(S,{})," SF • NYC • BLR • SG"]}),e.jsxs("span",{className:"chip",children:[e.jsx(L,{})," Always learning"]}),e.jsxs("span",{className:"chip",children:[e.jsx(T,{})," Outcomes > optics"]})]})]})]}),e.jsx(W,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(s.Section,{"data-animate":!0,children:[e.jsxs("header",{className:"secHeader",children:[e.jsxs("h2",{children:[e.jsx(P,{})," Our approach"]}),e.jsx("p",{className:"secSub",children:"We operate like a lab with field sites: test, measure, share, and scale. Programs are designed to produce public-good spillovers—not just private returns."})]}),e.jsx(s.Pillars,{children:m.map(a=>e.jsxs(x,{to:a.to,className:"pillar","data-animate":!0,children:[e.jsx("div",{className:"media",children:e.jsx("img",{src:a.img,alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:a.icon}),e.jsx("div",{className:"title",children:a.title})]}),e.jsx("p",{className:"copy",children:a.copy}),e.jsxs("span",{className:"cta",children:["Learn more ",e.jsx(z,{size:16})]})]},a.title))})]}),e.jsx(s.Stats,{ref:c,"data-animate":!0,children:[f,b,C,A].map((a,i)=>e.jsxs("div",{className:"stat","data-animate":!0,children:[e.jsx("div",{className:"icon",children:t[i].icon}),e.jsx("div",{className:"val","aria-live":"polite",children:a.toLocaleString()}),e.jsx("div",{className:"lbl",children:t[i].label})]},i))}),e.jsxs(s.Section,{"data-animate":!0,children:[e.jsxs("header",{className:"secHeader",children:[e.jsxs("h2",{children:[e.jsx(y,{})," Team"]}),e.jsx("p",{className:"secSub",children:"A small, senior team with a bias for shipping and sharing learnings."})]}),e.jsx(s.TeamGrid,{children:n.map(a=>e.jsxs("article",{className:"card","data-animate":!0,children:[e.jsx("div",{className:"pic",children:e.jsx("img",{src:a.img,alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"txt",children:[e.jsx("h3",{children:a.name}),e.jsxs("div",{className:"role chip",children:[e.jsx(R,{})," ",a.role]}),e.jsxs("div",{className:"sub",children:[e.jsx(S,{})," ",a.city]}),e.jsxs("div",{className:"links",children:[e.jsx("a",{href:a.li,"aria-label":"LinkedIn",className:"ico",onClick:i=>i.preventDefault(),children:e.jsx(Y,{size:18})}),e.jsx("a",{href:a.mail,"aria-label":"Email",className:"ico",onClick:i=>i.preventDefault(),children:e.jsx(H,{size:18})})]})]})]},a.name))}),e.jsxs(s.Note,{children:[e.jsx(F,{})," We’re always meeting unusual minds."," ",e.jsx(x,{to:"/careers",className:"lnk",children:"Careers"})," ","and"," ",e.jsx(x,{to:"/internships",className:"lnk",children:"Internships"}),"."]})]}),e.jsx(s.Partners,{"data-animate":!0,children:e.jsxs("div",{className:"row",children:[g.map((a,i)=>e.jsx("div",{className:"logo",title:a.name,children:e.jsx("img",{src:a.img,alt:"",loading:"lazy",decoding:"async"})},i)),g.map((a,i)=>e.jsx("div",{className:"logo",title:a.name,children:e.jsx("img",{src:a.img,alt:"",loading:"lazy",decoding:"async"})},`dup-${i}`))]})}),e.jsxs(s.Section,{"data-animate":!0,children:[e.jsxs("header",{className:"secHeader",children:[e.jsxs("h2",{children:[e.jsx($,{})," Milestones"]}),e.jsx("p",{className:"secSub",children:"A brief history of how we’ve compounded impact."})]}),e.jsx(s.Timeline,{children:h.map((a,i)=>e.jsxs("div",{className:"item","data-animate":!0,children:[e.jsx("div",{className:"year",children:a.year}),e.jsx("div",{className:"dot","aria-hidden":"true"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.copy})]})]},i))})]}),e.jsxs(s.Section,{"data-animate":!0,children:[e.jsxs("header",{className:"secHeader",children:[e.jsxs("h2",{children:[e.jsx(T,{})," Operating values"]}),e.jsx("p",{className:"secSub",children:"Principles that guide decisions across programs."})]}),e.jsxs(s.Values,{children:[e.jsxs("div",{className:"val","data-animate":!0,children:[e.jsx("div",{className:"ico",children:e.jsx(N,{size:18})}),e.jsx("h4",{children:"Safety & integrity first"}),e.jsx("p",{children:"High-agency work demands high standards. We choose reversibility where possible."})]}),e.jsxs("div",{className:"val","data-animate":!0,children:[e.jsx("div",{className:"ico",children:e.jsx(P,{size:18})}),e.jsx("h4",{children:"Test and show your work"}),e.jsx("p",{children:"Hypotheses, measurements, and public debriefs turn mistakes into assets."})]}),e.jsxs("div",{className:"val","data-animate":!0,children:[e.jsx("div",{className:"ico",children:e.jsx(D,{size:18})}),e.jsx("h4",{children:"Default to action"}),e.jsx("p",{children:"Small, safe-to-try bets compound faster than perfect plans."})]}),e.jsxs("div",{className:"val","data-animate":!0,children:[e.jsx("div",{className:"ico",children:e.jsx(k,{size:18})}),e.jsx("h4",{children:"Global, local"}),e.jsx("p",{children:"Central infra, local judgment. Chapters adapt constraints to context."})]})]})]}),e.jsxs(s.CTA,{className:"card brandish","data-animate":!0,children:[e.jsx("h3",{children:"Want to collaborate with the Collective?"}),e.jsx("p",{children:"Whether you’re a founder, a researcher, or an operator with a strange and strong idea, we’d love to meet you."}),e.jsxs("div",{className:"actions",children:[e.jsxs(x,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:["Contact ",e.jsx(B,{size:16})]}),e.jsxs(x,{to:"/demo-day",className:"btn-ghost","aria-label":"Demo Day",children:["Demo Day ",e.jsx(O,{size:16})]})]})]})]})}export{J as default};
