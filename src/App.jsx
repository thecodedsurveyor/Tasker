import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import NavigationBar from "./components/sections/NavigationBar";
import ScrollToTopWithProgress from "./components/ui/ScrollToTopWithProgress";
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import "./styles/theme.css";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Resources = lazy(() => import("./pages/Resources"));
const Enterprise = lazy(() => import("./pages/Enterprise"));

const App = () => {
  // Set default page title
  useEffect(() => {
    document.title = "Tasker - Intelligent Task Management Platform";
  }, []);

  return (
    <Router>
      <div className="theme-transition min-h-screen bg-gray-50">
        <ScrollToTopOnRouteChange />
        <NavigationBar />
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
        <ScrollToTopWithProgress />
      </div>
    </Router>
  );
};

export default App;
