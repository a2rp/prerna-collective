import{d as p,m as v,r as t,j as e,aw as j,ax as g,am as P,at as u,N as r,ay as b,az as h,z,T as w,q as k,P as N,aA as F,au as B,w as T,ac as A,$,aB as E,s as H,aC as U,g as q,k as D}from"./index-f_zt6Rys.js";import{B as R}from"./index-ekvE1CPL.js";const o=v`
  0% { opacity: 0; transform: translateY(8px) scale(.99); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,Y=v`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`,O=v`
  0% { box-shadow: 0 0 0 0 rgb(var(--primary-rgb) / .25); }
  100% { box-shadow: 0 0 0 8px transparent; }
`,m={Page:p.main`
        --header-offset: var(--site-header-h, 60px);
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--header-offset); */

        /* So hash jumps (and programmatic scrolls) respect the fixed header */
        scroll-padding-top: calc(var(--header-offset) + 12px);

        .anchorTop {
            position: absolute;
            inset: 0 auto auto 0;
            width: 0;
            height: 0;
        }
    `,Hero:p.section`
        position: relative;
        overflow: clip;
        isolation: isolate;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        margin: 0 auto var(--space-6);
        max-width: 1200px;

        .media {
            position: absolute;
            inset: 0;
            z-index: -1;
            filter: saturate(1.05) contrast(1.05);
        }
        .media img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            transform: scale(1.03);
            opacity: 0.35;
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    800px 240px at 12% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.08),
                    transparent 40%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            padding: 28px var(--space-6) 18px;
            min-height: 220px;
            display: grid;
            gap: 10px;
            align-content: end;
            animation: ${o} 0.4s ease both;
        }
        .eyebrow {
            width: fit-content;
            gap: 8px;
        }
        h1 {
            font-size: 30px;
            line-height: 1.1;
        }
        .sub {
            color: var(--text-muted);
            max-width: 900px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 6px;
        }
        .meta .tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--tint-weak);
            border: 1px solid var(--tint-strong);
            font-size: 12px;
        }
        .ghostish {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--tint-weak);
            border: 1px solid var(--tint-strong);
            color: var(--text);
            cursor: pointer;
            text-decoration: none;
            padding: 6px 12px;
            border-radius: var(--radius-md);
            transition: transform 0.08s ease, box-shadow 0.2s ease,
                background 0.2s ease;
        }
        .ghostish:hover {
            background: var(--tint-med);
        }
        .ghostish:active {
            transform: translateY(1px);
        }
    `,Body:p.section`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: var(--space-6);
        max-width: 1200px;
        margin: 0 auto var(--space-8);
        padding: 0 var(--space-6);

        /* TOC */
        .toc {
            position: sticky;
            top: calc(
                var(--site-header-h, 60px) + 12px
            ); /* respect fixed header */
            align-self: start;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: 12px;
            animation: ${o} 0.35s ease both;
        }
        .tocHeader {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .toc ul {
            list-style: none;
            display: grid;
            gap: 2px;
            margin-bottom: 10px;
        }
        .tocLink {
            display: grid;
            grid-template-columns: 20px 1fr;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--text);
            border: 1px solid transparent;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease;
        }
        .tocLink:hover {
            background: var(--tint-weak);
            border-color: var(--tint-med);
        }
        .tocLink:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
        .tocLink.active {
            background: var(--tint-weak);
            border-color: var(--tint-strong);
            font-weight: 700;
        }

        .quickLinks {
            display: grid;
            gap: 6px;
            border-top: 1px dashed var(--border);
            padding-top: 8px;
            margin-top: 8px;
        }
        .ql {
            display: grid;
            grid-template-columns: 18px 1fr 16px;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            color: var(--text);
            text-decoration: none;
            transition: background 0.15s ease, transform 0.08s ease,
                border-color 0.15s ease;
        }
        .ql:hover {
            background: var(--tint-weak);
            border-color: var(--tint-med);
        }
        .ql .arr {
            opacity: 0.6;
        }

        /* Content column */
        .content {
            min-width: 0;
        }

        .strip {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4);
            margin-bottom: var(--space-4);
        }
        .strip .card {
            display: grid;
            grid-template-columns: 46px 1fr;
            gap: 10px;
            padding: 12px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            transition: transform 0.12s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
            animation: ${o} 0.3s ease both;
        }
        .strip .card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--tint-strong);
        }
        .strip .icon {
            display: grid;
            place-items: center;
            width: 46px;
            height: 46px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--card);
            animation: ${Y} 3.2s ease-in-out infinite;
        }
        .strip .title {
            font-weight: 700;
        }

        section.sec {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            margin-bottom: var(--space-4);
            overflow: hidden;
            animation: ${o} 0.35s ease both;

            /* ⭐ critical: ensure hash targets land below fixed header */
            scroll-margin-top: calc(var(--site-header-h, 60px) + 12px);
        }
        section.sec.active {
            animation: ${O} 0.8s ease-out both;
            border-color: var(--tint-strong);
        }

        .secHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 10px;
            padding: 14px var(--space-4) 8px;
            border-bottom: 1px dashed var(--border);
            background: var(--surface);
        }
        .secHeader .badge {
            width: fit-content;
            gap: 8px;
        }
        .secHeader h2 {
            grid-column: 1 / -1;
            font-size: 18px;
            margin-top: 6px;
        }
        .secHeader .actions {
            display: inline-flex;
            gap: 8px;
            justify-self: end;
        }

        .secBody {
            padding: 12px var(--space-4);
            display: grid;
            gap: 10px;
        }
        .secBody .disc {
            margin-left: 18px;
            display: grid;
            gap: 6px;
            list-style: disc;
        }
        .note {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: var(--radius-md);
            background: var(--tint-weak);
            border: 1px solid var(--tint-strong);
            color: var(--text);
        }

        .secFooter {
            padding: 10px var(--space-4) 14px;
            border-top: 1px dashed var(--border);
        }

        .inlineLink {
            color: var(--link);
            text-decoration: none;
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
        }
        .inlineLink:hover {
            color: var(--link-hover);
            text-decoration: underline;
        }

        .cta {
            display: grid;
            grid-template-columns: 260px 1fr;
            gap: var(--space-4);
            padding: var(--space-4);
            margin-top: var(--space-6);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--surface-brand-1);
        }
        .cta .left img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
        }
        .cta h3 {
            font-size: 20px;
        }
        .cta p {
            color: var(--text-muted);
            margin: 6px 0 10px;
        }
        .cta .row {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .cta .tiny {
            margin-top: 8px;
            opacity: 0.8;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
            .toc {
                position: static;
            }
            .strip {
                grid-template-columns: 1fr;
            }
            .cta {
                grid-template-columns: 1fr;
            }
            .cta .left img {
                height: 200px;
            }
        }
    `};function y(n,l=1600,c=900){return`https://picsum.photos/seed/${encodeURIComponent(n)}/${l}/${c}`}const x=[{id:"introduction",title:"Introduction",icon:e.jsx(g,{size:18}),content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"These Terms & Conditions (“Terms”) govern your access to and use of the Prerna Collective website, content, and related materials (collectively, the “Site”). By using the Site, you agree to these Terms. If you do not agree, do not use the Site."}),e.jsx("p",{className:"sub",children:"Prerna Collective combines philanthropy, venture capital, fellowships, and storytelling to support people tackling complex problems. This Site provides information about our mission and activities; it is not an offer to sell or solicit investments."})]})},{id:"acceptance-eligibility",title:"Acceptance & Eligibility",icon:e.jsx($,{size:18}),content:e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"disc",children:[e.jsx("li",{children:"You must be able to form a binding contract to use the Site."}),e.jsx("li",{children:"Use must comply with applicable laws and these Terms at all times."}),e.jsx("li",{children:"Certain pages may be intended for specific audiences (for example, internship pages)."})]})})},{id:"use-of-site",title:"Use of Site & Content",icon:e.jsx(H,{size:18}),content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"The Site and all materials are provided for informational purposes only. You may not reproduce, distribute, or create derivatives except as permitted by law or by explicit written permission from Prerna Collective."}),e.jsxs("div",{className:"note",children:[e.jsx(E,{"aria-hidden":!0})," Do not rely on the Site for legal, financial, or investment decisions. Always seek professional advice."]})]})},{id:"intellectual-property",title:"Intellectual Property",icon:e.jsx(U,{size:18}),content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"All trademarks, logos, service marks, trade dress, graphics, and content on the Site are the property of Prerna Collective or its licensors and are protected by applicable intellectual property laws."}),e.jsxs("ul",{className:"disc",children:[e.jsx("li",{children:"No license or right is granted by implication or otherwise."}),e.jsx("li",{children:"Use of marks without prior consent is strictly prohibited."})]})]})},{id:"prohibited-conduct",title:"Prohibited Conduct",icon:e.jsx(w,{size:18}),content:e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"disc",children:[e.jsx("li",{children:"Interfering with or disrupting the Site’s security or infrastructure."}),e.jsx("li",{children:"Using bots/scrapers to harvest data without written permission."}),e.jsx("li",{children:"Uploading malicious code or violating third-party rights."}),e.jsx("li",{children:"Impersonation, misrepresentation, or unlawful activity of any kind."})]})})},{id:"no-offer",title:"No Offer, Solicitation, or Advice",icon:e.jsx(q,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Site is not an offer to sell or a solicitation of an offer to buy any securities. Nothing herein constitutes legal, investment, financial, or tax advice. Any portfolio or program references are illustrative and may not be current."})})},{id:"third-party-links",title:"Third-Party Links & Services",icon:e.jsx(N,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Site may reference third-party websites, content, or services. Prerna Collective is not responsible for third-party practices or content. Access them at your own risk and review their respective terms and privacy policies."})})},{id:"privacy",title:"Privacy & Submissions",icon:e.jsx(b,{size:18}),content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Your use of the Site may involve submitting information. Our approach to data is described in our"," ",e.jsx(r,{to:"/legal/privacy-policy",className:"inlineLink",children:"Privacy Policy"}),". Unsolicited ideas are governed by our"," ",e.jsx(r,{to:"/legal/unsolicited-submission-policy",className:"inlineLink",children:"Unsolicited Submission Policy"}),"."]}),e.jsx("p",{className:"sub",children:"By sending content or feedback, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such submissions in connection with the Site and our operations."})]})},{id:"disclaimers",title:"Disclaimers & Limitation of Liability",icon:e.jsx(u,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"The Site is provided on an “AS IS” and “AS AVAILABLE” basis without warranties of any kind. To the maximum extent permitted by law, Prerna Collective disclaims all implied warranties and shall not be liable for indirect, incidental, special, consequential, or punitive damages."})})},{id:"indemnification",title:"Indemnification",icon:e.jsx(k,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"You agree to indemnify and hold harmless Prerna Collective, its affiliates, officers, directors, employees, and agents from claims arising from your use of the Site or violation of these Terms."})})},{id:"governing-law",title:"Governing Law & Jurisdiction",icon:e.jsx(j,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"These Terms are governed by applicable laws without regard to conflicts of law principles. Venue and jurisdiction shall lie in competent courts as determined by Prerna Collective."})})},{id:"changes",title:"Changes to These Terms",icon:e.jsx(g,{size:18}),content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"We may update these Terms from time to time. Material changes will be reflected on this page with an updated effective date. Continued use of the Site constitutes acceptance of the revised Terms."})})},{id:"contact",title:"Contact",icon:e.jsx(T,{size:18}),content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Questions? Reach us via the"," ",e.jsx(r,{to:"/contact",className:"inlineLink",children:"Contact"})," ","page. For general navigation, head back"," ",e.jsx(r,{to:"/home",className:"inlineLink",children:"Home"}),"."]}),e.jsxs("p",{className:"sub",children:["Email:"," ",e.jsxs("a",{href:"mailto:hello@prernacollective.example",rel:"noopener noreferrer",className:"inlineLink",children:["hello@prernacollective.example",e.jsx(D,{size:14,style:{marginLeft:6}})]})]})]})}];function V(){const[n,l]=t.useState(x[0].id),[c,d]=t.useState(null),S=t.useRef(null),f=t.useRef({}),C=t.useMemo(()=>new Date().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"2-digit"}),[]);t.useEffect(()=>{const i=new IntersectionObserver(a=>{a.forEach(s=>{const I=s.target.getAttribute("id");s.isIntersecting&&l(I)})},{rootMargin:"0px 0px -40% 0px",threshold:.1});return Object.values(f.current).forEach(a=>a&&i.observe(a)),()=>i.disconnect()},[]);const L=t.useCallback(i=>{const a=new URL(window.location.href);a.hash=i,navigator.clipboard.writeText(a.toString()).then(()=>{d(i),setTimeout(()=>d(null),1200)}).catch(()=>{})},[]);return t.useEffect(()=>{const{hash:i}=window.location;if(i){const a=document.getElementById(i.replace("#",""));a&&requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})})}},[]),e.jsxs(m.Page,{children:[e.jsx("a",{id:"top",className:"anchorTop","aria-hidden":"true"}),e.jsxs(m.Hero,{children:[e.jsxs("div",{className:"media",children:[e.jsx("img",{src:y("legal-terms-hero-bw-blue",2e3,900),alt:"",loading:"eager",decoding:"async"}),e.jsx("div",{className:"overlay"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"eyebrow chip",children:[e.jsx(j,{size:16}),"Legal"]}),e.jsx("h1",{tabIndex:-1,children:"Terms & Conditions"}),e.jsx("p",{className:"sub",children:"The rules of the road for using this Site. Transparent, concise, and written for humans."}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"tag",children:[e.jsx(g,{})," Last updated: ",C]}),e.jsxs("a",{className:"btn-primary ghostish",onClick:()=>window.print(),role:"button",tabIndex:0,"aria-label":"Print or Save as PDF",children:[e.jsx(P,{})," Print / Save PDF"]})]})]})]}),e.jsx(R,{exclude:["/","/home"],hideIfSingle:!1}),e.jsxs(m.Body,{children:[e.jsxs("aside",{className:"toc",ref:S,"aria-label":"Table of contents",children:[e.jsxs("div",{className:"tocHeader",children:[e.jsx(u,{}),e.jsx("span",{children:"On this page"})]}),e.jsx("ul",{children:x.map(i=>e.jsx("li",{children:e.jsxs("a",{href:`#${i.id}`,className:"tocLink"+(n===i.id?" active":""),onClick:a=>{a.preventDefault();const s=document.getElementById(i.id);s==null||s.scrollIntoView({behavior:"smooth",block:"start"}),history.replaceState(null,"",`#${i.id}`)},children:[e.jsx("span",{className:"ico",children:i.icon}),e.jsx("span",{className:"txt",children:i.title})]})},i.id))}),e.jsxs("div",{className:"quickLinks",children:[e.jsxs(r,{to:"/legal/privacy-policy",className:"ql",children:[e.jsx(b,{}),"Privacy Policy",e.jsx(h,{className:"arr"})]}),e.jsxs(r,{to:"/legal/unsolicited-submission-policy",className:"ql",children:[e.jsx(u,{}),"Unsolicited Submission",e.jsx(h,{className:"arr"})]}),e.jsxs(r,{to:"/home",className:"ql",children:[e.jsx(z,{}),"Home",e.jsx(h,{className:"arr"})]})]})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"strip",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(w,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"title",children:"Mission-first"}),e.jsx("p",{children:"We build for durable public-good outcomes across programs and capital."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(k,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"title",children:"Community"}),e.jsx("p",{children:"People and partnerships compound progress. Our Terms reflect that ethos."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(N,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"title",children:"Responsible Web"}),e.jsx("p",{children:"Respect, safety, and lawful use keep this space healthy for everyone."})]})]})]}),x.map(i=>e.jsxs("section",{id:i.id,ref:a=>f.current[i.id]=a,className:"sec"+(n===i.id?" active":""),"aria-labelledby":`${i.id}-title`,children:[e.jsxs("header",{className:"secHeader",children:[e.jsxs("span",{className:"badge chip",children:[i.icon,i.title]}),e.jsx("h2",{id:`${i.id}-title`,children:i.title}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"iconBtn",title:"Copy link to this section","aria-label":`Copy link to ${i.title}`,onClick:()=>L(i.id),children:c===i.id?e.jsx(F,{}):e.jsx(B,{})})})]}),e.jsx("div",{className:"secBody",children:i.content}),e.jsx("footer",{className:"secFooter",children:e.jsx("a",{href:"#top",onClick:a=>{var s;a.preventDefault(),(s=document.getElementById("top"))==null||s.scrollIntoView({behavior:"smooth"}),window.scrollTo({top:0,behavior:"smooth"})},className:"inlineLink",children:"Back to top"})})]},i.id)),e.jsxs("div",{className:"cta card brandish",children:[e.jsx("div",{className:"left",children:e.jsx("img",{src:y("legal-closing-cta",1200,800),alt:"",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"right",children:[e.jsx("h3",{children:"Need clarity on a clause?"}),e.jsx("p",{children:"Our team can help you understand how these Terms apply to your specific use of the Site. We aim for clarity and fair play."}),e.jsxs("div",{className:"row",children:[e.jsxs(r,{to:"/contact",className:"btn-primary",children:[e.jsx(T,{})," Contact"]}),e.jsxs(r,{to:"/legal/privacy-policy",className:"btn-ghost",children:[e.jsx(b,{})," Privacy Policy"]})]}),e.jsxs("div",{className:"tiny",children:[e.jsx(A,{})," We typically respond within 2–3 business days."]})]})]})]})]})]})}export{V as default};
