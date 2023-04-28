import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import styles from "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const GridChart = () => {
    const [newKey, setNewKey] = useState("b");
    const [sourceGridId, setSourceGridId] = useState(null);
    const [targetGridId, setTargetGridId] = useState(null);
    const [draggable, setDraggable] = useState(true);
    const [isStatic, setStatic] = useState(true);
    const [position, setPosition] = useState(39);
    const [element, setElement] = useState(null);
    const [layout, setLayout] = useState([
        {}
    ]);
    // layout is an array of objects, see the demo for more complete usage

    const layout1 = [
        {}
    ];
    const subgrid1 = [
        {
            id: "subGrid1",
            data: { x: 0, y: 0, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '0.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            dragOut: false,
            elementGrids: []
            // bounded: true,
        },
        {
            id: "subGrid2",
            data: { x: 2.5, y: 0, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 18,
            rowHeight: 50,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            elementGrids: [
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 0, w: 2, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '20px',
                    // border:"solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    id: "elementGrid2",
                    data: { x: 1, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '20px',
                    // border: "solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    id: "elementGrid3",
                    data: { x: 6, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    columns: 10,
                    rowHeight: 10,
                    width: 400,
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
            id: "subGrid3",
            data: { x: 8, y: 0, w: 6, h: 2, minW: 4, maxW: 4, static: true },
            // color: "white",
            opacity: '0.5',
            borderRadius: '5px',
            border: "dashed",
            columns: 40,
            rowHeight: 50,
            width: 660,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            elementGrids: [
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid2",
                    data: { x: 2, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid3",
                    data: { x: 4, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid4",
                    data: { x: 8, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid5",
                    data: { x: 10, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid6",
                    data: { x: 13, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid7",
                    data: { x: 18, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid8",
                    data: { x: 19, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid9",
                    data: { x: 22, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid10",
                    data: { x: 23.5, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 25, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 27, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 28, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 31, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 14, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 38, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 38, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 12, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 17, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 8, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 5, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 0, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid11",
                    data: { x: 0, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid12",
                    data: { x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid13",
                    data: { x: 6, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid14",
                    data: { x: 17, y: 2, w: 2, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid15",
                    data: { x: 4, y: 0, w: 0.5, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid16",
                    data: { x: 6, y: 0, w: 0.2, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        },
    ];
    const subgrid2 = [
        {
            id: "subGrid4",
            data: { x: 0, y: 2, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '1.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            dragOut: false,
            elementGrids: []
            // bounded: true,
        },
        {
            id: "subGrid5",
            data: { x: 2.5, y: 2, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 18,
            rowHeight: 50,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            elementGrids: [
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 1, w: 2, h: 1 },
                    color: "grey",
                    opacity: '1',
                    borderRadius: '20px',
                    // border:"solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid2",
                    data: { x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "red",
                    opacity: '1',
                    borderRadius: '20px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid3",
                    data: { x: 6, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "yelllow",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
            id: "subGrid6",
            data: { x: 8, y: 2, w: 6, h: 2, minW: 4, maxW: 4, static: true },
            // color: "white",
            opacity: '0.5',
            borderRadius: '5px',
            border: "dashed",
            columns: 40,
            rowHeight: 50,
            width: 660,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            margin: [0, 0],
            elementGrids: [// 40, 90, 100, 120, 140, 170, 180, 190, /n 0-30,50-80, 120-160, 200
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid2",
                    data: { x: 2, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid3",
                    data: { x: 4, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid4",
                    data: { x: 6, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid5",
                    data: { x: 10, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid6",
                    data: { x: 12, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid7",
                    data: { x: 14, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 16, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 22, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 26, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 32, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 40, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 6, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 8, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 16, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 18, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 20, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 22, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 32, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 36, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 38, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 0, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 4, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 28, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid8",
                    data: { x: 6, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid9",
                    data: { x: 12, y: 1, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid10",
                    data: { x: 14, y: 2, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid11",
                    data: { x: 16, y: 2, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid12",
                    data: { x: 18, y: 2, w: 0.6, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid13",
                    data: { x: 24, y: 1, w: 0.4, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        },
    ];
    const subgrid3 = [
        {
            id: "subGrid7",
            data: { x: 0, y: 4, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '0.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            dragOut: false,
            elementGrids: []
            // bounded: true,
        },
        {
            id: "subGrid8",
            data: { x: 2.5, y: 4, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 18,
            rowHeight: 50,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            elementGrids: [
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 1, w: 2, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '20px',
                    // border:"solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    id: "elementGrid2",
                    data: { x: 2, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '20px',
                    // border: "solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    id: "elementGrid3",
                    data: { x: 4, y: 1, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "maroon",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    columns: 10,
                    rowHeight: 10,
                    width: 400,
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
            id: "subGrid9",
            data: { x: 8, y: 4, w: 6, h: 2, minW: 4, maxW: 4, static: true },
            // color: "white",
            opacity: '0.5',
            borderRadius: '5px',
            border: "dashed",
            columns: 40,
            rowHeight: 50,
            width: 660,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            dragOut: false,
            elementGrids: [
                {
                    id: "elementGrid1",
                    data: { x: 0, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid2",
                    data: { x: 2, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid3",
                    data: { x: 4, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid4",
                    data: { x: 8, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 10, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 13, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 18, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 19, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 22, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 23.5, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 25, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 27, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 28, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 31, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 14, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 38, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 38, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 12, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 17, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 8, y: 1, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 5, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 0, y: 2, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid5",
                    data: { x: 32, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid6",
                    data: { x: 34, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "orange",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid7",
                    data: { x: 17, y: 0, w: 5, h: 1, minW: 2, maxW: 4 },
                    color: "red",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid8",
                    data: { x: 30, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    id: "elementGrid9",
                    data: { x: 4, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "green",
                    opacity: '1',
                    borderRadius: '5px',
                    // border: "solid",
                    // bounded: true,
                },
                {
                    id: "elementGrid10",
                    data: { x: 8, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "brown",
                    opacity: '1',
                    borderRadius: '10px',
                    // border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        }
    ]
    const [grids, setGrids] = useState([
        {
            data: { x: 0, y: 0, w: 3, h: 6, static: true },
            color: "#ECF3F6",
            columns: 12,
            rowHeight: 90,
            width: 1350,
            bounded: true,
            resizable: false,
            subGrids: [
                ...subgrid1,
                ...subgrid2,
                ...subgrid3,
            ]
        },
    ]);
    const changeStatic = (e) => {
        e.preventDefault();
        !isStatic ? setStatic(true) : setStatic(false);
        // isStatic ? setNewKey("a") : setNewKey("b");
        console.log("static", isStatic);
    }
    useEffect(() => {
        console.log("hello")

        console.log("newKey", newKey);
    }, [isStatic, newKey])
    const dragStartHandle = (sourceElement, id) => {
        setSourceGridId(id);
        setElement(sourceElement);
        setDraggable(true);
    }
    console.log(draggable);

    const onDropHandle = (layout, layoutItem, id, e) => {
        e.preventDefault();
        setTargetGridId(id);
        // console.log(layoutItem);
        // console.log(layout);
        // setLayout(layout);
        let newPosition = position
        newPosition = newPosition - 1
        setPosition(newPosition)
        let newGrid = grids;
        let newElement = element;
        newElement.data.x = position;
        newElement.data.y = 0;
        newGrid.forEach((grid, i) => {
            grid.subGrids.forEach((subgrid, j) => {
                if (newGrid[i].subGrids[j].id == id & id != sourceGridId) {
                    newGrid[i].subGrids[j].elementGrids.push(newElement);
                }
                if (newGrid[i].subGrids[j].id == sourceGridId & id != sourceGridId) {
                    newGrid[i].subGrids[j].elementGrids.forEach((elementgrid, k) => {
                        if (newGrid[i].subGrids[j].elementGrids[k].id == element.id) {
                            newGrid[i].subGrids[j].elementGrids.splice(k, 1);
                        }
                    })
                }
            })
        });
        setGrids(newGrid)
        setDraggable(false);
        console.log(id);
    }

    const changeDraggable = (id) => {
        // e.preventDefault();
        let newGrid = grids;
        console.log(id);
        newGrid.forEach((grid, i) => {
            grid.subGrids.forEach((subgrid, j) => {
                if (newGrid[i].subGrids[j].id == id) {
                    newGrid[i].subGrids[j].dragOut = !newGrid[i].subGrids[j].dragOut;
                }
            })
        });
        setGrids(newGrid)

    }
    const blurHandle = () => {
        console.log("blur");
    }
    return (
        <Fragment>
            {/* <button style={{ float: 'right' }} onClick={() => changeStatic()} >Pin</button> */}
            <Fragment>
                <GridLayout
                    className={styles.layout}
                    layout={layout}
                    cols={12}
                    rowHeight={100}
                    width={5500}
                    isDraggable={false}
                >
                    {
                        grids.map((grid, indexGrid) => {
                            return (
                                <div
                                    key={"grid" + indexGrid}
                                    style={{ backgroundColor: grid.color, borderRadius: '40px', }}
                                    data-grid={grid.data}
                                // draggable={!isStatic}
                                >
                                    <GridLayout
                                        className="layout"
                                        layout={layout1}
                                        cols={grid.columns}
                                        rowHeight={grid.rowHeight}
                                        width={grid.width}
                                        isDraggable={false}
                                        isBounded={grid.bounded}
                                        isResizable={grid.resizable}
                                    >
                                        {grid.subGrids.map((subGrid, indexSubGrid) => {
                                            return (
                                                <div
                                                    data-grid={subGrid.data}
                                                    key={"subGrid" + indexSubGrid}
                                                    // onBlur={() => setStatic(!isStatic)}
                                                    style={{ backgroundColor: subGrid.color, borderRadius: subGrid.borderRadius, opacity: subGrid.opacity, borderColor: 'black', border: subGrid.border }}
                                                >
                                                    {/* <button type="button" disabled={false} style={{ float: 'right' }} onClick={(subGrid) => changeDraggable(subGrid.id)} onblur={blurHandle} >Pin</button> */}
                                                    <GridLayout
                                                        className="layout"
                                                        layout={layout}
                                                        cols={subGrid.columns}
                                                        rowHeight={subGrid.rowHeight}
                                                        width={subGrid.width}
                                                        compactType={subGrid.compactType}
                                                        // isDraggable={!subGrid.dragOut}
                                                        isDraggable={true}
                                                        isBounded={subGrid.bounded}
                                                        isResizable={subGrid.resizable}
                                                        preventCollision={subGrid.preventCollision}
                                                        // margin={subGrid.margin}
                                                        isDroppable={true}
                                                        style={{ height: '170px' }}
                                                        // droppingItem={{ i: "string", w: 4, h: 2 }}
                                                        onDrop={(layout, layoutItem, e) => onDropHandle(layout, layoutItem, subGrid.id, e)}
                                                    // onDropDragOver={e => setId(subGrid.id)}
                                                    >
                                                        {subGrid.elementGrids.map((elementGrid, indexElementGrid) => {
                                                            return (
                                                                <div
                                                                    data-grid={elementGrid.data}
                                                                    key={"elementGrid" + indexElementGrid}
                                                                    // draggable={subGrid.dragOut}
                                                                    draggable={true}
                                                                    // onDragStop={e => dragStopHandle(elementGrid, subGrid.id)}
                                                                    onDragStart={e => dragStartHandle(elementGrid, subGrid.id)}
                                                                    style={{ backgroundColor: elementGrid.color, borderRadius: elementGrid.borderRadius, opacity: elementGrid.opacity, borderColor: 'black', border: elementGrid.border, padding: '0px' }}
                                                                >
                                                                </div>
                                                            )
                                                        })}
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

export default GridChart;