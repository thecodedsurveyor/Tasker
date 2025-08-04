import { useMenuContext } from "../../context/MenuContext";

const HamburgerButton = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <button
      onClick={() => setBtnOpen((btn) => !btn)}
      className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none"
      aria-label="Toggle mobile menu"
    >
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
          btnOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
          btnOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${
          btnOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export { HamburgerButton };
