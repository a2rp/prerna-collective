// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--bg)",
                    }}
                >
                    <CircularProgress sx={{ color: "var(--primary)" }} />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" replace />} />

                <Route path="/home" element={<Home />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
