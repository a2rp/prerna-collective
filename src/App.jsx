// src/App.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";
import BackToTop from "./components/backToTop"; // ← NEW

export default function App() {
    const wrapperRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <Styled.Wrapper ref={wrapperRef}>
            <Header />
            <Styled.Main>
                <Styled.RoutesWrapper>
                    <AppRoutes />
                </Styled.RoutesWrapper>
            </Styled.Main>
            <Footer />

            {/* Floating Back-to-Top button */}
            <BackToTop targetRef={wrapperRef} /> {/* ← NEW */}
        </Styled.Wrapper>
    );
}
