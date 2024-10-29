import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DragableItem";

const DropContainer = ({ droppedItem, onDrop }) => {
  const containerRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item, monitor) => onDrop(item, monitor, containerRef),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={(node) => {
          drop(node);
          containerRef.current = node;
        }}
        style={{
          width: "10vh",
          height: "80vh",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <DraggableItem left={droppedItem.left} top={droppedItem.top} />
      </div>
    </div>
  );
};

export default DropContainer;
