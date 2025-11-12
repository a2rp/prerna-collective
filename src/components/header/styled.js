import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0%   { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
  50%  { opacity: .7; }
  100% { transform: translateX(220%) skewX(-18deg); opacity: 0; }
`;
const pulse = keyframes`
  0%,100% { box-shadow: 0 0 0 0 rgb(var(--primary-rgb) / .0); }
  50%     { box-shadow: 0 0 0 8px rgb(var(--primary-rgb) / .08); }
`;

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: var(--site-header-h, 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px var(--space-6);
        z-index: 9999;

        background: var(--card);
        border-bottom: 1px solid var(--border);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        backdrop-filter: saturate(1.1) blur(2px);
    `,

    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
    `,

    NameLogoWrapper: styled.div`
        .brandLink {
            display: inline-grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 10px;
            padding: 6px 10px;
            border-radius: var(--radius-md);
            text-decoration: none;
            color: var(--text);
            position: relative;
            transition: background 0.2s ease, transform 0.06s ease,
                box-shadow 0.2s ease;
        }
        .brandLink:hover {
            background: var(--tint-weak);
        }
        .brandLink:active {
            transform: translateY(1px);
        }
        .brandLink:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }

        /* Logo mark */
        .logo {
            position: relative;
            width: 34px;
            height: 34px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
            background: radial-gradient(
                    120% 120% at 20% 20%,
                    rgb(var(--primary-rgb) / 0.45),
                    transparent 60%
                ),
                radial-gradient(
                    120% 120% at 80% 80%,
                    rgb(var(--primary-rgb) / 0.25),
                    transparent 60%
                ),
                var(--card);
            display: grid;
            place-items: center;
            box-shadow: var(--shadow-sm);
            animation: ${pulse} 3.2s ease-in-out infinite;
        }
        .logo .orb {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: var(--primary);
            filter: drop-shadow(0 2px 12px rgb(var(--primary-rgb) / 0.7));
        }
        .logo .flare {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, #fff, transparent);
            mix-blend-mode: overlay;
            opacity: 0;
            pointer-events: none;
        }
        .brandLink:hover .logo .flare {
            animation: ${shine} 1.1s ease;
        }

        /* Wordmark */
        .brand {
            display: grid;
            line-height: 1;
        }
        .title {
            font-weight: 900;
            letter-spacing: 0.3px;
            font-size: 16px;
            background: linear-gradient(
                90deg,
                var(--text) 0%,
                var(--text) 30%,
                var(--link) 90%
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 0.01px rgba(0, 0, 0, 0),
                /* fix subpixel gaps */ 0 8px 28px
                    rgb(var(--primary-rgb) / 0.15);
            transition: transform 0.2s ease;
        }
        .brandLink:hover .title {
            transform: scale(1.05);
        }

        .tag {
            margin-top: 2px;
            font-size: 11px;
            color: var(--text-muted);
            letter-spacing: 0.2px;
            opacity: 0.9;
        }

        @media (max-width: 720px) {
            .tag {
                display: none;
            }
        }
    `,

    Col: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `,

    ThemeToggleLink: styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, transform 0.06s ease,
            box-shadow 0.2s ease;
        &:hover {
            background: var(--tint-weak);
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
    `,

    DrawerLinkWrapper: styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, transform 0.06s ease,
            box-shadow 0.2s ease;
        &:hover {
            background: var(--tint-weak);
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
    `,

    DrawerWrapper: styled.div`
        position: fixed;
        top: var(--site-header-h, 60px);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--site-header-h, 60px));
        display: flex;
        z-index: 9998;
        background-color: rgb(0 0 0 / 0.45);

        .empty {
            width: 100%;
            cursor: pointer;
        }

        .navlinksWrapper {
            width: 300px;
            flex: 0 0 300px;
            background: var(--card);
            color: var(--text);
            border-left: 1px solid var(--border);
            box-shadow: var(--shadow-md);
            animation: slideIn 0.2s ease;
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }

        .navlinksInner {
            height: 100%;
            overflow-y: auto;
            padding: 12px 8px;
            display: grid;
            gap: 10px;
            scroll-behavior: smooth;
        }
        .sectionLabel {
            font-weight: 700;
            font-size: 12px;
            color: var(--text-muted);
            letter-spacing: 0.6px;
            text-transform: uppercase;
            padding: 6px 8px;
        }
        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 4px;
        }

        .navItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            color: var(--text);
            text-decoration: none;
            border: 1px solid transparent;
            transition: background 0.15s ease, border-color 0.15s ease,
                box-shadow 0.15s ease;
            scroll-margin: 80px;
        }
        .navItem:hover {
            background: var(--tint-weak);
        }
        .navItem.active {
            background: var(--tint-med);
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: inset 3px 0 0 0 var(--primary);
        }
        .ico {
            width: 20px;
            height: 20px;
            display: grid;
            place-items: center;
        }
        .txt {
            flex: 1 1 auto;
        }

        .legalBlock {
            margin-top: 12px;
            padding-top: 8px;
            border-top: 1px dashed var(--border);
        }
    `,
};
