import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function JoinBeta() {

  return (
    <section className="flex items-center justify-center">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-20 md:pt-36 pb-20 md:pb-36 ">

            <div className="max-w-3xl mx-auto text-center justify-center pb-8">
            <h1 className="h1 mb-4 self-center">We're in  
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500"> beta</span>
            </h1>
              <p className="text-xl text-600">You're one click away from powerful investor tools!</p>
              <Link to="/" className="w-full flex justify-center">
                <img className="w-48 h-48" src={Logo} alt="Quantle"></img>
              </Link>

            </div>
          </div>
        </div>

    </section >
  );
}

export default JoinBeta;
