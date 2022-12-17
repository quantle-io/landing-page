import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Footer from '../partials/Footer';
import Audience from '../partials/Audience';
import JoinBeta from '../partials/JoinBeta';

function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">

      <Header />

      <main className="flex-grow">
        <HeroHome />
        <Audience />
        <JoinBeta />
      </main>
      
      <Footer />

    </div>
  );
}

export default Home;