import { useMenuContext } from "../../context/MenuContext";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { btnOpen, setBtnOpen } = useMenuContext();

  return (
    <div
      className={`fixed inset-x-0 top-20 z-40 border-b border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${
        btnOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="px-4 py-6">
        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            onClick={() => setBtnOpen(false)}
            to="/products"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/solutions"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Solutions
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/resources"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Resources
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/enterprise"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Enterprise
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/pricing"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Pricing
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/about"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            About
          </Link>
          <Link
            onClick={() => setBtnOpen(false)}
            to="/contact"
            className="block py-3 text-base font-medium text-gray-900 transition-colors hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <Link
            onClick={() => setBtnOpen(false)}
            to="/pricing"
            className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
