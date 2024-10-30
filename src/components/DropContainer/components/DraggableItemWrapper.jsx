import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

export default function DraggableItemWrapper({
  top = 50,
  setIsOpen,
  children,
}) {
  ``;
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
        ${isDragging ? "bg-blue-200" : "bg-blue-400"}
        ${isDragging ? "opacity-0" : "opacity-100"}
        absolute
        transition-all
        ease-in-out
        rounded-xl
        cursor-pointer
        hover:scale-105 
        duration-300
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
