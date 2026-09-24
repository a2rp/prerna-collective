import styled from "styled-components";

export const Styled = {
    Wrap: styled.footer`
        margin-top: var(--space-8);
        padding: var(--space-8) var(--space-6);
        background: var(--surface);
        border-top: 1px solid var(--border);
        color: var(--text);
    `,
    Inner: styled.div`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6);
        display: grid;
        gap: 20px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);

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
            width: fit-content;
            padding: 6px 8px;
            border-radius: var(--radius-md);
            color: var(--text);
            transition: background 0.18s ease, box-shadow 0.18s ease;
        }
        .brandLink:hover {
            background: var(--tint-weak);
            box-shadow: var(--shadow-sm);
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
            margin-top: 2px;
            color: var(--text-muted);
            font-size: 12px;
        }
        .socials,
        .supportIcons {
            display: inline-flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        .socials {
            justify-self: end;
        }
        .iconBtn {
            width: 36px;
            height: 36px;
            display: inline-grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: border-color 0.18s ease, box-shadow 0.18s ease, text-shadow 0.18s ease;
        }
        .iconBtn:hover,
        .iconBtn:focus-visible {
            border-color: var(--primary);
            box-shadow: var(--focus-ring);
            text-shadow: 0 0 10px rgb(var(--primary-rgb) / 0.35);
        }
        .iconBtn:focus-visible {
            outline: none;
        }
        .cols {
            display: grid;
            grid-template-columns: repeat(4, minmax(150px, 1fr));
            gap: 24px;
            border-top: 1px dashed var(--border);
            padding-top: var(--space-4);
        }
        .col {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .colTitle {
            color: var(--text-muted);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.6px;
            text-transform: uppercase;
        }
        .col ul {
            display: grid;
            gap: 4px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .fLink {
            display: inline-block;
            padding: 6px 8px;
            border: 1px solid transparent;
            border-radius: var(--radius-md);
            color: var(--text);
            transition: border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
        }
        .fLink:hover {
            border-color: rgb(var(--primary-rgb) / 0.2);
            box-shadow: var(--shadow-sm);
            color: var(--link);
        }
        .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-top: 1px dashed var(--border);
            padding-top: var(--space-3);
        }
        .copy {
            color: var(--text-muted);
            font-size: 12px;
        }
        .copy a {
            color: var(--link);
        }
        .copy a:hover,
        .copy a:focus-visible {
            text-shadow: 0 0 10px rgb(var(--primary-rgb) / 0.35);
        }
        .toTop {
            flex: 0 0 auto;
        }
        @media (max-width: 900px) {
            .cols {
                grid-template-columns: repeat(2, minmax(150px, 1fr));
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
                align-items: flex-start;
                flex-direction: column;
            }
        }
    `,
};
