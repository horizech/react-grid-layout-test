import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import styles from "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const GridChart = () => {
    const [newKey, setNewKey] = useState("b");

    const [isStatic, setStatic] = useState(true);
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 0, y: 0, w: 5, h: 1, minW: 2, maxW: 8 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
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
                    compactType: "horizontal",
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
                    rowHeight: 10,
                    width: 650,
                    compactType: "horizontal",
                    resizable: false,
                    bounded: true,
                    preventCollision: true,
                    elementGrids: [
                        {
                            data: { x: 0, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 10, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 13, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 18, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 19, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 22, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 23.5, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 25, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 27, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 28, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 30, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 31, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 14, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 12, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 17, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 5, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 0, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 0, y: 0, w: 1, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 1, y: 0, w: 1, h: 3, minW: 2, maxW: 4 },
                            color: "blue",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 0, w: 1, h: 3, minW: 2, maxW: 4 },
                            color: "white",
                            opacity: '1',
                            borderRadius: '10px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 17, y: 6, w: 2, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 0.5, h: 3, minW: 2, maxW: 4 },
                            color: "blue",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 0, w: 0.2, h: 3, minW: 2, maxW: 4 },
                            color: "white",
                            opacity: '1',
                            borderRadius: '10px',
                            border: "solid",
                            // bounded: true,
                        }
                    ]
                    // bounded: true,
                },
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
                    rowHeight: 30,
                    width: 300,
                    compactType: "horizontal",
                    resizable: false,
                    bounded: true,
                    preventCollision: true,
                    elementGrids: [
                        {
                            data: { x: 0, y: 2, w: 2, h: 2 },
                            color: "grey",
                            opacity: '1',
                            borderRadius: '20px',
                            // border:"solid",
                            columns: 6,
                            rowHeight: 30,
                            width: 400,
                            // bounded: true,
                        },
                        {
                            data: { x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
                            color: "red",
                            opacity: '1',
                            borderRadius: '20px',
                            border: "solid",
                            columns: 6,
                            rowHeight: 30,
                            width: 400,
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 2, w: 3, h: 2, minW: 2, maxW: 4 },
                            color: "yelllow",
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
                    rowHeight: 10,
                    width: 650,
                    compactType: "horizontal",
                    resizable: false,
                    bounded: true,
                    preventCollision: true,
                    elementGrids: [
                        {
                            data: { x: 0, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 10, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 13, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 18, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 19, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 22, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 23.5, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 25, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 27, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 28, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 30, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 31, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 14, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 12, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 17, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 5, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 0, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 0, y: 0, w: 1, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 1, y: 0, w: 1, h: 3, minW: 2, maxW: 4 },
                            color: "blue",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 0, w: 1, h: 3, minW: 2, maxW: 4 },
                            color: "white",
                            opacity: '1',
                            borderRadius: '10px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 17, y: 6, w: 2, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 0.5, h: 3, minW: 2, maxW: 4 },
                            color: "blue",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 0, w: 0.2, h: 3, minW: 2, maxW: 4 },
                            color: "white",
                            opacity: '1',
                            borderRadius: '10px',
                            border: "solid",
                            // bounded: true,
                        }
                    ]
                    // bounded: true,
                },
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
                    rowHeight: 30,
                    width: 300,
                    compactType: "horizontal",
                    resizable: false,
                    bounded: true,
                    preventCollision: true,
                    elementGrids: [
                        {
                            data: { x: 0, y: 2, w: 2, h: 2 },
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
                            data: { x: 2, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
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
                            data: { x: 4, y: 2, w: 2, h: 2, minW: 2, maxW: 4 },
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
                    data: { x: 8, y: 0, w: 6, h: 2, minW: 4, maxW: 4, static: true },
                    // color: "white",
                    opacity: '0.5',
                    borderRadius: '5px',
                    border: "dashed",
                    columns: 40,
                    rowHeight: 10,
                    width: 650,
                    compactType: "horizontal",
                    resizable: false,
                    bounded: true,
                    preventCollision: true,
                    elementGrids: [
                        {
                            data: { x: 0, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 10, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 13, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 18, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 19, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 22, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 23.5, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 25, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 27, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 28, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 30, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 31, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 14, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 38, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 12, y: 3, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 17, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 8, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 5, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 2, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 0, y: 6, w: 2, h: 3, static: true },
                            color: "#999999",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x:32, y: 0, w: 1, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 34, y: 0, w: 2, h: 3, minW: 2, maxW: 4 },
                            color: "orange",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 17, y: 0, w: 5, h: 3, minW: 2, maxW: 4 },
                            color: "red",
                            opacity: '1',
                            borderRadius: '10px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 30, y: 0, w: 1, h: 3 },
                            color: "#F8F70A",
                            opacity: '1',
                            borderRadius: '5px',
                        },
                        {
                            data: { x: 4, y: 0, w: 2, h: 3, minW: 2, maxW: 4 },
                            color: "green",
                            opacity: '1',
                            borderRadius: '5px',
                            border: "solid",
                            // bounded: true,
                        },
                        {
                            data: { x: 6, y: 0, w: 3, h: 3, minW: 2, maxW: 4 },
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
                                                    style={{height: '170px'}}
                                                >
                                                    {subGrid.elementGrids.map((elementGrid, indexElementGrid) => {
                                                        return (
                                                            <div
                                                                data-grid={elementGrid.data}
                                                                key={"elementGrid" + indexElementGrid}
                                                                style={{ backgroundColor: elementGrid.color, borderRadius: elementGrid.borderRadius, opacity: elementGrid.opacity, borderColor: 'black', border: elementGrid.border }}
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