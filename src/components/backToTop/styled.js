import styled from "styled-components";

/* Floating action button (bottom-right) */
export const Styled = {
    Fab: styled.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9990;

        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;
        border-radius: 999px;

        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        box-shadow: var(--shadow-md);

        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.2s ease,
            background 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;

        /* Show/Hide */
        opacity: ${(p) => (p.$show ? 1 : 0)};
        visibility: ${(p) => (p.$show ? "visible" : "hidden")};
        transform: ${(p) => (p.$show ? "translateY(0)" : "translateY(6px)")};

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

        /* Smaller on very small screens */
        @media (max-width: 420px) {
            right: 12px;
            bottom: 12px;
            width: 40px;
            height: 40px;
        }
    `,
};
