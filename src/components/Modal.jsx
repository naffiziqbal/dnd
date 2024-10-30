import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Modal({ isOpen, setIsOpen }) {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Full-Screen Modal */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-green-500 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Oi mama na pls!
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">
              Aho Vatija Aho
            </h2>
            <p className="mt-4 text-lg text-white">
              Dekhchho ni Tomar liga koto boro Fukni ta ready koira rakhchhi??
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
