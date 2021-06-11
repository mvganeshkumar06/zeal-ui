import React, { useEffect, useRef } from "react";

const ClickAway = ({ children, onClickAway, isChildOpen, ...rest }) => {
    const ref = useRef();

    useEffect(() => {
        if (isChildOpen) {
            const handleOnClickAway = (event) => {
                const clickedAway = !ref.current.contains(event.target);
                const clickedOnModalBackdrop = document.querySelector(".modalBackdrop") === event.target;
                if (clickedAway || clickedOnModalBackdrop) {
                    onClickAway();
                }
            };
            document.addEventListener("click", handleOnClickAway);
            return () => document.removeEventListener("click", handleOnClickAway);
        }
    }, [isChildOpen]);

    return (
        <div ref={ref} {...rest}>
            {children}
        </div>
    );
};

export default ClickAway;
