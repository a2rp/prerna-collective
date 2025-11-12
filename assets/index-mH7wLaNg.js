import{d,m,r as o,j as e,a7 as F,a8 as I,q,v as M,t as H,u as B,T as W,l as Y,o as A,n as $,i as D,w as E,N as p,a as u,P as G,K as g,a9 as b,aa as z,ab as R,ac as L}from"./index-f_zt6Rys.js";import{B as O}from"./index-ekvE1CPL.js";const Q=m`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,_=m`
  0% { transform: translateY(0) }
  50% { transform: translateY(-6px) }
  100% { transform: translateY(0) }
`,U=m`
  to { transform: rotate(360deg); }
`,V=m`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,s={Page:d.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,Hero:d.section`
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
                    1000px 400px at 20% 20%,
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
            animation: ${Q} 0.6s ease both;
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
            font-size: 40px;
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
        .socials {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .socials .social {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border: 1px solid var(--border);
            background: var(--card);
            text-decoration: none;
            color: var(--text);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .socials .social:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${V} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 32px;
            }
        }
    `,Section:d.section`
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
    `,MethodGrid:d.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .card {
            display: grid;
            grid-template-rows: 140px auto;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
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
            aspect-ratio: 16/9;
        }
        .media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

        .meta {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 12px;
            padding: 12px;
        }
        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .blurb {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
        .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .email,
        .inline {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
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
    `,FormWrapper:d.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        .visual {
            position: relative;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
        .visual img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4/3;
            filter: saturate(1.02) contrast(1.02);
        }
        .visual .orb {
            position: absolute;
            right: 18px;
            top: 18px;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: var(--primary);
            filter: drop-shadow(0 4px 16px rgb(var(--primary-rgb) / 0.65));
            animation: ${_} 3.6s ease-in-out infinite;
        }

        form {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: var(--space-6);
            display: grid;
            gap: 12px;
        }
        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
        }
        .field {
            display: grid;
            gap: 6px;
        }
        label {
            font-size: 12px;
            color: var(--text-muted);
        }
        input,
        select,
        textarea {
            width: 100%;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 10px 12px;
            outline: none;
            transition: border-color 0.15s ease, box-shadow 0.15s ease,
                background 0.2s ease;
        }
        textarea {
            resize: vertical;
            min-height: 120px;
        }
        input:focus,
        select:focus,
        textarea:focus {
            border-color: rgb(var(--primary-rgb) / 0.4);
            box-shadow: 0 0 0 3px rgb(var(--primary-rgb) / 0.15);
            background: var(--card);
        }
        .error {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #ff5a58;
            font-size: 13px;
            padding: 8px 10px;
            border: 1px solid #ff5a58;
            border-radius: var(--radius-md);
            background: rgba(255, 90, 88, 0.08);
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .btn-primary {
            border: 1px solid var(--border);
            background: var(--primary);
            color: white;
            border-radius: var(--radius-md);
            min-height: 38px;
            padding: 0 16px;
            line-height: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                filter 0.2s ease;
            cursor: pointer;
        }
        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
            filter: saturate(1.05);
        }
        .btn-primary:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        .spin {
            animation: ${U} 0.9s linear infinite;
        }

        .success {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text);
            font-size: 13px;
            padding: 8px 10px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface-brand-1);
        }
        .hint {
            color: var(--text-muted);
            font-size: 12px;
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
            .row {
                grid-template-columns: 1fr;
            }
            .visual img {
                aspect-ratio: 16/9;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .visual .orb {
                animation: none;
            }
            .btn-primary,
            input,
            select,
            textarea {
                transition: none;
            }
        }
    `,Offices:d.div`
        display: grid;
        gap: 14px;
        grid-template-columns: 2fr 3fr;

        .mapCard {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            display: grid;
            grid-template-rows: auto auto auto;
        }
        .mapHeader {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .map {
            aspect-ratio: 3/1;
        }
        .map svg {
            width: 100%;
            height: 100%;
            display: block;
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            font-size: 12px;
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--primary);
            filter: drop-shadow(0 2px 6px rgb(var(--primary-rgb) / 0.6));
        }

        .officeList {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            display: grid;
        }
        .office {
            display: grid;
            grid-template-columns: 28px 1fr auto;
            gap: 10px;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid var(--border);
        }
        .office:last-child {
            border-bottom: 0;
        }
        .ico {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            background: var(--surface);
        }
        .city {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .addr {
            font-size: 13px;
            color: var(--text-muted);
        }
        .phone {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,FAQ:d.div`
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;

        .item {
            border-bottom: 1px solid var(--border);
        }
        .item:last-child {
            border-bottom: 0;
        }

        .q {
            width: 100%;
            text-align: left;
            background: transparent;
            color: var(--text);
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 12px;
            font-weight: 600;
            cursor: pointer;
            border: 0;
            outline: none;
        }
        .q:focus-visible {
            box-shadow: 0 0 0 3px rgb(var(--primary-rgb) / 0.15) inset;
        }

        .a {
            padding: 0 12px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.25s ease;
        }
        .item.open .a {
            max-height: 200px;
            padding: 0 12px 12px;
        }
        .a p {
            color: var(--text-muted);
            font-size: 14px;
            margin: 10px 0;
        }
        .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .links a {
            text-decoration: none;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
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
            margin-bottom: var(--space-4);
        }
        .actions a {
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
    `};function v(t,n=1600,r=900){return`https://picsum.photos/seed/${encodeURIComponent(t)}/${n}/${r}`}const i={general:"hello@prerna.org",media:"press@prerna.org",partnerships:"partners@prerna.org",internships:"internships@prerna.org",careers:"careers@prerna.org"};function ee(){const t=o.useRef(null);o.useEffect(()=>{const r=t.current;if(!r)return;r.classList.add("mount");const a=setTimeout(()=>r.classList.remove("mount"),900);return()=>clearTimeout(a)},[]);const n=o.useMemo(()=>[{key:"general",title:"General",blurb:"Questions, ideas, or notes for the team.",icon:e.jsx(F,{size:20}),email:i.general,to:"/collective",cta:"About us",seed:"contact-general"},{key:"media",title:"Media",blurb:"Press inquiries, interviews, and speaking.",icon:e.jsx(I,{size:20}),email:i.media,to:"/positive-sum",cta:"Read stories",seed:"contact-media"},{key:"partnerships",title:"Partnerships",blurb:"Philanthropy, venture, and ecosystem partners.",icon:e.jsx(q,{size:20}),email:i.partnerships,to:"/our-work",cta:"Explore our work",seed:"contact-partners"},{key:"careers",title:"Careers",blurb:"Open roles and how we hire.",icon:e.jsx(M,{size:20}),email:i.careers,to:"/careers",cta:"View careers",seed:"contact-careers"},{key:"internships",title:"Internships",blurb:"Programs, eligibility, and timelines.",icon:e.jsx(H,{size:20}),email:i.internships,to:"/internships",cta:"Internships hub",seed:"contact-internships"},{key:"events",title:"Events",blurb:"Demo Day and community gatherings.",icon:e.jsx(B,{size:20}),email:i.general,to:"/demo-day",cta:"Demo Day",seed:"contact-events"}],[]);return e.jsxs(s.Page,{children:[e.jsxs(s.Hero,{ref:t,children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:v("contact-hero-constellation",2400,1400),alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"badge",children:[e.jsx(W,{size:16}),"We read every message"]}),e.jsxs("h1",{children:["Contact ",e.jsx("span",{className:"accent",children:"Prerna Collective"})]}),e.jsx("p",{className:"sub",children:"Reach the right team quickly. For opportunities, partnerships, and media—use the dedicated channels below so we can route you fast."}),e.jsxs("div",{className:"socials","aria-label":"Social links",children:[e.jsxs("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer",className:"social",children:[e.jsx(Y,{size:18}),"LinkedIn"]}),e.jsxs("a",{href:"https://x.com",target:"_blank",rel:"noreferrer",className:"social",children:[e.jsx(A,{size:18}),"X"]}),e.jsxs("a",{href:"https://www.youtube.com",target:"_blank",rel:"noreferrer",className:"social",children:[e.jsx($,{size:18}),"YouTube"]}),e.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social",children:[e.jsx(D,{size:18}),"GitHub"]})]})]})]}),e.jsx(O,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Talk to the right team"}),e.jsx("p",{className:"secSub",children:"Pick a lane so we can help you faster."})]}),e.jsx(s.MethodGrid,{children:n.map(r=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:v(r.seed,1200,800),alt:"",loading:"lazy",decoding:"async"}),e.jsx("div",{className:"overlay"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:r.icon}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"title",children:r.title}),e.jsx("div",{className:"blurb",children:r.blurb}),e.jsxs("div",{className:"links",children:[e.jsxs("a",{className:"email",href:`mailto:${r.email}`,children:[e.jsx(E,{size:16}),r.email]}),e.jsxs(p,{className:"inline",to:r.to,children:[r.cta,e.jsx(u,{size:16})]})]})]})]})]},r.key))})]}),e.jsx(K,{}),e.jsxs(s.Section,{className:"brand",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Where we work"}),e.jsx("p",{className:"secSub",children:"Distributed by design, anchored in community."})]}),e.jsxs(s.Offices,{children:[e.jsxs("div",{className:"mapCard",children:[e.jsxs("div",{className:"mapHeader",children:[e.jsx(G,{size:18}),"Global presence"]}),e.jsx("div",{className:"map",children:e.jsxs("svg",{viewBox:"0 0 600 200","aria-hidden":"true",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0",stopColor:"var(--link)"}),e.jsx("stop",{offset:"1",stopColor:"var(--primary)"})]})}),e.jsx("rect",{x:"0",y:"0",width:"600",height:"200",fill:"rgb(var(--primary-rgb)/0.07)"}),Array.from({length:30}).map((r,a)=>e.jsx("circle",{cx:10+a*20,cy:100+Math.sin(a/2)*16,r:"2.2",fill:"url(#g)"},a))]})}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot"})," Active hubs"]})]}),e.jsxs("div",{className:"officeList",children:[e.jsxs("div",{className:"office",children:[e.jsx("div",{className:"ico",children:e.jsx(g,{size:16})}),e.jsxs("div",{className:"place",children:[e.jsx("div",{className:"city",children:"Bengaluru (IN)"}),e.jsx("div",{className:"addr",children:"Indiranagar / HSR • Hybrid"})]}),e.jsxs("a",{className:"phone",href:"tel:+910000000000",children:[e.jsx(b,{size:16})," +91 00000 00000"]})]}),e.jsxs("div",{className:"office",children:[e.jsx("div",{className:"ico",children:e.jsx(g,{size:16})}),e.jsxs("div",{className:"place",children:[e.jsx("div",{className:"city",children:"Mumbai (IN)"}),e.jsx("div",{className:"addr",children:"BKC • Partnerships"})]}),e.jsxs("a",{className:"phone",href:"tel:+910000000000",children:[e.jsx(b,{size:16})," +91 00000 00000"]})]}),e.jsxs("div",{className:"office",children:[e.jsx("div",{className:"ico",children:e.jsx(g,{size:16})}),e.jsxs("div",{className:"place",children:[e.jsx("div",{className:"city",children:"San Francisco (US)"}),e.jsx("div",{className:"addr",children:"SoMa • Venture"})]}),e.jsxs("a",{className:"phone",href:"tel:+10000000000",children:[e.jsx(b,{size:16})," +1 000 000 0000"]})]})]})]})]}),e.jsxs(s.Section,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"FAQ"}),e.jsx("p",{className:"secSub",children:"Quick answers to common questions."})]}),e.jsx(J,{})]}),e.jsxs(s.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Prefer email?"}),e.jsxs("p",{children:["Write to ",e.jsx("a",{href:`mailto:${i.general}`,children:i.general})," and we’ll route it."]}),e.jsxs("div",{className:"actions",children:[e.jsx(p,{to:"/internships",className:"btn-ghost","aria-label":"Internships",children:"Internships"}),e.jsxs(p,{to:"/careers",className:"btn-primary","aria-label":"Careers",children:["Careers ",e.jsx(u,{size:18})]})]})]})]})}function K(){const[t,n]=o.useState(!1),[r,a]=o.useState(!1),[c,l]=o.useState(""),h=o.useRef(null);function T(S){var j,y,w,k;S.preventDefault(),l("");const x=new FormData(h.current),C=(j=x.get("name"))==null?void 0:j.trim(),f=(y=x.get("email"))==null?void 0:y.trim();(w=x.get("topic"))==null||w.trim();const P=(k=x.get("message"))==null?void 0:k.trim();if(!C||!f||!P){l("Please fill name, email, and message.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)){l("Please provide a valid email address.");return}n(!0),setTimeout(()=>{var N;n(!1),a(!0);try{(N=h.current)==null||N.reset()}catch{}},900)}return e.jsxs(s.Section,{id:"contact-form",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Write to us"}),e.jsx("p",{className:"secSub",children:"We usually respond within 2–3 working days."})]}),e.jsxs(s.FormWrapper,{children:[e.jsxs("div",{className:"visual",children:[e.jsx("img",{src:v("contact-desk-collab",1400,1200),alt:"",loading:"lazy",decoding:"async"}),e.jsx("div",{className:"orb","aria-hidden":"true"})]}),e.jsxs("form",{ref:h,onSubmit:T,noValidate:!0,children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"name",children:"Your name"}),e.jsx("input",{id:"name",name:"name",type:"text",placeholder:"Jane Doe"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",name:"email",type:"email",placeholder:"jane@example.com"})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"topic",children:"Topic"}),e.jsxs("select",{id:"topic",name:"topic",defaultValue:"General",children:[e.jsx("option",{children:"General"}),e.jsx("option",{children:"Media"}),e.jsx("option",{children:"Partnerships"}),e.jsx("option",{children:"Careers"}),e.jsx("option",{children:"Internships"}),e.jsx("option",{children:"Events"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"phone",children:"Phone (optional)"}),e.jsx("input",{id:"phone",name:"phone",type:"tel",placeholder:"+91 98765 43210"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",rows:6,placeholder:"Tell us a bit about your goal..."})]}),c&&e.jsxs("div",{className:"error",role:"alert",children:[e.jsx(z,{size:16})," ",c]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn-primary",type:"submit",disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx(R,{className:"spin",size:18})," Sending…"]}):e.jsxs(e.Fragment,{children:["Send message ",e.jsx(u,{size:18})]})}),r&&e.jsxs("div",{className:"success","aria-live":"polite",children:[e.jsx(L,{size:16})," Sent. We’ll get back soon."]})]}),e.jsxs("div",{className:"hint",children:["Prefer direct email? ",e.jsx("a",{href:`mailto:${i.general}`,children:i.general})]})]})]})]})}function J(){const t=o.useMemo(()=>[{q:"How do I pitch a partnership?",a:"Use the Partnerships card above to email a brief (problem, approach, why now). If relevant to philanthropy or venture, we’ll route internally."},{q:"Do you fund students or early career fellows?",a:"Yes—see Internships. For independent fellows, check Fellowships under Our Work to view typical tracks and cycles."},{q:"Can I request a speaker for an event?",a:"Email Media with your date, audience size, topic, and preferred format (keynote, panel, fireside)."},{q:"What is your typical response time?",a:"Most inquiries get a response within 2–3 working days. Time-sensitive press requests are prioritized."},{q:"Where can I find updates and stories?",a:"Browse Positive Sum for essays, founder stories, and annual notes."}],[]),[n,r]=o.useState(0);return e.jsx(s.FAQ,{children:t.map((a,c)=>{const l=c===n;return e.jsxs("div",{className:"item"+(l?" open":""),children:[e.jsxs("button",{className:"q","aria-expanded":l,onClick:()=>r(l?-1:c),children:[e.jsx(z,{size:18}),a.q]}),e.jsxs("div",{className:"a",role:"region",children:[e.jsx("p",{children:a.a}),e.jsxs("div",{className:"links",children:[e.jsx(p,{to:"/our-work",children:"Our Work"}),e.jsx(p,{to:"/positive-sum",children:"Positive Sum"}),e.jsx(p,{to:"/internships",children:"Internships"})]})]})]},c)})})}export{ee as default};
