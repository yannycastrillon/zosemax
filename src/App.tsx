import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout (always present — no lazy load)
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';

// Pages — lazy loaded so each route gets its own chunk
const HomePage = lazy(() => import('./pages/HomePage/HomePage').then((m) => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage/ContactPage').then((m) => ({ default: m.ContactPage })));

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
