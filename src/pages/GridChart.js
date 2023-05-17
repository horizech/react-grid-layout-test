import { Fragment, useEffect, useState } from "react";
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";


const GridChart = () => {
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


    const [grids, setGrids] = useState([
        {
            "data": {
                "x": 0,
                "y": 0,
                "w": 4,
                "h": 8,
                "static": false
            },
            "color": "#ECF3F6",
            "columns": 18,
            "rowHeight": 45,
            "width": 2025,
            "bounded": false,
            "resizable": true,
            "subGrids": [
                {
                    "id": "subGrid0",
                    "data": {
                        "x": 6,
                        "y": 0,
                        "w": 9,
                        "h": 1,
                        "static": true
                    },
                    "color": "maroon",
                    "opacity": "0.5",
                    "borderRadius": "5px",
                    "border": "solid",
                    "borderColor": "green",
                    "columns": 7,
                    "rowHeight": 40,
                    "width": 1000,
                    margin: [2, 2],
                    height: { height: '42px' },
                    "compactType": 'horizontal',
                    "resizable": false,
                    "bounded": true,
                    "preventCollision": false,
                    "elementGrids": [
                        {
                            "id": "subGrid0elementGrid1",
                            "data": {
                                "x": 1,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid1"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Mon, 01 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid2",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid2"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Tue, 02 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid3",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid3"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Wed, 03 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid4",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid4"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Thu, 04 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid5",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid5"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Fri, 05 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid6",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid6"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Sat, 06 May 2023"
                            // "borderRadius": "5px",
                            // "border": "solid",
                        },
                        {
                            "id": "subGrid0elementGrid7",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid0elementGrid7"
                            },
                            "color": "white",
                            "opacity": "1",
                            text: "Sun, 07 May 2023"
                            // "borderRadius": "1px",
                            // "border": "solid",
                        },
                    ],
                },
                {
                    "id": "subGrid1",
                    "data": {
                        "x": 0,
                        "y": 1,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "color": "#F8F70A",
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "borderColor": "green",
                    "columns": 0,
                    "rowHeight": 0,
                    "width": 0,
                    height: { height: '200px' },
                    "dragOut": false,
                    text: "INTEGREX 200S",
                    "elementGrids": []
                },
                {
                    "id": "subGrid2",
                    "data": {
                        "x": 2.5,
                        "y": 1,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "border": "solid",
                    "borderColor": "green",
                    "columns": 9,
                    "rowHeight": 60,
                    "width": 200,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid2elementGrid2",
                            "data": {
                                "x": 9,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid2elementGrid2"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 10,
                            "rowHeight": 10,
                            "width": 400
                        },
                        {
                            "id": "subGrid2elementGrid1",
                            "data": {
                                "x": 2,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid2elementGrid1"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        },
                        {
                            "id": "subGrid2elementGrid0",
                            "data": {
                                "x": 3,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid2elementGrid0"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        }
                    ]
                },
                {
                    "id": "subGrid2.1",
                    "data": {
                        "x": 4.5,
                        "y": 1,
                        "w": 1.5,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    // "borderRadius": "1px",
                    // "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 7,
                    "rowHeight": 60,
                    "width": 160,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid2.1elementGrid2",
                            "data": {
                                "x": 9,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid2.1elementGrid2"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 10,
                            "rowHeight": 10,
                            "width": 400
                        },
                        {
                            "id": "subGrid2.1elementGrid1",
                            "data": {
                                "x": 2,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid2.1elementGrid1"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        },
                        {
                            "id": "subGrid2.1elementGrid0",
                            "data": {
                                "x": 3,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid2.1elementGrid0"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        }
                    ]
                },
                {
                    "id": "subGrid3",
                    "data": {
                        "x": 6,
                        "y": 1,
                        "w": 9,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "5px",
                    "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 42,
                    "rowHeight": 60,
                    "width": 1000,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid3elementGrid0",
                            "data": {
                                "x": 0,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid0"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid1",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid1"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid2",
                            "data": {
                                "x": 4,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid2"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid3",
                            "data": {
                                "x": 8,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid3"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid4",
                            "data": {
                                "x": 10,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid4"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid5",
                            "data": {
                                "x": 13,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid5"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid6",
                            "data": {
                                "x": 18,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid6"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid7",
                            "data": {
                                "x": 20,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid7"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid8",
                            "data": {
                                "x": 22,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid8"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid17"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid19"
                        },
                        {
                            "id": "subGrid3elementGrid29",
                            "data": {
                                "x": 7,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid3elementGrid25"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid32",
                            "data": {
                                "x": 12,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid3elementGrid28"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid9",
                            "data": {
                                "x": 23,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid9"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 25,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid10"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid10"
                        },
                        {
                            "data": {
                                "x": 27,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid11"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid11"
                        },
                        {
                            "data": {
                                "x": 30,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid12"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid13"
                        },
                        {
                            "data": {
                                "x": 33,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid13"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid14"
                        },
                        {
                            "data": {
                                "x": 2,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid14"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid15"
                        },
                        {
                            "data": {
                                "x": 12,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid18"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid20"
                        },
                        {
                            "id": "subGrid3elementGrid27",
                            "data": {
                                "x": 1,
                                "y": 1,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid3elementGrid23"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid28",
                            "data": {
                                "x": 7,
                                "y": 1,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid3elementGrid24"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid30",
                            "data": {
                                "x": 21,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid3elementGrid26"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid3elementGrid31",
                            "data": {
                                "x": 5,
                                "y": 1,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid3elementGrid27"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 14,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid15"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid16"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid16"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid18"
                        },
                        {
                            "data": {
                                "x": 0,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid19"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid26"
                        },
                        {
                            "data": {
                                "x": 2,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid20"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid25"
                        },
                        {
                            "data": {
                                "x": 5,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid21"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid24"
                        },
                        {
                            "data": {
                                "x": 8,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid3elementGrid22"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid3elementGrid22"
                        }
                    ]
                },
                {
                    "id": "subGrid4",
                    "data": {
                        "x": 0,
                        "y": 5,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "color": "#F8F70A",
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "borderColor": "#ffffff",
                    "columns": 0,
                    "rowHeight": 0,
                    "width": 0,
                    height: { height: '200px' },
                    "dragOut": false,
                    text: "NEXUS",
                    "elementGrids": []
                },
                {
                    "id": "subGrid5",
                    "data": {
                        "x": 2.5,
                        "y": 5,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "border": "solid",
                    "borderColor": "#ffffff",
                    "columns": 9,
                    "rowHeight": 60,
                    "width": 200,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid5elementGrid1",
                            "data": {
                                "x": 4,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid5elementGrid1"
                            },
                            "color": "red",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid5elementGrid0",
                            "data": {
                                "x": 2,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid5elementGrid0"
                            },
                            "color": "black",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid5elementGrid2",
                            "data": {
                                "x": 8,
                                "y": 2,
                                "w": 3,
                                "h": 1,
                                "i": "subGrid5elementGrid2"
                            },
                            "color": "yellow",
                            "opacity": "1",
                            "borderRadius": "5px"
                        }
                    ]
                },
                {
                    "id": "subGrid5.1",
                    "data": {
                        "x": 4.5,
                        "y": 5,
                        "w": 1.5,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    // "borderRadius": "1px",
                    // "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 7,
                    "rowHeight": 60,
                    "width": 160,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid5.1elementGrid2",
                            "data": {
                                "x": 2,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid5.1elementGrid2"
                            },
                            "color": "maroon",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 10,
                            "rowHeight": 10,
                            "width": 400
                        },
                        {
                            "id": "subGrid5.1elementGrid1",
                            "data": {
                                "x": 4,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid5.1elementGrid1"
                            },
                            "color": "red",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        },
                    ]
                },
                {
                    "id": "subGrid6",
                    "data": {
                        "x": 6,
                        "y": 5,
                        "w": 9,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "5px",
                    "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 42,
                    "rowHeight": 60,
                    "width": 1000,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    "preventCollision": true,
                    "dragOut": false,
                    margin: [1, 10],
                    "elementGrids": [
                        {
                            "id": "subGrid6elementGrid0",
                            "data": {
                                "x": 0,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid0"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid1",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid1"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid2",
                            "data": {
                                "x": 4,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid2"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid3",
                            "data": {
                                "x": 6,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid3"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid4",
                            "data": {
                                "x": 10,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid4"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid5",
                            "data": {
                                "x": 12,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid5"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid6",
                            "data": {
                                "x": 14,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid6"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 16,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid7"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid7"
                        },
                        {
                            "data": {
                                "x": 22,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid8"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid8"
                        },
                        {
                            "data": {
                                "x": 26,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid9"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid9"
                        },
                        {
                            "data": {
                                "x": 30,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid10"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid10"
                        },
                        {
                            "data": {
                                "x": 32,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid11"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid11"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid12"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid12"
                        },
                        {
                            "data": {
                                "x": 6,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid13"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid13"
                        },
                        {
                            "data": {
                                "x": 8,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid14"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid14"
                        },
                        {
                            "data": {
                                "x": 16,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid15"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid15"
                        },
                        {
                            "data": {
                                "x": 18,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid16"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid16"
                        },
                        {
                            "data": {
                                "x": 20,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid17"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid17"
                        },
                        {
                            "data": {
                                "x": 22,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid18"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid18"
                        },
                        {
                            "data": {
                                "x": 32,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid19"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid19"
                        },
                        {
                            "data": {
                                "x": 34,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid20"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid20"
                        },
                        {
                            "data": {
                                "x": 36,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid21"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid21"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid22"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid22"
                        },
                        {
                            "id": "subGrid6elementGrid28",
                            "data": {
                                "x": 11,
                                "y": 1,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid6elementGrid28"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid32",
                            "data": {
                                "x": 26,
                                "y": 1,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid6elementGrid32"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 0,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid23"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid23"
                        },
                        {
                            "data": {
                                "x": 2,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid24"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid24"
                        },
                        {
                            "data": {
                                "x": 4,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid25"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid25"
                        },
                        {
                            "data": {
                                "x": 28,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid6elementGrid26"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid6elementGrid26"
                        },
                        {
                            "id": "subGrid6elementGrid27",
                            "data": {
                                "x": 7,
                                "y": 2,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid6elementGrid27"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid29",
                            "data": {
                                "x": 11,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid6elementGrid29"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid30",
                            "data": {
                                "x": 16,
                                "y": 2,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid6elementGrid30"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid6elementGrid31",
                            "data": {
                                "x": 22,
                                "y": 2,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid6elementGrid31"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px"
                        }
                    ]
                },
                {
                    "id": "subGrid7",
                    "data": {
                        "x": 0,
                        "y": 9,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "color": "#F8F70A",
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "borderColor": "#ffffff",
                    "columns": 0,
                    "rowHeight": 0,
                    "width": 0,
                    height: { height: '200px' },
                    "dragOut": false,
                    text: "VTC",
                    "elementGrids": []
                },
                {
                    "id": "subGrid8",
                    "data": {
                        "x": 2.5,
                        "y": 9,
                        "w": 2,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "40px",
                    "border": "solid",
                    "borderColor": "#ffffff",
                    "columns": 9,
                    "rowHeight": 60,
                    "width": 200,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid8elementGrid1",
                            "data": {
                                "x": 0,
                                "y": 0,
                                "w": 3,
                                "h": 1,
                                "i": "subGrid8elementGrid1"
                            },
                            "color": "blue",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        },
                        {
                            "id": "subGrid8elementGrid2",
                            "data": {
                                "x": 7,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid8elementGrid2"
                            },
                            "color": "maroon",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 10,
                            "rowHeight": 10,
                            "width": 400
                        },
                        {
                            "id": "subGrid8elementGrid0",
                            "data": {
                                "x": 1,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid8elementGrid0"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        }
                    ]
                },
                {
                    "id": "subGrid8.1",
                    "data": {
                        "x": 4.5,
                        "y": 9,
                        "w": 1.5,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    // "borderRadius": "1px",
                    // "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 7,
                    "rowHeight": 60,
                    "width": 160,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid8.1elementGrid2",
                            "data": {
                                "x": 2,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid8.1elementGrid2"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 10,
                            "rowHeight": 10,
                            "width": 400
                        },
                        {
                            "id": "subGrid8.1elementGrid1",
                            "data": {
                                "x": 4,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid8.1elementGrid1"
                            },
                            "color": "orange",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "columns": 6,
                            "rowHeight": 30,
                            "width": 400
                        },
                    ]
                },
                {
                    "id": "subGrid9",
                    "data": {
                        "x": 6,
                        "y": 9,
                        "w": 9,
                        "h": 4,
                        "static": true
                    },
                    "opacity": "0.5",
                    "borderRadius": "5px",
                    "border": "dashed",
                    "borderColor": "#ffffff",
                    "columns": 42,
                    "rowHeight": 60,
                    "width": 1000,
                    height: { height: '200px' },
                    "compactType": "",
                    "resizable": false,
                    "bounded": true,
                    margin: [1, 10],
                    "preventCollision": true,
                    "dragOut": false,
                    "elementGrids": [
                        {
                            "id": "subGrid9elementGrid0",
                            "data": {
                                "x": 0,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid0"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid1",
                            "data": {
                                "x": 2,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid1"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid2",
                            "data": {
                                "x": 4,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid2"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid3",
                            "data": {
                                "x": 8,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid3"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 10,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid4"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid4"
                        },
                        {
                            "data": {
                                "x": 13,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid5"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid5"
                        },
                        {
                            "data": {
                                "x": 19,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid7"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid7"
                        },
                        {
                            "data": {
                                "x": 22,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid8"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid8"
                        },
                        {
                            "data": {
                                "x": 34,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid17"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid17"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid19"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid19"
                        },
                        {
                            "data": {
                                "x": 17,
                                "y": 0,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid21"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid21"
                        },
                        {
                            "id": "subGrid9elementGrid29",
                            "data": {
                                "x": 29,
                                "y": 0,
                                "w": 5,
                                "h": 1,
                                "i": "subGrid9elementGrid29"
                            },
                            "color": "red",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid30",
                            "data": {
                                "x": 12,
                                "y": 0,
                                "w": 1,
                                "h": 1,
                                "i": "subGrid9elementGrid30"
                            },
                            "color": "#F8F70A",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 23,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid9"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid9"
                        },
                        {
                            "data": {
                                "x": 25,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid10"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid10"
                        },
                        {
                            "data": {
                                "x": 28,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid12"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid12"
                        },
                        {
                            "data": {
                                "x": 30,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid13"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid13"
                        },
                        {
                            "data": {
                                "x": 2,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid15"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid15"
                        },
                        {
                            "data": {
                                "x": 12,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid20"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid20"
                        },
                        {
                            "data": {
                                "x": 8,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid22"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid22"
                        },
                        {
                            "id": "subGrid9elementGrid28",
                            "data": {
                                "x": 16,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid9elementGrid28"
                            },
                            "color": "orange",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid31",
                            "data": {
                                "x": 0,
                                "y": 1,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid9elementGrid31"
                            },
                            "color": "green",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "id": "subGrid9elementGrid32",
                            "data": {
                                "x": 5,
                                "y": 1,
                                "w": 3,
                                "h": 1,
                                "i": "subGrid9elementGrid32"
                            },
                            "color": "brown",
                            "opacity": "1",
                            "borderRadius": "5px"
                        },
                        {
                            "data": {
                                "x": 14,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid16"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid16"
                        },
                        {
                            "data": {
                                "x": 38,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid18"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid18"
                        },
                        {
                            "data": {
                                "x": 5,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid24"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid24"
                        },
                        {
                            "data": {
                                "x": 2,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid25"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid25"
                        },
                        {
                            "data": {
                                "x": 0,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "static": true,
                                "i": "subGrid9elementGrid26"
                            },
                            "color": "#999999",
                            "opacity": "1",
                            "borderRadius": "5px",
                            "id": "subGrid9elementGrid26"
                        },
                        {
                            "id": "subGrid9elementGrid27",
                            "data": {
                                "x": 8,
                                "y": 2,
                                "w": 2,
                                "h": 1,
                                "i": "subGrid9elementGrid27"
                            },
                            "color": "violet",
                            "opacity": "1",
                            "borderRadius": "5px"
                        }
                    ]
                }
            ]
        }
    ]);

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
        setPosition();
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
            setGrids();
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
                                                    style={{ textAlign: "center", backgroundColor: subGrid.color, borderRadius: subGrid.borderRadius, opacity: subGrid.opacity, borderColor: "black", border: subGrid.border }}
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
                                                        style={subGrid.height}
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

export default GridChart;