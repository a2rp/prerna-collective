import styled, { keyframes } from "styled-components";

/* ---------------- Animations & helpers ---------------- */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
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
const reveal = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Styled = {
    Page: styled.main`
        min-height: 100vh;
        background: var(--bg);
        color: var(--text);
        /* padding-top: var(--site-header-h, 60px); */

        /* staggered reveal */
        [data-reveal] {
            opacity: 0;
            transform: translateY(6px);
        }
        .in [data-reveal],
        [data-reveal].in {
            animation: ${reveal} 0.45s ease both;
            animation-delay: calc(var(--i, 0) * 60ms);
        }

        @media (prefers-reduced-motion: reduce) {
            [data-reveal],
            .in [data-reveal],
            [data-reveal].in {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
            }
        }
    `,

    /* ---------------- Hero ---------------- */
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
            font-size: 42px;
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

        .sparkles {
            position: absolute;
            right: clamp(12px, 4vw, 32px);
            top: clamp(12px, 2vw, 24px);
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${floatY} 3.6s ease-in-out infinite;
        }

        & .badge {
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
                font-size: 34px;
            }
        }
    `,

    /* ---------------- Sections ---------------- */
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

    /* ---------------- Benefits ---------------- */
    BenefitGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .benefit {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 10px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 14px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .benefit:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            display: grid;
            place-items: center;
            width: 48px;
            height: 48px;
            border: 1px solid var(--border);
            border-radius: 12px;
        }
        .t {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .d {
            grid-column: 1 / -1;
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ---------------- Filter bar ---------------- */
    FilterBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .left {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
        .control {
            position: relative;
            input {
                width: 280px;
                max-width: 60vw;
                padding: 8px 12px 8px 34px;
                border: 1px solid var(--border);
                background: var(--card);
                color: var(--text);
                border-radius: var(--radius-md);
                outline: none;
            }
            .prefix {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.75;
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        .select {
            position: relative;
            select {
                appearance: none;
                padding: 8px 12px 8px 34px;
                border: 1px solid var(--border);
                background: var(--card);
                color: var(--text);
                border-radius: var(--radius-md);
                outline: none;
            }
            .prefix {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0.75;
            }
        }

        .btn-ghost.small {
            min-height: 32px;
            padding: 0 12px;
        }
    `,

    /* ---------------- Roles ---------------- */
    RoleGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;

        .role {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .role:hover {
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
            height: auto;
            aspect-ratio: 16/9;
            object-fit: cover;
        }

        .summary {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 12px;
        }
        .title {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.2px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid var(--border);
            border-radius: 999px;
            font-size: 12px;
            background: var(--card);
        }
        .about {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 6px;
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border: 1px dashed rgb(var(--primary-rgb) / 0.35);
            border-radius: 999px;
            font-size: 12px;
            color: var(--link);
        }

        .right {
            display: grid;
            align-content: start;
            gap: 8px;
        }
        .right .btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .right .chev {
            transition: transform 0.2s ease;
        }
        .role.open .right .chev {
            transform: rotate(180deg);
        }

        .details {
            border-top: 1px solid var(--border);
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            background: var(--surface-brand-1);
        }
        .details[hidden] {
            display: none;
        }
        .details h4 {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            margin-bottom: 6px;
        }
        .details ul {
            padding-left: 18px;
            margin: 0;
            display: grid;
            gap: 6px;
            font-size: 13px;
            color: var(--text);
        }

        @media (max-width: 900px) {
            .summary {
                grid-template-columns: 1fr;
            }
            .right {
                grid-auto-flow: column;
                justify-content: start;
            }
            .details {
                grid-template-columns: 1fr;
            }
        }
    `,

    Empty: styled.div`
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        border: 1px dashed var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        padding: 24px;
        color: var(--text-muted);
    `,

    /* ---------------- Gallery ---------------- */
    Gallery: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .shot {
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            background: rgb(var(--primary-rgb) / 0.06);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .shot:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .shot img {
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .shot:hover img {
            transform: scale(1.06);
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ---------------- Process ---------------- */
    Process: styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 14px;

        .step {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 14px;
            display: grid;
            gap: 6px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .step:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
        }
        .t {
            font-weight: 700;
        }
        .d {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ---------------- FAQ ---------------- */
    FAQ: styled.div`
        display: grid;
        gap: 10px;

        details {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            padding: 12px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        details[open] {
            border-color: rgb(var(--primary-rgb) / 0.28);
            box-shadow: var(--shadow-sm);
        }
        summary {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            list-style: none;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        .q {
            font-weight: 700;
        }
        .a {
            color: var(--text-muted);
            margin-top: 8px;
            font-size: 14px;
        }
    `,

    /* ---------------- CTA ---------------- */
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
    `,

    /* Cardish helper (for consistent padding/shadows) */
    // Not a component export—just a utility class you can reuse.
};

/* Global utility class — define once per page scope */
export const cardishGlobal = `
  .cardish {
    border: 1px solid var(--border);
    background: var(--card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
  }
`;
