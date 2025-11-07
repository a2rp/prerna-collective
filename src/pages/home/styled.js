import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        background: var(--bg);
        color: var(--text);
    `,

    Main: styled.main`
        position: relative;
        width: 100%;
        max-width: 1200px;
        padding: calc(var(--site-header-h) + 24px) 16px 80px;
        display: grid;
        gap: 28px;
    `,

    Hero: styled.section`
        border-radius: var(--radius-lg);
        padding: 28px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);

        .hero__eyebrow {
            font-size: 12px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom: 10px;
            color: var(--text);
            opacity: 0.8;
        }

        .hero__title {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 12px;
            background: linear-gradient(
                0deg,
                transparent 0 88%,
                rgb(var(--primary-rgb) / 0.22) 88% 100%
            );
            display: inline;
        }

        .hero__dek {
            font-size: 14px;
            line-height: 1.8;
            max-width: 62ch;
            color: var(--text);
            opacity: 0.9;
        }

        @media (min-width: 768px) {
            padding: 36px;
            .hero__title {
                font-size: 36px;
            }
            .hero__dek {
                font-size: 15px;
            }
        }
    `,

    CTAs: styled.div`
        display: flex;
        gap: 10px;
        margin: 18px 0 6px;

        .btn-primary,
        .btn-ghost {
            min-height: 40px;
            padding-inline: 16px;
            text-decoration: none;
        }
    `,

    MetaRow: styled.div`
        display: flex;
        gap: 8px;
        margin-top: 10px;

        .chip {
            background: rgb(var(--primary-rgb) / 0.08);
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
        }
    `,

    Grid: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;

        @media (min-width: 700px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `,

    GridCard: styled.article`
        padding: 18px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--card);
        display: grid;
        gap: 8px;

        h3 {
            font-size: 18px;
            line-height: 1.3;
        }

        p {
            font-size: 13px;
            line-height: 1.9;
            color: var(--text);
            opacity: 0.92;
        }

        .link {
            width: fit-content;
            color: var(--link);
            text-decoration: none;
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .link:hover {
            color: var(--link-hover);
            border-bottom-color: rgb(var(--primary-rgb) / 0.55);
            text-decoration: none;
        }
    `,
};
