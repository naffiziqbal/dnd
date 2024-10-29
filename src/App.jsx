import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropContainer from "./components/DropContainer";

function App() {
  const [droppedItem, setDroppedItem] = useState({ left: 0, top: 0 });

  const handleDrop = (item, monitor, containerRef) => {
    const offset = monitor.getSourceClientOffset();
    const containerRect = containerRef.current.getBoundingClientRect();

    if (offset) {
      const left = offset.x - containerRect.left;
      const top = offset.y - containerRect.top;
      setDroppedItem({ left, top });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          width: "100vw",
        }}
      >
        <DropContainer droppedItem={droppedItem} onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}

export default App;
