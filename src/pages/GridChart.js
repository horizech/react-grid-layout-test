import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { defaultGrid, defaultJson } from "../data";

import '../App.css';
import { BlockOverlay } from "./BlockOverlay";

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

    const getEmptySpace = (subGrid, columns) => {
        let spaces = []
        for (let y = 0; y <= 2; y++) {
            for (let x = 0; x < columns; x++) {
                spaces.push({ y: y, x: x });
            }
        }
        subGrid.forEach((block, k) => {
            let occopied = [];
            let x = parseInt(block.time.split(":")[0]);
            spaces.map((a, i) => {
                if (block.turn === a.y && x === a.x) {
                    occopied = spaces.splice(i, block.hours)
                }
            }
            );
            // console.log(occopied);
        });
        return spaces;
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
            if (((spaces[spaceIndex].x - spaces[spaceIndex - 1].x) > 1 || (spaces[spaceIndex].x - spaces[spaceIndex - 1].x) < 0) && newElement.hours > widthSpace + 1) {
                widthSpace = 0;
            } else {
                widthSpace++;
            }
            // console.log(widthSpace)
            // console.log(spaceIndex);
            if (newElement.hours <= widthSpace) {
                newElement.time = `${spaces[spaceIndex - widthSpace]?.x}:00`;
                newElement.turn = spaces[spaceIndex - widthSpace]?.y;
                // newElement.id = newElement.data.i;
                // isDeleteElement = true;
                break;
            }
        }
        return ({ updatedElement: newElement, isDeleteElement })
    }

    const addNewElement = (newGrid, newElement, targetId, sourceId, isDelete) => {
        let newTargetId = [targetId.split(',')[0], targetId.split(',')[1]].join();
        let date = [targetId.split(',')[2], targetId.split(',')[3]].join();
        console.log(date);
        let category = targetId.split(',')[1];
        console.log(targetId)
        if (targetId != sourceId) {
            // newElement.type = blockColor;
            // console.log('checkpointz')
            newGrid.data.forEach((grid, i) => {
                if (targetId.split(',')[0] == grid.machine) {
                    if (category == 'backlog') {
                        // console.log(newElement)
                        newElement.id = (newGrid.data[i][category].blocks.length > 0 ? parseInt(newGrid.data[i][category].blocks.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 1
                        // console.log(newElement.id)
                        newGrid.data[i][category].blocks.push(newElement);
                    }
                    else if (category == 'work'){
                        // const updatedElement = {newElement:{}, isDeleteElement: isDeleteElement};
                        newGrid.data[i][category].blocks.sort((a, b) => { return a.turn - b.turn })
                        let elementAxis = [];
                        elementAxis = getEmptySpace([...grid[category].blocks.filter((block) => block.date == date), ...grid[category].unavailable.filter((block) => block.date == date)], 8);
                        elementAxis.sort(function (a, b) { return a.y - b.y })
                        console.log(elementAxis);

                        const { updatedElement, isDeleteElement } = updateAxisOfNewElement(newElement, elementAxis, isDelete);
                        // console.log(elementAxis);
                        // isDeleteElement = isDelete
                        // console.log(updatedElement.isDeleteElement);
                        isDelete = isDeleteElement;
                        newElement = updatedElement
                        if (isDeleteElement == true) {
                            updatedElement["id"] = (newGrid.data[i][category].blocks.length > 0 ? parseInt(newGrid.data[i][category].blocks.reduce((a, b) => parseInt(a.id) < parseInt(b.id) ? b : a).id) : 0) + 1
                            updatedElement.date = date;
                            newGrid.data[i][category].blocks.push(updatedElement);
                        }
                    }
                }
            });
        }
        else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i][sourceId.split(',')[1]].blocks.forEach((block, k) => {
                    if (block.id == newElement.id) {
                        newGrid.data[i][sourceId.split(',')[1]].blocks[k].type = blockColor
                    }
                });
            }
        })

        return ({ newGrid, isDelete })
    }

    const deleteElement = (newGrid, targetId, sourceId, elementToBeDeleted, isDeleteElement) => {
        let category = sourceId.split(',')[1];
        if (targetId != sourceId) {
            newGrid.data.forEach((grid, i) => {
                let index = -1;
                if (sourceId.split(',')[0] == grid.machine) {
                    grid[category].blocks.forEach((block, k) => {
                        // console.log(isDeleteElement)
                        if (block.id == elementToBeDeleted.id) {
                            index = k
                            // console.log(index);
                        }
                    })
                    if (isDeleteElement == true) {
                        // console.log(index);
                        newGrid.data[i][category].blocks.splice(index, 1);
                        // isDeleteElement = false
                    }
                }
            });
        } else newGrid.data.forEach((grid, i) => {
            if (sourceId.split(',')[0] == grid.machine) {
                newGrid.data[i][category].blocks.forEach((block, k) => {
                    if (block.id == elementToBeDeleted.id) {
                        newGrid.data[i][category].blocks[k].type = blockColor
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

    const dragStartHandle = (sourceElement, id, i) => {
        // console.log(e);
        // console.log(blockId);
        sourceElement['i'] = i;
        setBlockId(blockId)
        setSourceGridId(id);
        setElement(sourceElement);
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
        const category = id.split(',')[1];
        let newGridData = gridData;
        const newElement = JSON.parse(JSON.stringify(element));
        newElement.type = blockColor;
        let elementToBeDeleted = element;
        let sourceId = sourceGridId;

        if (sourceId.includes('days')) {
            alert("This element is not draggable!");
        } else if (id.split(',')[1] == 'leftovers') {
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
            newGridData = deleteElement(newGridData, id, sourceId, elementToBeDeleted, isDeleteElement);
            // console.log(id);
        }
        setDraggable(false);
        setGridData(newGridData);

    }

    const onInternalDrag = (griditem, id) => {
        // console.log(griditem);
        let newGrid = gridData
        // console.log(blockColor);
        if (griditem?.static === true) {
            alert("This element is not draggable!");
        } else {
            let category = id.split(',')[1];
            // if (targetId == sourceId) {
            newGrid.data.forEach((grid, i) => {
                let index = -1;
                if (id.split(',')[0] == grid.machine) {
                    grid[category].blocks.forEach((block, k) => {
                        // console.log(isDeleteElement)
                        if (block.id == griditem.i.split(',')[2]) {
                            index = k
                            newGrid.data[i][category].blocks[k].time = `${griditem.x}:00`;
                            newGrid.data[i][category].blocks[k].turn = griditem.y;
                            newGrid.data[i][category].blocks[k].type = blockColor;

                            // console.log(block);
                        }
                    })
                }
            })
            setGridData(newGrid);
        }
        // console.log(newGrid);
        setShowOverlay(false);
    }

    const dateTimeToPosition = (date, time) => {
        let x = 0;
        // let blockDate = date.slice(0, 2);
        let dayIndex = gridData.days.map((day, i) => {
            // let newDate = day.slice(4, 2);
            // console.log(newDate);
            if (date == day) {
                // console.log(i)
                x = i;
            }
        });
        x = x + parseInt(time.split(":")[0])
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
                //     placeholder, e, element) => onInternalDrag(newItem, `days`)}
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
    const generateBacklogBox = (data) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.backlog.blocks.map((block, blockIndex) => {
            let dimension = { i: `${data.machine},backlog,${block.id}`, x: x, y: y, w: 1, h: 1, static: false }
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
                    "y": 1,
                    "w": 1,
                    "h": 3,
                    "static": true
                }}
                key={`${data.machine},backlog`}
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
                    style={{ height: "220px", transitionProperty: "none" }}
                    useCSSTransforms={true}
                    transformScale={1}
                    measureBeforeMount={true}
                    onDragStop={(layout, oldItem, newItem,
                        placeholder, e, element) => onInternalDrag(newItem, `${data.machine},backlog`)}
                    onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},backlog`, e)}
                    // onDropDragOver={e => setId(subGrid.id)}
                    onDragStart={(layout, oldItem, newItem,
                        placeholder, e, element) => onItemDragStart(newItem, `${data.machine},backlog`)}
                >
                    {
                        data.backlog.blocks.map((block, blockIndex) => {
                            let width = (draggable ? block.hours : 1) * (200 / 16);
                            return (
                                <div
                                    key={`${data.machine},backlog,${block.id}`}
                                    draggable={draggable}
                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                    onDragStart={e => dragStartHandle(block, `${data.machine},backlog`, `${data.machine},backlog,${block.id}`)}
                                    style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px" }}
                                >{
                                        showOverlay && (dragItem.i == `${data.machine},backlog,${block.id}` || dragItem.id == block.id) && (
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
    const generateLeftoversBox = (data) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let y = 0;
        let layout = data.leftovers.blocks.map((block, blockIndex) => {
            let dimension = { i: `${data.machine},leftovers,${block.id}`, x: x, y: y, w: 1, h: 1, static: false }
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
                    "y": 1,
                    "w": 1,
                    "h": 3,
                    "static": true
                }}
                key={`${data.machine},leftovers`}
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
                    style={{ height: "220px", transitionProperty: "none" }}
                    useCSSTransforms={true}
                    transformScale={1}
                    measureBeforeMount={true}
                    onDragStop={(layout, oldItem, newItem,
                        placeholder, e, element) => onInternalDrag(newItem, `${data.machine},leftovers`)}
                    onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},leftovers`, e)}
                    // onDropDragOver={e => setId(subGrid.id)}
                    onDragStart={(layout, oldItem, newItem,
                        placeholder, e, element) => onItemDragStart(newItem, `${data.machine},leftovers`)}
                >
                    {
                        data.leftovers.blocks.map((block, blockIndex) => {
                            let width = (draggable ? block.hours : 1) * (200 / 16);
                            return (
                                <div
                                    key={`${data.machine},leftovers,${block.id}`}
                                    draggable={draggable}
                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                    onDragStart={e => dragStartHandle(block, `${data.machine},leftovers`, `${data.machine},leftovers,${block.id}`)}
                                    style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px" }}
                                >{
                                        showOverlay && dragItem.i == `${data.machine},leftovers,${block.id}` && (
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
        // console.log(id);
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
                    grid[category].blocks.forEach((block, k) => {
                        // console.log(isDeleteElement)
                        if (block.id == griditem.i.split(',')[2]) {
                            index = k
                            // newGrid.data[i][category].blocks[k].time = `${griditem.x}:00`;
                            // newGrid.data[i][category].blocks[k].turn = griditem.y;
                            setBlockColor(newGrid.data[i][category].blocks[k].type);
                            newGrid.data[i][category].blocks[k].type = "lightyellow";
                            // console.log(newGrid.data[i][category].blocks[k]);
                            setShowOverlay(true);
                            setOverlayWidth((newGrid.data[i][category].blocks[k].hours * 17) + 'px');
                        }
                    })
                }
            })
            setGridData(newGrid);
        }
    }
    const generateWorkBox = (data, days) => {
        // data.backlog.blocks.map((block, blockIndex) => {
        // let drag = elementGrid.data.static ? false : draggable
        // console.log(drag);
        let dimensions = []
        let x = 0;
        let layout = [...data.work.blocks.map((block, blockIndex) => {
            x = parseInt(block.time.split(":")[0]);
            // console.log("check point",x)
            let dimension = { i: `${data.machine},work,${block.id}`, x: x, y: block.turn, w: block.hours, h: 1, static: false }

            dimensions.push(dimension);
            return dimension
        }),
        ...data.work.unavailable.map((block, blockIndex) => {
            x = dateTimeToPosition(block.date, block.time);
            // console.log("check point",x)
            let dimension = { i: `${data.machine},unavailable,${block.id}`, x: x, y: block.turn, w: block.hours, h: 1, static: true }

            dimensions.push(dimension);
            return dimension
        })]
        let xaxis = 3;
        let w = 0.8;
        let index = 1

        data.work.blocks.map((item, i) =>{
            if(item.date == null){
                data.work.blocks[i].date = days[0];
            }
        })
        console.log(data.work.blocks)
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
                            "y": 1,
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
                            onDragStop={(layout, oldItem, newItem,
                                placeholder, e, element) => onInternalDrag(newItem, `${data.machine},work,${day}`)}
                            onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, `${data.machine},work,${day}`, e)}
                            onDragStart={(layout, oldItem, newItem,
                                placeholder, e, element) => onItemDragStart(newItem, `${data.machine},work,${day}`)}
                        // onDropDragOver={e => setId(subGrid.id)}
                        >
                            {
                                [
                                    ...data.work.blocks.filter(block => block.date == day).map((block, blockIndex) => {
                                        let width = block.hours * 16.6;
                                        return (
                                            <div
                                                key={`${data.machine},work,${block.id}`}
                                                draggable={draggable}
                                                onClick={(e) => console.log(e)}
                                                className={`hours-${block.hours}`}
                                                // onMouseOver={}
                                                // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                                onDragStart={e => dragStartHandle(block, `${data.machine},work,${day}`, `${data.machine},work,${block.id}`)}
                                                style={{ backgroundColor: block.type, padding: '0px', borderRadius: "5px", zIndex: '4' }}
                                            >{
                                                    showOverlay && dragItem.i == `${data.machine},work,${block.id}` && (
                                                        <BlockOverlay overlayWidth={width} color={blockColor} />
                                                    )
                                                }
                                            </div>
                                        )
                                    }),
                                    ...data.work.unavailable.filter(block => block.date == day).map((block, blockIndex) => {
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
    return (
        <Fragment>

            <GridLayout
                className={"layout"}
                layout={layout1}
                cols={12}
                rowHeight={50}
                width={2000}
                isDraggable={false}
            >
                <div
                    data-grid={{
                        "x": 0,
                        "y": 1,
                        "w": 1,
                        "h": 3,
                        "static": true
                    }}
                    key={gridData.data[0].machine + "title"}
                    style={{ overflow: "auto", textAlign: "center", backgroundColor: "yellow", border: 'solid', opacity: 1, borderRadius: "20px" }}
                ><h3>INTEGREX 200S</h3></div>
                {generateDaysBox(gridData.days)}
                {generateBacklogBox(gridData.data[0])}

                {generateLeftoversBox(gridData.data[0])}

                {generateWorkBox(gridData.data[0], gridData.days)}

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
    );
}

export default GridChart;