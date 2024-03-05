import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Bulletin,
  Careers,
  Contact,
  Home,
  NotFound,
  PrivacyPolicy,
  Services,
  TermsAndConditions,
} from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
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
            path='/services'
            element={<Services />}
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
    </>
  );
};

export default App;
