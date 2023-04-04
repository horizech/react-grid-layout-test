import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import styles from "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const GridTest = () => {
    const [newKey, setNewKey] = useState("b");
    
    const [isStatic, setStatic] = useState(true);
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    const changeStatic = (e) => {
        e.preventDefault();
        !isStatic ? setStatic(true) : setStatic(false);
        isStatic ? setNewKey("a") : setNewKey("b");
        console.log("static", isStatic);
    }
    useEffect(() => {
        console.log("hello")
        
        console.log("newKey", newKey);
    }, [isStatic, newKey])
    return (
        <GridLayout
            className={styles.layout}
            layout={layout}
            cols={12}
            rowHeight={400}
            width={1800}
            // isDraggable={!isStatic}
        >
            {/* <GridConponent
                layout={layout}
                isStatic={isStatic}
                setStatic={setStatic}
                key="n"
            ></GridConponent> */}
            <div
                key={"n"}
                style={{ backgroundColor: 'green'}}
                draggable={!isStatic}
            >
                <button onClick={(e) => changeStatic(e)} >Pin</button>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={5}
                    rowHeight={30}
                    width={440}
                    isDraggable={isStatic}
                >
                    <div key="g"  style={{ backgroundColor: 'skyblue' }}>g</div>

                    <div key="d" style={{ backgroundColor: 'skyblue' }}>d</div>
                </GridLayout>
            </div>
            <div key="i" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} style={{ backgroundColor: 'orange' }}>b</div>
            <div key="j" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} style={{ backgroundColor: 'maroon' }}>c</div>
        </GridLayout>
    );
}

const GridConponent = ({ isStatic, setStatic, layout }) => {
    const changeStatic = (e) => {
        e.preventDefault();
        !isStatic ? setStatic(true) : setStatic(false);
        console.log("static", isStatic);
    }
    return (
        <div
            data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
            style={{ backgroundColor: 'green', width: "1200" }}
        >
            <button onClick={(e) => changeStatic(e)} >Pin</button>
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}

            >
                <div key="g" style={{ backgroundColor: 'skyblue' }}>g</div>

                <div key="d" style={{ backgroundColor: 'skyblue' }}>d</div>
            </GridLayout>
            {/* <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                    key="r"
                    data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
                >
                    <div key="f" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} style={{ backgroundColor: 'grey' }}>b</div>
                </GridLayout>
                <GridLayout
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                    key="s"
                    data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
                >
                    <div key="h" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} style={{ backgroundColor: 'red' }}>c</div>
                </GridLayout> */}
        </div>
    )
}
export default GridTest;