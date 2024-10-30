import PropTypes from "prop-types";
import { useDrop } from "react-dnd";

export default function ContainerWrapper({ onDrop, containerRef, children }) {
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
        {children}
      </div>
    </div>
  );
}

ContainerWrapper.propTypes = {
  onDrop: PropTypes.func.isRequired,
  droppedItem: PropTypes.shape({
    top: PropTypes.number.isRequired,
  }).isRequired,
  setIsOpen: PropTypes.func.isRequired,
  containerRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
