import{d as s,m as c,r as n,j as e,e as m,N as o,a as d,T as x,k as h,B as g,E as b,D as u,F as v}from"./index-f_zt6Rys.js";import{B as f}from"./index-ekvE1CPL.js";const j=c`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,y=c`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`,r={Page:s.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,Hero:s.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;

        .bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
            filter: saturate(1.05) contrast(1.05);
            z-index: -2;
        }
        .veil {
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
            z-index: -1;
        }
        .inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 42px;
            display: grid;
            gap: 12px;
            animation: ${j} 0.5s ease both;
        }
        .kicker {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            border-radius: 999px;
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }
        h1 {
            font-size: 36px;
            line-height: 1.1;
            letter-spacing: 0.2px;
        }
        .sub {
            max-width: 820px;
            color: var(--text-muted);
            margin-top: 6px;
            margin-bottom: 10px;
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
        &.mount .kicker {
            animation: ${y} 3.6s ease-in-out infinite;
        }

        @media (max-width: 720px) {
            .inner {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 28px;
            }
        }
    `,Pillars:s.section`
        max-width: 1100px;
        margin: var(--space-6) auto 0;
        padding: 0 var(--space-6);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;

        .pillar {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .pillar:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background: rgb(var(--primary-rgb) / 0.08);
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
        .t h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .t p {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,Section:s.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        &.brand {
            background: var(--surface-brand-1);
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
            border-radius: var(--radius-lg);
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
    `,FocusGrid:s.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;

        .focus {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .focus:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border-radius: 10px;
            background: rgb(var(--primary-rgb) / 0.08);
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
        .t h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .t p {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,HighlightGrid:s.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .highlight {
            display: grid;
            grid-template-rows: 180px auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            color: var(--text);
            text-decoration: none;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .highlight:hover {
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
            height: 180px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .highlight:hover .media img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.5;
            mix-blend-mode: soft-light;
        }
        .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
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
        }
    `,Rubric:s.section`
        padding: var(--space-6);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);

        .row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        .point {
            display: grid;
            grid-template-columns: 16px 160px 1fr;
            gap: 10px;
            align-items: start;
            border: 1px dashed var(--border);
            border-radius: var(--radius-md);
            padding: 10px;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: var(--primary);
            box-shadow: 0 0 0 3px rgb(var(--primary-rgb) / 0.25);
            margin-top: 6px;
        }
        .k {
            font-weight: 700;
            font-size: 12px;
        }
        .v {
            color: var(--text-muted);
            font-size: 12px;
        }

        @media (max-width: 900px) {
            .row {
                grid-template-columns: 1fr;
            }
            .point {
                grid-template-columns: 16px 140px 1fr;
            }
        }
    `,CTA:s.section`
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
    `},l=(t,a=1600,i=900)=>`https://picsum.photos/seed/${encodeURIComponent(t)}/${a}/${i}`,w=[{icon:e.jsx(g,{size:20}),title:"Clear theory of change",text:"Each grant maps to a testable hypothesis with specific outcomes and learning loops."},{icon:e.jsx(b,{size:20}),title:"Evidence & evaluation",text:"We invest in measurement: baselines, counterfactuals, and transparent reporting."},{icon:e.jsx(u,{size:20}),title:"Multi-year patience",text:"Complex problems need time. Our grants compound through steady iteration."},{icon:e.jsx(v,{size:20}),title:"Open knowledge",text:"We encourage reusable playbooks and share lessons so others can build faster."}],N=[{title:"Education equity",text:"High-impact interventions to improve access and outcomes."},{title:"Public health",text:"Prevention, mental health, and health-systems strengthening."},{title:"Climate & resilience",text:"Adaptation, clean air, and community resilience."},{title:"Economic mobility",text:"Skills, livelihoods, and small-business enablement."}],k=[{seed:"grantee-education-labs",tag:"Education",title:"Community tutoring networks at scale",blurb:"Neighborhood-led tutoring with rigorous measurement lifted literacy by 18–24% YoY."},{seed:"grantee-mental-health",tag:"Health",title:"Low-cost tele-counseling for youth",blurb:"Hybrid tele-care reduced average wait-times by 42% across 120+ institutions."},{seed:"grantee-air-quality",tag:"Climate",title:"Clean air sensors for underserved wards",blurb:"Open data + policy playbooks helped cities cut PM2.5 peaks during burn seasons."}];function H(){const t=n.useRef(null);return n.useEffect(()=>{const a=t.current;if(!a)return;a.classList.add("mount");const i=setTimeout(()=>a.classList.remove("mount"),1e3);return()=>clearTimeout(i)},[]),e.jsxs(r.Page,{children:[e.jsxs(r.Hero,{ref:t,children:[e.jsx("img",{className:"bg",src:l("philanthropy-hero-collab",2400,1400),alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"veil"}),e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"kicker chip",children:[e.jsx(m,{size:16}),"Philanthropy"]}),e.jsx("h1",{children:"Evidence-led grants for durable public good"}),e.jsx("p",{className:"sub",children:"We support organizations solving hard problems with a bias for learning, transparency, and community-level outcomes."}),e.jsxs("div",{className:"actions",children:[e.jsxs(o,{to:"/positive-sum",className:"btn-primary",children:["Read case studies ",e.jsx(d,{size:18,style:{marginLeft:8}})]}),e.jsx(o,{to:"/contact",className:"btn-ghost",children:"Partner with us"})]})]})]}),e.jsx(f,{exclude:["/","/home"],hideIfSingle:!1}),e.jsx(r.Pillars,{children:w.map(a=>e.jsxs("div",{className:"pillar card",children:[e.jsx("div",{className:"ico",children:a.icon}),e.jsxs("div",{className:"t",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]})]},a.title))}),e.jsxs(r.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Focus areas"}),e.jsx("p",{className:"secSub",children:"Where we direct capital today — informed by data, shaped with partners."})]}),e.jsx(r.FocusGrid,{children:N.map(a=>e.jsxs("div",{className:"focus card",children:[e.jsx("div",{className:"ico",children:e.jsx(x,{size:20})}),e.jsxs("div",{className:"t",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.text})]})]},a.title))})]}),e.jsxs(r.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Highlights"}),e.jsx("p",{className:"secSub",children:"Signals from current and past grantees."})]}),e.jsx(r.HighlightGrid,{children:k.map((a,i)=>e.jsxs("a",{className:"highlight card",href:"#",onClick:p=>p.preventDefault(),"aria-label":`${a.title} (preview)`,children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:l(a.seed,1400,900),alt:"",loading:"lazy",decoding:"async"}),e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"tag chip",children:a.tag})]}),e.jsxs("div",{className:"txt",children:[e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.blurb}),e.jsxs("span",{className:"read",children:["Learn more ",e.jsx(h,{size:16})]})]})]},i))})]}),e.jsxs(r.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"How we evaluate"}),e.jsx("p",{className:"secSub",children:"Simple rubric; strong signals. We co-design metrics with grantees."})]}),e.jsx(r.Rubric,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"point",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"k",children:"Need & additionality"}),e.jsx("div",{className:"v",children:"Is the problem under-funded? Does our grant unlock something otherwise impossible?"})]}),e.jsxs("div",{className:"point",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"k",children:"Evidence & learning"}),e.jsx("div",{className:"v",children:"Are hypotheses clear? Are baselines and counterfactuals defined for iteration?"})]}),e.jsxs("div",{className:"point",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"k",children:"Execution & team"}),e.jsx("div",{className:"v",children:"Do leaders show ownership, ethics, and a plan that compounds with community?"})]}),e.jsxs("div",{className:"point",children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"k",children:"Spillovers"}),e.jsx("div",{className:"v",children:"Will success create reusable playbooks or policy improvements beyond one site?"})]})]})})]}),e.jsxs(r.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Have a bold hypothesis?"}),e.jsx("p",{children:"Share a concise proposal with context, existing evidence, and how learning will be shared."}),e.jsxs("div",{className:"actions",children:[e.jsxs(o,{to:"/contact",className:"btn-primary",children:["Start a conversation ",e.jsx(d,{size:18,style:{marginLeft:8}})]}),e.jsx(o,{to:"/positive-sum",className:"btn-ghost",children:"Read case studies"})]})]})]})}export{H as default};
