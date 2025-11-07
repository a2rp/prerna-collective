import React, { useEffect, useState } from "react";
import { Styled } from "./styled";

export default function BackToTop({ targetRef, threshold = 240 }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = targetRef?.current;
        if (!el) return;

        const onScroll = () => {
            setShow(el.scrollTop > threshold);
        };
        // initial check
        onScroll();

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [targetRef, threshold]);

    const handleClick = () => {
        const el = targetRef?.current;
        if (el?.scrollTo) el.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Styled.Fab
            type="button"
            $show={show}
            onClick={handleClick}
            aria-label="Back to top"
            title="Back to top"
        >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M12 5l6 6-1.4 1.4L13 9.8V19h-2V9.8l-3.6 2.6L6 11l6-6z" fill="currentColor" />
            </svg>
        </Styled.Fab>
    );
}
