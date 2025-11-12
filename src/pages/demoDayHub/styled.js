import styled, { keyframes } from "styled-components";

/* ───────────────── Animations ───────────────── */
const rise = keyframes`
  0% { opacity: 0; transform: translateY(8px) scale(.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Styled = {
    Page: styled.main`
        display: grid;
        gap: var(--space-6);
        min-height: 100vh;
        color: var(--text);
    `,

    /* ───────────────── Hero ───────────────── */
    Hero: styled.section`
        position: relative;
        isolation: isolate;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: var(--radius-lg);
        overflow: hidden;
        animation: ${rise} 0.4s ease both;

        .bg {
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.35;
            transform: scale(1.02);
            filter: saturate(1.05) contrast(1.05);
        }
        .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    900px 400px at 15% 20%,
                    rgb(var(--primary-rgb) / 0.14),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    rgb(var(--primary-rgb) / 0.1),
                    transparent 55%
                ),
                linear-gradient(180deg, transparent, var(--bg));
            mix-blend-mode: soft-light;
        }

        .content {
            padding: 56px var(--space-6) var(--space-6);
            display: grid;
            gap: 10px;
        }
        .eyebrow {
            width: fit-content;
            box-shadow: var(--shadow-sm);
            animation: ${shimmer} 1.6s ease both;
            background: linear-gradient(
                90deg,
                rgb(var(--primary-rgb) / 0.18),
                rgb(var(--primary-rgb) / 0.06),
                rgb(var(--primary-rgb) / 0.18)
            );
            background-size: 200% 100%;
        }
        h1 {
            font-size: 28px;
            line-height: 1.2;
            background: linear-gradient(90deg, var(--text), var(--link));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .sub {
            color: var(--text-muted);
            max-width: 820px;
        }

        .spark {
            position: absolute;
            top: 14px;
            right: 14px;
            color: var(--primary);
            filter: drop-shadow(0 4px 20px rgb(var(--primary-rgb) / 0.6));
            animation: ${floatY} 3.6s ease-in-out infinite;
        }
    `,

    MetaBar: styled.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        margin-top: 8px;
        border-radius: var(--radius-md);
        background: var(--card);
        border: 1px solid var(--border);

        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr auto;
            align-items: center;
        }

        .item {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: var(--radius-sm);
            background: rgb(var(--primary-rgb) / 0.06);
            border: 1px solid rgb(var(--primary-rgb) / 0.18);
            width: fit-content;
        }
        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            a {
                text-decoration: none;
            }
        }
    `,

    /* ───────────────── Year Switch ───────────────── */
    YearSwitch: styled.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        animation: ${rise} 0.35s ease both;

        @media (min-width: 900px) {
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
        }

        .years {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .yearBtn {
                cursor: pointer;
            }
            .active {
                background: rgb(var(--primary-rgb) / 0.14);
                border-color: rgb(var(--primary-rgb) / 0.24);
            }
        }

        .links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: var(--radius-sm);
                border: 1px dashed rgb(var(--primary-rgb) / 0.28);
                color: var(--link);
            }
            .link:hover {
                background: rgb(var(--primary-rgb) / 0.06);
                text-decoration: none;
            }
        }
    `,

    /* ───────────────── Highlights ───────────────── */
    HighlightRow: styled.section`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .stat {
            padding: 14px;
            display: grid;
            gap: 2px;
            text-align: center;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .stat:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .v {
            font-size: 26px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .k {
            font-weight: 700;
        }
        .n {
            color: var(--text-muted);
            font-size: 12px;
        }
    `,

    /* ───────────────── Speakers ───────────────── */
    SpeakerSection: styled.section`
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

    SpeakerGrid: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }

        .sp {
            position: relative;
            overflow: hidden;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .sp:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .pic img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            display: block;
        }
        .meta {
            padding: 10px;
            display: grid;
            gap: 2px;
        }
        .name {
            font-weight: 800;
        }
        .title {
            color: var(--text-muted);
            font-size: 12px;
        }
        .social {
            position: absolute;
            top: 10px;
            right: 10px;
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border-radius: var(--radius-sm);
            background: rgb(var(--primary-rgb) / 0.14);
            border: 1px solid rgb(var(--primary-rgb) / 0.24);
        }
        .social a {
            color: var(--text);
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
        }
        .social a:hover {
            color: var(--link-hover);
        }
    `,

    /* ───────────────── Track Filter ───────────────── */
    TrackFilter: styled.div`
        display: grid;
        gap: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        @media (min-width: 840px) {
            grid-template-columns: auto 1fr;
            align-items: center;
        }
        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip.active {
            background: rgb(var(--primary-rgb) / 0.14);
            border-color: rgb(var(--primary-rgb) / 0.24);
        }
    `,

    /* ───────────────── Startups ───────────────── */
    StartupGrid: styled.section`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: 1180px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 820px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .startup {
            color: var(--text);
            text-decoration: none;
            overflow: hidden;
            display: grid;
            grid-template-rows: 160px auto;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .startup:hover {
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
            height: 160px;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .startup:hover .media img {
            transform: scale(1.06);
        }
        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent, rgb(0 0 0 / 0.25));
            mix-blend-mode: soft-light;
        }
        .tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            backdrop-filter: blur(2px);
        }

        .txt {
            padding: 12px;
            display: grid;
            gap: 6px;
        }
        .oneLine {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }
        .empty {
            display: grid;
            place-items: center;
            padding: 20px;
            text-align: center;
            .ico {
                color: var(--text-muted);
                margin-bottom: 6px;
            }
        }
    `,

    /* ───────────────── Schedule ───────────────── */
    Schedule: styled.section`
        padding: 10px;
        .secHeader {
            margin: 6px 8px 10px;
        }
        .secHeader h2 {
            font-size: 20px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 12px;
        }

        .list {
            list-style: none;
            display: grid;
            gap: 6px;
            margin: 0;
            padding: 0 4px 8px;
        }
        .row {
            display: grid;
            gap: 8px;
            align-items: center;
            grid-template-columns: 76px 1fr auto;
            border: 1px dashed var(--border);
            border-radius: var(--radius-md);
            padding: 8px 10px;
            background: var(--card);
        }
        .row .t {
            font-weight: 800;
        }
        .row .title {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .row .sub {
            color: var(--text-muted);
            font-size: 12px;
        }
    `,

    /* ───────────────── Partners ───────────────── */
    Partners: styled.section`
        .secHeader {
            margin-bottom: var(--space-3);
        }
        .secHeader h2 {
            font-size: 22px;
        }
    `,
    PartnerRow: styled.div`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(6, 1fr);
        @media (max-width: 1180px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }
        .partner {
            display: grid;
            place-items: center;
            padding: 12px;
            min-height: 96px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .partner:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        .partner img {
            max-width: 100%;
            height: 46px;
            object-fit: contain;
            opacity: 0.85;
        }
    `,

    /* ───────────────── FAQ ───────────────── */
    FAQ: styled.section`
        padding: 10px;
        .secHeader {
            margin: 6px 8px 10px;
        }
        .secHeader h2 {
            font-size: 20px;
        }
        .secSub {
            color: var(--text-muted);
            font-size: 12px;
        }

        .it {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 0;
            background: var(--card);
            overflow: hidden;
            margin-bottom: 8px;
            transition: border-color 0.2s ease;
        }
        .it[open] {
            border-color: rgb(var(--primary-rgb) / 0.28);
        }
        summary {
            list-style: none;
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px;
            border-bottom: 1px dashed var(--border);
            font-weight: 700;
        }
        summary::-webkit-details-marker {
            display: none;
        }
        .ans {
            padding: 10px;
            color: var(--text);
        }
    `,

    /* ───────────────── CTA ───────────────── */
    CTA: styled.section`
        display: grid;
        gap: 10px;
        align-items: center;
        padding: var(--space-6);
        border-radius: var(--radius-lg);

        @media (min-width: 960px) {
            grid-template-columns: 1fr auto;
        }

        .left {
            display: grid;
            gap: 8px;
        }
        h3 {
            font-size: 22px;
        }
        p {
            color: var(--text-muted);
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .right .chip {
            text-decoration: none;
        }
    `,
};
