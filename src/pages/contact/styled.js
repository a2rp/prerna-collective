import styled, { keyframes } from "styled-components";

/* ───────────────── Helpers ───────────────── */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0) }
  50% { transform: translateY(-6px) }
  100% { transform: translateY(0) }
`;
const spin = keyframes`
  to { transform: rotate(360deg); }
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
    `,

    /* ───────────────── Hero ───────────────── */
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
                    1000px 400px at 20% 20%,
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
            font-size: 40px;
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
        .socials {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .socials .social {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border: 1px solid var(--border);
            background: var(--card);
            text-decoration: none;
            color: var(--text);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .socials .social:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
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

    /* ───────────────── Section ───────────────── */
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

    /* ───────────────── Methods Grid ───────────────── */
    MethodGrid: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        .card {
            display: grid;
            grid-template-rows: 140px auto;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            color: var(--text);
            text-decoration: none;
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
            aspect-ratio: 16/9;
        }
        .media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

        .meta {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 12px;
            padding: 12px;
        }
        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .blurb {
            color: var(--text-muted);
            font-size: 13px;
            margin-top: 4px;
        }
        .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .email,
        .inline {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
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

    /* ───────────────── Form ───────────────── */
    FormWrapper: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        .visual {
            position: relative;
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
        .visual img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 4/3;
            filter: saturate(1.02) contrast(1.02);
        }
        .visual .orb {
            position: absolute;
            right: 18px;
            top: 18px;
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: var(--primary);
            filter: drop-shadow(0 4px 16px rgb(var(--primary-rgb) / 0.65));
            animation: ${floatY} 3.6s ease-in-out infinite;
        }

        form {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: var(--space-6);
            display: grid;
            gap: 12px;
        }
        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
        }
        .field {
            display: grid;
            gap: 6px;
        }
        label {
            font-size: 12px;
            color: var(--text-muted);
        }
        input,
        select,
        textarea {
            width: 100%;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
            border-radius: var(--radius-md);
            padding: 10px 12px;
            outline: none;
            transition: border-color 0.15s ease, box-shadow 0.15s ease,
                background 0.2s ease;
        }
        textarea {
            resize: vertical;
            min-height: 120px;
        }
        input:focus,
        select:focus,
        textarea:focus {
            border-color: rgb(var(--primary-rgb) / 0.4);
            box-shadow: 0 0 0 3px rgb(var(--primary-rgb) / 0.15);
            background: var(--card);
        }
        .error {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #ff5a58;
            font-size: 13px;
            padding: 8px 10px;
            border: 1px solid #ff5a58;
            border-radius: var(--radius-md);
            background: rgba(255, 90, 88, 0.08);
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .btn-primary {
            border: 1px solid var(--border);
            background: var(--primary);
            color: white;
            border-radius: var(--radius-md);
            min-height: 38px;
            padding: 0 16px;
            line-height: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                filter 0.2s ease;
            cursor: pointer;
        }
        .btn-primary:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
            filter: saturate(1.05);
        }
        .btn-primary:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        .spin {
            animation: ${spin} 0.9s linear infinite;
        }

        .success {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--text);
            font-size: 13px;
            padding: 8px 10px;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--surface-brand-1);
        }
        .hint {
            color: var(--text-muted);
            font-size: 12px;
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
            .row {
                grid-template-columns: 1fr;
            }
            .visual img {
                aspect-ratio: 16/9;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .visual .orb {
                animation: none;
            }
            .btn-primary,
            input,
            select,
            textarea {
                transition: none;
            }
        }
    `,

    /* ───────────────── Offices ───────────────── */
    Offices: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: 2fr 3fr;

        .mapCard {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            display: grid;
            grid-template-rows: auto auto auto;
        }
        .mapHeader {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--border);
            background: rgb(var(--primary-rgb) / 0.06);
        }
        .map {
            aspect-ratio: 3/1;
        }
        .map svg {
            width: 100%;
            height: 100%;
            display: block;
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            font-size: 12px;
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--primary);
            filter: drop-shadow(0 2px 6px rgb(var(--primary-rgb) / 0.6));
        }

        .officeList {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            display: grid;
        }
        .office {
            display: grid;
            grid-template-columns: 28px 1fr auto;
            gap: 10px;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid var(--border);
        }
        .office:last-child {
            border-bottom: 0;
        }
        .ico {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid var(--border);
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            background: var(--surface);
        }
        .city {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .addr {
            font-size: 13px;
            color: var(--text-muted);
        }
        .phone {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ───────────────── FAQ ───────────────── */
    FAQ: styled.div`
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;

        .item {
            border-bottom: 1px solid var(--border);
        }
        .item:last-child {
            border-bottom: 0;
        }

        .q {
            width: 100%;
            text-align: left;
            background: transparent;
            color: var(--text);
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 12px;
            font-weight: 600;
            cursor: pointer;
            border: 0;
            outline: none;
        }
        .q:focus-visible {
            box-shadow: 0 0 0 3px rgb(var(--primary-rgb) / 0.15) inset;
        }

        .a {
            padding: 0 12px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.25s ease;
        }
        .item.open .a {
            max-height: 200px;
            padding: 0 12px 12px;
        }
        .a p {
            color: var(--text-muted);
            font-size: 14px;
            margin: 10px 0;
        }
        .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .links a {
            text-decoration: none;
            color: var(--link);
            border-bottom: 1px dashed rgb(var(--primary-rgb) / 0.35);
            width: fit-content;
        }
    `,

    /* ───────────────── CTA ───────────────── */
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
        }
        .actions a {
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
    `,
};
