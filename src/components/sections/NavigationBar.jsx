import { Link } from "react-router-dom";
import { HamburgerButton } from "../ui/HamBurgerButton";
import { MobileMenu } from "../ui/MobileMenu";

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="./images/logo.svg"
                className="h-10 w-auto"
                alt="Tasker"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/solutions"
            >
              Solutions
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/resources"
            >
              Resources
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/enterprise"
            >
              Enterprise
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-base font-medium text-gray-600 transition-colors hover:scale-105 hover:text-blue-600"
              to="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/pricing"
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <HamburgerButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
