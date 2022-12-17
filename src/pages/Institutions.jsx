import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Institutions() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">

      <Header />
      <main className="flex-grow">

      <section className="relative">

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  <div className="pt-20 md:pt-36 pb-20 md:pb-36 ">

    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 className="h2 mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> Custom</span> management solutions</h1>
      <p className="text-xl text-600">We're always excited to partner to create custom solutions.</p>
    </div>
    <div className="flex flex-row flex-wrap">
    <div className="card w-96 bg-white shadow mx-auto mb-8">
      <div className="card-body">
        <h2 className="card-title">Fund management</h2>
        <h2>We'll help you host automated funds for your own clients.</h2>
      </div>
    </div>
    <div className="card w-96 bg-white shadow mx-auto mb-8">
      <div className="card-body">
        <h2 className="card-title">Infrastructure development</h2>
        <h2>Our developers can help you build a custom trading backend capable of handling your needs.</h2>
      </div>
    </div>
    <div className="card w-96 bg-white shadow mx-auto mb-8">
      <div className="card-body">
        <h2 className="card-title">Strategy creation</h2>
        <h2>Together, we can build automated funds that meet your risk tolerance, target assets, and other specifications.</h2>
      </div>
    </div>

    </div>



</div></div></section>
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Institutions;