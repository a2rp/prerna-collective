import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change.
 * - If URL has a hash (#section), scrolls that element into view.
 * - Default behavior is "auto"; pass behavior="smooth" to animate.
 */
export default function ScrollToTop({ behavior = "auto", children = null }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Handle in-page anchors if present
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior, block: "start" });
                return;
            }
        }
        // Fallback: go to top
        window.scrollTo({ top: 0, left: 0, behavior });
    }, [pathname, hash, behavior]);

    return children;
}
