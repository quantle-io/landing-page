import React, { useState } from 'react';

import Beta from '../images/beta.png'
import News from '../images/news.png'

function HeroHome() {
  const [done, setDone] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);

    var object = {};
    data.forEach((value, key) => object[key] = value);
    console.log(object);
    
    try {
      console.log(data);
      const response = await fetch("https://api.quantle.io/data/waitlist", {
        method: "post",
        body: JSON.stringify(object),
        headers: {
          accept: "application/json",
        },
      })
      setDone(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="relative pb-20 md:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex">
        <div className="pt-32 columns-2 flex justify-center items-center align-middle px-4">
          <div className="text-left pr-0 md:pr-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-6">Quantle</h1>
              <p className="text-xl md:text-2xl font-medium mb-8">The ultimate analytics platform for everyday investors. This is automated investing done right.</p>
              <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="text">Email</label>
                  <div className="relative flex items-center w-full md:w-1/2">
                    <input autoComplete="false" id="email" name="email" type="email" className="m-0 form-input w-full font-medium text-lg text-gray-800 px-3 py-2 pr-12" placeholder="Join the newsletter" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      { !done ?
                      <p className="mx-2"> ➡️ </p>:
                      <p className="mx-2"> ✅ </p>
                      }
                    </button>
                  </div>                  
                </div>
              </div>
            </form>
            </div>
          </div>
          <div className="relative flex hidden md:flex justify-center">
            <img className="rounded-3xl drop-shadow-2xl" alt="Beta" src={Beta}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;