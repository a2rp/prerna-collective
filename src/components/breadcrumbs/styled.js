import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Styled = {
    Wrap: styled.nav`
        --pad-x: 12px;
        --h: 38px;

        display: block;
        width: 100%;
        margin: 30px 0;

        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);

        animation: ${rise} 0.25s ease both;

        ol {
            list-style: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
            min-height: var(--h);
            padding: 6px var(--pad-x);
        }

        .crumb {
            display: inline-flex;
            align-items: center;
            min-height: 28px;
            max-width: 240px;
        }

        .homeLink,
        .link,
        .current {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: var(--radius-sm);
            line-height: 1;
            text-decoration: none;
            color: var(--text);
            border: 1px solid transparent;
            background: transparent;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .homeLink {
            background: var(--tint-weak);
            border-color: var(--tint-med);
        }

        .link {
            border-color: transparent;
        }
        .link:hover {
            text-decoration: underline;
            color: var(--link-hover);
            border-color: var(--tint-med);
            background: var(--tint-weak);
        }
        .link:focus-visible,
        .homeLink:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }

        .current {
            font-weight: 700;
            border-color: var(--tint-med);
            background: var(--tint-weak);
            cursor: default;
        }

        .sep {
            display: inline-flex;
            align-items: center;
            color: var(--text-muted);
            opacity: 0.8;
        }

        /* Visually hidden label for home text next to icon */
        .vis {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        @media (max-width: 720px) {
            ol {
                gap: 4px;
                padding: 6px 8px;
            }
            .crumb {
                max-width: 160px;
            }
        }
    `,
};
