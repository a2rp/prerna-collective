import{d as e,m as o,x as i,j as a,y as n,N as r,z as d,A as c,w as p}from"./index-f_zt6Rys.js";const l=o`
  0%   { transform: translateY(0px);   }
  50%  { transform: translateY(-4px);  }
  100% { transform: translateY(0px);   }
`,s={Wrapper:e.main`
        min-height: calc(100vh - var(--site-header-h, 60px));
        padding: calc(var(--site-header-h, 60px) + 24px) var(--space-6)
            var(--space-8);
        display: grid;
        place-items: center;
        background: var(--surface);
        color: var(--text);
    `,Card:e.section`
        width: 100%;
        max-width: 760px;
        padding: var(--space-8);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--card);
        text-align: center;

        h1 {
            font-size: 28px;
            margin-top: var(--space-4);
            margin-bottom: var(--space-3);
            line-height: 1.2;
        }
        .sub {
            color: var(--text-muted);
            margin-bottom: var(--space-6);
            word-break: break-word;
        }
        code {
            border: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
            padding: 2px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .iconWrap {
            width: 96px;
            height: 96px;
            display: grid;
            place-items: center;
            margin: 0 auto;
            color: var(--primary);
            background: var(--surface-brand-1);
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            animation: ${l} 3.2s ease-in-out infinite;
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

        .hint {
            font-size: 12px;
            color: var(--text-muted);
            border-top: 1px dashed var(--border);
            padding-top: var(--space-3);
        }

        @media (max-width: 520px) {
            padding: var(--space-6);
            h1 {
                font-size: 24px;
            }
        }
    `};function x(){const t=i();return a.jsx(s.Wrapper,{children:a.jsxs(s.Card,{className:"card brandish",children:[a.jsx("div",{className:"iconWrap","aria-hidden":"true",children:a.jsx(n,{size:64})}),a.jsx("h1",{children:"Page not found"}),a.jsxs("p",{className:"sub",children:["We couldn’t find ",a.jsx("code",{children:t.pathname}),". It may have been moved or never existed."]}),a.jsxs("div",{className:"actions",children:[a.jsxs(r,{to:"/home",className:"btn-primary","aria-label":"Go to Home",children:[a.jsx(d,{size:18,style:{marginRight:8}}),"Home"]}),a.jsxs(r,{to:"/",className:"btn-ghost","aria-label":"Back to previous section",children:[a.jsx(c,{size:18,style:{marginRight:8}}),"Back"]}),a.jsxs(r,{to:"/contact",className:"btn-ghost","aria-label":"Contact support",children:[a.jsx(p,{size:18,style:{marginRight:8}}),"Contact"]})]}),a.jsx("div",{className:"hint",children:"Try checking the URL for typos, or use the menu to navigate to a different section."})]})})}export{x as default};
