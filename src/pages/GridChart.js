import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { defaultGrid, defaultJson } from "../data";

import '../App.css';
import { BlockOverlay } from "./BlockOverlay";
import { PdfDoc } from "./PdfDoc";
// import { Document, Page } from "react-pdf";
// import PdfDoc from "./PdfDoc";

// const PdfDoc = () => {

//     return (
//         <Document file={'https://www.africau.edu/images/default/sample.pdf'}>
//             <Page />
//         </Document>

//     )
// }
const GridChart = () => {
    const [newKey, setNewKey] = useState("b");
    const [sourceGridId, setSourceGridId] = useState(null);
    const [targetGridId, setTargetGridId] = useState(null);
    const [draggable, setDraggable] = useState(false);
    const [isStatic, setStatic] = useState(true);
    const [position, setPosition] = useState(39);
    const [element, setElement] = useState(null);
    const [blockId, setBlockId] = useState(null);
    const [isStart, setStart] = useState(true);
    const [dragItem, setDragItem] = useState(null);
    const [blockColor, setBlockColor] = useState(null);
    // const [layout, setLayout] = useState([
    //     {}
    // ]);
    // layout is an array of objects, see the demo for more complete usage

    const layout1 = [
        {}
    ];

    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayWidth, setOverlayWidth] = useState(0);

    const [grids, setGrids] = useState(defaultGrid);
    const [gridData, setGridData] = useState(defaultJson);
    const [keyIds, setKeyIds] = useState({});

    const [dragStarted, setDragStarted] = useState(false)

    useEffect(() => {
        if (isStart === true) {
            // autoFill();
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

    const getEmptySpace = (subGrid, columns, newElement, isDeleteElement, requiredHours) => {
        let spaces = []
        for (let y = 0; y <= 2; y++) {
            for (let x = 0; x < columns; x++) {
                spaces.push({ y: y, x: x });
            }
        }

        let availableSpaces = (new Array(24)).fill(true);
        console.log(availableSpaces);
        console.log(subGrid)
        subGrid
            .forEach((block, k) => {
                let startedAt = parseInt(block.startedAt.split(',')[0]);
                let duration = block.duration;
                (new Array(duration)).fill(1).map((x, i) => i).forEach(x => {
                    console.log(startedAt);
                    availableSpaces[startedAt + x] = false;
                })
                console.log(startedAt, duration);
            });

        console.log(availableSpaces);
        let widthSpace = 0;


        let newIndex = -1;

        for (let spaceIndex = 0; spaceIndex < availableSpaces.length; spaceIndex++) {
            // availableSpaces.map((x, j) =>{
            if (availableSpaces[spaceIndex]) {
                if (newIndex == -1) {
                    newIndex = spaceIndex;
                }
                widthSpace++;
            }
            else {
                widthSpace = 0;
                newIndex = -1;
            }

            if (widthSpace >= newElement.duration) {
                // let quotient = newIndex / 8;
                // const x = (newIndex) % 8;
                const x = newIndex;
                const y = Math.floor(newIndex / 8);

                newElement.startedAt = "" + x; //newIndex <= 7 ? newIndex : newIndex <= 15 ? newIndex - 7 : newIndex - 15;
                newElement.shift = y; //newIndex <= 7 ? 0 : newIndex <= 15 ? 1: 2 ;
                isDeleteElement = true;
                break;
            }
            else {
                isDeleteElement = false;
            }
        }
        console.log(newElement)

        console.log(columns);
        console.log(spaces);
        subGrid.forEach((block, k) => {
            let occopied = [];
            let x = parseInt(block.startedAt);
            spaces.map((a, i) => {
                if (block.shift === a.y && x === a.x) {
                    occopied = spaces.splice(i, block.duration)
                }
            }
            );
            console.log(occopied);
        });
        return ({ updatedElement: newElement, isDeleteElement })
    }

    const updateAxisOfNewElement = (newElement, spaces, isDeleteElement) => {
        let widthSpace = 0;
        console.log(spaces);
        for (let spaceIndex = 1; spaceIndex < 8; spaceIndex++) {
            if (spaces.length <= spaceIndex) {
                isDeleteElement = false;
                break;
            }
            // console.log((elementAxis[spaceIndex].x - elementAxis[spaceIndex - 1].x))
            if (((spaces[spaceIndex].x - spaces[spaceIndex - 1].x) > 1 || (spaces[spaceIndex].x - spaces[spaceIndex - 1].x) < 0) && newElement.duration > widthSpace + 1) {
                widthSpace = 0;
            } else {
                widthSpace++;
            }
            // console.log(widthSpace)
            // console.log(spaceIndex);
            if (newElement.duration <= widthSpace) {
                newElement.startedAt = `${spaces[spaceIndex - widthSpace]?.x}`;
                newElement.shift = spaces[spaceIndex - widthSpace]?.y;
                // newElement.id = newElement.data.i;
                // isDeleteElement = true;
                break;
            }
        }
        return ({ updatedElement: newElement, isDeleteElement })
    }

    const addNewElement = (newGrid, newElement, targetId, sourceId, isDelete) => {
        let newTargetId = [targetId.split(',')[0], targetId.split(',')[1]].join();
        let startDate = [targetId.split(',')[2], targetId.split(',')[3]].join();
        console.log(startDate);
        let targetCategory = targetId.split(',')[1];
        let sourceCategory = sourceId.split(',')[1];
        if (targetId != sourceId) {
            newElement.type = blockColor;
            // console.log('checkpointz')
            newGrid.data.forEach((grid, i) => {
                if (targetId.split(',')[0] == grid.machine) {
                    // if (targetCategory == 'backlog') {
                    // console.log(newElement)
                    // newElement.id = (newGrid.data[i].work.blocks.length > 0 ? parseInt(newGrid.data[i].work.blocks.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 1
                    // console.log(newElement.id)
                    // let inprogressGrid =  grid.work.blocks.map((x) => {
                    //     // let date = [x.startedAt.split(',')[1], x.startedAt.split(',')[2]].join();
                    //     if(x.status == 'in_progress'){
                    //         console.log( x.startedAt.split(',')[2], targetId.split(',')[3]);
                    //         if( x.startedAt.split(',')[2] == targetId.split(',')[3]){
                    //             console.log(x);
                    //             return x;
                    //         }
                    //     }
                    // })
                    // console.log(grid);/
                    let inprogressGrid = grid.work.blocks.filter((x) => x.status == 'in_progress');
                    // console.log(inprogressGrid);
                    inprogressGrid = inprogressGrid.filter((x) => x.startedAt.split(',')[2] == targetId.split(',')[3]);
                    let unavailableGrid = grid.work.unavailable.filter((x) => x.startedAt.split(',')[2] == targetId.split(',')[3])
                    // console.log(inprogressGrid);
                    console.log(unavailableGrid);
                    // newGrid.data[i].work.blocks.push(newElement);
                    // }
                    if (targetCategory == 'in_progress') {
                        // const updatedElement = {newElement:{}, isDeleteElement: isDeleteElement};
                        newGrid.data[i].work.blocks.sort((a, b) => { return a.shift - b.shift })
                        let elementAxis = [];
                        let gridElements = [...inprogressGrid, ...unavailableGrid];
                        // elementAxis = getEmptySpace(gridElements, 8, newElement, isDeleteElement);
                        // elementAxis.sort(function (a, b) { return a.y - b.y })
                        // console.log(elementAxis);
                        console.log(gridElements);

                        const { updatedElement, isDeleteElement } = getEmptySpace(gridElements, 8, newElement, isDelete);
                        console.log(updatedElement);
                        newGrid.data[i].work.blocks.forEach((x, j) => {
                            if (x.id === newElement.id) {
                                newGrid.data[i].work.blocks[j].status = targetCategory;
                                // console.log(`${updatedElement.startedAt}, ${startedAt}`);
                                // getEmptySpace(gridElements, 8, newElement, isDelete);
                                newGrid.data[i].work.blocks[j].startedAt = `${updatedElement.startedAt}, ${startDate}`;
                                newGrid.data[i].work.blocks[j].shift = updatedElement.shift;
                                console.log(newGrid.data[i].work.blocks[j]);
                            }
                        })
                    } else {
                        newGrid.data[i].work.blocks.forEach((x, j) => {
                            if (x.id === newElement.id) {
                                newGrid.data[i].work.blocks[j].status = targetCategory;
                                // getEmptySpace(gridElements, 8, newElement, isDelete);
                                // console.log('not in progress');
                                newGrid.data[i].work.blocks[j].startedAt = '';
                            }
                        })
                    }
                    //     // updateAxisOfNewElement(newElement, elementAxis, isDelete);
                    //     // console.log(elementAxis);
                    //     // isDeleteElement = isDelete
                    //     // console.log(updatedElement.isDeleteElement);
                    //     isDelete = isDeleteElement;
                    //     newElement = updatedElement
                    //     if (isDeleteElement == true) {
                    //         // if (targetCategory = sourceCategory) {

                    //         // } else {
                    //         // }
                    //         updatedElement["id"] = (newGrid.data[i].work.blocks.length > 0 ? parseInt(newGrid.data[i].work.blocks.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 2
                    //         updatedElement.startedAt = startedAt;
                    //         newGrid.data[i].work.blocks.push(updatedElement);
                    //     }
                    // }
                }
            });
        }
        else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i].work.blocks.forEach((block, k) => {
                    if (block.id == newElement.id) {
                        newGrid.data[i].work.blocks[k].type = blockColor
                    }
                });
            }
        })
        console.log(newGrid);
        return ({ newGrid, isDelete })
    }

    const deleteElement = (newGrid, targetId, sourceId, elementToBeDeleted, isDeleteElement) => {
        let category = sourceId.split(',')[1];
        if (targetId != sourceId) {
            newGrid.data.forEach((grid, i) => {
                let index = -1;
                if (sourceId.split(',')[0] == grid.machine) {
                    grid.work.blocks.forEach((block, k) => {
                        // console.log(isDeleteElement)
                        if (block.id == elementToBeDeleted.id) {
                            index = k
                            // console.log(index);
                        }
                    })
                    if (isDeleteElement == true) {
                        // console.log(index);
                        newGrid.data[i].work.blocks.splice(index, 1);
                        // isDeleteElement = false
                    } else newGrid.data[i][category].blocks[index].type = blockColor
                }
            });
        } else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i].work.blocks.forEach((block, k) => {
                    if (block.id == elementToBeDeleted.id) {
                        newGrid.data[i].work.blocks[k].type = blockColor
                    }
                });
            }
        })
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

    const dragStartHandle = (sourceElement, id, sourceElementId, data) => {
        // console.log(e);
        // console.log(blockId);
        let category = id.split(',')[1];
        sourceElement['i'] = sourceElementId;
        let element = data.work.blocks.filter(x => x.id == sourceElement.id)[0];
        setBlockId(blockId)
        setSourceGridId(id);
        setElement(element);
        onItemDragStart(sourceElement, id);
        // setDraggable(true);

    }

    // console.log(draggable);
    const onDropHandle = (layout, layoutItem, id, e) => {
        e.preventDefault();
        setTargetGridId(id);
        // console.log(layoutItem);
        // console.log(layout);
        // setLayout(layout);
        // console.log(id);/
        setGridData('');
        const category = id.split(',')[1];
        let newGridData = JSON.parse(JSON.stringify(gridData));
        const newElement = JSON.parse(JSON.stringify(element));
        newElement.type = blockColor;
        let elementToBeDeleted = element;
        let sourceId = sourceGridId;

        if (sourceId.includes('days')) {
            alert("This element is not draggable!");
        } else if (id.split(',')[1] == 'overdue') {
            newGridData.data.forEach((grid, i) => {
                if (sourceId.split(',')[0] == grid.machine) {
                    newGridData.data[i][sourceId.split(',')[1]].blocks.forEach((block, k) => {
                        if (block.id == newElement.id) {
                            newGridData.data[i][sourceId.split(',')[1]].blocks[k].type = blockColor
                        }
                    });
                }
            })
        } else {
            // setGrids();
            let isDeleteElement = true
            const { newGrid, isDelete } = addNewElement(newGridData, newElement, id, sourceId, isDeleteElement);
            // console.log(newGrid)
            newGridData = newGrid;
            isDeleteElement = isDelete
            // newGridData = deleteElement(newGridData, id, sourceId, elementToBeDeleted, isDeleteElement);
            // console.log(id);
        }
        setDraggable(false);
        setGridData(newGridData);
        setDragStarted(false);

    }

    const onInternalDrop = (griditem, id) => {
        // console.log(griditem);
        let newGrid = gridData
        // console.log(blockColor);
        const x = parseInt(griditem.x) + (parseInt(griditem.y) * 8)
        console.log(x);
        if (griditem?.static === true) {
            alert("This element is not draggable!");
        } else {
            let category = id.split(',')[1];
            let date = id.split(',')[2] + ',' + id.split(',')[3];
            console.log(date);
            // if (targetId == sourceId) {
            newGrid.data.forEach((grid, i) => {
                let index = -1;
                if (id.split(',')[0] == grid.machine) {
                    grid.work.blocks.forEach((block, k) => {
                        console.log(`${x}, ${date}`)
                        if (block.id == griditem.i.split(',')[2]) {
                            index = k
                            newGrid.data[i].work.blocks[k].startedAt = `${x}, ${date}`;
                            newGrid.data[i].work.blocks[k].shift = griditem.y;
                            // newGrid.data[i].work.blocks[k].type = blockColor;

                            // console.log(block);
                        }
                    })
                }
            })
            setGridData(newGrid);
        }
        // console.log(newGrid);
        setShowOverlay(false);
        setDragStarted(false);

    }

    const dateTimeToPosition = (startedAt) => {
        let x = 0;
        // let blockDate = startedAt.slice(0, 2);
        let dayIndex = gridData.days.map((day, i) => {
            // let newDate = day.slice(4, 2);
            // console.log(newDate);
            if (startedAt == day) {
                // console.log(i)
                x = i;
            }
        });
        x = x + parseInt(startedAt)
        // console.log(x);
        return x;
    }
    const generateDaysBox = (days) => {
        let x = 0;
        let layout = days.map((day, blockIndex) => {

            let dimension = { i: `days${blockIndex}`, x: x, y: 0, w: 1, h: 1, static: false }
            x = x + 1;
            return dimension
        })
        return (
            <div
                key={"grid_days"}
                style={{ backgroundColor: "lightYellow", borderRadius: '0px', }}
                data-grid={{
                    "x": 3,
                    "y": 0,
                    "w": 5.7,
                    "h": 0.7,
                    "static": true
                }}>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={7}
                    rowHeight={30}
                    width={920}
                    compactType={""}
                    isDraggable={!draggable}
                    isBounded={true}
                    isResizable={false}
                    preventCollision={true}
                    margin={[0, 0]}
                    isDroppable={false}
                    style={{ height: "50px", transitionProperty: "none" }}
                    useCSSTransforms={true}
                    transformScale={1}
                    measureBeforeMount={true}
                // onDragStop={(layout, oldItem, newItem,
                //     placeholder, e, element) => onInternalDrop(newItem, `days`)}
                // onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `days`, e)}
                // onDropDragOver={e => setId(subGrid.id)}
                >
                    {
                        days.map((day, blockIndex) => {
                            return (
                                <div
                                    key={`days${blockIndex}`}

                                    // draggable={draggable}
                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                    onDragStart={e => dragStartHandle(day, `days${blockIndex}`)}
                                    style={{ textAlign: 'center', backgroundColor: "LightMaroon", padding: '0px', border: "solid", borderRadius: "5px" }}
                                >
                                    <span style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{day}</span>
                                </div>
                            )
                        })
                    }
                </GridLayout>
            </div>
        )
    }
    const generateBacklogBox = (data, yaxis) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.work.blocks.filter((x) => x.status == 'to_do').map((block, blockIndex) => {
            let dimension = { i: `${data.machine},to_do,${block.id}`, x: x, y: y, w: 1, h: 1, static: false }
            x = x + 1;
            if (x === 16) {
                y = y + 1;
                x = 0
            }
            dimensions.push(dimension);
            return dimension
        })
        return (
            <div
                data-grid={{
                    "x": 1,
                    "y": yaxis,
                    "w": 1,
                    "h": 2.5,
                    "static": true
                }}
                key={`${data.machine},to_do`}
                style={{ overflow: "auto", textAlign: "center", backgroundColor: "lightYellow", borderRadius: "20px", opacity: 1, borderColor: "black", border: "solid" }}
            >
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={16}
                    rowHeight={40}
                    width={200}
                    compactType={""}
                    isDraggable={!draggable}
                    isBounded={true}
                    isResizable={false}
                    preventCollision={true}
                    margin={[0, 5]}
                    isDroppable={true}
                    style={{ height: "140px", transitionProperty: "none" }}
                    useCSSTransforms={true}
                    transformScale={1}
                    measureBeforeMount={true}
                    onDragStop={(layout, oldItem, newItem,
                        placeholder, e, element) => onInternalDrop(newItem, `${data.machine},to_do`)}
                    onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},to_do`, e)}
                    // onDropDragOver={e => setId(subGrid.id)}
                    onDragStart={(layout, oldItem, newItem,
                        placeholder, e, element) => onItemDragStart(newItem, `${data.machine},to_do`)}
                >
                    {
                        data.work.blocks.filter((x) => x.status == 'to_do').map((block, blockIndex) => {
                            let width = (draggable ? block.duration : 1) * (200 / 16);
                            return (
                                <div
                                    key={`${data.machine},to_do,${block.id}`}
                                    draggable={draggable}
                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                    onDragStart={e => dragStartHandle(block, `${data.machine},to_do`, `${data.machine},to_do,${block.id}`, data)}
                                    style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px" }}
                                >{
                                        showOverlay && (dragItem.i == `${data.machine},to_do,${block.id}` || dragItem.id == block.id) && (
                                            <BlockOverlay overlayWidth={width} color={blockColor} />
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </GridLayout>
            </div>
        )
        // })
    }
    const generateLeftoversBox = (data, yaxis) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.work.blocks.filter((x) => x.status == 'overdue').map((block, blockIndex) => {
            let dimension = { i: `${data.machine},overdue,${block.id}`, x: x, y: y, w: 1, h: 1, static: false }
            x = x + 1;
            if (x === 16) {
                y = y + 1;
                x = 0
            }
            dimensions.push(dimension);
            return dimension
        })
        return (
            <div
                data-grid={{
                    "x": 2,
                    "y": yaxis,
                    "w": 1,
                    "h": 2.5,
                    "static": true
                }}
                key={`${data.machine},overdue`}
                style={{ overflow: "auto", textAlign: "center", backgroundColor: "white", opacity: 1, }}
            >
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={16}
                    rowHeight={40}
                    width={200}
                    compactType={""}
                    isDraggable={!draggable}
                    isBounded={true}
                    isResizable={false}
                    preventCollision={true}
                    margin={[0, 5]}
                    isDroppable={true}
                    style={{ height: "140px", transitionProperty: "none" }}
                    useCSSTransforms={true}
                    transformScale={1}
                    measureBeforeMount={true}
                    onDragStop={(layout, oldItem, newItem,
                        placeholder, e, element) => onInternalDrop(newItem, `${data.machine},overdue`)}
                    onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},overdue`, e)}
                    // onDropDragOver={e => setId(subGrid.id)}
                    onDragStart={(layout, oldItem, newItem,
                        placeholder, e, element) => onItemDragStart(newItem, `${data.machine},overdue`)}
                >
                    {
                        data.work.blocks.filter((x) => x.status == 'overdue').map((block, blockIndex) => {
                            let width = (draggable ? block.duration : 1) * (200 / 16);
                            return (
                                <div
                                    key={`${data.machine},overdue,${block.id}`}
                                    draggable={draggable}
                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                    onDragStart={e => dragStartHandle(block, `${data.machine},overdue`, `${data.machine},overdue,${block.id}`, data)}
                                    style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px" }}
                                >{
                                        showOverlay && dragItem.i == `${data.machine},overdue,${block.id}` && (
                                            <BlockOverlay overlayWidth={width} color={blockColor} />
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </GridLayout>
            </div>
        )
        // })
    }
    const onItemDragStart = (griditem, id, data) => {
        // console.log(griditem);
        // console.log("chckpoint");
        if (!dragStarted) {
            setDragStarted(true);
            // let piece = griditem.i.split(',').length > 3 ? griditem.i.split(',').splice(3, 1) : null;

            // console.log(griditem);
            let newGrid = gridData
            setDragItem(griditem);

            if (griditem?.static === true) {
                alert("This element is not draggable!");
            } else {
                let category = id.split(',')[1];
                // if (targetId == sourceId) {
                newGrid.data.forEach((grid, i) => {
                    let index = -1;
                    if (id.split(',')[0] == grid.machine) {
                        grid.work.blocks.forEach((block, k) => {
                            // console.log(isDeleteElement)
                            if (block.id == griditem.i.split(',')[2]) {
                                index = k
                                // newGrid.data[i][category].blocks[k].startedAt = `${griditem.x}:00`;
                                // newGrid.data[i][category].blocks[k].shift = griditem.y;
                                setBlockColor(newGrid.data[i].work.blocks[k].type);
                                // console.log(newGrid.data[i][category].blocks[k]);
                                setShowOverlay(true);
                                setOverlayWidth((newGrid.data[i].work.blocks[k].duration * 17) + 'px');
                                // newGrid.data[i].work.blocks[k].type = "lightyellow";
                            }
                        })
                    }
                })
                setGridData(newGrid);
            }
        }

    }

    const generateWorkBox = (data, days, y) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let newData = JSON.parse(JSON.stringify(data))
        // newData.work.blocks.filter((x) => x.status == 'in_progress').forEach((block, i) => {
        //     newData.work.blocks[i]['key'] = `${data.machine},in_progress,${block.id}`
            // block['key'] = `${data.machine},in_progress,${block.id}`
            // if (block.startedAt == null) {
            //     newData.work.blocks[i].startedAt = `0, ${days[0]}`;
            // }
            // if ((block.duration + parseInt(block.startedAt.split(',')[0])) > 8) {
            //     let firstElementWidth = 8 - parseInt(block.startedAt.split(',')[0]);
            //     let duration = block.duration;
            //     newData.work.blocks.splice(i, 1);
            //     block.duration = firstElementWidth;
            //     block['width'] = duration * 16.6;
            //     newData.work.blocks.push(block)
            //     let UpdatedData = JSON.parse(JSON.stringify(newData))
            //     block.duration = duration - firstElementWidth
            //     // block.id = parseInt(UpdatedData.work.blocks.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) + 1;
            //     block.shift = block.shift + 1;
            //     block.startedAt = 0;
            //     block['key'] = `${data.machine},in_progress,${block.id},piece`
            //     UpdatedData.work.blocks.push(block)
            // newData = UpdatedData;
            //     // console.log(block.key);

            // }
        // })
        console.log(newData);
        let dimensions = []
        let x = 0;
        let layout = [...newData.work.blocks
            .filter((x) => x.status == 'in_progress')
            .map((block, blockIndex) => {
                console.log(block.startedAt.split(',')[0]);
                x = parseInt(block.startedAt != '' ? block.startedAt.split(',')[0] : 0) % 8;;
                // console.log(block.key);
                // console.log("check point", x)
                // console.log("check point", block.shift)
                let dimension = { i: `${data.machine},in_progress,${block.id}`, x: x, y: block.shift, w: block.duration, h: 1, static: false }

                return dimension
            }),
        ...newData.work.unavailable.map((block, blockIndex) => {
            x = parseInt(block.startedAt != '' ? block.startedAt.split(',')[0] : 0) % 8;
            // console.log("check point",x)
            let dimension = { i: `${data.machine},unavailable,${block.id}`, x: x, y: block.shift, w: block.duration, h: 1, static: true }

            dimensions.push(dimension);
            return dimension
        })]
        let xaxis = 3;
        let w = 0.8;
        let index = 1


        console.log(layout)
        return (
            days.map((day, j) => {
                // console.log(day);
                // console.log(xaxis);
                xaxis = xaxis + w
                index = index + 1;
                return (
                    <div
                        data-grid={{
                            "x": xaxis - w,
                            "y": y,
                            "w": w,
                            "h": 2.5,
                            "static": true
                        }}
                        key={`${data.machine},work,${index}`}
                        style={{ textAlign: "center", backgroundColor: "white", borderLeft: 'dashed', opacity: 1, }}
                    >
                        <GridLayout
                            className="layout"
                            layout={layout}
                            cols={8}
                            rowHeight={40}
                            width={120}
                            compactType={""}
                            isDraggable={!draggable}
                            isBounded={true}
                            isResizable={false}
                            preventCollision={true}
                            margin={[0, 5]}
                            isDroppable={true}
                            style={{ height: "140px", transitionProperty: "none" }}
                            useCSSTransforms={true}
                            transformScale={1}
                            measureBeforeMount={true}

                            // placeholder={}
                            // droppingItem= {{ i: `${data.machine}work3`, w: '100px', h: '100px' }}
                            onDrag={(layout, oldItem, newItem,
                                placeholder, e, element) => {
                                e.preventDefault();
                                onItemDragStart(newItem, `${data.machine},in_progress,${day}`);
                            }}
                            onDragStop={(layout, oldItem, newItem,
                                placeholder, e, element) => onInternalDrop(newItem, `${data.machine},in_progress,${day}`)}
                            onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},in_progress,${day}`, e)}
                        // onDragStart={(layout, oldItem, newItem,
                        //     placeholder, e, element) => {
                        //         e.preventDefault();
                        //         onItemDragStart(newItem, `${data.machine},work,${day}`);
                        //     }}
                        // onDropDragOver={e => setId(subGrid.id)}
                        >
                            {
                                [
                                    ...newData.work.blocks.filter((x) => x.status == 'in_progress' && (x.startedAt != '' ? x.startedAt.split(',')[2] : null) == day.split(',')[1]).map((block, j) => {
                                        return (
                                            <div
                                                key={`${data.machine},in_progress,${block.id}`}
                                                draggable={draggable}
                                                // onClick={(e) => console.log(e)}
                                                className={`duration-${block.duration}`}
                                                // onMouseDown={}
                                                // onMouseOver={}
                                                // onDrag={() => {}}
                                                // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                                onDragStart={e => dragStartHandle(block, `${data.machine},in_progress,${day}`, `${data.machine},in_progress,${block.id}`, data)}
                                                style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px", zIndex: '4' }}
                                            >{
                                                    showOverlay && dragItem.i == `${data.machine},in_progress,${block.id}` && (
                                                        <BlockOverlay overlayWidth={block.width} color={blockColor} />
                                                    )
                                                }
                                            </div>

                                        )
                                    }),
                                    ...newData.work.unavailable.filter(block => (block.startedAt != '' ? block.startedAt.split(',')[2] : null) == day.split(',')[1]).map((block, blockIndex) => {
                                        return (
                                            <div
                                                key={`${data.machine},unavailable,${block.id}`}
                                                style={{ backgroundColor: block.type, padding: '0px' }}
                                            >
                                            </div>
                                        )
                                    })
                                ]
                            }
                        </GridLayout>
                    </div>
                )
            }))
        // })
    }
    let y = 1;
    return (
        <Fragment>
            <GridLayout
                className={"layout"}
                layout={layout1}
                cols={15}
                rowHeight={150}
                width={2500}
                isDraggable={false}
            >
                <div
                    data-grid={{
                        "x": 0,
                        "y": 0,
                        "w": 6,
                        "h": 4,
                        "static": true
                    }}
                    key={"main"}
                    style={{ overflow: "auto", textAlign: "center", backgroundColor: "lightblue", border: 'solid', opacity: 1, borderRadius: "20px" }}
                >
                    <GridLayout
                        className={"layout"}
                        layout={layout1}
                        cols={12}
                        rowHeight={50}
                        width={2000}
                        isDraggable={false}
                    >
                        {generateDaysBox(gridData.days)}
                        {
                            gridData.data.map((grid, j) => {
                                // console.log(grid);

                                let gridsArray = [generateBacklogBox(grid, y), generateLeftoversBox(grid, y), generateWorkBox(grid, gridData.days, y), <div
                                    data-grid={{
                                        "x": 0,
                                        "y": y,
                                        "w": 1,
                                        "h": 2.5,
                                        "static": true
                                    }}
                                    key={grid.machine + "title"}
                                    style={{ overflow: "auto", textAlign: "center", backgroundColor: "yellow", border: 'solid', opacity: 1, borderRadius: "20px" }}
                                ><h3>{grid.machine}</h3></div>
                                ]
                                y = y + 2.5;
                                return (
                                    gridsArray
                                )
                            })
                        }

                    </GridLayout>
                </div>
                <div
                    data-grid={{
                        "x": 6,
                        "y": 0,
                        "w": 2,
                        "h": 6,
                        "static": true
                    }}
                    key={"pdf"}
                    style={{ overflow: "auto", textAlign: "center", backgroundColor: "lightyellow", border: 'solid', opacity: 1, borderRadius: "20px" }}
                >
                    <PdfDoc />
                </div>
                <div
                    data-grid={{
                        "x": 0,
                        "y": 4,
                        "w": 6,
                        "h": 2,
                        "static": true
                    }}
                    key={"graph"}
                    style={{ overflow: "auto", textAlign: "center", backgroundColor: "lightgrey", border: 'solid', opacity: 1, borderRadius: "20px" }}
                ></div>
            </GridLayout >
        </Fragment >
    );
}

export default GridChart;