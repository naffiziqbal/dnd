import PropTypes from "prop-types";
import DraggableItemWrapper from "./DraggableItemWrapper";

const DraggableItem = ({ top = 50, setIsOpen }) => {
  return (
    <DraggableItemWrapper setIsOpen={setIsOpen} top={top}>
      <button className="w-full">click me</button>
    </DraggableItemWrapper>
  );
};
DraggableItem.propTypes = {
  top: PropTypes.number,
  setIsOpen: PropTypes.func.isRequired,
};

export default DraggableItem;
