import { useRef } from "react";
import PropTypes from "prop-types";
import DraggableItem from "./DropContainer/components/DragableItem";
import ContainerWrapper from "./DropContainer/ContainerWrapper";

const DropContainer = ({ droppedItem, onDrop, setIsOpen }) => {
  const containerRef = useRef(null);

  return (
    <ContainerWrapper
      ref={containerRef}
      onDrop={onDrop}
      containerRef={containerRef}
    >
      <DraggableItem top={droppedItem.top} setIsOpen={setIsOpen} />
    </ContainerWrapper>
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
