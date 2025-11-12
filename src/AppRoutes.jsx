// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

/* Core pages */
const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

/* All section pages import the same placeholder component */
const OurWorkOverview = lazy(() => import("./pages/ourWorkOverview"));
const Philanthropy = lazy(() => import("./pages/philanthropy"));
const VentureCapital = lazy(() => import("./pages/ventureCapital"));
const Fellowships = lazy(() => import("./pages/fellowships"));

const Collective = lazy(() => import("./pages/collective"));

const Careers = lazy(() => import("./pages/careers"));
const Contact = lazy(() => import("./pages/contact"));

const PositiveSum = lazy(() => import("./pages/positiveSum"));

const InternshipsHub = lazy(() => import("./pages/internshipsHub"));

const DemoDayHub = lazy(() => import("./pages/demoDayHub"));

const LegalTerms = lazy(() => import("./pages/legalTerms"));
const LegalPrivacyPolicy = lazy(() => import("./pages/legalPrivacyPolicy"));
const LegalUnsolicitedSubmissionPolicy = lazy(() => import("./pages//legalUnsolicitedSubmissionPolicy"));

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
                {/* Redirect root → /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Home */}
                <Route path="/home" element={<Home />} />

                {/* Our Work (hub + static sub-sections) */}
                <Route path="/our-work" element={<OurWorkOverview />} />
                <Route path="/our-work/philanthropy" element={<Philanthropy />} />
                <Route path="/our-work/venture-capital" element={<VentureCapital />} />
                <Route path="/our-work/fellowships" element={<Fellowships />} />

                {/* About / Collective */}
                <Route path="/collective" element={<Collective />} />

                {/* Careers & Contact */}
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />

                {/* Publications / Positive Sum (hub only; data-driven inside) */}
                <Route path="/positive-sum" element={<PositiveSum />} />

                {/* Programs / Internships (hub only; data-driven inside) */}
                <Route path="/internships" element={<InternshipsHub />} />

                {/* Events / Demo Day (hub only; data-driven inside) */}
                <Route path="/demo-day" element={<DemoDayHub />} />

                {/* Legal */}
                <Route path="/legal/terms" element={<LegalTerms />} />
                <Route path="/legal/privacy-policy" element={<LegalPrivacyPolicy />} />
                <Route
                    path="/legal/unsolicited-submission-policy"
                    element={<LegalUnsolicitedSubmissionPolicy />}
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
