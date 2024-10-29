import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ left, top }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: 1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        ref={drag}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
          position: "absolute",
          left,
          top,
          transition: "left 0.3s ease, top 0.3s ease", // Smooth position transition
        }}
      >
        <button onClick={() => setIsOpen(true)}>click me</button>
      </div>

      {isOpen && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 0, 0, 0.9)",
            position: "absolute",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.5s ease", // Fade-in transition
            opacity: isOpen ? 1 : 0,
            zIndex: 1000,
          }}
        >
          <button onClick={() => setIsOpen(false)} style={{ fontSize: "24px" }}>
            close
          </button>
        </div>
      )}
    </>
  );
};

export default DraggableItem;
