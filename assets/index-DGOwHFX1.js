import{d as o,m as j,r as c,j as e,T as B,N as i,a as R,b as E,c as Y,e as z,f as v,g as T,h as C,i as H,k as b,l as I,n as P,o as A,p as F,q as L,s as M,t as G,u as O,v as _,w as $}from"./index-f_zt6Rys.js";const D=j`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,U=j`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,W=j`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,s={Page:o.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,Hero:o.section`
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
            animation: ${D} 0.6s ease both;
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
                transition: transform 0.12s ease, box-shadow 0.2s ease,
                    background 0.2s ease, border-color 0.2s ease;
            }
            a:active {
                transform: translateY(1px);
            }
        }

        /* subtle sparkle */
        .sparkles {
            position: absolute;
            right: clamp(12px, 4vw, 32px);
            top: clamp(12px, 2vw, 24px);
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${U} 3.6s ease-in-out infinite;
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${W} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 34px;
            }
        }
    `,Section:o.section`
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
    `,CardGrid:o.div`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 14px;

        .card {
            position: relative;
            display: grid;
            grid-template-rows: 120px auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
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
            position: relative;
            overflow: hidden;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .media img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
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
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }

        /* compact variant */
        &.compact {
            grid-template-columns: repeat(5, 1fr);
        }
        .card.small {
            grid-template-rows: 90px auto;
        }
        .card.small .media img {
            height: 90px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(3, 1fr);
            &.compact {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
            &.compact {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 480px) {
            grid-template-columns: 1fr;
            &.compact {
                grid-template-columns: 1fr;
            }
        }
    `,Metrics:o.section`
        max-width: 1200px;
        margin: var(--space-6) auto;
        padding: 14px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);

        .metric {
            display: grid;
            gap: 4px;
            align-items: center;
            justify-items: start;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            transition: background 0.2s ease, border-color 0.2s ease,
                transform 0.15s ease;
            border: 1px dashed rgb(var(--primary-rgb) / 0.18);
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .metric:hover {
            transform: translateY(-1px);
            background: rgb(var(--primary-rgb) / 0.1);
        }

        .num {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }
        .label {
            color: var(--text);
            font-size: 13px;
        }
        .chip {
            margin-left: 8px;
        }

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,StoryRow:o.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .story {
            display: grid;
            grid-template-rows: 180px auto;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .story:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .pic {
            position: relative;
            overflow: hidden;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .pic img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .story:hover .pic img {
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

        .txt {
            padding: 12px;
            display: grid;
            gap: 6px;
        }
        .txt h3 {
            font-size: 16px;
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

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
            .story {
                grid-template-rows: 200px auto;
            }
            .pic img {
                height: 200px;
            }
        }
    `,Programs:o.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        .tile {
            display: grid;
            grid-template-columns: 38px 1fr auto;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            text-decoration: none;
            transition: transform 0.12s ease, box-shadow 0.2s ease,
                border-color 0.2s ease, background 0.2s ease;
        }
        .tile:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-sm);
            border-color: rgb(var(--primary-rgb) / 0.28);
            background: rgb(var(--primary-rgb) / 0.06);
        }

        .ico {
            display: grid;
            place-items: center;
            width: 38px;
            height: 38px;
            border-radius: 10px;
            border: 1px solid var(--border);
            background: var(--card);
        }
        .txt {
            display: grid;
            line-height: 1.1;
        }
        .txt span {
            color: var(--text-muted);
            font-size: 12px;
        }
        .arrow {
            color: var(--text-muted);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Community:o.section`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 12px;
        padding: 16px;

        .col h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .muted {
            color: var(--text-muted);
            margin-bottom: 10px;
            font-size: 13px;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .linkBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            text-decoration: none;
            transition: background 0.2s ease, border-color 0.2s ease,
                transform 0.12s ease;
        }
        .linkBtn:hover {
            background: rgb(var(--primary-rgb) / 0.06);
            border-color: rgb(var(--primary-rgb) / 0.22);
        }
        .linkBtn:active {
            transform: translateY(1px);
        }

        .media {
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
        }
        .media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
            .media {
                min-height: 180px;
            }
        }
    `,CTA:o.section`
        max-width: 960px;
        margin: var(--space-8) auto;
        padding: var(--space-8);
        text-align: center;

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

        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);
    `};function a(d,t=1600,n=900){return`https://picsum.photos/seed/${encodeURIComponent(d)}/${t}/${n}`}const N=[{to:"/our-work",title:"Our Work",icon:e.jsx(F,{size:20}),img:a("our-work-ecosystem",1600,900)},{to:"/our-work/philanthropy",title:"Philanthropy",icon:e.jsx(z,{size:20}),img:a("philanthropy-impact",1600,900)},{to:"/our-work/venture-capital",title:"Venture Capital",icon:e.jsx(T,{size:20}),img:a("venture-frontier",1600,900)},{to:"/our-work/fellowships",title:"Fellowships",icon:e.jsx(C,{size:20}),img:a("fellows-learning",1600,900)},{to:"/collective",title:"Collective",icon:e.jsx(L,{size:20}),img:a("collective-team",1600,900)},{to:"/positive-sum",title:"Positive Sum",icon:e.jsx(M,{size:20}),img:a("positive-sum-library",1600,900)},{to:"/internships",title:"Internships",icon:e.jsx(G,{size:20}),img:a("internships-students",1600,900)},{to:"/demo-day",title:"Demo Day",icon:e.jsx(O,{size:20}),img:a("demoday-stage",1600,900)},{to:"/careers",title:"Careers",icon:e.jsx(_,{size:20}),img:a("careers-work",1600,900)},{to:"/contact",title:"Contact",icon:e.jsx($,{size:20}),img:a("contact-desk",1600,900)}],q=[{img:a("catalytic-ecosystems",1600,900),tag:"Story",title:"Catalytic ecosystems for founders & fellows",blurb:"How patient capital and community support produce nonlinear impact.",to:"/positive-sum"},{img:a("evidence-led-grantmaking",1600,900),tag:"Insight",title:"Philanthropy that scales with evidence",blurb:"A data-first approach to grantmaking and measurable outcomes.",to:"/our-work/philanthropy"},{img:a("public-good-bets",1600,900),tag:"Portfolio",title:"Backing bold companies with public-good spillovers",blurb:"Why frontier bets shift the Overton window.",to:"/our-work/venture-capital"}];function f({to:d=0,duration:t=1200,startWhenVisibleRef:n}){const[p,u]=c.useState(0);return c.useEffect(()=>{const m=n==null?void 0:n.current;let x=!1,r=0,l=0;const y=g=>{l||(l=g);const h=Math.min(1,(g-l)/t),S=1-Math.pow(1-h,3);u(Math.round(d*S)),h<1&&(r=requestAnimationFrame(y))},w=()=>{x||(x=!0,r=requestAnimationFrame(y))};if(!m)return w(),()=>cancelAnimationFrame(r);const k=new IntersectionObserver(g=>g.forEach(h=>h.isIntersecting&&w()),{threshold:.25});return k.observe(m),()=>{k.disconnect(),cancelAnimationFrame(r)}},[d,t,n]),p}function J(){const d=c.useRef(null),t=c.useRef(null);c.useEffect(()=>{const r=d.current;if(!r)return;r.classList.add("mount");const l=setTimeout(()=>r.classList.remove("mount"),1200);return()=>clearTimeout(l)},[]);const n=c.useMemo(()=>N.slice(0,6),[]),p=c.useMemo(()=>N.slice(6),[]),u=f({to:120,duration:1e3,startWhenVisibleRef:t}),m=f({to:35,duration:1100,startWhenVisibleRef:t}),x=f({to:18,duration:1200,startWhenVisibleRef:t});return e.jsxs(s.Page,{children:[e.jsxs(s.Hero,{ref:d,children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:a("hero-network-graph",2400,1400),alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"badge",children:[e.jsx(B,{size:16}),"Mission-first, evidence-led"]}),e.jsxs("h1",{tabIndex:-1,children:["Catalyzing ideas ",e.jsx("span",{className:"accent",children:"that compound"})]}),e.jsx("p",{className:"sub",children:"We back people and organizations tackling society’s hardest problems—combining philanthropy, venture capital, and storytelling to unlock durable progress."}),e.jsxs("div",{className:"actions",children:[e.jsxs(i,{to:"/our-work",className:"btn-primary","aria-label":"Explore Our Work",children:["Explore Our Work ",e.jsx(R,{size:18,style:{marginLeft:8}})]}),e.jsx(i,{to:"/positive-sum",className:"btn-ghost","aria-label":"Read Positive Sum",children:"Read Positive Sum"})]}),e.jsx("div",{className:"sparkles","aria-hidden":"true",children:e.jsx(E,{size:18})})]})]}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Explore"}),e.jsx("p",{className:"secSub",children:"Navigate key sections across programs, capital, and community."})]}),e.jsx(s.CardGrid,{children:n.map(r=>e.jsxs(i,{to:r.to,className:"card",children:[e.jsx("div",{className:"media",children:e.jsx("img",{src:r.img,alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:r.icon}),e.jsx("div",{className:"title",children:r.title})]})]},r.to))})]}),e.jsxs(s.Metrics,{ref:t,className:"card brandish",children:[e.jsxs("div",{className:"metric",children:[e.jsxs("div",{className:"num",children:[u,"+"]}),e.jsxs("div",{className:"label",children:["Organizations ",e.jsxs("span",{className:"chip",children:[e.jsx(Y,{})," active"]})]})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:m}),e.jsx("div",{className:"label",children:"Fellowship tracks"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:x}),e.jsx("div",{className:"label",children:"Focus areas"})]})]}),e.jsxs(s.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Featured"}),e.jsx("p",{className:"secSub",children:"Stories and insights from across the collective."})]}),e.jsx(s.StoryRow,{children:q.map((r,l)=>e.jsxs(i,{to:r.to,className:"story",children:[e.jsxs("div",{className:"pic",children:[e.jsx("img",{src:r.img,alt:"",loading:"lazy",decoding:"async"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"tag chip",children:r.tag})]}),e.jsxs("div",{className:"txt",children:[e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.blurb}),e.jsx("span",{className:"read",children:"Learn more"})]})]},l))})]}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Programs"}),e.jsx("p",{className:"secSub",children:"Where we learn, support, and build together."})]}),e.jsxs(s.Programs,{children:[e.jsxs(i,{to:"/our-work/philanthropy",className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(z,{size:18})}),e.jsxs("div",{className:"txt",children:[e.jsx("strong",{children:"Philanthropy"}),e.jsx("span",{children:"Evidence-led grantmaking"})]}),e.jsx(v,{className:"arrow",size:16})]}),e.jsxs(i,{to:"/our-work/venture-capital",className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(T,{size:18})}),e.jsxs("div",{className:"txt",children:[e.jsx("strong",{children:"Venture Capital"}),e.jsx("span",{children:"Frontier problem solvers"})]}),e.jsx(v,{className:"arrow",size:16})]}),e.jsxs(i,{to:"/our-work/fellowships",className:"tile",children:[e.jsx("div",{className:"ico",children:e.jsx(C,{size:18})}),e.jsxs("div",{className:"txt",children:[e.jsx("strong",{children:"Fellowships"}),e.jsx("span",{children:"Learning in public"})]}),e.jsx(v,{className:"arrow",size:16})]})]})]}),e.jsx(s.Section,{children:e.jsx(s.CardGrid,{className:"compact",children:p.map(r=>e.jsxs(i,{to:r.to,className:"card small",children:[e.jsx("div",{className:"media",children:e.jsx("img",{src:r.img,alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:r.icon}),e.jsx("div",{className:"title",children:r.title})]})]},r.to))})}),e.jsx(s.Section,{children:e.jsxs(s.Community,{className:"card",children:[e.jsxs("div",{className:"col",children:[e.jsx("h3",{children:"Community"}),e.jsx("p",{className:"muted",children:"Join conversations, explore projects, and follow updates from the collective."}),e.jsxs("div",{className:"links",children:[e.jsxs("a",{href:"https://github.com/a2rp",className:"linkBtn",target:"_blank",rel:"noreferrer",children:[e.jsx(H,{size:18})," GitHub ",e.jsx(b,{size:14})]}),e.jsxs("a",{href:"https://www.linkedin.com/in/aashishranjan",className:"linkBtn",target:"_blank",rel:"noreferrer",children:[e.jsx(I,{size:18})," LinkedIn ",e.jsx(b,{size:14})]}),e.jsxs("a",{href:"https://youtube.com/@ashishranjan-ashz",className:"linkBtn",target:"_blank",rel:"noreferrer",children:[e.jsx(P,{size:18})," YouTube ",e.jsx(b,{size:14})]}),e.jsxs("a",{href:"https://x.com",className:"linkBtn",target:"_blank",rel:"noreferrer",children:[e.jsx(A,{size:18})," X (Twitter) ",e.jsx(b,{size:14})]})]})]}),e.jsx("div",{className:"col media",children:e.jsx("img",{src:a("community-grid",1600,900),alt:"",loading:"lazy",decoding:"async"})})]})}),e.jsxs(s.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Ready to collaborate?"}),e.jsx("p",{children:"Reach out to explore partnerships, internships, or to share a bold idea that moves the needle."}),e.jsxs("div",{className:"actions",children:[e.jsx(i,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:"Contact"}),e.jsx(i,{to:"/internships",className:"btn-ghost","aria-label":"Internships",children:"Internships"})]})]})]})}export{J as default};
