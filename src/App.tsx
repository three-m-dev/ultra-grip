import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Bulletin,
  Careers,
  Contact,
  Home,
  NotFound,
  PrivacyPolicy,
  Product,
  Products,
  Service,
  Services,
  TermsAndConditions,
} from './pages';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />

        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/products/*'
          element={<Product />}
        />

        <Route
          path='/services'
          element={<Services />}
        />
        <Route
          path='/services/*'
          element={<Service />}
        />

        <Route
          path='/careers'
          element={<Careers />}
        />
        <Route
          path='/bulletin'
          element={<Bulletin />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy />}
        />
        <Route
          path='/terms-and-conditions'
          element={<TermsAndConditions />}
        />
        <Route
          path='/grease-specs'
          element={<TermsAndConditions />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
