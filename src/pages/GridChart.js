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

    const createElement = (originalEl, targetDateStr, duration, id, newIndex, newStartedAt) => {
        let targetDate = new Date(targetDateStr);
        targetDate.setHours(newIndex); //(Math.floor(newIndex / 8)) + ((newIndex) % 8));

        let startedDate = new Date(originalEl.startedAt);
        startedDate.setHours((Math.floor(newIndex / 8)) + ((newIndex) % 8));

        let finishedDate = new Date(targetDate.toISOString());
        finishedDate.setHours(targetDate.getHours() + duration);

        return {
            id: id ?? crypto.randomUUID(),
            importHash: '', // Hash value used for data import
            createdAt: (newIndex) % 8 + ", Fri, 02 May 2023", // date time
            updatedAt: 'Fri, 02 May 2023', // date time
            createdBy: 1, // ObjectId reference
            updatedBy: 1, // ObjectId reference
            label: '',
            operation: 2, // ObjectId reference to the operation schedule
            status: 'in_progress', // "to_do", "in_progress", "completed", "overdue"
            prodline: 1, // The reference to the prodline associated with the task.
            type: originalEl.type,
            tooltip: originalEl.tooltip,
            duration: duration, //hours: 1,
            //date: "Mon, 01 May 2023",
            tenant: 1,// ObjectId reference to the tenant associated
            startedAt: targetDate.toISOString(),// ((newIndex) % 8) + ", Tue, 02 May 2023", // time: "7", date time
            finishedAt: finishedDate.toISOString(),// (((newIndex) % 8) + duration) + ', Tue, 02 May 2023', // date time
            shift: Math.floor(newIndex / 8) // turn
        };
    }
    const moveElement = (subGrid, targetDate, columns, newElement, isDeleteElement, requiredHours) => {
        let spaces = []
        for (let y = 0; y <= 2; y++) {
            for (let x = 0; x < columns; x++) {
                spaces.push({ y: y, x: x });
            }
        }

        let availableSpaces = (new Array(24)).fill(true);
        console.log(availableSpaces);
        console.log(subGrid);
        subGrid
            .forEach((block, k) => {
                let startedAt = ((new Date(block.startedAt)).getHours() % 8); // parseInt(block.startedAt.split(',')[0]);
                let duration = block.duration;
                (new Array(duration)).fill(1).map((x, i) => i).forEach(x => {
                    console.log(startedAt);
                    availableSpaces[(block.shift * 8) + startedAt + x] = false;
                })
                console.log(startedAt, duration);
            });

        console.log(availableSpaces);
        let widthSpace = 0;

        let lockedSpaces = [];
        subGrid.filter(x => x.type == 'grey').forEach(lockedBlock => {
            let startedAt = ((new Date(lockedBlock.startedAt)).getHours() % 8); // parseInt(lockedBlock.startedAt.split(',')[0]);
            let duration = lockedBlock.duration;
            (new Array(duration)).fill(1).map((x, i) => i).forEach(x => {
                console.log(startedAt);
                lockedSpaces.push((lockedBlock.shift * 8) + startedAt + x);
            })
        });
        console.log(lockedSpaces);

        let newIndex = -1;
        let newBlocks = [];

        let blockNum = 0;
        let totalDuration = 0;

        for (let spaceIndex = 0; spaceIndex < availableSpaces.length; spaceIndex++) {
            // If new shift started
            if (spaceIndex % 8 == 0 && widthSpace > 0) {
                newBlocks.push(createElement(newElement, targetDate, widthSpace, newBlocks.length == 0 ? newElement.id : null, newIndex));
                widthSpace = 0;
                newIndex = -1;
                isDeleteElement = true;
            }
            // Check if stepping on an empty space
            // availableSpaces.map((x, j) =>{
            if (availableSpaces[spaceIndex]) {
                if (newIndex == -1) {
                    newIndex = spaceIndex;
                }
                widthSpace++;
                totalDuration++;
            }
            else {
                if (lockedSpaces.includes(spaceIndex)) {
                    if (widthSpace > 0) {
                        newBlocks.push(createElement(newElement, targetDate, widthSpace, newBlocks.length == 0 ? newElement.id : null, newIndex));
                        widthSpace = 0;
                        newIndex = -1;
                        isDeleteElement = true;
                    }
                }
                else {
                    newBlocks = [];
                    widthSpace = 0;
                    newIndex = -1;
                    totalDuration = 0;
                }
            }

            if (widthSpace > 0 && totalDuration == newElement.duration) {
                newBlocks.push(createElement(newElement, targetDate, widthSpace, newBlocks.length == 0 ? newElement.id : null, newIndex));
                widthSpace = 0;
                newIndex = -1;
                isDeleteElement = true;
                break;
            }

            // if (widthSpace >= newElement.duration) {
            //     // let quotient = newIndex / 8;
            //     // const x = (newIndex) % 8;
            //     const x = newIndex;
            //     const y = Math.floor(newIndex / 8);

            //     newElement.startedAt = "" + x; //newIndex <= 7 ? newIndex : newIndex <= 15 ? newIndex - 7 : newIndex - 15;
            //     newElement.shift = y; //newIndex <= 7 ? 0 : newIndex <= 15 ? 1: 2 ;
            //     isDeleteElement = true;
            //     break;
            // }
            // else {
            //     isDeleteElement = false;
            // }


        }


        // if(totalDuration == newElement.duration ) {
        //     isDeleteElement = true;
        // }
        // else {
        //     isDeleteElement = false;
        // }

        console.log(newElement)

        console.log(columns);
        console.log(spaces);
        // subGrid.forEach((block, k) => {
        //     let occopied = [];
        //     let x = new Date(block.startedAt).getHours() % 8; // parseInt(block.startedAt);
        //     spaces.map((a, i) => {
        //         if (block.shift === a.y && x === a.x) {
        //             occopied = spaces.splice(i, block.duration)
        //         }
        //     }
        //     );
        //     console.log(occopied);
        // });
        return ({ updatedElements: newBlocks.length > 0 ? newBlocks : [newElement, ...[]], isDeleteElement: isDeleteElement }) //isDeleteElement
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
        let targetDate = targetId.split(',')[2]; //[targetId.split(',')[2], targetId.split(',')[3]].join();
        console.log(targetDate);
        let targetCategory = targetId.split(',')[1];
        let sourceCategory = sourceId.split(',')[1];
        const targetIdParts = targetId.split(',');

        const targetIdDate = targetIdParts.length > 2 ?
            new Date(targetIdParts[2]).getDate() : null;
        const targetIdMonth = targetIdParts.length > 2 ?
            new Date(targetIdParts[2]).getMonth() : null;

        if (targetId != sourceId) {
            newElement.type = blockColor;
            // console.log('checkpointz')
            newGrid.data.forEach((grid, i) => {
                if (targetId.split(',')[0] == grid.machine) {
                    // if (targetCategory == 'backlog') {
                    // console.log(newElement)
                    // newElement.id = (newGrid.data[i].work.taskSchedules.length > 0 ? parseInt(newGrid.data[i].work.taskSchedules.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 1
                    // console.log(newElement.id)
                    // let inprogressGrid =  grid.work.taskSchedules.map((x) => {
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
                    let inprogressGrid = grid.work.taskSchedules.filter((x) => x.status == 'in_progress');
                    // console.log(inprogressGrid);

                    if (targetIdParts.length > 2) {
                        inprogressGrid = inprogressGrid.filter((x) => {
                            const blockDateTime = new Date(x.startedAt);
                            const blockDate = blockDateTime.getDate();
                            const blockMonth = blockDateTime.getMonth();

                            return blockDate === targetIdDate && blockMonth === targetIdMonth;

                            // return x.startedAt.split(',')[2] == targetId.split(',')[3]
                        });
                    }
                    let unavailableGrid = [];
                    if (targetIdParts.length > 2) {
                        unavailableGrid = grid.work.unavailable.filter((x) => {
                            const blockDateTime = new Date(x.startedAt);
                            const blockDate = blockDateTime.getDate();
                            const blockMonth = blockDateTime.getMonth();

                            return blockDate === targetIdDate && blockMonth === targetIdMonth;

                            // return x.startedAt.split(',')[2] == targetId.split(',')[3]
                        });
                    }


                    // console.log(inprogressGrid);
                    console.log(unavailableGrid);
                    // newGrid.data[i].work.taskSchedules.push(newElement);
                    // }
                    if (targetCategory == 'in_progress') {
                        // const updatedElement = {newElement:{}, isDeleteElement: isDeleteElement};
                        newGrid.data[i].work.taskSchedules.sort((a, b) => { return a.shift - b.shift })
                        let elementAxis = [];
                        let gridElements = [...inprogressGrid, ...unavailableGrid];
                        // elementAxis = moveElement(gridElements, 8, newElement, isDeleteElement);
                        // elementAxis.sort(function (a, b) { return a.y - b.y })
                        // console.log(elementAxis);
                        console.log(gridElements);

                        const { updatedElements, isDeleteElement } = moveElement(gridElements, targetDate, 8, newElement, isDelete);
                        console.log(updatedElements);
                        if (isDeleteElement) {
                            newGrid.data[i].work.taskSchedules = newGrid.data[i].work.taskSchedules.filter(x => x.id != newElement.id);
                            newGrid.data[i].work.taskSchedules = [...newGrid.data[i].work.taskSchedules, ...updatedElements];
                        }
                        else {
                            newGrid.data[i].work.taskSchedules.forEach((x, j) => {
                                if (x.id === newElement.id) {
                                    newGrid.data[i].work.taskSchedules[j].status = targetCategory;
                                    // console.log(`${updatedElement.startedAt}, ${startedAt}`);
                                    // moveElement(gridElements, 8, newElement, isDelete);
                                    newGrid.data[i].work.taskSchedules[j].startedAt = updatedElements[0].startedAt; //`${updatedElements[0].startedAt}, ${targetDate}`;
                                    newGrid.data[i].work.taskSchedules[j].shift = updatedElements[0].shift;
                                    console.log(newGrid.data[i].work.taskSchedules[j]);
                                }
                            })
                        }
                    } else {
                        newGrid.data[i].work.taskSchedules.forEach((x, j) => {
                            if (x.id === newElement.id) {
                                newGrid.data[i].work.taskSchedules[j].status = targetCategory;
                                // moveElement(gridElements, 8, newElement, isDelete);
                                // console.log('not in progress');
                                newGrid.data[i].work.taskSchedules[j].startedAt = '';
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
                    //         updatedElement["id"] = (newGrid.data[i].work.taskSchedules.length > 0 ? parseInt(newGrid.data[i].work.taskSchedules.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 2
                    //         updatedElement.startedAt = startedAt;
                    //         newGrid.data[i].work.taskSchedules.push(updatedElement);
                    //     }
                    // }
                }
            });
        }
        else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i].work.taskSchedules.forEach((block, k) => {
                    if (block.id == newElement.id) {
                        newGrid.data[i].work.taskSchedules[k].type = blockColor
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
                    grid.work.taskSchedules.forEach((block, k) => {
                        // console.log(isDeleteElement)
                        if (block.id == elementToBeDeleted.id) {
                            index = k
                            // console.log(index);
                        }
                    })
                    if (isDeleteElement == true) {
                        // console.log(index);
                        newGrid.data[i].work.taskSchedules.splice(index, 1);
                        // isDeleteElement = false
                    } else newGrid.data[i][category].taskSchedules[index].type = blockColor
                }
            });
        } else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i].work.taskSchedules.forEach((block, k) => {
                    if (block.id == elementToBeDeleted.id) {
                        newGrid.data[i].work.taskSchedules[k].type = blockColor
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
        let element = data.work.taskSchedules.filter(x => x.id == sourceElement.id)[0];
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
                    newGridData.data[i].work.taskSchedules.forEach((block, k) => {
                        if (block.id == newElement.id) {
                            newGridData.data[i].work.taskSchedules[k].type = blockColor
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
            const idParts = id.split(',');
            const date = idParts.length > 2 ? idParts[2] : null;
            console.log(date);
            // if (targetId == sourceId) {
            newGrid.data.forEach((grid, i) => {
                let index = -1;
                if (id.split(',')[0] == grid.machine) {
                    grid.work.taskSchedules.forEach((block, k) => {
                        console.log(`${x}, ${date}`)
                        if (block.id == griditem.i.split(',')[2]) {
                            index = k
                            let newDate = newGrid.data[i].work.taskSchedules[k].startedAt ? new Date(newGrid.data[i].work.taskSchedules[k].startedAt) : new Date();
                            newDate.setHours(x); //(griditem.y * 8) + x);
                            newGrid.data[i].work.taskSchedules[k].startedAt = newDate.toISOString(); // `${x}, ${date}`;
                            newGrid.data[i].work.taskSchedules[k].shift = griditem.y;
                            // newGrid.data[i].work.taskSchedules[k].type = blockColor;

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
        // data.backlog.taskSchedules.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.work.taskSchedules.filter((x) => x.status == 'to_do').map((block, blockIndex) => {
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
                        data.work.taskSchedules.filter((x) => x.status == 'to_do').map((block, blockIndex) => {
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
        // data.backlog.taskSchedules.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.work.taskSchedules.filter((x) => x.status == 'overdue').map((block, blockIndex) => {
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
                        data.work.taskSchedules.filter((x) => x.status == 'overdue').map((block, blockIndex) => {
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
                        grid.work.taskSchedules.forEach((block, k) => {
                            // console.log(isDeleteElement)
                            if (block.id == griditem.i.split(',')[2]) {
                                index = k
                                // newGrid.data[i][category].taskSchedules[k].startedAt = `${griditem.x}:00`;
                                // newGrid.data[i][category].taskSchedules[k].shift = griditem.y;
                                setBlockColor(newGrid.data[i].work.taskSchedules[k].type);
                                // console.log(newGrid.data[i][category].taskSchedules[k]);
                                setShowOverlay(true);
                                setOverlayWidth((newGrid.data[i].work.taskSchedules[k].duration * 17) + 'px');
                                // newGrid.data[i].work.taskSchedules[k].type = "lightyellow";
                            }
                        })
                    }
                })
                setGridData(newGrid);
            }
        }

    }

    const generateWorkBox = (data, days, y) => {
        // data.backlog.taskSchedules.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let newData = JSON.parse(JSON.stringify(data))
        newData.work.taskSchedules.filter((x) => x.status == 'in_progress').forEach((block, i) => {
            newData.work.taskSchedules[i]['key'] = `${data.machine},in_progress,${block.id}`
            block['key'] = `${data.machine},in_progress,${block.id}`
            if (block.startedAt == null) {
                newData.work.taskSchedules[i].startedAt = `0, ${days[0]}`;
            }
            if ((block.duration + ((new Date(block.startedAt)).getHours() % 8) > 8)) { // parseInt(block.startedAt.split(',')[0]) % 8) > 8) {
                let firstElementWidth = 8 - ((new Date(block.startedAt)).getHours() % 8); //parseInt(block.startedAt.split(',')[0]) % 8;
                let duration = block.duration;
                newData.work.taskSchedules.splice(i, 1);
                block.duration = firstElementWidth;
                block['width'] = duration * 16.6;
                newData.work.taskSchedules.push(block)
                let UpdatedData = JSON.parse(JSON.stringify(newData))
                block.duration = duration - firstElementWidth
                // block.id = parseInt(UpdatedData.work.taskSchedules.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) + 1;
                block.shift = block.shift + 1;
                // block.startedAt = `${block.shift * 8}, ${block.startedAt.split(',')[1]}, ${block.startedAt.split(',')[2]}`;
                block['key'] = `${data.machine},in_progress,${block.id},piece`
                block['piece'] = true;
                UpdatedData.work.taskSchedules.push(block)
                newData = UpdatedData;
                // console.log(block.key);

            }
        })
        console.log(newData);
        let dimensions = []
        let x = 0;
        let layout = [...newData.work.taskSchedules
            .filter((x) => x.status == 'in_progress')
            .map((block, blockIndex) => {
                // console.log(block.startedAt.split(',')[0]);
                x = block.startedAt != '' ?
                    ((new Date(block.startedAt)).getHours() % 8) : 0;
                // parseInt(block.startedAt != '' ? block.startedAt.split(',')[0] : 0) % 8;;
                console.log(x);
                // console.log(block.key);
                // console.log("check point", x)
                // console.log("check point", block.shift)
                let dimension = { i: `${data.machine},in_progress,${block.id}`, x: x, y: block.shift, w: block.duration, h: 1, static: false }

                return dimension
            }),
        ...newData.work.unavailable.map((block, blockIndex) => {
            x = block.startedAt != '' ?
                ((new Date(block.startedAt)).getHours() % 8) : 0;
            // parseInt(block.startedAt != '' ? block.startedAt.split(',')[0] : 0) % 8;
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
                const dayDateTime = new Date(day);
                const dayDate = dayDateTime.getDate();
                const dayMonth = dayDateTime.getMonth();

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
                        style={{ textAlign: "center", backgroundColor: "white", border: 'dashed', opacity: 1, }}
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
                                    ...newData.work.taskSchedules.filter((x) => x.status == 'in_progress')
                                        .filter((block) => {
                                            if (!block.startedAt) {
                                                return false;
                                            }

                                            const blockDateTime = new Date(block.startedAt);
                                            const blockDate = blockDateTime.getDate();
                                            const blockMonth = blockDateTime.getMonth();

                                            return dayDate === blockDate && dayMonth === blockMonth;

                                            // (x.startedAt != '' ? x.startedAt.split(',')[2] : null) == day.split(',')[1]
                                        }).map((block, j) => {
                                            return (
                                                <div
                                                    key={`${data.machine},in_progress,${block.id}`}
                                                    draggable={draggable}
                                                    // onClick={(e) => console.log(e)}
                                                    className={`duration-${block.duration}`}
                                                    // onMouseDown={}
                                                    // onMouseOver={}
                                                    onDrag={() => console.log('onDrag')}
                                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                                    onClick={e => console.log("clicked!")}
                                                    onDoubleClick={e => console.log('double clicked!')}
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
                                    ...newData.work.unavailable.filter(block => {
                                        if (!block.startedAt) {
                                            return false;
                                        }

                                        const blockDateTime = new Date(block.startedAt);
                                        const blockDate = blockDateTime.getDate();
                                        const blockMonth = blockDateTime.getMonth();

                                        return dayDate === blockDate && dayMonth === blockMonth;

                                        // return (block.startedAt != '' ? block.startedAt.split(',')[2] : null) == day.split(',')[1]
                                    }).map((block, blockIndex) => {
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
                        rowHeight={55}
                        width={2000}
                        isDraggable={false}
                        margin={[0, 2]}
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