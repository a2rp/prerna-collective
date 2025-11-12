import{d as s,m as v,x as L,r as o,j as e,ay as c,N as i,aw as x,aJ as P,aK as g,a4 as I,w as b,aL as z,aM as S,au as F,aN as l,at as H,aB as A,aO as B,k as R}from"./index-f_zt6Rys.js";import{B as q}from"./index-ekvE1CPL.js";const Y=v`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,$=v`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,D=v`
  0% { box-shadow: 0 0 0 0 rgb(var(--primary-rgb) / .5); }
  100% { box-shadow: 0 0 0 0 transparent; }
`,t={Page:s.div`
        color: var(--text);
        background: var(--bg);

        /* If the page container itself ever handles anchor scrolling,
       this padding protects anchor jumps from being hidden by a fixed header. */
        --header-offset: var(--site-header-h, 60px);

        /* Helpful when parent scroll container respects CSS scroll snapping/offset */
        scroll-padding-top: calc(var(--header-offset) + 12px);

        .anchorTop {
            position: absolute;
            inset: 0 auto auto 0;
            width: 0;
            height: 0;
        }

        .flash {
            animation: ${D} 0.8s ease;
        }
    `,Hero:s.header`
        position: relative;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--space-6);
        background: var(--card);

        img {
            display: block;
            width: 100%;
            height: clamp(220px, 30vw, 360px);
            object-fit: cover;
            filter: saturate(1.05) contrast(1.05);
            transform: scale(1.02);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    800px 240px at 12% 10%,
                    rgb(var(--primary-rgb) / 0.16),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 45%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
            pointer-events: none;
        }
        .heroContent {
            position: absolute;
            inset: 0;
            display: grid;
            align-content: end;
            gap: 10px;
            padding: var(--space-6);
            animation: ${Y} 0.5s ease both;
        }
        .pill {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--tint-weak);
            border: 1px solid var(--tint-med);
            border-radius: 999px;
            padding: 6px 10px;
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }
        h1 {
            font-size: clamp(22px, 2.4vw, 28px);
            line-height: 1.2;
            letter-spacing: 0.2px;
            text-shadow: 0 1px 0 rgb(0 0 0 / 0.06);
        }
        .sub {
            color: var(--text-muted);
            font-size: 13px;
        }
        .heroActions {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
        }
        .metaRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 6px;
        }
        .chip.linky {
            text-decoration: none;
            cursor: pointer;
            transition: background 0.2s ease, border-color 0.2s ease;
        }
        .chip.linky:hover {
            background: var(--tint-med);
            border-color: var(--tint-strong);
        }
    `,Layout:s.div`
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: var(--space-6);

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }

        .toc {
            position: sticky;
            /* Respect fixed 60px header and add breathing room */
            top: calc(var(--site-header-h, 60px) + 12px);
            align-self: start;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            animation: ${$} 0.25s ease both;
        }
        .tocHead {
            font-weight: 700;
            padding: 10px 12px;
            border-bottom: 1px solid var(--border);
            background: var(--tint-weak);
        }
        .toc ul {
            list-style: none;
            padding: 8px;
            display: grid;
            gap: 2px;
        }
        .tocLink {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: var(--radius-md);
            color: var(--text);
            text-decoration: none;
            border: 1px solid transparent;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.15s ease;
        }
        .tocLink:hover {
            background: var(--tint-weak);
            border-color: var(--tint-med);
        }
        .tocLink.active {
            background: var(--tint-weak);
            border-color: var(--tint-strong);
            transform: translateX(2px);
            font-weight: 700;
        }
        .toc .ico {
            display: grid;
            place-items: center;
            width: 26px;
            height: 26px;
            border: 1px solid var(--border);
            border-radius: 8px;
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .tocFooter {
            border-top: 1px solid var(--border);
            padding: 8px;
            display: flex;
            justify-content: center;
            background: var(--surface);
        }
        .upBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            cursor: pointer;
        }
        .upBtn:hover {
            background: var(--tint-weak);
        }

        .content {
            min-width: 0;
        }

        .section {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: var(--space-6);
            margin-bottom: var(--space-6);
            opacity: 0;
            transform: translateY(6px);
            transition: opacity 0.25s ease, transform 0.25s ease,
                border-color 0.25s ease;

            /* ⭐️ Critical: ensure hash targets account for fixed 60px header */
            scroll-margin-top: calc(var(--site-header-h, 60px) + 12px);
        }
        .section.in {
            opacity: 1;
            transform: translateY(0);
        }
        .section:focus-visible {
            box-shadow: var(--focus-ring);
            outline: none;
        }

        .secHeader {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            align-items: center;
            margin-bottom: 10px;
        }
        .secHeader .ico {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .secHeader h2 {
            font-size: 18px;
            line-height: 1.2;
        }
        .secHeader .actions {
            display: flex;
            gap: 6px;
        }

        .secBody {
            display: grid;
            gap: 10px;
        }
        .secBody p {
            font-size: 13px;
            color: var(--text);
        }
        .secBody .note {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--tint-med);
            background: var(--tint-weak);
            font-size: 12px;
            width: fit-content;
        }
        .bullets {
            padding-left: 18px;
            display: grid;
            gap: 8px;
        }
        .bullets li {
            margin-left: 4px;
        }

        .callout {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--surface);
        }
        .callout.warn {
            border-color: rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
        }
        .callout.info {
            border-color: var(--border);
            background: var(--surface);
        }

        .faq details {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            padding: 8px 10px;
            transition: border-color 0.2s ease, background 0.2s ease;
        }
        .faq details + details {
            margin-top: 8px;
        }
        .faq summary {
            cursor: pointer;
            font-weight: 700;
            list-style: none;
        }
        .faq summary::-webkit-details-marker {
            display: none;
        }
        .faq details[open] {
            background: var(--tint-weak);
            border-color: var(--tint-strong);
        }
    `,Divider:s.hr`
        border: none;
        height: 1px;
        background: var(--border);
        margin: var(--space-6) 0;
    `,ChangeLog:s.section`
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--space-6);

        .head {
            margin-bottom: 8px;
        }
        h3 {
            font-size: 16px;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        ul {
            list-style: none;
            display: grid;
            gap: 6px;
        }
        .date {
            font-weight: 700;
            margin-right: 6px;
        }
        .desc {
            color: var(--text-muted);
        }
    `,Related:s.section`
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        margin-bottom: var(--space-6);

        .head {
            margin-bottom: 8px;
        }
        h3 {
            font-size: 16px;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .rel {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            text-decoration: none;
            transition: transform 0.15s ease, background 0.15s ease,
                border-color 0.15s ease;
        }
        .rel:hover {
            transform: translateY(-1px);
            background: var(--tint-weak);
            border-color: var(--tint-strong);
        }
        .rel:focus-visible {
            box-shadow: var(--focus-ring);
            outline: none;
        }
    `};function W(n,m=1600,p=900){return`https://picsum.photos/seed/${encodeURIComponent(n)}/${m}/${p}`}const u=[{id:"scope",title:"Scope of this Policy",icon:e.jsx(H,{size:18}),body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This Unsolicited Submission Policy governs any idea, proposal, pitch, business plan, suggestion, creative work, technology, or related materials you send to us without a prior written request or agreement. It applies to submissions made by email, contact forms, postal mail, social media, events, or any other channel."}),e.jsxs("p",{className:"note",children:[e.jsx(l,{})," This policy coexists with our ",e.jsx(i,{to:"/legal/terms",children:"Terms & Conditions"})," ","and ",e.jsx(i,{to:"/legal/privacy-policy",children:"Privacy Policy"}),". If there is a conflict, the most protective provision for Prerna Collective applies."]})]})},{id:"no-confidentiality",title:"No Confidentiality or Compensation",icon:e.jsx(c,{size:18}),body:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No Confidential Relationship:"})," Your unsolicited submission is not received in confidence. We do not assume any duty to keep, hold, or treat the submission as confidential."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Compensation:"})," You agree we are under no obligation to pay any fee, commission, royalty, or other compensation in connection with the submission."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Return of Materials:"})," We may retain or destroy your materials at our discretion and are not obligated to return any copies."]})]}),e.jsxs("div",{className:"callout warn",children:[e.jsx(A,{})," Do not include trade secrets or information you are not authorized to share."]})]})},{id:"similarity",title:"Similar Ideas and Independent Development",icon:e.jsx(B,{size:18}),body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"We are active across philanthropy, venture capital, and fellowships. We may independently develop, evaluate, or fund ideas similar or identical to your submission. You agree that any similarity does not give rise to a claim against Prerna Collective, our partners, grantees, or portfolio companies."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No Restriction:"})," We may use, build, or fund similar concepts without obligation to you."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Implied License:"})," Sending a submission does not grant us any license; likewise, our activities do not grant you any rights in our work."]})]})]})},{id:"ownership",title:"Ownership and License You Grant",icon:e.jsx(g,{size:18}),body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"You represent that you own or control all rights to your submission. By sending it, you grant Prerna Collective a worldwide, non-exclusive, irrevocable, perpetual, royalty-free license to use, reproduce, distribute, publicly display, modify, adapt, and create derivative works for the limited purpose of evaluation and internal decision-making."}),e.jsxs("p",{className:"note",children:[e.jsx(l,{})," This license is necessary to review and route submissions within a complex organization."]})]})},{id:"no-agreement",title:"No Offer, No Agency, No Partnership",icon:e.jsx(x,{size:18}),body:e.jsx(e.Fragment,{children:e.jsx("p",{children:"Your submission does not create a contract, partnership, agency, joint venture, or employment relationship with Prerna Collective. Any collaboration must be governed by a mutually executed written agreement."})})},{id:"how-to-submit",title:"How to Submit If Invited",icon:e.jsx(b,{size:18}),body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"We only review materials through formal, invited channels. If we invite you to submit, you will receive instructions and, where applicable, a separate Non-Disclosure Agreement (NDA)."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use the provided intake form or secure upload link."}),e.jsx("li",{children:"Label documents clearly and avoid sensitive personal data."}),e.jsx("li",{children:"Keep one version history and include a brief executive summary."})]}),e.jsxs("div",{className:"callout info",children:[e.jsx(l,{})," For partnership or media inquiries, visit"," ",e.jsx(i,{to:"/contact",children:"Contact"}),"."]})]})},{id:"governing-law",title:"Governing Law and Disputes",icon:e.jsx(x,{size:18}),body:e.jsx(e.Fragment,{children:e.jsx("p",{children:"This Policy is governed by the laws applicable in our principal place of business, without regard to conflict-of-law provisions. Disputes arising from unsolicited submissions shall be resolved in the competent courts of that jurisdiction."})})},{id:"changes",title:"Changes to this Policy",icon:e.jsx(l,{size:18}),body:e.jsx(e.Fragment,{children:e.jsx("p",{children:"We may update this Policy from time to time. Material changes will be indicated by an updated “Last updated” date. Continued submission after changes constitutes acceptance of the revised Policy."})})},{id:"faq",title:"Frequently Asked Questions",icon:e.jsx(l,{size:18}),body:e.jsxs("div",{className:"faq",children:[e.jsxs("details",{children:[e.jsx("summary",{children:"Can I mark my email “Confidential” to bypass this Policy?"}),e.jsx("div",{children:"No. Unsolicited materials are not confidential. Only a signed NDA or explicit written invite changes how we treat materials."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Will I get paid if you use a similar idea?"}),e.jsx("div",{children:"No. We often encounter similar concepts independently. Similarity does not entitle you to compensation."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I get my idea considered?"}),e.jsxs("div",{children:["We periodically open themed programs or calls. Follow announcements on"," ",e.jsxs("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:["LinkedIn ",e.jsx(R,{"aria-hidden":!0})]})," ","or check ",e.jsx(i,{to:"/our-work",children:"Our Work"}),"."]})]})]})}];function U(){const{hash:n,pathname:m}=L(),p=o.useRef(null),[y,f]=o.useState(""),[w,k]=o.useState(u[0].id);o.useEffect(()=>{if(!n)return;const a=document.querySelector(n);if(a){a.scrollIntoView({behavior:"smooth",block:"start"}),a.classList.add("flash");const r=setTimeout(()=>a.classList.remove("flash"),800);return()=>clearTimeout(r)}},[n,m]),o.useEffect(()=>{const a=Array.from(document.querySelectorAll("[data-section='true']")),r=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting&&h.target.classList.add("in");const j=h.target.getAttribute("id");h.intersectionRatio>.5&&j&&k(j)})},{rootMargin:"0px 0px -40% 0px",threshold:[0,.5,1]});return a.forEach(d=>r.observe(d)),()=>r.disconnect()},[]);const N=o.useMemo(()=>u.map(({id:a,title:r,icon:d})=>({id:a,title:r,icon:d})),[]),C=async a=>{try{const r=`${window.location.origin}${window.location.pathname}#${a}`;await navigator.clipboard.writeText(r),f(a),setTimeout(()=>f(""),1200)}catch{}},T=()=>window.print();return e.jsxs(t.Page,{"aria-labelledby":"pageTitle",children:[e.jsx("a",{ref:p,id:"top",className:"anchorTop","aria-hidden":"true"}),e.jsxs(t.Hero,{children:[e.jsx("img",{src:W("legal-unsolicited-prerna-collective-hero",2400,1200),alt:"",loading:"eager",decoding:"async",fetchpriority:"high"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"heroContent",children:[e.jsxs("div",{className:"pill",children:[e.jsx(c,{size:16})," Legal"]}),e.jsx("h1",{id:"pageTitle",children:"Unsolicited Submission Policy"}),e.jsx("p",{className:"sub",children:"How we handle ideas and materials sent without a prior request."}),e.jsxs("div",{className:"heroActions",children:[e.jsxs(i,{to:"/legal/terms",className:"btn-primary",children:[e.jsx(x,{size:16})," Terms"]}),e.jsxs(i,{to:"/legal/privacy-policy",className:"btn-ghost",children:[e.jsx(c,{size:16})," Privacy Policy"]}),e.jsx("button",{type:"button",className:"iconBtn",onClick:T,title:"Print / Save as PDF",children:e.jsx(P,{size:18})})]}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("span",{className:"chip",children:[e.jsx(g,{})," Last updated: Nov 12, 2025"]}),e.jsxs(i,{to:"/home",className:"chip linky",children:[e.jsx(I,{})," Home"]}),e.jsxs(i,{to:"/contact",className:"chip linky",children:[e.jsx(b,{})," Contact"]})]})]})]}),e.jsx(q,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(t.Layout,{children:[e.jsxs("aside",{className:"toc","aria-label":"On this page",children:[e.jsx("div",{className:"tocHead",children:"On this page"}),e.jsx("ul",{children:N.map(a=>e.jsx("li",{children:e.jsxs("a",{href:`#${a.id}`,className:`tocLink ${w===a.id?"active":""}`,title:a.title,children:[e.jsx("span",{className:"ico",children:a.icon}),e.jsx("span",{className:"txt",children:a.title})]})},a.id))}),e.jsx("div",{className:"tocFooter",children:e.jsxs("button",{className:"upBtn",onClick:()=>{var a;return(a=p.current)==null?void 0:a.scrollIntoView({behavior:"smooth"})},children:[e.jsx(z,{})," Back to top"]})})]}),e.jsxs("main",{className:"content",children:[u.map(a=>e.jsxs("section",{id:a.id,"data-section":"true",className:"section",tabIndex:-1,"aria-labelledby":`${a.id}-h`,children:[e.jsxs("header",{className:"secHeader",children:[e.jsx("div",{className:"ico",children:a.icon}),e.jsx("h2",{id:`${a.id}-h`,children:a.title}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"iconBtn",onClick:()=>C(a.id),"aria-label":"Copy link to this section",title:"Copy link",children:y===a.id?e.jsx(S,{size:18}):e.jsx(F,{size:18})})})]}),e.jsx("div",{className:"secBody",children:a.body})]},a.id)),e.jsx(t.Divider,{}),e.jsxs(t.ChangeLog,{className:"card",children:[e.jsx("div",{className:"head",children:e.jsxs("h3",{children:[e.jsx(g,{})," Change Log"]})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("span",{className:"date",children:"Nov 12, 2025"}),e.jsx("span",{className:"desc",children:"Initial publication of the Unsolicited Submission Policy."})]})})]}),e.jsxs(t.Related,{className:"card",children:[e.jsx("div",{className:"head",children:e.jsxs("h3",{children:[e.jsx(c,{})," Related Policies"]})}),e.jsxs("div",{className:"links",children:[e.jsxs(i,{to:"/legal/terms",className:"rel",children:[e.jsx(x,{})," Terms & Conditions"]}),e.jsxs(i,{to:"/legal/privacy-policy",className:"rel",children:[e.jsx(c,{})," Privacy Policy"]}),e.jsxs(i,{to:"/contact",className:"rel",children:[e.jsx(b,{})," Contact"]})]})]})]})]})]})}export{U as default};
