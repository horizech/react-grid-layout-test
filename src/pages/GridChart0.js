import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { defaultGrid } from "../data";

import '../App.css';

const GridChart0 = () => {
    const [newKey, setNewKey] = useState("b");
    const [sourceGridId, setSourceGridId] = useState(null);
    const [targetGridId, setTargetGridId] = useState(null);
    const [draggable, setDraggable] = useState(false);
    const [isStatic, setStatic] = useState(true);
    const [position, setPosition] = useState(39);
    const [element, setElement] = useState(null);
    const [isStart, setStart] = useState(true);
    // const [layout, setLayout] = useState([
    //     {}
    // ]);
    // layout is an array of objects, see the demo for more complete usage

    const layout1 = [
        {}
    ];


    const [grids, setGrids] = useState(defaultGrid);

    useEffect(() => {
        if (isStart === true) {
            autoFill();
            setStart(false);
        }
    });

    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.code == 'ControlLeft') {
            setDraggable(true);
            return;
        }
    });

    document.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.code == 'ControlLeft') {
            setDraggable(false);
            return;
        }
    });
    const getEmptySpace = (subGrid) => {
        let spaces = []
        for (let y = 0; y <= 2; y++) {
            for (let x = 0; x < subGrid.columns; x++) {
                spaces.push({ y: y, x: x });
            }
        }
        subGrid.elementGrids.forEach((element, k) => {
            let occopied = [];
            spaces.map((a, i) => {
                if (element.data.y === a.y && element.data.x === a.x) {
                    occopied = spaces.splice(i, element.data.w)
                }
            }
            );
            // console.log(occopied);
        });
        return spaces;
    }

    const updateAxisOfNewElement = (newElement, spaces, isDeleteElement) => {
        let widthSpace = 0;
        for (let spaceIndex = 1; spaceIndex < 120; spaceIndex++) {
            if (spaces.length <= spaceIndex) {
                isDeleteElement = false;
                break;
            }
            // console.log((elementAxis[spaceIndex].x - elementAxis[spaceIndex - 1].x))
            if (((spaces[spaceIndex].x - spaces[spaceIndex - 1].x) > 1 || (spaces[spaceIndex].x - spaces[spaceIndex - 1].x) < 0) && newElement.data.w > widthSpace + 1) {
                widthSpace = 0;
            } else {
                widthSpace++;
            }
            // console.log(widthSpace)
            // console.log(spaceIndex);
            if (newElement.data.w <= widthSpace) {
                newElement.data.x = spaces[spaceIndex - widthSpace]?.x;
                newElement.data.y = spaces[spaceIndex - widthSpace]?.y;
                newElement.id = newElement.data.i;
                // isDeleteElement = true;
                break;
            }
        }
        return ({ newElement, isDeleteElement })
    }

    const addNewElement = (newGrid, newElement, targetId, sourceId, isDeleteElement) => {
        newGrid.forEach((grid, i) => {
            grid.subGrids.forEach((subGrid, j) => {
                if (newGrid[i].subGrids[j].id == targetId & targetId != sourceId) {
                    newGrid[i].subGrids[j].elementGrids.sort((a, b) => { return a.data.y - b.data.y })
                    let updatedElement = {};
                    let elementAxis = [];
                    elementAxis = getEmptySpace(subGrid);
                    elementAxis.sort(function (a, b) { return a.y - b.y })
                    console.log(newElement);
                    updatedElement = updateAxisOfNewElement(newElement, elementAxis, isDeleteElement);
                    // console.log(elementAxis);
                    isDeleteElement = updatedElement.isDeleteElement
                    // console.log(updatedElement.isDeleteElement);
                    if (isDeleteElement == true) {
                        newGrid[i].subGrids[j].elementGrids.push(updatedElement.newElement);
                    }
                }
            })
        });
        return ({ newGrid, isDeleteElement })
    }

    const deleteElement = (newGrid, targetId, sourceId, elementToBeDeleted, isDeleteElement) => {
        newGrid.forEach((grid, i) => {
            grid.subGrids.forEach((subgrid, j) => {
                if (newGrid[i].subGrids[j].id == sourceId && targetId != sourceId) {
                    newGrid[i].subGrids[j].elementGrids.forEach((elementgrid, k) => {
                        // console.log(isDeleteElement)
                        if (newGrid[i].subGrids[j].elementGrids[k].data.i == elementToBeDeleted.data.i) {
                            if (isDeleteElement == true) {
                                // console.log(newElement)
                                newGrid[i].subGrids[j].elementGrids.splice(k, 1);
                                // isDeleteElement = false
                            }
                        }
                    })
                }
                // newGrid[i].subGrids[j].elementGrids.sort((a, b) => { return a.data.y - b.data.y })
            })
        });
        return newGrid;
    }

    const autoFill = () => {
        let newGrid = grids;
        // console.log(newGrid);
        // setGrids();
        // setPosition();
        let isDeleteElement = true
        newGrid.forEach((grid, i) => {
            let s = 2
            let t = 4
            grid.subGrids.forEach((subGrid, j) => {
                if (j === s) {
                    subGrid.elementGrids.forEach((elementgrid, k) => {
                        let updatedGrid = addNewElement(newGrid, elementgrid, grid.subGrids[t].id, grid.subGrids[s].id, isDeleteElement);
                        newGrid = updatedGrid.newGrid;
                        isDeleteElement = updatedGrid.isDeleteElement
                        newGrid = deleteElement(newGrid, grid.subGrids[t].id, grid.subGrids[s].id, elementgrid, isDeleteElement);
                        newGrid[i].subGrids[j].elementGrids.sort((a, b) => { return a.data.y - b.data.y })
                    });
                    s = s + 4;
                    t = t + 4;
                }
            });
        });
        setGrids(newGrid);
    }

    const dragStartHandle = (sourceElement, id) => {
        if (sourceElement.data?.static === true) {
            alert("This element is not draggable!");
        } else {
            setSourceGridId(id);
            setElement(sourceElement);
            // setDraggable(true);
        }
    }

    // console.log(draggable);
    const onDropHandle = (layout, layoutItem, id, e) => {
        e.preventDefault();

        setTargetGridId(id);
        // console.log(layoutItem);
        // console.log(layout);
        // setLayout(layout);
        let newGrid = grids;
        let newElement = element;
        let elementToBeDeleted = element;
        let sourceId = sourceGridId;
        if (sourceId === "subGrid0") {
            alert("This element is not draggable!");
        } else {
            // setGrids();
            let isDeleteElement = true
            let updatedGrid = addNewElement(newGrid, newElement, id, sourceId, isDeleteElement);
            newGrid = updatedGrid.newGrid;
            isDeleteElement = updatedGrid.isDeleteElement
            newGrid = deleteElement(newGrid, id, sourceId, elementToBeDeleted, isDeleteElement);
            setGrids(newGrid);
            setDraggable(false);
            // console.log(id);
        }
    }

    const onInternalDrag = (griditem, id) => {
        console.log(griditem);
        let newGrid = grids
        if (griditem.data?.static === true) {
            alert("This element is not draggable!");
        } else {
            newGrid.forEach((grid, i) => {
                grid.subGrids.forEach((subGrid, j) => {
                    if (newGrid[i].subGrids[j].id == id) {
                        subGrid?.elementGrids.map((elementGrid, indexElementGrid) => {
                            if (griditem.i == elementGrid.data.i) {
                                newGrid[i].subGrids[j].elementGrids[indexElementGrid].data.x = griditem.x
                                newGrid[i].subGrids[j].elementGrids[indexElementGrid].data.y = griditem.y
                            }
                        })
                    }
                    newGrid[i].subGrids[j].elementGrids.sort((a, b) => { return a.data.y - b.data.y })
                })
            })
            setGrids(newGrid);
        }
        // console.log(newGrid);
    }

    return (
        <Fragment>
            <Fragment>
                <GridLayout
                    className={"layout"}
                    layout={layout1}
                    cols={12}
                    rowHeight={100}
                    width={5500}
                    isDraggable={false}
                >
                    {
                        grids?.map((grid, indexGrid) => {
                            return (
                                <div
                                    key={"grid" + indexGrid}
                                    style={{ backgroundColor: grid.color, borderRadius: '40px', }}
                                    data-grid={grid.data}
                                // draggable={!isStatic}
                                >
                                    <GridLayout
                                        className="layout"
                                        layout={grid.data}
                                        cols={grid.columns}
                                        rowHeight={grid.rowHeight}
                                        width={grid.width}
                                        isDraggable={false}
                                        isBounded={grid.bounded}
                                        isResizable={grid.resizable}
                                    >
                                        {grid?.subGrids.map((subGrid, indexSubGrid) => {
                                            let layout = subGrid?.elementGrids.map((elementGrid, indexElementGrid) => {
                                                let data = elementGrid.data
                                                data["i"] = `${subGrid.id}elementGrid` + indexElementGrid
                                                elementGrid.data = data;
                                                return data
                                            })
                                            // console.log()
                                            // console.log(layout);
                                            return (
                                                <div
                                                    data-grid={subGrid.data}
                                                    key={"subGrid" + indexSubGrid}
                                                    style={{ overflow: "auto", textAlign: "center", backgroundColor: subGrid.color, borderRadius: subGrid.borderRadius, opacity: subGrid.opacity, borderColor: "black", border: subGrid.border }}
                                                >{
                                                        (subGrid.id === "subGrid1" || subGrid.id === "subGrid4" || subGrid.id === "subGrid7") &&
                                                        <h2>{subGrid.text}</h2>
                                                    }
                                                    <GridLayout
                                                        className="layout"
                                                        layout={layout}
                                                        cols={subGrid.columns}
                                                        rowHeight={subGrid.rowHeight}
                                                        width={subGrid.width}
                                                        compactType={subGrid.compactType}
                                                        // isDraggable={!subGrid.dragOut}
                                                        isDraggable={!draggable}
                                                        isBounded={subGrid.bounded}
                                                        isResizable={subGrid.resizable}
                                                        preventCollision={subGrid.preventCollision}
                                                        margin={subGrid.margin}
                                                        isDroppable={(subGrid.id === "subGrid0" || subGrid.id === "subGrid2.1" || subGrid.id === "subGrid5.1" || subGrid.id === "subGrid8.1") ? false : true}
                                                        style={{ height: subGrid.height, transitionProperty: "none" }}
                                                        useCSSTransforms={true}
                                                        transformScale={1}
                                                        measureBeforeMount={true}
                                                        // droppingItem={{ i: "string", w: 4, h: 2 }}
                                                        onDragStop={(layout, oldItem, newItem,
                                                            placeholder, e, element) => onInternalDrag(newItem, subGrid.id)}
                                                        onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, subGrid.id, e)}
                                                    // onDropDragOver={e => setId(subGrid.id)}
                                                    >{
                                                            subGrid?.elementGrids.map((elementGrid, indexElementGrid) => {
                                                                // let drag = elementGrid.data.static ? false : draggable
                                                                // console.log(drag);
                                                                return (
                                                                    <div
                                                                        // data-grid={elementGrid.data}
                                                                        key={elementGrid.data.i}
                                                                        draggable={subGrid.id === "subGrid0" ? false : draggable}
                                                                        // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                                                        onDragStart={e => dragStartHandle(elementGrid, subGrid.id)}
                                                                        style={{ backgroundColor: elementGrid.color, borderRadius: elementGrid.borderRadius, opacity: elementGrid.opacity, borderColor: 'black', border: elementGrid.border, padding: '0px' }}
                                                                    >
                                                                        <h4>{elementGrid.text}</h4>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </GridLayout>
                                                </div>
                                            )
                                        })}
                                    </GridLayout>
                                </div>
                            )
                        })
                    }
                </GridLayout>
            </Fragment>
        </Fragment>
    );
}

export default GridChart0;