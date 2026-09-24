import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto;
        width: 100%;
        height: var(--site-header-h, 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px var(--space-6);
        z-index: 9999;
        background: var(--card);
        border-bottom: 1px solid var(--border);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        backdrop-filter: saturate(1.1) blur(8px);
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
            color: var(--text);
            transition: background 0.18s ease, box-shadow 0.18s ease;
        }
        .brandLink:hover {
            background: var(--tint-weak);
            box-shadow: var(--shadow-sm);
        }
        .brandLink:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
        .logo {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .brand {
            display: grid;
            line-height: 1;
        }
        .title {
            font-weight: 900;
            letter-spacing: 0.3px;
            font-size: 16px;
            background: linear-gradient(90deg, var(--text) 0%, var(--text) 30%, var(--link) 90%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 8px 28px rgb(var(--primary-rgb) / 0.15);
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
    ThemeToggleButton: styled.button`
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: border-color 0.18s ease, box-shadow 0.18s ease, text-shadow 0.18s ease;
        &:hover,
        &:focus-visible {
            border-color: var(--primary);
            box-shadow: var(--focus-ring);
            text-shadow: 0 0 10px rgb(var(--primary-rgb) / 0.35);
        }
        &:focus-visible {
            outline: none;
        }
    `,
    DrawerButton: styled.button`
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        cursor: pointer;
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: border-color 0.18s ease, box-shadow 0.18s ease, text-shadow 0.18s ease;
        &:hover,
        &:focus-visible {
            border-color: var(--primary);
            box-shadow: var(--focus-ring);
            text-shadow: 0 0 10px rgb(var(--primary-rgb) / 0.35);
        }
        &:focus-visible {
            outline: none;
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
        background: rgb(0 0 0 / 0.45);

        .empty {
            width: 100%;
            border: 0;
            background: transparent;
            cursor: pointer;
        }
        .navlinksWrapper {
            width: 300px;
            flex: 0 0 300px;
            background: var(--card);
            color: var(--text);
            border-left: 1px solid var(--border);
            box-shadow: var(--shadow-md);
        }
        .navlinksInner {
            height: 100%;
            overflow-y: auto;
            padding: 12px 8px;
            display: grid;
            align-content: start;
            gap: 10px;
            scroll-behavior: smooth;
        }
        .sectionLabel {
            padding: 6px 8px;
            color: var(--text-muted);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.6px;
            text-transform: uppercase;
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
            border: 1px solid transparent;
            border-radius: var(--radius-md);
            color: var(--text);
            scroll-margin: 80px;
            transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .navItem:hover {
            background: var(--tint-weak);
            border-color: rgb(var(--primary-rgb) / 0.2);
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
