import{d as o,m as z,r as t,j as e,T as F,a as f,k,Y,p as H,K as R,an as O,ao as D,a2 as I,Z as q,ap as M,al as W,aq as V,ar as K,N,ak as _,as as Q,at as U,ac as J}from"./index-f_zt6Rys.js";import{B as Z}from"./index-ekvE1CPL.js";const P=z`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,G=z`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,X=z`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,l={Page:o.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        .btn-primary,
        .btn-ghost,
        .btn-icon {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
            transition: all 0.2s ease;
            cursor: pointer;
        }
        .btn-primary {
            background: var(--primary);
            color: #000;
            border: 1px solid rgb(var(--primary-rgb) / 0.2);
            box-shadow: var(--shadow-sm);
        }
        .btn-primary:hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
        }
        .btn-ghost {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid var(--border);
            color: var(--text);
        }
        .btn-ghost:hover {
            border-color: rgb(var(--primary-rgb) / 0.4);
            transform: translateY(-1px);
        }
        .btn-icon {
            width: 36px;
            height: 36px;
            padding: 0;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
        }
        .btn-icon:hover {
            border-color: rgb(var(--primary-rgb) / 0.4);
            transform: translateY(-1px);
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--card);
            border: 1px solid var(--border);
            transition: all 0.2s ease;
            font-size: 12px;
        }
        .chip.active {
            background: rgb(var(--primary-rgb) / 0.1);
            border-color: rgb(var(--primary-rgb) / 0.4);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }

        :focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
            * {
                animation: none !important;
                transition: none !important;
            }
        }
    `,Breadcrumbs:o.nav`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-5) var(--space-6) var(--space-2);
        font-size: 13px;
        color: var(--text-muted);

        .crumb {
            color: var(--text-muted);
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: all 0.2s ease;
        }
        .crumb:hover {
            color: var(--text);
            border-bottom-color: rgb(var(--primary-rgb) / 0.4);
        }
        .crumb.current {
            color: var(--text);
            pointer-events: none;
        }
        .sep {
            margin: 0 6px;
            opacity: 0.6;
        }
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
            animation: ${P} 0.6s ease both;
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
            font-size: 38px;
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
        }

        .sparkles {
            position: absolute;
            right: clamp(12px, 4vw, 32px);
            top: clamp(12px, 2vw, 24px);
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${G} 3.6s ease-in-out infinite;
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${X} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 32px;
            }
        }
    `,Filters:o.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px var(--space-6) var(--space-4);

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: center;
        }

        .search {
            display: grid;
            grid-template-columns: 24px 1fr;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 8px 12px;
            box-shadow: var(--shadow-sm);
            transition: border-color 0.2s ease;
        }
        .search:focus-within {
            border-color: rgb(var(--primary-rgb) / 0.35);
        }
        .search .ico {
            opacity: 0.8;
        }
        .search input {
            background: transparent;
            border: 0;
            outline: 0;
            color: var(--text);
            font-size: 14px;
        }

        .selects {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .select {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 8px 10px;
            box-shadow: var(--shadow-sm);
        }
        .select select {
            appearance: none;
            background: transparent;
            border: 0;
            color: var(--text);
            font-size: 14px;
            outline: 0;
        }

        .toggles {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .metaRight {
            color: var(--text-muted);
            font-size: 12px;
        }

        @media (max-width: 960px) {
            .row {
                grid-template-columns: 1fr;
            }
            .selects {
                justify-content: flex-start;
            }
        }
    `,List:o.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;

        .roleCard {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            color: var(--text);
            box-shadow: var(--shadow-sm);
            display: grid;
            grid-template-rows: auto 1fr;
            transform: translateY(8px);
            opacity: 0;
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;
            will-change: transform;
        }
        .roleCard.reveal {
            animation: ${P} 0.4s ease both;
            animation-delay: calc(var(--i) * 40ms);
            transform: none;
            opacity: 1;
        }
        .roleCard:hover {
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
            aspect-ratio: 16 / 9;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .roleCard:hover .media img {
            transform: scale(1.05);
        }
        .media .shade {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            mix-blend-mode: soft-light;
        }
        .media .tagRow {
            position: absolute;
            left: 10px;
            bottom: 10px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .media .tag {
            backdrop-filter: blur(2px);
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: rgba(0, 0, 0, 0.2);
            color: #fff;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .bookmark {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: all 0.2s ease;
        }
        .bookmark:hover {
            transform: translateY(-1px);
            border-color: rgb(var(--primary-rgb) / 0.4);
        }

        .body {
            padding: 12px;
            display: grid;
            gap: 10px;
        }
        .title {
            font-size: 16px;
            line-height: 1.3;
        }
        .facts {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .fact {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 6px 10px;
        }

        .skills {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .skills .chip {
            border-radius: 8px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 6px;
            flex-wrap: wrap;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,Empty:o.div`
        grid-column: 1 / -1;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        padding: var(--space-8);
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        .iconWrap {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: rgb(var(--primary-rgb) / 0.12);
            border: 1px solid rgb(var(--primary-rgb) / 0.35);
            color: var(--text);
            margin-bottom: 4px;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
        }
    `,Process:o.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6) var(--space-6) var(--space-4);

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

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }
        .timeline li {
            position: relative;
        }
        .timeline .dot {
            position: absolute;
            top: 12px;
            left: -8px;
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: var(--primary);
            box-shadow: 0 0 0 4px rgb(var(--primary-rgb) / 0.15);
        }
        .timeline .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 12px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .timeline .card:hover {
            transform: translateY(-2px);
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: var(--shadow-md);
        }
        .timeline .k {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            opacity: 0.9;
            padding: 4px 8px;
            border: 1px solid var(--border);
            border-radius: 999px;
            background: var(--card);
        }

        @media (max-width: 960px) {
            .timeline {
                grid-template-columns: 1fr;
            }
            .timeline .dot {
                left: -6px;
            }
        }
    `,FAQ:o.section`
        max-width: 960px;
        margin: 0 auto;
        padding: var(--space-6);
        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
        }

        details {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 10px 12px;
            margin-bottom: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        details[open] {
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: var(--shadow-sm);
        }
        summary {
            cursor: pointer;
            font-weight: 600;
            outline: none;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        summary::after {
            content: "▾";
            float: right;
            opacity: 0.6;
            transition: transform 0.2s ease;
        }
        details[open] summary::after {
            transform: rotate(180deg);
        }
        p {
            color: var(--text-muted);
            margin-top: 8px;
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
        }
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);
    `};function i(d,m=1600,c=900){return`https://picsum.photos/seed/${encodeURIComponent(d)}/${m}/${c}`}const E="internshipBookmarks:v1",ee=[{id:"eng-ai-remote",title:"Software Engineering Intern — AI Tools",track:"Engineering",location:"Remote",duration:"12 weeks",stipend:"₹40,000 / mo",deadline:"2025-12-05",tags:["React","Node","LLMs","Vector DB"],hero:i("eng-ai-tools"),applyLink:"mailto:internships@prerna.collective?subject=Application%20-%20AI%20Tools%20Intern",detailsLink:"/contact"},{id:"product-research-sf",title:"Product Research Intern — Positive Sum",track:"Product",location:"San Francisco",duration:"10 weeks",stipend:"$2,000 / mo",deadline:"2025-12-20",tags:["User Research","Figma","A/B Testing"],hero:i("product-research-sf"),applyLink:"https://forms.gle/9z4qvDemoForm",detailsLink:"/positive-sum"},{id:"design-storytelling-blr",title:"Design & Storytelling Intern",track:"Design",location:"Bengaluru",duration:"8–12 weeks",stipend:"₹30,000 / mo",deadline:"2025-12-15",tags:["Motion","Brand","After Effects"],hero:i("design-storytelling-blr"),applyLink:"/contact",detailsLink:"https://www.emersoncollective.com/"},{id:"philanthropy-analyst-remote",title:"Philanthropy Analyst Intern",track:"Philanthropy",location:"Remote",duration:"8 weeks",stipend:"₹25,000 / mo",deadline:"2025-12-01",tags:["Impact Eval","Data Viz","R/Python"],hero:i("philanthropy-analyst-remote"),applyLink:"mailto:grants@prerna.collective?subject=Application%20-%20Philanthropy%20Analyst%20Intern",detailsLink:"/our-work/philanthropy"},{id:"vc-scout-remote",title:"Venture Capital Scout Intern",track:"Venture",location:"Remote",duration:"12–16 weeks",stipend:"$1,500 / mo",deadline:"2025-12-28",tags:["Deal Flow","Market Maps","Unit Economics"],hero:i("vc-scout-remote"),applyLink:"https://forms.gle/9z4qvDemoForm2",detailsLink:"/our-work/venture-capital"}],ae=["All Tracks","Engineering","Product","Design","Philanthropy","Venture"],re=["All Locations","Remote","Bengaluru","San Francisco"];function ie(){const[d,m]=t.useState(""),[c,y]=t.useState("All Tracks"),[x,S]=t.useState("All Locations"),[h,T]=t.useState(!1),[g,L]=t.useState(!1),[b,A]=t.useState("deadlineAsc"),[u,B]=t.useState(()=>{try{const a=localStorage.getItem(E);return a?JSON.parse(a):[]}catch{return[]}}),C=t.useRef(null),j=t.useRef(null);t.useEffect(()=>{var r;(r=j.current)==null||r.classList.add("mount");const a=setTimeout(()=>{var s;return(s=j.current)==null?void 0:s.classList.remove("mount")},1200);return()=>clearTimeout(a)},[]),t.useEffect(()=>{try{localStorage.setItem(E,JSON.stringify(u))}catch{}},[u]);const v=t.useMemo(()=>{let a=ee.slice();if(d.trim()){const r=d.toLowerCase();a=a.filter(s=>s.title.toLowerCase().includes(r)||s.track.toLowerCase().includes(r)||s.location.toLowerCase().includes(r)||s.tags.some(n=>n.toLowerCase().includes(r)))}return c!=="All Tracks"&&(a=a.filter(r=>r.track===c)),x!=="All Locations"&&(a=a.filter(r=>r.location===x)),g&&(a=a.filter(r=>r.location.toLowerCase()==="remote")),h&&(a=a.filter(r=>/\d/.test(r.stipend))),a.sort((r,s)=>{const n=new Date(r.deadline).getTime(),p=new Date(s.deadline).getTime();return b==="deadlineAsc"?n-p:b==="deadlineDesc"?p-n:r.title.localeCompare(s.title)}),a},[d,c,x,h,g,b]);t.useEffect(()=>{const a=C.current;if(!a)return;const r=a.querySelectorAll(".roleCard"),s=new IntersectionObserver(n=>{n.forEach(p=>{p.isIntersecting&&(p.target.classList.add("reveal"),s.unobserve(p.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.1});return r.forEach(n=>s.observe(n)),()=>s.disconnect()},[v]);function $(a){B(r=>r.includes(a)?r.filter(s=>s!==a):[...r,a])}function w(a){return u.includes(a)}return e.jsxs(l.Page,{children:[e.jsxs(l.Hero,{ref:j,children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:i("internships-hero",2400,1200),srcSet:`${i("internships-hero",1200,600)} 1200w, ${i("internships-hero",1800,900)} 1800w, ${i("internships-hero",2400,1200)} 2400w`,sizes:"(max-width: 720px) 100vw, 1200px",alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"badge",children:[e.jsx(F,{size:16}),"Mission-first internships, built for learning"]}),e.jsxs("h1",{children:["Internships ",e.jsx("span",{className:"accent",children:"Hub"})]}),e.jsx("p",{className:"sub",children:"Explore open roles across engineering, product, design, philanthropy, and venture. Learn fast, ship real work, and amplify public-good outcomes."}),e.jsxs("div",{className:"actions",children:[e.jsxs("a",{href:"#open-roles",className:"btn-primary",children:["View open roles ",e.jsx(f,{size:18,style:{marginLeft:8}})]}),e.jsxs("a",{href:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",className:"btn-ghost",target:"_blank",rel:"noreferrer",children:["Program guide ",e.jsx(k,{size:16})]})]})]})]}),e.jsx(Z,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(l.Filters,{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"search",children:[e.jsx(Y,{size:18,className:"ico"}),e.jsx("input",{value:d,onChange:a=>m(a.target.value),placeholder:"Search title, skills, tags…","aria-label":"Search internships"})]}),e.jsxs("div",{className:"selects",children:[e.jsxs("label",{className:"select",children:[e.jsx(H,{size:16}),e.jsx("select",{value:c,onChange:a=>y(a.target.value),"aria-label":"Track",children:ae.map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("label",{className:"select",children:[e.jsx(R,{size:16}),e.jsx("select",{value:x,onChange:a=>S(a.target.value),"aria-label":"Location",children:re.map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("label",{className:"select",children:[e.jsx(O,{size:16}),e.jsxs("select",{value:b,onChange:a=>A(a.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"deadlineAsc",children:"Deadline ↑"}),e.jsx("option",{value:"deadlineDesc",children:"Deadline ↓"}),e.jsx("option",{value:"title",children:"Title A–Z"})]})]})]})]}),e.jsxs("div",{className:"toggles",children:[e.jsxs("button",{type:"button",className:"chip"+(g?" active":""),onClick:()=>L(a=>!a),"aria-pressed":g,children:[e.jsx(D,{size:15}),"Remote only"]}),e.jsxs("button",{type:"button",className:"chip"+(h?" active":""),onClick:()=>T(a=>!a),"aria-pressed":h,children:[e.jsx(I,{size:15}),"Paid only"]}),e.jsx("div",{className:"metaRight",children:e.jsxs("span",{className:"count",children:[v.length," roles • ",u.length," saved"]})})]})]}),e.jsxs(l.List,{id:"open-roles",ref:C,children:[v.map((a,r)=>e.jsxs("article",{className:"roleCard",style:{"--i":r},children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:a.hero,alt:"",loading:"lazy",decoding:"async",srcSet:`${i(a.id,600,360)} 600w, ${i(a.id,900,540)} 900w, ${i(a.id,1200,720)} 1200w`,sizes:"(max-width: 720px) 100vw, 560px"}),e.jsx("div",{className:"shade"}),e.jsxs("div",{className:"tagRow",children:[e.jsxs("span",{className:"tag",children:[e.jsx(q,{size:14}),a.track]}),e.jsxs("span",{className:"tag",children:[e.jsx(R,{size:14}),a.location]})]}),e.jsx("button",{className:"bookmark",title:w(a.id)?"Remove bookmark":"Save for later",onClick:()=>$(a.id),"aria-pressed":w(a.id),children:w(a.id)?e.jsx(M,{size:18}):e.jsx(W,{size:18})})]}),e.jsxs("div",{className:"body",children:[e.jsx("h3",{className:"title",children:a.title}),e.jsxs("div",{className:"facts",children:[e.jsxs("span",{className:"fact",children:[e.jsx(V,{size:16}),a.duration]}),e.jsxs("span",{className:"fact",children:[e.jsx(K,{size:16}),"Apply by ",new Date(a.deadline).toLocaleDateString()]}),e.jsxs("span",{className:"fact",children:[e.jsx(I,{size:16}),a.stipend]})]}),e.jsx("ul",{className:"skills",children:a.tags.map(s=>e.jsx("li",{className:"chip",children:s},s))}),e.jsxs("div",{className:"actions",children:[String(a.detailsLink).startsWith("http")?e.jsxs("a",{href:a.detailsLink,className:"btn-ghost",target:"_blank",rel:"noreferrer",children:["Details ",e.jsx(k,{size:16})]}):e.jsx(N,{to:a.detailsLink,className:"btn-ghost",children:"Details"}),String(a.applyLink).startsWith("http")?e.jsxs("a",{href:a.applyLink,className:"btn-primary",target:"_blank",rel:"noreferrer",children:["Apply ",e.jsx(f,{size:18})]}):String(a.applyLink).startsWith("mailto:")?e.jsxs("a",{href:a.applyLink,className:"btn-primary",children:["Apply ",e.jsx(f,{size:18})]}):e.jsxs(N,{to:a.applyLink,className:"btn-primary",children:["Apply ",e.jsx(f,{size:18})]}),e.jsx("button",{type:"button",className:"btn-icon",onClick:async()=>{try{await navigator.clipboard.writeText(`${window.location.origin}/internships#${a.id}`)}catch{}},title:"Copy link","aria-label":"Copy role link",children:e.jsx(_,{size:18})})]})]})]},a.id)),v.length===0&&e.jsxs(l.Empty,{children:[e.jsx("div",{className:"iconWrap",children:e.jsx(Q,{size:28})}),e.jsx("h4",{children:"No roles match your filters"}),e.jsx("p",{children:"Try another track, location, or clear the search."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn-ghost",onClick:()=>m(""),children:"Clear search"}),e.jsx("button",{className:"btn-primary",onClick:()=>{y("All Tracks"),S("All Locations"),L(!1),T(!1),A("deadlineAsc")},children:"Reset filters"})]})]})]}),e.jsxs(l.Process,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Application Process"}),e.jsx("p",{className:"secSub",children:"Transparent steps with quick turnarounds."})]}),e.jsxs("ol",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"k",children:[e.jsx(U,{size:18}),"Step 1"]}),e.jsx("h3",{children:"Apply"}),e.jsx("p",{children:"Submit your CV/portfolio and a short “why this track” note. We read every application."})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"k",children:[e.jsx(D,{size:18}),"Step 2"]}),e.jsx("h3",{children:"Task"}),e.jsx("p",{children:"A small, real-world task (2–4 hrs). We value clarity, not tricks."})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"k",children:[e.jsx(J,{size:18}),"Step 3"]}),e.jsx("h3",{children:"Decision"}),e.jsx("p",{children:"Offer with start dates, mentor pairing, and resources to ramp quickly."})]})]})]})]}),e.jsxs(l.FAQ,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"FAQs"}),e.jsx("p",{className:"secSub",children:"A few quick answers before you apply."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Who can apply?"}),e.jsx("p",{children:"Students, recent grads, and career switchers with strong fundamentals and curiosity."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is the internship paid?"}),e.jsx("p",{children:"Most roles are paid; see each card’s stipend. We avoid unpaid work unless the candidate insists."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Remote or on-site?"}),e.jsx("p",{children:"Both options exist. Filter by location to see what fits best."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How long is the program?"}),e.jsx("p",{children:"Typically 8–12 weeks. Exact duration is on each listing."})]})]}),e.jsxs(l.CTA,{className:"card brandish",children:[e.jsx("h3",{children:"Didn’t find the perfect role?"}),e.jsx("p",{children:"Pitch your own internship—propose a project and the mentor you want to learn from."}),e.jsxs("div",{className:"actions",children:[e.jsx(N,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:"Contact"}),e.jsxs("a",{href:"https://forms.gle/9z4qvDemoForm3",className:"btn-ghost",target:"_blank",rel:"noreferrer",children:["Propose a project ",e.jsx(k,{size:16})]})]})]})]})}export{ie as default};
