export const colorCodes = {
    "green": "green",
    "red": "red",
    "blue": "blue",
    "yellow": "yellow"
}

export const defaultJson = {
    days: [
        "2023-05-01T17:00:00.000Z",
        "2023-05-02T17:00:00.000Z",
        "2023-05-03T17:00:00.000Z",
        "2023-05-04T17:00:00.000Z",
        "2023-05-05T17:00:00.000Z",
        "2023-05-06T17:00:00.000Z",
        "2023-05-07T17:00:00.000Z",
        // "Mon, 01 May 2023",
        // "Tue, 02 May 2023",
        // "Wed, 03 May 2023",
        // "Thu, 04 May 2023",
        // "Fri, 05 May 2023",
        // "Sat, 06 May 2023",
        // "Sun, 07 May 2023",
    ],
    data: [
        {
            machine: "ABC",
            // backlog: {
            //     blocks: [

            //     ]
            // },
            // leftovers: {
            //     blocks: [

            //     ]
            // },
            work: {
                taskSchedules: [
                    {
                        id: "97f2fe4d-e8f8-4e59-b46e-ea827a5dc994",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Mon, 01 May 2023', // date time
                        updatedAt: 'Tue, 02 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "e44b331b-115d-41d5-8159-f55897d1215a", // ObjectId reference to the operation schedule
                        status: 'in_progress', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "black",
                        tooltip: "A",
                        duration: 7, //hours: 1,
                        totalDuration: 7,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: "2023-05-01T17:00:00.000+0500",// '1, Tue, 01 May 2023', // time: "7", date time
                        finishedAt: "2023-05-02T00:00:00.000+0500",// '7, Tue, 01 May 2023', // date time
                        shift: 2 // turn
                    },
                    {
                        id: "59ffd6b0-cff1-47b7-a081-a3793e2e7153",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Mon, 01 May 2023', // date time
                        updatedAt: 'Fri, 02 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "24b5f2d7-bddd-4a0a-8c4e-73ff7fade1d8", // ObjectId reference to the operation schedule
                        status: 'in_progress', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "blue",
                        tooltip: "A",
                        duration: 7, //hours: 1,
                        totalDuration: 7,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: "2023-05-02T01:00:00.000+0500",// "1, Fri, 02 May 2023", // time: "7", date time
                        finishedAt: "2023-05-02T08:00:00.000+0500",// '7, Fri, 02 May 2023', // date time
                        shift: 0 // turn
                    },
                    {
                        id: "49e7b7d8-9be2-4560-8b7d-3baa848142b4",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Mon, 01 May 2023', // date time
                        updatedAt: 'Fri, 02 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "be0ad6d4-8e22-4265-906f-2688d9055f9d", // ObjectId reference to the operation schedule
                        status: 'in_progress', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "orange",
                        tooltip: "A",
                        duration: 3, //hours: 1,
                        totalDuration: 3,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: "2023-05-02T11:00:00.000+0500",// "3, Fri, 02 May 2023", // time: "7", date time
                        finishedAt: "2023-05-02T14:00:00.000+0500",// '5, Fri, 02 May 2023', // date time
                        shift: 1 // turn
                    },
                    {
                        id: "29fccdb3-0917-45b2-9107-3d2a9918da49",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Wed, 03 May 2023', // date time
                        updatedAt: 'Wed, 03 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "f7edeb2b-2763-4857-b7b4-4167d0c47510", // ObjectId reference to the operation schedule
                        status: 'in_progress', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "orange",
                        tooltip: "A",
                        duration: 3, //hours: 1,
                        totalDuration: 3,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: "2023-05-03T11:00:00.000+0500",// "3, Wed, 03 May 2023", // time: "7", date time
                        finishedAt: "2023-05-03T14:00:00.000+0500",// '5, Wed, 03 May 2023', // date time
                        shift: 1 // turn
                    },
                    {
                        id: "6d9fac7d-4e64-471b-9465-26fefe384007",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Tue, 02 May 2023', // date time
                        updatedAt: 'Wed, 03 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "9f71bbd3-264a-425b-9e02-7bffae088741", // ObjectId reference to the operation schedule
                        status: 'to_do', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "orange",
                        tooltip: "A",
                        duration: 2, //hours: 1,
                        totalDuration: 2,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: '', // time: "7", date time
                        finishedAt: '', // date time
                        shift: 0 // turn
                    },
                    {
                        id: "2631c67d-4b84-474b-a73a-6088636305c1",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Tue, 02 May 2023', // date time
                        updatedAt: 'Wed, 03 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "8120e48b-430a-415d-98fd-486c4c3850d9", // ObjectId reference to the operation schedule
                        status: 'to_do', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "orange",
                        tooltip: "A",
                        duration: 1, //hours: 1,
                        totalDuration: 1,
                        //date: "Mon, 01 May 2023",
                        tenant: 2,// ObjectId reference to the tenant associated
                        startedAt: '', // time: "7", date time
                        finishedAt: '', // date time
                        shift: 0 // turn
                    },
                    {
                        id: "6eff5927-dad5-40c5-83a2-4180349ae79b",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Tue, 02 May 2023', // date time
                        updatedAt: 'Wed, 03 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "c137aadb-2409-431b-aa59-95511f642b94", // ObjectId reference to the operation schedule
                        status: 'overdue', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "black",
                        tooltip: "A",
                        duration: 2, //hours: 1,
                        totalDuration: 2,
                        //date: "Mon, 01 May 2023",
                        tenant: 3,// ObjectId reference to the tenant associated
                        startedAt: '', // time: "7", date time
                        finishedAt: '', // date time
                        shift: 0 // turn
                    },
                    {
                        id: "9ea2f918-ec69-440a-a117-e4b2943ce00d",
                        importHash: '', // Hash value used for data import
                        createdAt: 'Tue, 02 May 2023', // date time
                        updatedAt: 'Wed, 03 May 2023', // date time
                        createdBy: 1, // ObjectId reference
                        updatedBy: 1, // ObjectId reference
                        label: '',
                        operation: "353b91d4-b80b-4445-93c1-748b80fa5431", // ObjectId reference to the operation schedule
                        status: 'overdue', // "to_do", "in_progress", "completed", "overdue"
                        prodline: 1, // The reference to the prodline associated with the task.
                        type: "black",
                        tooltip: "A",
                        duration: 3, //hours: 1,
                        totalDuration: 3,
                        //date: "Mon, 01 May 2023",
                        tenant: 1,// ObjectId reference to the tenant associated
                        startedAt: '', // time: "7", date time
                        finishedAt: '', // date time
                        shift: "0" // turn
                    },
                ],
                unavailable: [
                    {
                        id: "1000",
                        type: "grey",
                        tooltip: "C",
                        duration: 3,
                        // date: ,
                        startedAt: "2023-05-02T19:00:00.000+0500",// "3, Mon, 02 May 2023", // time: "7", date time
                        finishedAt: "2023-05-02T22:00:00.000+0500",// '5, Mon, 02 May 2023', // date time
                        shift: 2
                    },
                    {
                        id: "1001",
                        type: "grey",
                        tooltip: "C",
                        duration: 2,
                        // date: "10, Mon, 01 May 2023",
                        startedAt: "2023-05-01T09:00:00.000+0500",// "9, Mon, 01 May 2023", // time: "7", date time
                        finishedAt: "2023-05-01T11:00:00.000+0500",// '', // date time
                        shift: 1
                    }, {
                        id: "1002",
                        type: "grey",
                        tooltip: "C",
                        duration: 3,
                        // date: "1, Thu, 04 May 2023",
                        startedAt: "2023-05-04T01:00:00.000+0500",// "1, Thu, 04 May 2023", // time: "7", date time
                        finishedAt: "2023-05-04T04:00:00.000+0500",// '', // date time
                        shift: 0
                    },
                ]
            }
        },
    ],
}

export const defaultGrid = [
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
        "height": "0px",
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
                height: '42px',
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
                "height": '0px',
                "dragOut": false,
                "text": "INTEGREX 200S",
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
                height: '200px',
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
                            "w": 1,
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
                            "w": 1,
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
                height: '200px',
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
                height: '200px',
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
                            "x": 34,
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
                            "x": 28,
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
                            "x": 40,
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
                            "x": 14,
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
                            "x": 32,
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
                            "x": 26,
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
                            "x": 22,
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
                            "x": 26,
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
                            "x": 28,
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
                            "x": 34,
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
                            "x": 14,
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
                            "x": 20,
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
                            "x": 40,
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
                            "x": 6,
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
                            "x": 10,
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
                "borderColor": "green",
                "columns": 0,
                "rowHeight": 0,
                "width": 0,
                "height": '0px',
                "dragOut": false,
                "text": "NEXUS",
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
                height: '200px',
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
                            "w": 0.5,
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
                height: '200px',
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
                height: '200px',
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
                            "x": 10,
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
                "borderColor": "green",
                "columns": 0,
                "rowHeight": 0,
                "width": 0,
                "height": '0px',
                "dragOut": false,
                "text": "VTC",
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
                height: '200px',
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
                            "w": 1,
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
                height: '200px',
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
                height: '200px',
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
                            "x": 12,
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
                            "x": 40,
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
                            "x": 16,
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
                            "x": 28,
                            "y": 0,
                            "w": 2,
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
                            "x": 20,
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
                            "x": 24,
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
                            "x": 32,
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
                            "x": 6,
                            "y": 1,
                            "w": 2,
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
                            "x": 6,
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
];