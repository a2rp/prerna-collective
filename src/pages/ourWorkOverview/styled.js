// src/pages/ourWorkOverview/styled.js
import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export const Styled = {
    Page: styled.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,

    /* ───────── Hero ───────── */
    Hero: styled.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;

        .bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
            filter: saturate(1.05) contrast(1.05);
            z-index: -2;
        }
        .veil {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    1200px 400px at 20% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.12),
                    transparent 50%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            z-index: -1;
        }

        .inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 42px;
            display: grid;
            gap: 12px;
            animation: ${rise} 0.5s ease both;
        }

        .kicker {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            border-radius: 999px;
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }

        h1 {
            font-size: 38px;
            line-height: 1.1;
            letter-spacing: 0.2px;
        }
        .sub {
            max-width: 820px;
            color: var(--text-muted);
            margin-top: 6px;
            margin-bottom: 10px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;

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

        &.mount .kicker {
            animation: ${float} 3.6s ease-in-out infinite;
        }

        @media (max-width: 720px) {
            .inner {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 30px;
            }
        }
    `,

    /* ───────── Metrics ───────── */
    Metrics: styled.section`
        max-width: 1100px;
        margin: var(--space-6) auto;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        background: var(--surface-brand-1);
        box-shadow: var(--shadow-sm);

        .metric {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            text-align: center;
            padding: 14px 8px;
            box-shadow: var(--shadow-sm);
        }
        .value {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .label {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 860px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────── Pillars ───────── */
    Pillars: styled.section`
        max-width: 1100px;
        margin: 0 auto;
        padding: var(--space-6) var(--space-6) 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;

        .pillar {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .pillar:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background: rgb(var(--primary-rgb) / 0.08);
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
        .t h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .t p {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────── Sections grid ───────── */
    Section: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
    `,

    CardGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .card {
            position: relative;
            display: grid;
            grid-template-rows: 180px auto auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
            transform: translateZ(0);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .media {
            position: relative;
            overflow: hidden;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .media img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
            transform: scale(1.06);
        }
        .media .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.5;
            mix-blend-mode: soft-light;
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
        }
        .icon {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 800;
            letter-spacing: 0.2px;
        }

        .blurb {
            padding: 0 12px 12px;
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────── CTA ───────── */
    CTA: styled.section`
        max-width: 960px;
        margin: var(--space-8) auto var(--space-8);
        padding: var(--space-8);
        text-align: center;

        h3 {
            font-size: 22px;
            margin-bottom: 8px;
        }
        p {
            color: var(--text-muted);
            margin-bottom: var(--space-4);
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

        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);
    `,
};
