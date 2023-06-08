import React, { useState } from "react";

export const BlockOverlay = ({overlayWidth, color}) => {

    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    
    // document.addEventListener('mousemove', (e) => {
    //     e.preventDefault();
    //     setCursorPosition({ top: e.clientY, left: e.clientX });
    // });

    return (
        <div
            style={{ display: 'block', borderRadius: '4px', position: "relative", width: overlayWidth, height: '40px', backgroundColor: color, zIndex: '-1', ...cursorPosition }}>
        </div>
    )
}