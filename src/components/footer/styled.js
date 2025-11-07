import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 16px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--card);
        box-shadow: var(--shadow-sm);
        color: var(--text);
    `,

    Bar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 12px;
        border-top: 1px solid var(--border);
        background: var(--surface);

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        .small {
            color: var(--text);
            text-decoration: none;
            font-size: 12px;
            padding: 4px 6px;
            border-radius: var(--radius-sm);
            border: 1px solid transparent;
            transition: background 0.15s ease, border-color 0.15s ease;
        }
        .small:hover {
            background: var(--tint-weak);
            border-color: rgb(var(--primary-rgb) / 0.22);
        }
        .dot {
            color: var(--text-muted);
            user-select: none;
        }
        .top {
            margin-left: 6px;
            font-size: 12px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 6px 10px;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: background 0.15s ease, transform 0.06s ease;
        }
        .top:hover {
            background: var(--tint-weak);
        }
        .top:active {
            transform: translateY(1px);
        }
        .top:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
    `,
};
