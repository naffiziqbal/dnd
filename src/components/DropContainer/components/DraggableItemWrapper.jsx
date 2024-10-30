import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

export default function DraggableItemWrapper({
  top = 50,
  setIsOpen,
  children,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id: 1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`
        w-[100px]
        h-[100px]
        flex
        justify-center
        items-center
        bg-blue-500
        ${isDragging ? "opacity-50" : "opacity-100"}
        absolute
        transition-all
        ease-in-out
        duration-300
        rounded-xl
        cursor-pointer
      `}
      style={{
        top: `${top}px`,
      }}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </div>
  );
}

DraggableItemWrapper.propTypes = {
  top: PropTypes.number,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
