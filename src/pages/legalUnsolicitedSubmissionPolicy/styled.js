import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const flash = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(var(--primary-rgb) / .5); }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

export const Styled = {
    Page: styled.div`
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
            animation: ${flash} 0.8s ease;
        }
    `,

    Hero: styled.header`
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
            animation: ${rise} 0.5s ease both;
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
    `,

    Layout: styled.div`
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
            animation: ${fadeIn} 0.25s ease both;
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
    `,

    Divider: styled.hr`
        border: none;
        height: 1px;
        background: var(--border);
        margin: var(--space-6) 0;
    `,

    ChangeLog: styled.section`
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
    `,

    Related: styled.section`
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
    `,
};
