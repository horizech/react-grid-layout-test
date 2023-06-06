import React, { useState } from "react";

export const BlockOverlay = ({overlayWidth}) => {

    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    
    document.addEventListener('mousemove', (e) => {
        e.preventDefault();
        setCursorPosition({ top: e.clientY, left: e.clientX });
    });

    return (
        <div
            style={{ display: 'block', borderRadius: '4px', position: "absolute", width: overlayWidth, height: '40px', backgroundColor: 'cyan', zIndex: '1000', ...cursorPosition }}>
        </div>
    )
}