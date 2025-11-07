// src/App.styled.js
import styled, { css } from "styled-components";

/* Scrollbar that stays the same size (no layout shift) and
   uses brand tints on hover. */
const hoverScrollbarStable = css`
    scrollbar-gutter: stable;

    /* Firefox defaults */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    /* WebKit size */
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
        transition: background 0.15s ease;
    }

    /* On hover: use brand tints (orange-forward) */
    @media (hover: hover) {
        &:hover {
            scrollbar-color: rgb(var(--primary-rgb) / 0.35) transparent;
        }
        &:hover::-webkit-scrollbar-thumb {
            background: rgb(var(--primary-rgb) / 0.35);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgb(var(--primary-rgb) / 0.55);
        }
        &::-webkit-scrollbar-thumb:active {
            background: var(--primary-600);
        }
    }

    /* Touch devices: keep a visible thin thumb */
    @media (hover: none) {
        scrollbar-width: thin;
        scrollbar-color: rgb(var(--primary-rgb) / 0.35) transparent;
        &::-webkit-scrollbar-thumb {
            background: rgb(var(--primary-rgb) / 0.35);
        }
    }
`;

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        overflow-y: auto;

        /* Theme surfaces */
        background: var(--bg);
        color: var(--text);

        ${hoverScrollbarStable};
    `,

    Main: styled.main`
        display: flex;
        justify-content: center;
        width: 100%;

        /* Subtle brand-tinted surface under content */
        background: var(--surface);
    `,

    RoutesWrapper: styled.div`
        width: 100%;
        max-width: 1440px;
        margin: 15px;
        min-height: 100vh;

        /* Keep your spacing, just align with header height token if present */
        margin: 70px 15px;
        padding: 15px;
    `,
};
