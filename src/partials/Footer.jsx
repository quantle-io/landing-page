import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function Footer() {
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
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-6 px-4">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block">
                <img className="w-16 h-16" alt="Quantle" src={Logo}></img>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <br></br>Quantle does not provide personalized financial advice and does not issue recommendations or offers to buy stock or sell any security.
            </div>
          </div>

          
          <div className="sm:col-span-6 px-4">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get curated market updates on the daily.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="text">Email</label>
                  <div className="relative flex items-center w-full md:w-3/4">
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

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a aria-label="Twitter" href="https://twitter.com/Surmountai" target="_blank">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
          </ul> */}

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="https://quantle.io/">Quantle</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
