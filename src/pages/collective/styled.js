import styled, { keyframes } from "styled-components";

/* animations */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
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

        /* reveal on scroll */
        [data-animate] {
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.5s ease var(--dly, 0ms),
                transform 0.5s ease var(--dly, 0ms), box-shadow 0.2s ease;
        }
        [data-animate].seen {
            opacity: 1;
            transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            [data-animate] {
                transition: none !important;
                transform: none !important;
                opacity: 1 !important;
            }
        }
    `,

    /* Hero */
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
            max-width: 880px;
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
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }

        .heroTickers {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
            font-size: 12px;
        }

        @media (max-width: 720px) {
            .content {
                padding: 56px var(--space-6) 28px;
            }
            h1 {
                font-size: 34px;
            }
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
    `,

    /* Sections */
    Section: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-6);

        .secHeader {
            margin-bottom: var(--space-4);
        }
        .secHeader h2 {
            font-size: 22px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
    `,

    /* Pillars grid */
    Pillars: styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .pillar {
            position: relative;
            display: grid;
            grid-template-rows: 140px auto auto auto;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .pillar:hover {
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
            height: 140px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .pillar:hover .media img {
            transform: scale(1.06);
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
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }

        .copy {
            padding: 0 12px 10px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .cta {
            padding: 0 12px 14px;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    /* Stats */
    Stats: styled.section`
        max-width: 1100px;
        margin: var(--space-6) auto;
        padding: var(--space-6);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--surface-brand-1);
        box-shadow: var(--shadow-sm);

        .stat {
            display: grid;
            gap: 6px;
            place-items: center;
            padding: 10px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .stat:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .icon {
            opacity: 0.9;
        }
        .val {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .lbl {
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,

    /* Team */
    TeamGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .card {
            display: grid;
            grid-template-rows: 220px auto;
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

        .pic {
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .pic img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .card:hover .pic img {
            transform: scale(1.05);
        }

        .txt {
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .txt h3 {
            font-size: 16px;
            line-height: 1.3;
        }
        .role {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .sub {
            color: var(--text-muted);
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .links {
            display: flex;
            gap: 8px;
        }
        .ico {
            display: grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--border);
            border-radius: 8px;
            text-decoration: none;
            color: var(--text);
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        .ico:hover {
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    Note: styled.p`
        margin-top: var(--space-4);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 8px;
        .lnk {
            color: var(--link);
            text-decoration: underline;
        }
    `,

    /* Partners marquee */
    Partners: styled.section`
        max-width: 1200px;
        margin: var(--space-6) auto;
        padding: var(--space-6) 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        overflow: hidden;

        .row {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: ${marquee} 18s linear infinite;
        }
        .logo {
            width: 160px;
            height: 90px;
            flex: 0 0 auto;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            filter: grayscale(0.15);
            transition: filter 0.2s ease, transform 0.15s ease,
                border-color 0.2s ease;
        }
        .logo img {
            max-width: 120px;
            max-height: 60px;
            object-fit: contain;
        }
        .logo:hover {
            filter: grayscale(0);
            transform: translateY(-2px);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }

        @media (prefers-reduced-motion: reduce) {
            .row {
                animation: none;
            }
        }
    `,

    /* Timeline */
    Timeline: styled.div`
        position: relative;
        padding-left: 24px;
        border-left: 2px dashed rgb(var(--primary-rgb) / 0.35);
        display: grid;
        gap: 14px;

        .item {
            position: relative;
            display: grid;
            grid-template-columns: 80px 16px 1fr;
            gap: 12px;
            align-items: start;
        }
        .year {
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--text);
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: var(--primary);
            margin-top: 6px;
            filter: drop-shadow(0 4px 16px rgb(var(--primary-rgb) / 0.6));
            animation: ${floatY} 3.6s ease-in-out infinite;
        }
        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 12px;
        }
        .card h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
            .dot {
                animation: none;
            }
        }
    `,

    /* Values */
    Values: styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .val {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 14px;
            display: grid;
            gap: 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .val:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .ico {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--card);
            box-shadow: var(--shadow-sm);
        }
        h4 {
            font-size: 15px;
        }
        p {
            color: var(--text-muted);
            font-size: 13px;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    /* CTA */
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
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 0 15px;
                border-radius: var(--radius-md);
            }
        }
    `,
};
