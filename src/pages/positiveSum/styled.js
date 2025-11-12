import styled, { keyframes } from "styled-components";

/* Animations */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0) }
  50% { transform: translateY(-6px) }
  100% { transform: translateY(0) }
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

        .sr {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
        }
    `,

    /* Hero */
    Hero: styled.section`
        position: relative;
        isolation: isolate;
        overflow: hidden;
        border-bottom: 1px solid var(--border);

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
                    900px 420px at 20% 20%,
                    rgb(var(--primary-rgb) / 0.18),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.08),
                    transparent 50%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 72px var(--space-6) 24px;
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
            font-size: 14px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .actions a {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
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
                padding: 56px var(--space-6) 16px;
            }
            h1 {
                font-size: 34px;
            }
        }
    `,

    HeroFeature: styled.button`
        all: unset;
        max-width: 1200px;
        margin: 0 auto var(--space-6);
        display: grid;
        grid-template-columns: 520px 1fr;
        gap: 14px;
        cursor: pointer;

        .media {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
        }
        .media img {
            width: 100%;
            height: auto;
            display: block;
            aspect-ratio: 16/9;
            transition: transform 0.8s ease;
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .chip {
            position: absolute;
            left: 10px;
            bottom: 10px;
        }
        .txt {
            display: grid;
            gap: 6px;
            align-content: center;
        }
        .txt h3 {
            font-size: 20px;
            line-height: 1.3;
        }
        .txt p {
            color: var(--text-muted);
            font-size: 13px;
        }
        .read {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        &:hover .media img {
            transform: scale(1.05);
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,

    /* Toolbar */
    Toolbar: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-6) var(--space-6) var(--space-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        .group {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .search {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 8px 10px;
            min-width: 260px;
            box-shadow: var(--shadow-sm);
        }
        .search .ico {
            opacity: 0.8;
        }
        .search input {
            background: transparent;
            border: 0;
            outline: 0;
            color: var(--text);
            width: 260px;
        }

        .sort {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 6px 10px;
            box-shadow: var(--shadow-sm);
        }
        .sort select {
            appearance: none;
            background: transparent;
            border: 0;
            color: var(--text);
            padding-right: 16px;
        }
        .sort .arrow {
            position: absolute;
            right: 8px;
            pointer-events: none;
            opacity: 0.8;
        }

        .quicklinks {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btn-ghost.sm {
            min-height: 30px;
            padding: 0 10px;
            border-radius: var(--radius-md);
        }
    `,

    /* Filters */
    Filters: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-6) var(--space-4);
        display: grid;
        gap: 10px;

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            align-items: start;
        }
        .label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            font-size: 13px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .chip.on {
            border-color: rgb(var(--primary-rgb) / 0.3);
            background: rgb(var(--primary-rgb) / 0.07);
        }
        .chip:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .chip.sm {
            padding: 4px 8px;
            font-size: 11px;
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `,

    /* Grid & Cards */
    Grid: styled.section`
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--space-6) var(--space-8);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .card {
            display: grid;
            grid-template-rows: auto 1fr;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            color: var(--text);
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
            all: unset;
            cursor: pointer;
            position: relative;
            display: block;
        }
        .media img {
            width: 100%;
            height: auto;
            aspect-ratio: 16/9;
            display: block;
            transition: transform 0.8s ease;
        }
        .card:hover .media img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
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
            padding: 12px;
            display: grid;
            gap: 8px;
        }
        .row1 {
            color: var(--text-muted);
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .row1 .date {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .title {
            font-size: 16px;
            line-height: 1.3;
        }
        .title button {
            all: unset;
            cursor: pointer;
            color: var(--text);
        }
        .excerpt {
            color: var(--text-muted);
            font-size: 13px;
        }

        .row2 {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .stat {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }
        .stat.btn {
            cursor: pointer;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 999px;
            padding: 4px 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .stat.btn:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }
        .save {
            margin-left: auto;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 8px;
            padding: 6px;
            cursor: pointer;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
        }

        /* Reveal sequence */
        .reveal {
            opacity: 0;
            transform: translateY(8px);
        }
        .reveal.in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    `,

    Empty: styled.div`
        grid-column: 1 / -1;
        display: grid;
        place-items: center;
        text-align: center;
        gap: 8px;
        padding: var(--space-8);
        border: 1px dashed var(--border);
        border-radius: var(--radius-lg);
        .ico {
            opacity: 0.8;
        }
        .title {
            font-weight: 700;
        }
        .sub {
            color: var(--text-muted);
        }
        .act {
            margin-top: 6px;
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
        }
        .actions a {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
        }
    `,

    /* Modal */
    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 80;
        display: grid;
        grid-template-columns: 1fr min(980px, 100%) 1fr;
        .blank {
            grid-column: 1 / 2;
            background: rgb(0 0 0 / 0.4);
        }
        .panel {
            grid-column: 2 / 3;
            height: 100vh;
            overflow: auto;
            background: var(--bg);
            border-left: 1px solid var(--border);
            border-right: 1px solid var(--border);
            animation: ${rise} 0.25s ease both;
        }

        .topbar {
            position: sticky;
            top: 0;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            z-index: 2;
        }
        .iconBtn {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            padding: 8px;
            display: inline-grid;
            place-items: center;
            cursor: pointer;
        }
        .grow {
            flex: 1;
        }

        .hero {
            position: relative;
        }
        .hero img {
            width: 100%;
            height: auto;
            display: block;
            aspect-ratio: 16/9;
        }
        .hero .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            opacity: 0.6;
            mix-blend-mode: soft-light;
        }
        .hero .badge {
            position: absolute;
            left: 12px;
            bottom: 12px;
        }

        .body {
            max-width: 820px;
            margin: 0 auto;
            padding: var(--space-6);
            display: grid;
            gap: 10px;
        }
        .meta {
            color: var(--text-muted);
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .dot {
            opacity: 0.6;
        }
        .title {
            font-size: 26px;
            line-height: 1.2;
        }
        .excerpt {
            color: var(--text-muted);
        }
        .para {
            line-height: 1.7;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 6px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .actions .btn-ghost,
        .actions .btn-primary {
            text-decoration: none;
            line-height: 1;
            min-height: 36px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 0 14px;
            border-radius: var(--radius-md);
        }

        @media (max-width: 1080px) {
            grid-template-columns: 0 1fr 0;
            .blank {
                display: none;
            }
        }
    `,
};

/* Reduced motion */
export const MotionGuard = styled.div`
    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }
`;
