// src/pages/ventureCapital/styled.js
import styled, { keyframes } from "styled-components";

const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export const Styled = {
    Page: styled.main`
        /* border: 1px solid #f00; */
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */
    `,

    Hero: styled.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;

        .bg {
            position: absolute;
            inset: 0;
            z-index: -1;
            filter: saturate(1.05) contrast(1.05);
        }
        .bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
        }
        .bg .vignette {
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
            mix-blend-mode: soft-light;
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 42px;
            display: grid;
            gap: 12px;
            animation: ${rise} 0.6s ease both;
        }

        .eyebrow {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }

        h1 {
            font-size: 36px;
            line-height: 1.15;
            letter-spacing: 0.2px;
            background: linear-gradient(
                0deg,
                transparent 0 86%,
                rgb(var(--primary-rgb) / 0.18) 86% 100%
            );
            display: inline;
            padding-bottom: 2px;
        }

        .sub {
            max-width: 860px;
            color: var(--text-muted);
            margin-top: 8px;
            margin-bottom: 14px;
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

        &.mount .eyebrow {
            animation: ${floatY} 3.2s ease-in-out infinite;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 28px;
            }
        }
    `,

    Thesis: styled.section`
        max-width: 1200px;
        margin: var(--space-8) auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);

        .tile {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 12px;
            display: grid;
            gap: 6px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .tile:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .tile .ico {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--card);
            box-shadow: var(--shadow-sm);
            color: var(--text);
        }
        .tile p {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

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

    PortfolioGrid: styled.div`
        display: grid;
        gap: 14px;

        .row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
        }

        .card {
            display: grid;
            grid-template-rows: 160px auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
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
            background: rgb(var(--primary-rgb) / 0.06);
            overflow: hidden;
        }
        .media img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
            transform: scale(1.06);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 /0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            backdrop-filter: blur(2px);
        }

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 12px;
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .iconBtn {
            width: 32px;
            height: 32px;
        }

        @media (max-width: 1080px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }
            .card {
                grid-template-rows: 200px auto;
            }
            .media img {
                height: 200px;
            }
        }
    `,

    Callouts: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .call {
            padding: var(--space-6);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .call h3 {
            font-size: 18px;
            margin-bottom: 8px;
        }
        .call ul {
            padding-left: 18px;
        }
        .call li {
            margin: 6px 0;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    CTA: styled.section`
        max-width: 960px;
        margin: var(--space-8) auto;
        padding: var(--space-8);
        text-align: center;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);

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
    `,
};
