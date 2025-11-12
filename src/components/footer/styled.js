import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`;
const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(0,0,0,0); }
  100% { box-shadow: 0 10px 40px rgb(var(--primary-rgb) / .18); }
`;

export const Styled = {
    Wrap: styled.footer`
        margin-top: var(--space-8);
        padding: var(--space-8) var(--space-6);
        background: var(--surface);
        border-top: 1px solid var(--border);
        color: var(--text);

        &.mount .card {
            animation: ${glow} 0.6s ease both;
        }
    `,

    Inner: styled.div`
        --col-min: 180px; /* keeps columns aligned and tidy */
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        display: grid;
        gap: 20px;
        animation: ${rise} 0.4s ease both;

        /* Brand row */
        .brandArea {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 14px;
        }
        .brandLink {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text);
            padding: 6px 8px;
            border-radius: var(--radius-md);
            transition: background 0.2s ease;
        }
        .brandLink:hover {
            background: var(--tint-weak);
        }

        .brandImg {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            object-fit: cover;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            box-shadow: var(--shadow-sm);
            background: rgb(var(--primary-rgb) / 0.12);
        }
        .brandText .title {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }
        .brandText .tagline {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: -2px;
        }

        .socials {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            justify-self: end;
        }
        .iconBtn {
            width: 36px;
            height: 36px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: transform 0.06s ease, background 0.2s ease,
                box-shadow 0.2s ease;
        }
        .iconBtn:hover {
            background: var(--tint-weak);
            box-shadow: var(--shadow-md);
            transform: translateY(-1px);
        }

        /* Columns grid: perfectly aligned, equalized widths, consistent gutters */
        .cols {
            display: grid;
            grid-template-columns: repeat(4, minmax(var(--col-min), 1fr));
            column-gap: 24px;
            row-gap: 12px;
            border-top: 1px dashed var(--border);
            padding-top: var(--space-4);
        }
        .col {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .colTitle {
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: var(--text-muted);
            padding: 2px 0;
        }
        .col ul {
            /* border: 1px solid #f00; */
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: stretch;
            justify-content: stretch;
        }
        .fLink {
            color: var(--text);
            text-decoration: none;
            border: 1px solid transparent;
            padding: 6px 8px;
            border-radius: var(--radius-md);
            transition: background 0.15s ease, border-color 0.15s ease,
                color 0.15s ease;
        }
        .fLink:hover {
            background: var(--tint-weak);
            border-color: rgb(var(--primary-rgb) / 0.2);
            color: var(--link);
            text-decoration: none;
        }

        /* Bottom bar perfectly aligned */
        .bottom {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 12px;
            border-top: 1px dashed var(--border);
            padding-top: var(--space-3);
        }
        .copy {
            font-size: 12px;
            color: var(--text-muted);
        }
        .built a {
            color: var(--link);
            text-decoration: none;
        }
        .built a:hover {
            color: var(--link-hover);
            text-decoration: underline;
        }

        .rightCluster {
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        .toTop {
            width: 36px;
            height: 36px;
        }

        @media (max-width: 900px) {
            .cols {
                grid-template-columns: repeat(2, minmax(var(--col-min), 1fr));
            }
        }
        @media (max-width: 560px) {
            .brandArea {
                grid-template-columns: 1fr;
            }
            .socials {
                justify-self: start;
            }
            .cols {
                grid-template-columns: 1fr;
            }
            .bottom {
                grid-template-columns: 1fr;
                row-gap: 8px;
            }
            .rightCluster {
                justify-self: start;
            }
        }
    `,
};
