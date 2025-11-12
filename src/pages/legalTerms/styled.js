import styled, { keyframes } from "styled-components";

/* Animations */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.99); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;
const glow = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(var(--primary-rgb) / .25); }
  100% { box-shadow: 0 0 0 8px transparent; }
`;

export const Styled = {
    Page: styled.main`
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
    `,

    Hero: styled.section`
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
            animation: ${rise} 0.4s ease both;
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
    `,

    Body: styled.section`
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
            animation: ${rise} 0.35s ease both;
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
            animation: ${rise} 0.3s ease both;
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
            animation: ${floatY} 3.2s ease-in-out infinite;
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
            animation: ${rise} 0.35s ease both;

            /* ⭐ critical: ensure hash targets land below fixed header */
            scroll-margin-top: calc(var(--site-header-h, 60px) + 12px);
        }
        section.sec.active {
            animation: ${glow} 0.8s ease-out both;
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
    `,
};
