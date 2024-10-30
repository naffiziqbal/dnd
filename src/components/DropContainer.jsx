import { useRef } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import DraggableItem from "./DragableItem";

const DropContainer = ({ droppedItem, onDrop, setIsOpen }) => {
  const containerRef = useRef(null);

  const [, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item, monitor) => onDrop(item, monitor, containerRef),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2">
      <div
        ref={(node) => {
          drop(node);
          containerRef.current = node;
        }}
        className="w-[100px] h-[50dvh] flex justify-center items-center bg-transparent"
      >
        <DraggableItem top={droppedItem.top} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

DropContainer.propTypes = {
  droppedItem: PropTypes.shape({
    top: PropTypes.number.isRequired,
  }).isRequired,
  onDrop: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default DropContainer;
