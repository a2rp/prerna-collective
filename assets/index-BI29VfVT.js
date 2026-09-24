import{d as c,m as p,x as d,r as m,j as r,N as s,a4 as h,f as o,aP as u}from"./index-CVaru89K.js";const x=p`
  0% { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
`,b={Wrap:c.nav`
        --pad-x: 12px;
        --h: 38px;

        display: block;
        width: 100%;
        margin: 30px 0;

        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);

        animation: ${x} 0.25s ease both;

        ol {
            list-style: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            min-height: var(--h);
            padding: 6px var(--pad-x);
        }

        .crumb {
            display: inline-flex;
            align-items: center;
            min-height: 28px;
            max-width: 240px;
        }

        .homeLink,
        .link,
        .current {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: var(--radius-sm);
            line-height: 1;
            text-decoration: none;
            color: var(--text);
            border: 1px solid transparent;
            background: transparent;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .homeLink {
            background: var(--tint-weak);
            border-color: var(--tint-med);
        }

        .link {
            border-color: transparent;
        }
        .link:hover {
            text-decoration: underline;
            color: var(--link-hover);
            border-color: var(--tint-med);
            background: var(--tint-weak);
        }
        .link:focus-visible,
        .homeLink:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }

        .current {
            font-weight: 700;
            border-color: var(--tint-med);
            background: var(--tint-weak);
            cursor: default;
        }

        .sep {
            display: inline-flex;
            align-items: center;
            color: var(--text-muted);
            opacity: 0.8;
        }

        /* Visually hidden label for home text next to icon */
        .vis {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        @media (max-width: 720px) {
            ol {
                gap: 4px;
                padding: 6px 8px;
            }
            .crumb {
                max-width: 160px;
            }
        }
    `},l={home:"Home","our-work":"Our Work",philanthropy:"Philanthropy","venture-capital":"Venture Capital",fellowships:"Fellowships",collective:"Collective",careers:"Careers",contact:"Contact","positive-sum":"Positive Sum",internships:"Internships","demo-day":"Demo Day",legal:"Legal",terms:"Terms & Conditions","privacy-policy":"Privacy Policy","unsolicited-submission-policy":"Unsolicited Submission Policy"};function g(n){const a=decodeURIComponent(n||"").trim();return a?l[a]?l[a]:a.replace(/[-_]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}function v(n){const a=n.split("/").filter(Boolean),i=[];let t="";for(let e=0;e<a.length;e++)t+=`/${a[e]}`,i.push({label:g(a[e]),path:t,isLast:e===a.length-1});return i}function w({exclude:n=["/","/home"],hideIfSingle:a=!1}){const{pathname:i}=d(),t=m.useMemo(()=>{if(n.includes(i))return null;const e=v(i);return a&&e.length<=1?null:e},[i,n,a]);return!t||t.length===0?null:r.jsx(b.Wrap,{"aria-label":"Breadcrumb",role:"navigation",children:r.jsxs("ol",{children:[r.jsx("li",{className:"crumb",children:r.jsxs(s,{to:"/home",className:"homeLink","aria-label":"Home",children:[r.jsx(h,{size:16}),r.jsx("span",{className:"vis",children:"Home"})]})}),t.map(e=>r.jsx("li",{className:"sep",children:r.jsx(o,{size:14,"aria-hidden":!0})},`${e.path}-sep`)&&null),t.map(e=>r.jsxs(u.Fragment,{children:[r.jsx("li",{className:"sep",children:r.jsx(o,{size:14,"aria-hidden":!0})}),r.jsx("li",{className:"crumb",children:e.isLast?r.jsx("span",{className:"current","aria-current":"page",title:e.label,children:e.label}):r.jsx(s,{to:e.path,className:"link",title:e.label,children:e.label})})]},e.path))]})})}export{w as B};
