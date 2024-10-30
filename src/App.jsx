import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropContainer from "./components/DropContainer";
import MainContent from "./components/MainContent";

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
        {isOpen && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-lg w-screen h-screen flex justify-center items-center">
            <button
              className="bg-red-500 text-white p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
