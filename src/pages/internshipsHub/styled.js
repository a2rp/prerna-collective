// src/pages/internshipsHub/styled.js
import styled, { keyframes } from "styled-components";

/* ───────────────── animations ───────────────── */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Styled = {
    Page: styled.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        .btn-primary,
        .btn-ghost,
        .btn-icon {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
            transition: all 0.2s ease;
            cursor: pointer;
        }
        .btn-primary {
            background: var(--primary);
            color: #000;
            border: 1px solid rgb(var(--primary-rgb) / 0.2);
            box-shadow: var(--shadow-sm);
        }
        .btn-primary:hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
        }
        .btn-ghost {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid var(--border);
            color: var(--text);
        }
        .btn-ghost:hover {
            border-color: rgb(var(--primary-rgb) / 0.4);
            transform: translateY(-1px);
        }
        .btn-icon {
            width: 36px;
            height: 36px;
            padding: 0;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: var(--radius-md);
        }
        .btn-icon:hover {
            border-color: rgb(var(--primary-rgb) / 0.4);
            transform: translateY(-1px);
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--card);
            border: 1px solid var(--border);
            transition: all 0.2s ease;
            font-size: 12px;
        }
        .chip.active {
            background: rgb(var(--primary-rgb) / 0.1);
            border-color: rgb(var(--primary-rgb) / 0.4);
            color: var(--text);
            box-shadow: var(--shadow-sm);
        }

        :focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
            * {
                animation: none !important;
                transition: none !important;
            }
        }
    `,

    /* ───────────────── breadcrumbs ───────────────── */
    Breadcrumbs: styled.nav`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-5) var(--space-6) var(--space-2);
        font-size: 13px;
        color: var(--text-muted);

        .crumb {
            color: var(--text-muted);
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: all 0.2s ease;
        }
        .crumb:hover {
            color: var(--text);
            border-bottom-color: rgb(var(--primary-rgb) / 0.4);
        }
        .crumb.current {
            color: var(--text);
            pointer-events: none;
        }
        .sep {
            margin: 0 6px;
            opacity: 0.6;
        }
    `,

    /* ───────────────── hero ───────────────── */
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
            transform: scale(1.02);
            opacity: 0.35;
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
        .badge {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid rgb(var(--primary-rgb) / 0.25);
            background: rgb(var(--primary-rgb) / 0.08);
            color: var(--text);
            border-radius: 999px;
            box-shadow: var(--shadow-sm);
            font-size: 12px;
        }
        h1 {
            font-size: 38px;
            line-height: 1.1;
            letter-spacing: 0.2px;
        }
        .accent {
            background: linear-gradient(90deg, var(--link), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .sub {
            max-width: 820px;
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
            margin-top: 4px;
        }

        .sparkles {
            position: absolute;
            right: clamp(12px, 4vw, 32px);
            top: clamp(12px, 2vw, 24px);
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${floatY} 3.6s ease-in-out infinite;
        }

        &.mount .badge {
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.25),
                rgb(var(--primary-rgb) / 0.08),
                rgb(var(--primary-rgb) / 0.25)
            );
            background-size: 200% 100%;
            animation: ${shimmer} 1.2s ease both;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 32px;
            }
        }
    `,

    /* ───────────────── filters ───────────────── */
    Filters: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px var(--space-6) var(--space-4);

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: center;
        }

        .search {
            display: grid;
            grid-template-columns: 24px 1fr;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 8px 12px;
            box-shadow: var(--shadow-sm);
            transition: border-color 0.2s ease;
        }
        .search:focus-within {
            border-color: rgb(var(--primary-rgb) / 0.35);
        }
        .search .ico {
            opacity: 0.8;
        }
        .search input {
            background: transparent;
            border: 0;
            outline: 0;
            color: var(--text);
            font-size: 14px;
        }

        .selects {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .select {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 8px 10px;
            box-shadow: var(--shadow-sm);
        }
        .select select {
            appearance: none;
            background: transparent;
            border: 0;
            color: var(--text);
            font-size: 14px;
            outline: 0;
        }

        .toggles {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .metaRight {
            color: var(--text-muted);
            font-size: 12px;
        }

        @media (max-width: 960px) {
            .row {
                grid-template-columns: 1fr;
            }
            .selects {
                justify-content: flex-start;
            }
        }
    `,

    /* ───────────────── list ───────────────── */
    List: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;

        .roleCard {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            color: var(--text);
            box-shadow: var(--shadow-sm);
            display: grid;
            grid-template-rows: auto 1fr;
            transform: translateY(8px);
            opacity: 0;
            transition: transform 0.25s ease, box-shadow 0.25s ease,
                border-color 0.25s ease;
            will-change: transform;
        }
        .roleCard.reveal {
            animation: ${rise} 0.4s ease both;
            animation-delay: calc(var(--i) * 40ms);
            transform: none;
            opacity: 1;
        }
        .roleCard:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        .media {
            position: relative;
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .media img {
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .roleCard:hover .media img {
            transform: scale(1.05);
        }
        .media .shade {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            mix-blend-mode: soft-light;
        }
        .media .tagRow {
            position: absolute;
            left: 10px;
            bottom: 10px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .media .tag {
            backdrop-filter: blur(2px);
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: rgba(0, 0, 0, 0.2);
            color: #fff;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .bookmark {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            box-shadow: var(--shadow-sm);
            transition: all 0.2s ease;
        }
        .bookmark:hover {
            transform: translateY(-1px);
            border-color: rgb(var(--primary-rgb) / 0.4);
        }

        .body {
            padding: 12px;
            display: grid;
            gap: 10px;
        }
        .title {
            font-size: 16px;
            line-height: 1.3;
        }
        .facts {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .fact {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 6px 10px;
        }

        .skills {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .skills .chip {
            border-radius: 8px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 6px;
            flex-wrap: wrap;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────────────── empty ───────────────── */
    Empty: styled.div`
        grid-column: 1 / -1;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        padding: var(--space-8);
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        .iconWrap {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: rgb(var(--primary-rgb) / 0.12);
            border: 1px solid rgb(var(--primary-rgb) / 0.35);
            color: var(--text);
            margin-bottom: 4px;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
        }
    `,

    /* ───────────────── process ───────────────── */
    Process: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6) var(--space-6) var(--space-4);

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

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }
        .timeline li {
            position: relative;
        }
        .timeline .dot {
            position: absolute;
            top: 12px;
            left: -8px;
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: var(--primary);
            box-shadow: 0 0 0 4px rgb(var(--primary-rgb) / 0.15);
        }
        .timeline .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 12px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .timeline .card:hover {
            transform: translateY(-2px);
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: var(--shadow-md);
        }
        .timeline .k {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            opacity: 0.9;
            padding: 4px 8px;
            border: 1px solid var(--border);
            border-radius: 999px;
            background: var(--card);
        }

        @media (max-width: 960px) {
            .timeline {
                grid-template-columns: 1fr;
            }
            .timeline .dot {
                left: -6px;
            }
        }
    `,

    /* ───────────────── faq ───────────────── */
    FAQ: styled.section`
        max-width: 960px;
        margin: 0 auto;
        padding: var(--space-6);
        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
        }

        details {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 10px 12px;
            margin-bottom: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        details[open] {
            border-color: rgb(var(--primary-rgb) / 0.35);
            box-shadow: var(--shadow-sm);
        }
        summary {
            cursor: pointer;
            font-weight: 600;
            outline: none;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        summary::after {
            content: "▾";
            float: right;
            opacity: 0.6;
            transition: transform 0.2s ease;
        }
        details[open] summary::after {
            transform: rotate(180deg);
        }
        p {
            color: var(--text-muted);
            margin-top: 8px;
        }
    `,

    /* ───────────────── cta ───────────────── */
    CTA: styled.section`
        max-width: 960px;
        margin: var(--space-8) auto;
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
        }
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        background: var(--surface-brand-1);
        border-radius: var(--radius-lg);
    `,
};
