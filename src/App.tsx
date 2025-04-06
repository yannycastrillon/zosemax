import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import { HomePage } from "./pages/HomePage/HomePage";
// import { ServicesPage } from "@/pages/ServicesPage";
// import { ContactPage } from "@/pages/ContactPage";

// Components
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
