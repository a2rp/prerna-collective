import{d as x,m as W,r as t,j as e,ay as E,N as d,aw as u,at as j,w as N,Q as w,T as v,aB as O,au as c,aD as U,aE as k,ai as R,aF as B,aG as I,k as f,aH as H,aI as P}from"./index-f_zt6Rys.js";import{B as A}from"./index-ekvE1CPL.js";const g=W`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`,M=W`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,r={Page:x.main`
        display: block;
        color: var(--text);
        transition: background 0.25s ease, color 0.25s ease;

        &.saved {
            outline: none;
            box-shadow: 0 0 0 0 transparent;
            /* little “saved” pulse on the Save button wrapper, handled locally */
        }
    `,Hero:x.header`
        position: relative;
        overflow: hidden;
        margin-bottom: var(--space-6);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--card);

        .media {
            position: absolute;
            inset: 0;
            z-index: 0;
            opacity: 0.28;
            filter: saturate(1.05) contrast(1.05);
        }
        .media img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transform: scale(1.02);
        }
        .media .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    800px 300px at 15% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(180deg, transparent, var(--card));
            mix-blend-mode: soft-light;
        }

        .txt {
            position: relative;
            z-index: 1;
            padding: var(--space-6);
            animation: ${g} 0.35s ease both;
        }

        .eyebrow {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 10px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            border-radius: 999px;
            font-size: 12px;
            box-shadow: var(--shadow-sm);
        }

        h1 {
            font-size: 28px;
            line-height: 1.15;
            margin: 8px 0 6px;
        }

        .sub {
            color: var(--text-muted);
            max-width: 900px;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        @media (max-width: 720px) {
            .media img {
                height: 180px;
            }
            .txt {
                padding: var(--space-4);
            }
            h1 {
                font-size: 24px;
            }
        }
    `,StatusRow:x.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: var(--space-6);

        .stat {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            animation: ${g} 0.25s ease both;
        }
        .meta .k {
            font-size: 12px;
            color: var(--text-muted);
        }
        .meta .v {
            font-weight: 700;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Layout:x.section`
        display: grid;
        grid-template-columns: 260px minmax(0, 1fr);
        gap: 16px;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .toc {
            position: sticky;
            top: calc(var(--site-header-h, 60px) + 10px);
            align-self: start;
            padding: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            animation: ${g} 0.3s ease both;
        }

        .tocTitle {
            font-weight: 700;
            font-size: 13px;
            margin: 2px 2px 6px;
        }

        .toc ul {
            list-style: none;
        }
        .toc li {
            margin: 2px 0;
        }

        .tocLink {
            display: grid;
            grid-template-columns: 20px 1fr;
            align-items: center;
            gap: 8px;
            padding: 6px 8px;
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--text);
            border: 1px solid transparent;
            transition: transform 0.12s ease, background 0.15s ease,
                border-color 0.15s ease;
        }
        .tocLink:hover {
            background: rgb(var(--primary-rgb) / 0.06);
            border-color: rgb(var(--primary-rgb) / 0.18);
        }
        .tocLink.active {
            background: rgb(var(--primary-rgb) / 0.12);
            border-color: rgb(var(--primary-rgb) / 0.22);
            transform: translateY(-1px);
            box-shadow: var(--shadow-sm);
        }

        .tocFooter {
            display: grid;
            grid-auto-flow: column;
            gap: 8px;
            margin-top: 10px;
        }
        .miniLink {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--text);
            background: var(--card);
        }
        .miniLink:hover {
            background: rgb(var(--primary-rgb) / 0.06);
        }

        .contentCol {
            min-width: 0;
        }
        .sec {
            padding: var(--space-4);
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            animation: ${g} 0.25s ease both;
            margin-bottom: var(--space-4);
        }

        .gridTwo {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .gridTwo {
                grid-template-columns: 1fr;
            }
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .twoCol .panel {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-md);
            overflow: hidden;
        }
        .twoCol img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transform: scale(1.02);
            transition: transform 0.6s ease;
        }
        .twoCol .panel:hover img {
            transform: scale(1.06);
        }

        .list {
            padding-left: 18px;
        }
        .list li {
            margin: 6px 0;
        }

        .bullets {
            list-style: none;
            display: grid;
            gap: 8px;
            padding: 10px;
        }
        .bullets li {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px dashed var(--border);
            border-radius: var(--radius-md);
            padding: 8px 10px;
            background: rgb(var(--primary-rgb) / 0.06);
        }

        .note {
            margin-top: 8px;
            font-size: 12px;
            color: var(--text-muted);
            border-left: 3px solid rgb(var(--primary-rgb) / 0.35);
            padding-left: 10px;
        }

        .prefs {
            margin-top: 8px;
            padding: 10px;
            border-radius: var(--radius-md);
            background: var(--surface-brand-1);
            border: 1px solid var(--border);
        }
        .prefs .row {
            display: grid;
            grid-template-columns: 44px 1fr;
            gap: 10px;
            align-items: center;
            padding: 8px 6px;
            border-radius: var(--radius-md);
        }
        .prefs .row + .row {
            margin-top: 6px;
        }
        .prefs .meta .t {
            font-weight: 700;
        }
        .prefs .meta .d {
            font-size: 12px;
            color: var(--text-muted);
        }

        .prefs .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        /* Switch */
        .switch {
            position: relative;
            width: 40px;
            height: 22px;
            display: inline-block;
        }
        .switch input {
            display: none;
        }
        .slider {
            position: absolute;
            inset: 0;
            background: rgb(var(--primary-rgb) / 0.18);
            border: 1px solid rgb(var(--primary-rgb) / 0.22);
            border-radius: 999px;
            transition: background 0.2s ease, border-color 0.2s ease;
        }
        .slider::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--card);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease;
        }
        .switch input:checked + .slider {
            background: rgb(var(--primary-rgb) / 0.45);
            border-color: rgb(var(--primary-rgb) / 0.55);
        }
        .switch input:checked + .slider::after {
            transform: translateX(18px);
        }
    `,SecHeader:x.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .iconWrap {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
            animation: ${M} 3.6s ease-in-out infinite;
        }

        h2 {
            font-size: 18px;
        }

        .iconBtn {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            cursor: pointer;
            transition: transform 0.08s ease, background 0.15s ease;
        }
        .iconBtn:hover {
            transform: translateY(-1px);
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .iconBtn:active {
            transform: translateY(0);
        }

        .copied {
            margin-left: 6px;
            font-size: 12px;
            color: var(--text-muted);
            animation: ${g} 0.2s ease both;
        }
    `,BottomNav:x.nav`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 12px;
        margin-top: var(--space-6);
        border-radius: var(--radius-lg);
    `};function T(l,i=1600,h=900){return`https://picsum.photos/seed/${encodeURIComponent(l)}/${i}/${h}`}const L="prerna:privacy-consent:v1",y=[{id:"overview",icon:e.jsx(j,{}),title:"Overview"},{id:"data-we-collect",icon:e.jsx(R,{}),title:"Data We Collect"},{id:"how-we-use-data",icon:e.jsx(B,{}),title:"How We Use Data"},{id:"cookies",icon:e.jsx(I,{}),title:"Cookies & Local Storage"},{id:"legal-bases",icon:e.jsx(u,{}),title:"Legal Bases"},{id:"sharing",icon:e.jsx(H,{}),title:"Sharing & Processors"},{id:"your-rights",icon:e.jsx(k,{}),title:"Your Rights"},{id:"security",icon:e.jsx(P,{}),title:"Security"},{id:"retention",icon:e.jsx(w,{}),title:"Data Retention"},{id:"contact",icon:e.jsx(N,{}),title:"Contact & Requests"}];function q(l=new Date("2025-11-12T00:00:00+05:30")){const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=b=>String(b).padStart(2,"0");return`${i[l.getMonth()]} ${h(l.getDate())}, ${l.getFullYear()} IST`}function G(){const l=t.useRef(null),i=t.useRef({}),[h,b]=t.useState(y[0].id),[n,C]=t.useState(null),[m,S]=t.useState(()=>{try{const s=localStorage.getItem(L);return s?JSON.parse(s):{functional:!0,analytics:!1,marketing:!1}}catch{return{functional:!0,analytics:!1,marketing:!1}}});t.useEffect(()=>{try{localStorage.setItem(L,JSON.stringify(m))}catch{}},[m]),t.useEffect(()=>{const s=new IntersectionObserver(a=>{a.forEach(p=>{p.isIntersecting&&b(p.target.id)})},{root:null,rootMargin:"0px 0px -70% 0px",threshold:.1});return y.forEach(({id:a})=>{const p=i.current[a];p&&s.observe(p)}),()=>s.disconnect()},[]);const o=t.useCallback(s=>{const a=new URL(window.location.href);a.hash=s,navigator.clipboard.writeText(a.toString()).then(()=>{C(s),setTimeout(()=>C(null),1200)}).catch(()=>{})},[]);t.useEffect(()=>{const s=decodeURIComponent(window.location.hash||"").replace("#","");if(!s)return;const a=i.current[s];a==null||a.scrollIntoView({behavior:"smooth",block:"start"})},[]);const D=t.useCallback(()=>{var s;(s=l.current)==null||s.classList.add("saved"),setTimeout(()=>{var a;return(a=l.current)==null?void 0:a.classList.remove("saved")},800)},[]),Y=t.useMemo(()=>q(),[]);return e.jsxs(r.Page,{ref:l,children:[e.jsxs(r.Hero,{className:"card",children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:T("privacy-shield-on-white-and-black-contrast",2400,1200),alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"vignette"})]}),e.jsxs("div",{className:"txt",children:[e.jsxs("div",{className:"eyebrow chip",children:[e.jsx(E,{size:16})," Privacy Policy"]}),e.jsx("h1",{tabIndex:-1,children:"Your data, your control"}),e.jsx("p",{className:"sub",children:"We collect the minimum data needed to operate and improve our services. This page explains what we collect, why, and how you can control it."}),e.jsxs("div",{className:"actions",children:[e.jsxs(d,{to:"/legal/terms",className:"btn-ghost","aria-label":"Read Terms & Conditions",children:[e.jsx(u,{size:18})," Terms"]}),e.jsxs(d,{to:"/legal/unsolicited-submission-policy",className:"btn-ghost","aria-label":"Read Unsolicited Submission Policy",children:[e.jsx(j,{size:18})," Submissions"]}),e.jsxs(d,{to:"/contact",className:"btn-primary","aria-label":"Contact",children:[e.jsx(N,{size:18})," Contact"]})]})]})]}),e.jsx(A,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(r.StatusRow,{children:[e.jsxs("div",{className:"stat card",children:[e.jsx(w,{size:20}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"k",children:"Last updated"}),e.jsx("div",{className:"v",children:Y})]})]}),e.jsxs("div",{className:"stat card",children:[e.jsx(v,{size:20}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"k",children:"Data controller"}),e.jsx("div",{className:"v",children:"Prerna Collective"})]})]}),e.jsxs("div",{className:"stat card",children:[e.jsx(O,{size:20}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"k",children:"Report an issue"}),e.jsx("div",{className:"v",children:e.jsx("a",{href:"mailto:privacy@prernacollective.org?subject=Privacy%20Request",className:"link",rel:"noopener noreferrer",children:"privacy@prernacollective.org"})})]})]})]}),e.jsxs(r.Layout,{children:[e.jsxs("aside",{className:"toc card","aria-label":"Table of contents",children:[e.jsx("div",{className:"tocTitle",children:"On this page"}),e.jsx("ul",{children:y.map(({id:s,title:a,icon:p})=>e.jsx("li",{children:e.jsxs("a",{href:`#${s}`,className:"tocLink"+(h===s?" active":""),onClick:$=>{var z;$.preventDefault(),(z=i.current[s])==null||z.scrollIntoView({behavior:"smooth",block:"start"}),history.replaceState(null,"",`#${s}`)},children:[e.jsx("span",{className:"ico",children:p}),e.jsx("span",{className:"txt",children:a})]})},s))}),e.jsxs("div",{className:"tocFooter",children:[e.jsxs(d,{to:"/legal/terms",className:"miniLink",children:[e.jsx(u,{})," Terms"]}),e.jsxs(d,{to:"/legal/unsolicited-submission-policy",className:"miniLink",children:[e.jsx(j,{})," Submissions"]})]})]}),e.jsxs("div",{className:"contentCol",children:[e.jsxs("section",{id:"overview",ref:s=>i.current.overview=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(j,{size:18})}),e.jsx("h2",{children:"Overview"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("overview"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="overview"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsx("p",{children:"We process personal data to provide services, maintain security, and improve performance. We do not sell personal data. You can request access, correction, deletion, or restriction at any time."}),e.jsxs("div",{className:"twoCol",children:[e.jsx("div",{className:"panel",children:e.jsx("img",{src:T("privacy-abstract-tiles",1200,800),alt:"",loading:"lazy",decoding:"async"})}),e.jsx("div",{className:"panel",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(v,{})," Minimal collection by default"]}),e.jsxs("li",{children:[e.jsx(U,{})," Granular controls for cookies"]}),e.jsxs("li",{children:[e.jsx(k,{})," Rights available under applicable law"]})]})})]})]}),e.jsxs("section",{id:"data-we-collect",ref:s=>i.current["data-we-collect"]=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(R,{size:18})}),e.jsx("h2",{children:"Data We Collect"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("data-we-collect"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="data-we-collect"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("div",{className:"gridTwo",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Information you provide"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Contact details (name, email) when you reach out or apply."}),e.jsx("li",{children:"Application materials (CV, links) for internships or careers."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Automatic information"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Device, browser, and general location (city/country level)."}),e.jsx("li",{children:"Usage events (pages, actions) to improve UX and reliability."})]})]})]}),e.jsx("p",{className:"note",children:"Sensitive categories are not intentionally collected. If you share such data, we process it only as strictly necessary and delete when appropriate."})]}),e.jsxs("section",{id:"how-we-use-data",ref:s=>i.current["how-we-use-data"]=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(B,{size:18})}),e.jsx("h2",{children:"How We Use Data"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("how-we-use-data"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="how-we-use-data"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Provide and maintain the site and services."}),e.jsx("li",{children:"Respond to inquiries and process applications."}),e.jsx("li",{children:"Monitor, prevent, and detect fraud or abuse."}),e.jsx("li",{children:"Analyze performance and improve features."})]})]}),e.jsxs("section",{id:"cookies",ref:s=>i.current.cookies=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(I,{size:18})}),e.jsx("h2",{children:"Cookies & Local Storage"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("cookies"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="cookies"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("div",{className:"prefs card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:!!m.functional,disabled:!0,readOnly:!0}),e.jsx("span",{className:"slider"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"t",children:"Functional (required)"}),e.jsx("div",{className:"d",children:"Things like theme preference and navigation state."})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:!!m.analytics,onChange:s=>S(a=>({...a,analytics:s.target.checked}))}),e.jsx("span",{className:"slider"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"t",children:"Analytics"}),e.jsx("div",{className:"d",children:"Helps us understand usage to improve the product."})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:!!m.marketing,onChange:s=>S(a=>({...a,marketing:s.target.checked}))}),e.jsx("span",{className:"slider"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"t",children:"Marketing"}),e.jsx("div",{className:"d",children:"Content personalization and campaign measurement."})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn-primary",onClick:D,children:[e.jsx(v,{size:18})," Save preferences"]}),e.jsxs("a",{className:"btn-ghost",href:"https://support.google.com/analytics/answer/181881?hl=en",target:"_blank",rel:"noreferrer noopener",children:[e.jsx(f,{size:18})," Analytics Opt-out"]})]})]})]}),e.jsxs("section",{id:"legal-bases",ref:s=>i.current["legal-bases"]=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(u,{size:18})}),e.jsx("h2",{children:"Legal Bases"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("legal-bases"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="legal-bases"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Performance of a contract (e.g., processing applications)."}),e.jsx("li",{children:"Legitimate interests (site security, service improvement)."}),e.jsx("li",{children:"Consent (non-essential cookies, certain communications)."}),e.jsx("li",{children:"Compliance with legal obligations."})]})]}),e.jsxs("section",{id:"sharing",ref:s=>i.current.sharing=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(H,{size:18})}),e.jsx("h2",{children:"Sharing & Processors"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("sharing"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="sharing"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsx("p",{children:"We may share data with service providers who act on our behalf (hosting, analytics, error monitoring). These providers are bound by confidentiality and process data only under our instructions."}),e.jsx("p",{className:"note",children:"We do not sell personal data."})]}),e.jsxs("section",{id:"your-rights",ref:s=>i.current["your-rights"]=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(k,{size:18})}),e.jsx("h2",{children:"Your Rights"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("your-rights"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="your-rights"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Access, correct, or delete your data."}),e.jsx("li",{children:"Object to or restrict processing in certain circumstances."}),e.jsx("li",{children:"Withdraw consent where processing is based on consent."}),e.jsx("li",{children:"Data portability (receive a copy in a common format)."})]})]}),e.jsxs("section",{id:"security",ref:s=>i.current.security=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(P,{size:18})}),e.jsx("h2",{children:"Security"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("security"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="security"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsx("p",{children:"We apply reasonable technical and organizational measures including encryption in transit, role-based access, and regular review of access logs."})]}),e.jsxs("section",{id:"retention",ref:s=>i.current.retention=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(w,{size:18})}),e.jsx("h2",{children:"Data Retention"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("retention"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="retention"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsx("p",{children:"We keep data only as long as necessary for the purposes outlined, or as required by law. When no longer needed, we delete or de-identify it."})]}),e.jsxs("section",{id:"contact",ref:s=>i.current.contact=s,className:"sec card",children:[e.jsxs(r.SecHeader,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(N,{size:18})}),e.jsx("h2",{children:"Contact & Requests"})]}),e.jsx("button",{className:"iconBtn",onClick:()=>o("contact"),title:"Copy link to section","aria-label":"Copy link to section",children:e.jsx(c,{size:16})}),n==="contact"&&e.jsx("span",{className:"copied",children:"Copied"})]}),e.jsxs("div",{className:"gridTwo",children:[e.jsxs("div",{children:[e.jsxs("p",{children:["For privacy inquiries, email us at"," ",e.jsx("a",{href:"mailto:privacy@prernacollective.org?subject=Privacy%20Request",className:"link",rel:"noopener noreferrer",children:"privacy@prernacollective.org"}),"."]}),e.jsxs("p",{children:["Prefer a form? Use our"," ",e.jsx(d,{to:"/contact",className:"link",children:"contact page"}),"."]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Helpful references"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:e.jsxs("a",{href:"https://foundation.mozilla.org/en/privacynotincluded/learn/what-is-personal-data/",target:"_blank",rel:"noreferrer noopener",className:"link",children:["Mozilla: What is personal data? ",e.jsx(f,{})]})}),e.jsx("li",{children:e.jsxs("a",{href:"https://globalprivacycontrol.org/",target:"_blank",rel:"noreferrer noopener",className:"link",children:["Global Privacy Control ",e.jsx(f,{})]})})]})]})]})]}),e.jsxs(r.BottomNav,{className:"card",children:[e.jsxs(d,{to:"/legal/terms",className:"btn-ghost",children:[e.jsx(u,{})," Terms & Conditions"]}),e.jsxs(d,{to:"/legal/unsolicited-submission-policy",className:"btn-ghost",children:[e.jsx(j,{})," Unsolicited Submission Policy"]}),e.jsxs(d,{to:"/home",className:"btn-primary",children:[e.jsx(v,{})," Back to Home"]})]})]})]})]})}export{G as default};
