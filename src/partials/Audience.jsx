import React from 'react';

function Audience() {

  return (
    <section className="flex items-center justify-center">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20 md:pt-36 pb-20 md:pb-36 ">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-8">
            <h1 className="h1 mb-4 self-center">Finance-driven 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> community</span>
            </h1>
              <p className="text-xl text-600">Join our platform of for pre-analyzed news, market insights, and community!</p>
            </div>
            <div className="w-full columns-3 flex flex-wrap sm:flex-nowrap items-center justify-center">
                <div className="card w-full bg-white shadow m-4 md:w-1/2">
                    <div className="card-body">
                        <h2 className="card-title">🏫 Learn about the markets</h2>
                        Browse our data-rich interface for beginner stuff like price and market predictions.
                    </div>
                </div>
                <div className="card w-full bg-white shadow m-4 md:w-1/2">
                    <div className="card-body">
                        <h2 className="card-title">🧠 Get deeper insights</h2>
                        We offer everything from analyzed stock market news to machine learning model output to fear indices.
                    </div>
                </div>
                <div className="card w-full bg-white shadow m-4 md:w-1/2">
                    <div className="card-body">
                        <h2 className="card-title">📮 Post and interact</h2>
                        Participate in a Twitter-like platform for finance. Share trading ideas, market findings, and much more while enjoying a 0-bot environment
                    </div>
                </div>
            </div>
          </div>
        </div>

    </section >
  );
}

export default Audience;
