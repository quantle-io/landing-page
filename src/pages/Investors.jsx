import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Fade } from "react-awesome-reveal";

function Investors() {
  return (
<div className="flex flex-col overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">

{/*  Site header */}
<Header />
{/*  Page content */}
<main className="flex-grow">

<section className="relative">

{/* Section background (needs .relative class on parent and next sibling elements) */}

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  <div className="pt-20 md:pt-36 pb-20 md:pb-36 ">

  {/* Section header */}
    <Fade triggerOnce cascade direction="up">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mb-4">Invest in the 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> future of investing.</span></h1>
        <p className="text-xl text-600">Join our amazing investors in helping redefine the future of finance.</p>
      </div>
      <div className="flex flex-col">
        <div className="w-full">
        <div className="card w-96 bg-white shadow mx-auto mb-8 float-left">
          <div className="card-body">
            <h2>For company investment inquiries, contact us at:</h2>
            <h2 className="card-title">founders@surmount.ai</h2>
          </div>
        </div>
        </div>
        <div className="w-full">
        <div className="card w-96 bg-white shadow mx-auto mb-8 float-right">
          <div className="card-body">
            <h2>Want to deploy your capital with Quantle?</h2>
            <a href="https://surmount.ai/waitlist" target="_blank" className="btn text-black ml-3 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full !border-0 !hover:border-0">
                  <span>Join the Waitlist</span>
                  <svg className="w-3 h-3 fill-current text-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </a>
            </div>
          </div>
        </div>
        
      </div>
      
    </Fade>
  </div>
</div>
</section>
</main>

{/*  Site footer */}
<Footer />

</div>
    
  );
}

export default Investors;