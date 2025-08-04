import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/sections/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Enterprise from "./pages/Enterprise";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
