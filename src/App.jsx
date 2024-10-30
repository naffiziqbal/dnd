import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropContainer from "./components/DropContainer";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";

function App() {
  const [droppedItem, setDroppedItem] = useState({ left: 0, top: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleDrop = (item, monitor, containerRef) => {
    const offset = monitor.getSourceClientOffset();
    const containerRect = containerRef.current.getBoundingClientRect();

    if (offset) {
      const top = offset.y - containerRect.top;
      setDroppedItem({ top });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex relative bg-red-500 overflow-hidden">
        <MainContent />
        <DropContainer
          droppedItem={droppedItem}
          onDrop={handleDrop}
          setIsOpen={setIsOpen}
        />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </DndProvider>
  );
}

export default App;
