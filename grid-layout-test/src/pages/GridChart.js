import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import styles from "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const GridChart = () => {
    const [newKey, setNewKey] = useState("b");

    const [isStatic, setStatic] = useState(true);
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        { }
    ];
    const subgrid1 = [
        {
            data: { x: 0, y: 0, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '0.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            elementGrids: []
            // bounded: true,
        },
        {
            data: { x: 2.5, y: 0, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 10,
            rowHeight: 60,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            elementGrids: [
                {
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
                    data: { x: 1, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '20px',
                    border: "solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    data: { x: 6, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    columns: 10,
                    rowHeight: 10,
                    width: 400,
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
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
            elementGrids: [
                {
                    data: { x: 0, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 4, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
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
                    data: { x: 0, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 6, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 17, y: 2, w: 2, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 4, y: 0, w: 0.5, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 6, y: 0, w: 0.2, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        },
    ];
    const subgrid2 = [
        {
            data: { x: 0, y: 2, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '1.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            elementGrids: []
            // bounded: true,
        },
        {
            data: { x: 2.5, y: 2, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 10,
            rowHeight: 60,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            elementGrids: [
                {
                    data: { x: 0, y: 1, w: 2, h: 1 },
                    color: "grey",
                    opacity: '1',
                    borderRadius: '20px',
                    // border:"solid",
                    // bounded: true,
                },
                {
                    data: { x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
                    color: "red",
                    opacity: '1',
                    borderRadius: '20px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 6, y: 1, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "yelllow",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
            data: { x: 8, y: 2, w: 6, h: 2, minW: 4, maxW: 4, static: true },
            // color: "white",
            opacity: '0.5',
            borderRadius: '5px',
            border: "dashed",
            columns: 200,
            rowHeight: 50,
            width: 660,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            elementGrids: [// 40, 90, 100, 120, 140, 170, 180, 190, /n 0-30,50-80, 120-160, 200
                {
                    data: { x: 0, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 10, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 20, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 50, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 60, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 70, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 80, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 110, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 130, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 150, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 160, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 200, y: 0, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 40, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 80, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 90, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 100, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 110, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 160, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 170, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 180, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 190, y: 1, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 0, y: 2, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 10, y: 2, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 20, y: 2, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 140, y: 2, w: 10, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 30, y: 0, w: 5, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 60, y: 1, w: 5, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 70, y: 2, w: 10, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 80, y: 2, w: 5, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 90, y: 2, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 120, y: 1, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "white",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        },
    ];
    const subgrid3 = [
        {
            data: { x: 0, y: 4, w: 2, h: 2, static: true },
            color: "#F8F70A",
            opacity: '0.5',
            borderRadius: '40px',
            // border:"solid",
            columns: 6,
            rowHeight: 30,
            width: 400,
            elementGrids: []
            // bounded: true,
        },
        {
            data: { x: 2.5, y: 4, w: 2, h: 2, minW: 4, maxW: 4, static: true },
            // color: "blue",
            opacity: '0.5',
            borderRadius: '40px',
            border: "solid",
            columns: 10,
            rowHeight: 60,
            width: 300,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            elementGrids: [
                {
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
                    data: { x: 2, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "blue",
                    opacity: '1',
                    borderRadius: '20px',
                    border: "solid",
                    columns: 6,
                    rowHeight: 30,
                    width: 400,
                    // bounded: true,
                },
                {
                    data: { x: 4, y: 1, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "maroon",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    columns: 10,
                    rowHeight: 10,
                    width: 400,
                    // bounded: true,
                }
            ]
            // bounded: true,

        },
        {
            data: { x: 8, y: 4, w: 6, h: 2, minW: 4, maxW: 4, static: true },
            // color: "white",
            opacity: '0.5',
            borderRadius: '5px',
            border: "dashed",
            columns: 40,
            rowHeight: 50,
            width: 650,
            compactType: "",
            resizable: false,
            bounded: true,
            preventCollision: true,
            elementGrids: [
                {
                    data: { x: 0, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 2, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 4, y: 0, w: 2, h: 1, static: true },
                    color: "#999999",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
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
                    data: { x: 32, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 34, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "orange",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 17, y: 0, w: 5, h: 1, minW: 2, maxW: 4 },
                    color: "red",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 30, y: 0, w: 1, h: 1 },
                    color: "#F8F70A",
                    opacity: '1',
                    borderRadius: '5px',
                },
                {
                    data: { x: 4, y: 0, w: 2, h: 1, minW: 2, maxW: 4 },
                    color: "green",
                    opacity: '1',
                    borderRadius: '5px',
                    border: "solid",
                    // bounded: true,
                },
                {
                    data: { x: 8, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
                    color: "brown",
                    opacity: '1',
                    borderRadius: '10px',
                    border: "solid",
                    // bounded: true,
                }
            ]
            // bounded: true,
        }
    ]
    const grids = [
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
    ]
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
    return (
        <Fragment>
            <button style={{ float: 'right' }} onClick={(e) => changeStatic(e)} >Pin</button>
            <GridLayout
                className={styles.layout}
                layout={layout}
                cols={12}
                rowHeight={100}
                width={5500}
                isDraggable={!isStatic}
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
                                    layout={layout}
                                    cols={grid.columns}
                                    rowHeight={grid.rowHeight}
                                    width={grid.width}
                                    isDraggable={isStatic}
                                    isBounded={grid.bounded}
                                    isResizable={grid.resizable}
                                >
                                    {grid.subGrids.map((subGrid, indexSubGrid) => {
                                        return (
                                            <div
                                                data-grid={subGrid.data}
                                                key={"subGrid" + indexSubGrid}
                                                style={{ backgroundColor: subGrid.color, borderRadius: subGrid.borderRadius, opacity: subGrid.opacity, borderColor: 'black', border: subGrid.border }}
                                            >
                                                <GridLayout
                                                    className="layout"
                                                    layout={layout}
                                                    cols={subGrid.columns}
                                                    rowHeight={subGrid.rowHeight}
                                                    width={subGrid.width}
                                                    compactType={subGrid.compactType}
                                                    isDraggable={isStatic}
                                                    isBounded={subGrid.bounded}
                                                    isResizable={subGrid.resizable}
                                                    preventCollision={subGrid.preventCollision}
                                                    style={{ height: '170px' }}
                                                >
                                                    {subGrid.elementGrids.map((elementGrid, indexElementGrid) => {
                                                        return (
                                                            <div
                                                                data-grid={elementGrid.data}
                                                                key={"elementGrid" + indexElementGrid}
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
    );
}

export default GridChart;