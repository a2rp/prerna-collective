import{d as s,m as u,r as p,j as e,T as z,u as T,Q as C,K as L,a as f,n as k,am as A,W as H,I,N as m,f as x,k as P,q as j,$ as Y,O as F,_ as y,l as R,o as D,i as B,au as q,av as E,x as _}from"./index-f_zt6Rys.js";import{B as G}from"./index-ekvE1CPL.js";const w=u`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,M=u`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`,$=u`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,i={Page:s.main`
        display: grid;
        gap: var(--space-6);
        min-height: 100vh;
        color: var(--text);
    `,Hero:s.section`
        position: relative;
        isolation: isolate;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        overflow: hidden;
        animation: ${w} 0.4s ease both;

        .bg {
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
            filter: saturate(1.05) contrast(1.05);
        }
        .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    900px 400px at 15% 20%,
                    rgb(var(--primary-rgb) / 0.14),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.1),
                    transparent 55%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            padding: 56px var(--space-6) var(--space-6);
            display: grid;
            gap: 10px;
        }
        .eyebrow {
            width: fit-content;
            box-shadow: var(--shadow-sm);
            animation: ${$} 1.6s ease both;
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.18),
                rgb(var(--primary-rgb) / 0.06),
                rgb(var(--primary-rgb) / 0.18)
            );
            background-size: 200% 100%;
        }
        h1 {
            font-size: 28px;
            line-height: 1.2;
            background: linear-gradient(90deg, var(--text), var(--link));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .sub {
            color: var(--text-muted);
            max-width: 820px;
        }

        .spark {
            position: absolute;
            top: 14px;
            right: 14px;
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${M} 3.6s ease-in-out infinite;
        }
    `,MetaBar:s.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        margin-top: 8px;
        border-radius: var(--radius-md);
        background: var(--card);
        border: 1px solid var(--border);

        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr auto;
            align-items: center;
        }

        .item {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: var(--radius-sm);
            background: rgb(var(--primary-rgb) / 0.06);
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
            width: fit-content;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            a {
                text-decoration: none;
            }
        }
    `,YearSwitch:s.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        animation: ${w} 0.35s ease both;

        @media (min-width: 900px) {
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
        }

        .years {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .yearBtn {
                cursor: pointer;
            }
            .active {
                background: rgb(var(--primary-rgb) / 0.14);
                border-color: rgb(var(--primary-rgb) / 0.24);
            }
        }

        .links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: var(--radius-sm);
                border: 1px dashed rgb(var(--primary-rgb) / 0.28);
                color: var(--link);
            }
            .link:hover {
                background: rgb(var(--primary-rgb) / 0.06);
                text-decoration: none;
            }
        }
    `,HighlightRow:s.section`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .stat {
            padding: 14px;
            display: grid;
            gap: 2px;
            text-align: center;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .stat:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .v {
            font-size: 26px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .k {
            font-weight: 700;
        }
        .n {
            color: var(--text-muted);
            font-size: 12px;
        }
    `,SpeakerSection:s.section`
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
    `,SpeakerGrid:s.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }

        .sp {
            position: relative;
            overflow: hidden;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .sp:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .pic img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            display: block;
        }
        .meta {
            padding: 10px;
            display: grid;
            gap: 2px;
        }
        .name {
            font-weight: 800;
        }
        .title {
            color: var(--text-muted);
            font-size: 12px;
        }
        .social {
            position: absolute;
            top: 10px;
            right: 10px;
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border-radius: var(--radius-sm);
            background: rgb(var(--primary-rgb) / 0.14);
            border: 1px solid rgb(var(--primary-rgb) / 0.24);
        }
        .social a {
            color: var(--text);
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
        }
        .social a:hover {
            color: var(--link-hover);
        }
    `,TrackFilter:s.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        @media (min-width: 840px) {
            grid-template-columns: auto 1fr;
            align-items: center;
        }
        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip.active {
            background: rgb(var(--primary-rgb) / 0.14);
            border-color: rgb(var(--primary-rgb) / 0.24);
        }
    `,StartupGrid:s.section`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: 1180px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .startup {
            color: var(--text);
            text-decoration: none;
            overflow: hidden;
            display: grid;
            grid-template-rows: 160px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .startup:hover {
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
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .startup:hover .media img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
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
        .oneLine {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }
        .empty {
            display: grid;
            place-items: center;
            padding: 20px;
            text-align: center;
            .ico {
                color: var(--text-muted);
                margin-bottom: 6px;
            }
        }
    `,Schedule:s.section`
        padding: 10px;
        .secHeader {
            margin: 6px 8px 10px;
        }
        .secHeader h2 {
            font-size: 20px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 12px;
        }

        .list {
            list-style: none;
            display: grid;
            gap: 6px;
            margin: 0;
            padding: 0 4px 8px;
        }
        .row {
            display: grid;
            gap: 8px;
            align-items: center;
            grid-template-columns: 76px 1fr auto;
            border: 1px dashed var(--border);
            border-radius: var(--radius-md);
            padding: 8px 10px;
            background: var(--card);
        }
        .row .t {
            font-weight: 800;
        }
        .row .title {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .row .sub {
            color: var(--text-muted);
            font-size: 12px;
        }
    `,Partners:s.section`
        .secHeader {
            margin-bottom: var(--space-3);
        }
        .secHeader h2 {
            font-size: 22px;
        }
    `,PartnerRow:s.div`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(6, 1fr);
        @media (max-width: 1180px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        .partner {
            display: grid;
            place-items: center;
            padding: 12px;
            min-height: 96px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .partner:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .partner img {
            max-width: 100%;
            height: 46px;
            object-fit: contain;
            opacity: 0.85;
        }
    `,FAQ:s.section`
        padding: 10px;
        .secHeader {
            margin: 6px 8px 10px;
        }
        .secHeader h2 {
            font-size: 20px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 12px;
        }

        .it {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 0;
            background: var(--card);
            overflow: hidden;
            margin-bottom: 8px;
            transition: border-color 0.2s ease;
        }
        .it[open] {
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        summary {
            list-style: none;
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px;
            border-bottom: 1px dashed var(--border);
            font-weight: 700;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        .ans {
            padding: 10px;
            color: var(--text);
        }
    `,CTA:s.section`
        display: grid;
        gap: 10px;
        align-items: center;
        padding: var(--space-6);
        border-radius: var(--radius-lg);

        @media (min-width: 960px) {
            grid-template-columns: 1fr auto;
        }

        .left {
            display: grid;
            gap: 8px;
        }
        h3 {
            font-size: 22px;
        }
        p {
            color: var(--text-muted);
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .right .chip {
            text-decoration: none;
        }
    `};function n(o,d=1600,r=900){return`https://picsum.photos/seed/${encodeURIComponent(o)}/${d}/${r}`}const b=["2025","2024","2023"],N=[{key:"health",label:"Health & Bio"},{key:"climate",label:"Climate & Energy"},{key:"civic",label:"Civic Tech"},{key:"ai",label:"AI for Public Good"}],Q={2025:{hero:{date:"Feb 14, 2025",time:"10:00–17:30 IST",venue:"Bengaluru • Indiranagar",tagline:"Founders building compounding public-good spillovers.",bg:n("demo-2025-hero",2400,1200),regLink:"https://forms.gle/PrernaDemoDay2025",streamLink:"https://www.youtube.com/",agendaPdf:"#"},highlights:[{k:"Startups",v:"18",note:"Seed to Series-A"},{k:"Sectors",v:"4",note:"AI, Climate, Health, Civic"},{k:"Attendees",v:"350+",note:"Investors & Operators"},{k:"Demos",v:"24",note:"Live on stage"}],speakers:[{name:"Ananya Rao",title:"Partner, Frontier Capital",img:n("spk-ananya-rao",600,600),link:"https://www.linkedin.com/"},{name:"Dr. Vivek Menon",title:"AI Safety Researcher",img:n("spk-vivek-menon",600,600),link:"https://twitter.com/"},{name:"Neha Kapoor",title:"Founder, CivicGrid",img:n("spk-neha-kapoor",600,600),link:"https://github.com/"}],startups:[{name:"HelixPath",stage:"health",oneLine:"Point-of-care genomics with ultra-cheap readout.",img:n("s-helixpath",900,600),site:"https://example.com/"},{name:"ThermaFlux",stage:"climate",oneLine:"Heat batteries to decarbonize industrial steam.",img:n("s-thermaflux",900,600),site:"https://example.com/"},{name:"CommonsAI",stage:"ai",oneLine:"Verified models for public-interest tooling.",img:n("s-commonsai",900,600),site:"https://example.com/"},{name:"CivicGrid",stage:"civic",oneLine:"Open infra for city participation at scale.",img:n("s-civicgrid",900,600),site:"https://example.com/"}],schedule:[{t:"10:00",title:"Doors & Check-in",sub:"Badges, coffee, maker tables"},{t:"10:30",title:"Opening Remarks",sub:"Mission & format"},{t:"10:45",title:"Founder Lightning — AI",sub:"5 x 4-min demos + Q&A"},{t:"11:25",title:"Panel — Evidence-led Impact",sub:"With investors & practitioners"},{t:"12:10",title:"Break & Demos",sub:"Hands-on booths"},{t:"13:00",title:"Founder Lightning — Climate",sub:"5 x 4-min demos + Q&A"},{t:"14:00",title:"Lunch & Networking",sub:"Meet the teams"},{t:"15:00",title:"Founder Lightning — Health",sub:"4 x 4-min demos + Q&A"},{t:"15:45",title:"Founder Lightning — Civic",sub:"4 x 4-min demos + Q&A"},{t:"16:30",title:"Keynote",sub:"Compounding public-good spillovers"},{t:"17:10",title:"Close & Social",sub:"Community announcements"}],partners:[{name:"Frontier Capital",img:n("p-frontier",400,200),link:"https://example.com/"},{name:"Scale Lab",img:n("p-scale-lab",400,200),link:"https://example.com/"},{name:"Civic Commons",img:n("p-civic-commons",400,200),link:"https://example.com/"}],faqs:[{q:"Who should attend?",a:"Investors, operators, researchers, policy folks, and builders who care about AI, climate, health, and civic tech with measurable public-good spillovers."},{q:"Is there a livestream?",a:"Yes. We will stream the main stage on YouTube. A few hands-on demos are in-person only."},{q:"How are teams selected?",a:"Evidence of traction, clarity of problem framing, credible pathway to scale, and alignment with mission-first outcomes."}]},2024:{hero:{date:"Feb 10, 2024",time:"10:00–17:00 IST",venue:"Bengaluru • Koramangala",tagline:"From prototypes to public goods.",bg:n("demo-2024-hero",2400,1200),regLink:"https://forms.gle/PrernaDemoDay2024",streamLink:"https://www.youtube.com/",agendaPdf:"#"},highlights:[{k:"Startups",v:"14",note:"Prototype to seed"},{k:"Sectors",v:"4",note:"AI, Climate, Health, Civic"},{k:"Attendees",v:"300+",note:"Full house"},{k:"Demos",v:"20",note:"Live"}],speakers:[],startups:[],schedule:[],partners:[],faqs:[]},2023:{hero:{date:"Feb 05, 2023",time:"10:00–16:30 IST",venue:"Bengaluru • MG Road",tagline:"Early sparks, durable arcs.",bg:n("demo-2023-hero",2400,1200),regLink:"https://forms.gle/PrernaDemoDay2023",streamLink:"https://www.youtube.com/",agendaPdf:"#"},highlights:[{k:"Startups",v:"9",note:"Earliest stage"},{k:"Sectors",v:"3",note:"AI, Health, Civic"},{k:"Attendees",v:"180+",note:"Community"},{k:"Demos",v:"12",note:"Live"}],speakers:[],startups:[],schedule:[],partners:[],faqs:[]}};function W(){const{search:o}=_();return p.useMemo(()=>new URLSearchParams(o),[o])}function O(o=b[0]){const d=W(),r=E(),l=d.get("year");return[b.includes(l||"")?l:o,c=>{const a=new URLSearchParams(window.location.search);c?a.set("year",c):a.delete("year"),r(`/demo-day?${a.toString()}`,{replace:!1})}]}function V(){const[o,d]=O("2025"),r=Q[o],[l,h]=p.useState("all"),g=p.useRef(null);p.useEffect(()=>{var a;(a=g.current)==null||a.scrollIntoView({behavior:"smooth",block:"start"})},[o]);const c=p.useMemo(()=>{var a;return(a=r==null?void 0:r.startups)!=null&&a.length?l==="all"?r.startups:r.startups.filter(t=>t.stage===l):[]},[r,l]);return e.jsxs(i.Page,{ref:g,children:[e.jsxs(i.Hero,{children:[e.jsxs("div",{className:"bg","aria-hidden":"true",children:[e.jsx("img",{src:r.hero.bg,alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"eyebrow chip",children:[e.jsx(z,{size:14}),"Demo Day • ",o]}),e.jsx("h1",{children:"Showcasing builders of positive-sum progress"}),e.jsx("p",{className:"sub",children:r.hero.tagline}),e.jsxs(i.MetaBar,{className:"card",children:[e.jsxs("div",{className:"item",children:[e.jsx(T,{size:18}),e.jsx("span",{children:r.hero.date})]}),e.jsxs("div",{className:"item",children:[e.jsx(C,{size:18}),e.jsx("span",{children:r.hero.time})]}),e.jsxs("div",{className:"item",children:[e.jsx(L,{size:18}),e.jsx("span",{children:r.hero.venue})]}),e.jsxs("nav",{className:"actions",children:[e.jsxs("a",{href:r.hero.regLink,target:"_blank",rel:"noreferrer",className:"btn-primary","aria-label":"Register",children:["Register ",e.jsx(f,{size:18})]}),e.jsxs("a",{href:r.hero.streamLink,target:"_blank",rel:"noreferrer",className:"btn-ghost","aria-label":"Watch stream",children:[e.jsx(k,{size:18}),"Watch live"]}),e.jsxs("a",{href:r.hero.agendaPdf,className:"btn-ghost","aria-label":"Download agenda",children:[e.jsx(A,{size:18}),"Agenda"]})]})]})]}),e.jsx("div",{className:"spark",children:e.jsx(H,{size:18})})]}),e.jsx(G,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(i.YearSwitch,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx(I,{size:18}),e.jsx("span",{children:"Year"})]}),e.jsx("div",{className:"years",children:b.map(a=>e.jsx("button",{className:"chip yearBtn"+(a===o?" active":""),onClick:()=>d(a),"aria-pressed":a===o,title:`Switch to ${a}`,children:a},a))}),e.jsxs("div",{className:"links",children:[e.jsxs(m,{to:"/positive-sum",className:"link",children:["Highlights ",e.jsx(x,{size:16})]}),e.jsxs(m,{to:"/our-work/venture-capital",className:"link",children:["Venture ",e.jsx(x,{size:16})]}),e.jsxs(m,{to:"/our-work/fellowships",className:"link",children:["Fellowships ",e.jsx(x,{size:16})]})]})]}),e.jsx(i.HighlightRow,{children:r.highlights.map((a,t)=>e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"v",children:a.v}),e.jsx("div",{className:"k",children:a.k}),e.jsx("div",{className:"n",children:a.note})]},t))}),r.speakers.length>0&&e.jsxs(i.SpeakerSection,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Speakers"}),e.jsx("p",{className:"secSub",children:"Operators, investors, researchers, and founders."})]}),e.jsx(i.SpeakerGrid,{children:r.speakers.map((a,t)=>e.jsxs("div",{className:"sp card",children:[e.jsx("div",{className:"pic",children:e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"title",children:a.title})]}),e.jsx("div",{className:"social",children:e.jsx("a",{href:a.link,target:"_blank",rel:"noreferrer",title:"Open profile",children:e.jsx(P,{size:16})})})]},t))})]}),e.jsxs(i.TrackFilter,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx(j,{size:18}),e.jsx("span",{children:"Tracks"})]}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{className:"chip"+(l==="all"?" active":""),onClick:()=>h("all"),children:"All"}),N.map(a=>e.jsx("button",{className:"chip"+(l===a.key?" active":""),onClick:()=>h(a.key),children:a.label},a.key))]})]}),e.jsxs(i.StartupGrid,{children:[c.map((a,t)=>{var v;return e.jsxs("a",{href:a.site,target:"_blank",rel:"noreferrer",className:"startup card",children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",decoding:"async"}),e.jsx("div",{className:"overlay"}),e.jsx("span",{className:"tag chip",children:a.name})]}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"oneLine",children:a.oneLine}),e.jsxs("div",{className:"pill",children:[e.jsx(Y,{size:14})," ",((v=N.find(S=>S.key===a.stage))==null?void 0:v.label)||"Track"]})]})]},t)}),c.length===0&&e.jsxs("div",{className:"empty card",children:[e.jsx("div",{className:"ico",children:e.jsx(j,{size:22})}),e.jsx("div",{className:"msg",children:"No startups in this filter."})]})]}),r.schedule.length>0&&e.jsxs(i.Schedule,{id:"schedule",className:"card",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Schedule"}),e.jsx("p",{className:"secSub",children:"Main stage timings (IST)"})]}),e.jsx("ul",{className:"list",children:r.schedule.map((a,t)=>e.jsxs("li",{className:"row",children:[e.jsx("div",{className:"t",children:a.t}),e.jsxs("div",{className:"title",children:[e.jsx(F,{size:16}),a.title]}),e.jsx("div",{className:"sub",children:a.sub})]},t))})]}),r.partners.length>0&&e.jsxs(i.Partners,{children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"Partners"}),e.jsx("p",{className:"secSub",children:"Thanks to the folks who make this possible."})]}),e.jsx(i.PartnerRow,{children:r.partners.map((a,t)=>e.jsx("a",{className:"partner card",href:a.link,target:"_blank",rel:"noreferrer",title:a.name,children:e.jsx("img",{src:a.img,alt:a.name,loading:"lazy",decoding:"async"})},t))})]}),r.faqs.length>0&&e.jsxs(i.FAQ,{className:"card",children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("h2",{children:"FAQ"}),e.jsx("p",{className:"secSub",children:"Everything else you might be wondering."})]}),e.jsxs("details",{className:"it",open:!0,children:[e.jsxs("summary",{children:[e.jsx(y,{size:16}),r.faqs[0].q]}),e.jsx("div",{className:"ans",children:r.faqs[0].a})]}),r.faqs.slice(1).map((a,t)=>e.jsxs("details",{className:"it",children:[e.jsxs("summary",{children:[e.jsx(y,{size:16}),a.q]}),e.jsx("div",{className:"ans",children:a.a})]},t))]}),e.jsxs(i.CTA,{className:"card brandish",children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:"Join the next one"}),e.jsx("p",{children:"Subscribe for updates, or reach out if you’re building in these spaces."}),e.jsxs("div",{className:"links",children:[e.jsxs("a",{href:r.hero.regLink,target:"_blank",rel:"noreferrer",className:"btn-primary",children:["Register interest ",e.jsx(f,{size:18})]}),e.jsxs("a",{href:r.hero.streamLink,target:"_blank",rel:"noreferrer",className:"btn-ghost",children:[e.jsx(k,{size:18}),"Watch last stream"]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("a",{className:"chip",href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",title:"LinkedIn",children:[e.jsx(R,{size:16})," LinkedIn"]}),e.jsxs("a",{className:"chip",href:"https://twitter.com/",target:"_blank",rel:"noreferrer",title:"Twitter",children:[e.jsx(D,{size:16})," Twitter"]}),e.jsxs("a",{className:"chip",href:"https://github.com/",target:"_blank",rel:"noreferrer",title:"GitHub",children:[e.jsx(B,{size:16})," GitHub"]}),e.jsxs(m,{className:"chip",to:"/contact",title:"Contact",children:[e.jsx(q,{size:16})," Contact"]})]})]})]})}export{V as default};
