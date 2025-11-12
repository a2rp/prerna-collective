// src/pages/fellowships/styled.js
import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to   { opacity: 1; transform: translateY(0)  scale(1); }
`;
const hoverUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-2px); }
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
        overflow: hidden;
        isolation: isolate;

        .media {
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            filter: saturate(1.05) contrast(1.05);
            transform: scale(1.02);
        }
        .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    1000px 400px at 15% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.12),
                    transparent 55%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 70px var(--space-6) 40px;
            display: grid;
            gap: 10px;
            animation: ${rise} 0.5s ease both;
        }
        .badge {
            width: fit-content;
        }
        h1 {
            font-size: 36px;
            line-height: 1.15;
        }
        .sub {
            color: var(--text-muted);
            max-width: 860px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 6px;
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

        @media (max-width: 720px) {
            .inner {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 30px;
            }
        }
    `,

    /* ───────── Sections ───────── */
    Section: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        &.brand {
            background: var(--surface-brand-1);
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

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

    /* ───────── Program Cards ───────── */
    ProgramGrid: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .program {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            display: grid;
            grid-template-rows: 160px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .program:hover {
            animation: ${hoverUp} 0.15s ease forwards;
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .pic {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .pic img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .program:hover .pic img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.2));
        }

        .body {
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .title .ico {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .blurb {
            color: var(--text-muted);
            font-size: 13px;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .actions {
            display: flex;
            gap: 10px;
            margin-top: 2px;
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

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────── Filters ───────── */
    Filters: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: var(--space-4);
        flex-wrap: wrap;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .ico {
            color: var(--text-muted);
            display: grid;
            place-items: center;
        }

        button.chip {
            cursor: pointer;
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
            background: rgb(var(--primary-rgb) / 0.08);
            color: var(--text);
            border-radius: 999px;
            padding: 4px 10px;
            transition: background 0.15s ease, transform 0.06s ease,
                box-shadow 0.2s ease;
        }
        button.chip:hover {
            background: rgb(var(--primary-rgb) / 0.12);
        }
        button.chip:active {
            transform: translateY(1px);
        }
        button.chip.active {
            background: rgb(var(--primary-rgb) / 0.18);
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: inset 0 0 0 1px rgb(var(--primary-rgb) / 0.35);
        }

        select {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 8px 10px;
        }
    `,

    /* ───────── Fellows Grid ───────── */
    FellowGrid: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .fellow {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            display: grid;
            grid-template-rows: 200px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .fellow:hover {
            animation: ${hoverUp} 0.15s ease forwards;
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .photo {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .photo img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .photo .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            backdrop-filter: blur(2px);
        }

        .meta {
            padding: 12px;
            display: grid;
            gap: 6px;
        }
        .meta h3 {
            font-size: 16px;
            line-height: 1.3;
        }
        .tagline {
            color: var(--text-muted);
            font-size: 13px;
        }

        .row {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
        }
        .badge {
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid rgb(var(--primary-rgb) / 0.22);
            background: rgb(var(--primary-rgb) / 0.1);
        }
        .badge.policy {
            background: rgb(59 130 246 / 0.1);
            border-color: rgb(59 130 246 / 0.35);
        }
        .badge.science {
            background: rgb(34 197 94 / 0.12);
            border-color: rgb(34 197 94 / 0.35);
        }
        .badge.story {
            background: rgb(244 114 182 / 0.12);
            border-color: rgb(244 114 182 / 0.35);
        }

        .loc {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text-muted);
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            margin-top: 2px;
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

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────── Empty state ───────── */
    Empty: styled.div`
        margin-top: var(--space-6);
        display: grid;
        grid-template-columns: 28px 1fr;
        gap: 10px;
        align-items: center;
        padding: var(--space-4);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface);

        .t {
            color: var(--text-muted);
        }
        .t span {
            display: block;
            font-size: 12px;
            margin-top: 4px;
        }
    `,
};
