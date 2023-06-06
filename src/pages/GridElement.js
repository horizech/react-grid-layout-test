import React from "react"

export const GridElement = ({data, draggable, block, dragStartHandle}) => {

    return (
        <React.Fragment>
            <div
                key={`${data.machine}work${block.id}`}
                draggable={draggable}
                onClick={(e) => console.log(e)}
                className={'hel'}
                // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                onDragStart={e => dragStartHandle(block, `${data.machine}work`, `${data.machine}work${block.id}`)}
                style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px" }}
            >
            </div>
        </React.Fragment>
    )
}