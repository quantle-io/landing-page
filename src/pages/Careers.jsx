import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Careers() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">
      <Header />
      <main className="flex-grow">
        <section className="relative">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex">
            <div className="pt-20 md:pt-36 pb-20 md:pb-36 justify-center items-center w-full">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h2 mb-4">We're 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> hiring</span></h1>
                <p className="text-xl text-600">Join our team of builders! Since we're still in the early-growth phase, our roles aren't set in stone and we love generalists! We hire on a case-by-case basis.</p>
                <br></br><p className="text-xl text-600">Email <b>contact@quantle.io</b> to apply.</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="card w-full bg-white shadow mx-auto mb-8 w-full">
                  <div className="card-body">
                    <h2 className="card-title">Senior Backend Developer</h2>
                    <h2>Django, AWS, Database & API management</h2>
                  </div>
                </div>
                <div className="card w-full bg-white shadow mx-auto mb-8 w-full">
                  <div className="card-body">
                    <h2 className="card-title">Senior Full Stack Developer</h2>
                    <h2>React, Django, AWS</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Careers;