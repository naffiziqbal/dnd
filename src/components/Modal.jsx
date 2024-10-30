import PropTypes from "prop-types";

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <>
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
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
