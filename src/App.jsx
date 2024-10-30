import { useState, useRef, useEffect } from "react";
import { IoShareSocialOutline } from "react-icons/io5";

const App = () => {
  const fabRef = useRef(null);
  const mainWrapperRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ top: "50%", right: "30px" });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging && !isActive) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          top: `${e.clientY}px`,
        }));
      }
    };

    const handleTouchMove = (e) => {
      if (dragging && !isActive) {
        setPosition((prevPosition) => ({
          ...prevPosition,
          top: `${e.touches[0].clientY}px`,
        }));
      }
    };

    const handleMouseUp = () => {
      if (dragging) setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging, isActive]);

  const mouseDown = (e) => {
    e.preventDefault();
    if (!isActive) {
      setDragging(true);
    }
  };

  const handleClick = () => {
    if (!dragging) {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      id="main-wrapper"
      ref={mainWrapperRef}
      className="relative w-full h-screen bg-[#E1E8FD] overflow-hidden"
    >
      <div
        id="floating-snap-btn-wrapper"
        ref={fabRef}
        className={`absolute rounded-full w-12 h-12 ${
          isActive ? "bg-red-500" : "bg-[#6B26BB]"
        } text-white flex items-center justify-center shadow-lg cursor-pointer ${
          dragging
            ? "animate-dragging"
            : "transition-transform duration-300 ease-in-out"
        }`}
        style={{
          top: position.top,
          right: position.right,
          transform: "translateY(-50%)",
          transition: dragging ? "none" : "0.3s ease-in-out",
        }}
        onMouseDown={mouseDown}
        onTouchStart={mouseDown}
        onClick={handleClick}
      >
        <IoShareSocialOutline size={24} />
      </div>
    </div>
  );
};

export default App;
