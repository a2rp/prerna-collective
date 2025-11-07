import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: sticky; /* keeps visible if page scrolls a bit */
        top: calc(var(--site-header-h, 70px) + 0px);
        z-index: 1;
        margin-bottom: 10px;
        padding: 8px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        overflow-x: auto; /* mobile: allow horizontal scroll */
        white-space: nowrap;

        nav {
            width: max-content;
        }

        ol {
            list-style: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 0;
            margin: 0;
        }

        li {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            min-width: 0; /* for text ellipsis in nested items */
        }

        .crumb {
            display: inline-block;
            padding: 6px 10px;
            border-radius: var(--radius-md);
            color: var(--text);
            text-decoration: none;
            border: 1px solid transparent;
            transition: background 0.15s ease, border-color 0.15s ease;
            max-width: 240px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .crumb:hover {
            background: var(--tint-weak);
            border-color: rgb(var(--primary-rgb) / 0.25);
        }
        .crumb:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }

        .current {
            font-weight: 700;
            padding: 6px 10px;
            border-radius: var(--radius-md);
            background: linear-gradient(
                0deg,
                transparent 0 88%,
                rgb(var(--primary-rgb) / 0.18) 88% 100%
            );
            max-width: 280px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sep {
            color: var(--text-muted);
            user-select: none;
            margin: 0 2px;
        }
    `,
};
