import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import Developers from './pages/Developers';
import Careers from './pages/Careers';
import Institutions from './pages/Institutions';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/investors" element={<Investors />} /> */}
        <Route path="/developers" element={<Developers />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path="/institutional" element={<Institutions />} />
        {/* <Route path="/waitlist" element={<Waitlist />} /> */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
