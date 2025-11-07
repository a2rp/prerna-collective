// src/components/header/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: var(--site-header-h, 70px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        z-index: 9999;

        /* Theme-driven */
        background: var(--card);
        border-bottom: 1px solid var(--border);
        color: var(--text);
        box-shadow: var(--shadow-sm);
        backdrop-filter: saturate(1.1) blur(2px);
    `,

    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
    `,

    NameLogoWrapper: styled.div`
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;

        a img {
            height: 50px;
            display: block;
            transition: transform 0.2s ease;
        }
        a:hover img {
            transform: translateY(-1px) scale(1.01);
        }
    `,

    Col: styled.div`
        display: flex;
        align-items: center;
        gap: 15px;
    `,

    ThemeToggleLink: styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        /* Theme styles */
        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, transform 0.06s ease,
            box-shadow 0.2s ease;

        &:hover {
            background: var(--tint-weak);
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
    `,

    DrawerLinkWrapper: styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        border: 1px solid var(--border);
        background: var(--card);
        color: var(--text);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        transition: background 0.2s ease, transform 0.06s ease,
            box-shadow 0.2s ease;

        &:hover {
            background: var(--tint-weak);
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            outline: none;
            box-shadow: var(--focus-ring);
        }
    `,

    DrawerWrapper: styled.div`
        position: fixed;
        top: var(--site-header-h, 70px);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--site-header-h, 70px));
        display: flex;
        z-index: 9998;

        /* Dim background */
        background-color: rgb(0 0 0 / 0.45);

        .empty {
            width: 100%;
            cursor: pointer;
        }

        .navlinksWrapper {
            width: 300px;
            flex: 0 0 300px;

            /* Panel styling on theme */
            background: var(--card);
            color: var(--text);
            border-left: 1px solid var(--border);
            box-shadow: var(--shadow-md);

            animation: slideNavlinksWrapper 0.2s ease;
            @keyframes slideNavlinksWrapper {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }

            .navlinksInner {
                height: 100%;
                overflow-y: scroll;
                padding: 12px 8px;

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    gap: 4px;
                }

                .navItem {
                    display: block;
                    padding: 10px 12px;
                    border-radius: var(--radius-md);
                    color: var(--text);
                    text-decoration: none;
                    border: 1px solid transparent;
                    transition: background 0.15s ease, border-color 0.15s ease;
                }
                .navItem:hover {
                    background: var(--tint-weak);
                }
                .navItem.active {
                    background: var(--tint-med);
                    border-color: rgb(var(--primary-rgb) / 0.35);
                    box-shadow: inset 3px 0 0 0 var(--primary);
                }
            }
        }
    `,
};
