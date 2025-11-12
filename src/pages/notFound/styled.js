// src/pages/notFound/styled.js
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%   { transform: translateY(0px);   }
  50%  { transform: translateY(-4px);  }
  100% { transform: translateY(0px);   }
`;

export const Styled = {
    Wrapper: styled.main`
        min-height: calc(100vh - var(--site-header-h, 60px));
        padding: calc(var(--site-header-h, 60px) + 24px) var(--space-6)
            var(--space-8);
        display: grid;
        place-items: center;
        background: var(--surface);
        color: var(--text);
    `,

    Card: styled.section`
        width: 100%;
        max-width: 760px;
        padding: var(--space-8);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--card);
        text-align: center;

        h1 {
            font-size: 28px;
            margin-top: var(--space-4);
            margin-bottom: var(--space-3);
            line-height: 1.2;
        }
        .sub {
            color: var(--text-muted);
            margin-bottom: var(--space-6);
            word-break: break-word;
        }
        code {
            border: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
            padding: 2px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .iconWrap {
            width: 96px;
            height: 96px;
            display: grid;
            place-items: center;
            margin: 0 auto;
            color: var(--primary);
            background: var(--surface-brand-1);
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
            animation: ${float} 3.2s ease-in-out infinite;
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: var(--space-4);

            a {
                text-decoration: none;
                line-height: 1;
                min-height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }

        .hint {
            font-size: 12px;
            color: var(--text-muted);
            border-top: 1px dashed var(--border);
            padding-top: var(--space-3);
        }

        @media (max-width: 520px) {
            padding: var(--space-6);
            h1 {
                font-size: 24px;
            }
        }
    `,
};
