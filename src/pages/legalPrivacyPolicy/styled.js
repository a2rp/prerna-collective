import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`;
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

export const Styled = {
    Page: styled.main`
        display: block;
        color: var(--text);
        transition: background 0.25s ease, color 0.25s ease;

        &.saved {
            outline: none;
            box-shadow: 0 0 0 0 transparent;
            /* little “saved” pulse on the Save button wrapper, handled locally */
        }
    `,

    Hero: styled.header`
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
            animation: ${rise} 0.35s ease both;
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
    `,

    StatusRow: styled.div`
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
            animation: ${rise} 0.25s ease both;
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
    `,

    Layout: styled.section`
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
            animation: ${rise} 0.3s ease both;
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
            animation: ${rise} 0.25s ease both;
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
    `,

    SecHeader: styled.header`
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
            animation: ${floatY} 3.6s ease-in-out infinite;
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
            animation: ${rise} 0.2s ease both;
        }
    `,

    BottomNav: styled.nav`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        padding: 12px;
        margin-top: var(--space-6);
        border-radius: var(--radius-lg);
    `,
};
