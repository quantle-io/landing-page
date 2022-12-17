import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

import NCB from '../images/NCB.png';
import Results from '../images/results.png'
import APIs from '../images/apis.png';
import News from '../images/news.png';

function Developers() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      <section className="relative">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20 md:pt-36 pb-20 md:pb-36 ">
            
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mb-20">
              <h1 className="h2 mb-4">We build 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> developer-first</span></h1>
              <p className="text-xl text-600">We offer tools that help make the developer experience better. This includes a suite of data APIs and strategy builders.</p>
            </div>
           

            <div className="columns-2 flex flex-wrap lg:flex-nowrap items-center justify-center mb-20">
              <div className="max-w-3xl mx-8 pb-12 md:pb-16" >
                <h1 className="h3 mb-4 self-center">
                  No-Code Builder
                </h1>
                <p className="text-xl text-600">We've built a no-code builder that let's you avoid the nuances of coding and focus on the bigger picture. </p>
                <br></br>
              </div>
              <div className="max-w-3xl mx-8 text-center pb-12 md:pb-16">
                <img className="rounded-2xl drop-shadow-xl" alt="No-code builder" src={NCB}></img>
              </div>
            </div>

            <div className="columns-2 flex flex-wrap lg:flex-nowrap items-center justify-center mb-20">
              <div className="max-w-3xl mx-8 text-center pb-12 md:pb-16">
                <img className="rounded-2xl drop-shadow-xl" alt="Code builder" src={Results}></img>
              </div>
              <div className="max-w-3xl mx-8 pb-12 md:pb-16" >
                <h1 className="h3 mb-4 self-center">
                  Code Builder
                </h1>
                <p className="text-xl text-600">Of course, we have a code builder too. Robust strategy results are an obvious must. </p>
                <br></br>
              </div>

            </div>

            <div className="columns-2 flex flex-wrap lg:flex-nowrap items-center justify-center mb-20">
              <div className="max-w-3xl mx-8 text-center pb-12 md:pb-16">
                <img className="rounded-2xl drop-shadow-xl" alt="APIs" src={APIs}></img>
              </div>
              <div className="max-w-3xl mx-8 pb-12 md:pb-16" >
                <h1 className="h3 mb-4 self-center">
                  API as a service
                </h1>
                <p className="text-xl text-600">We offer access to alternative data like news sentiment, machine learning model inference, trading strategy output, and much more. </p>
                <br></br>
              </div>

            </div>

            <div className="columns-2 flex flex-wrap lg:flex-nowrap items-center justify-center mb-20">
              <div className="max-w-3xl mx-8 pb-12 md:pb-16" >
                <h1 className="h3 mb-4 self-center">
                  Analyzed market news
                </h1>
                <p className="text-xl text-600">This part isn't just for developers. Our analyzed news gives you exactly what you need, with tagging and sentiment analysis done ahead of time.</p>
                <br></br>
              </div>
              <div className="max-w-3xl mx-8 text-center pb-12 md:pb-16">
                <img className="rounded-2xl drop-shadow-xl" alt="Analyzed news" src={News}></img>
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

export default Developers;