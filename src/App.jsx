// src/App.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";
import BackToTop from "./components/backToTop";
import Breadcrumbs from "./components/breadcrumbs"; // ← ADD

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
                    {/* <Breadcrumbs
                        exclude={["/", "/home"]}  // hide on home
                        hideIfSingle={false}      // set true if you want to hide when single segment
                    /> */}
                    <AppRoutes />
                </Styled.RoutesWrapper>
            </Styled.Main>
            <Footer />
            <BackToTop targetRef={wrapperRef} />
        </Styled.Wrapper>
    );
}
