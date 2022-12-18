import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`static w-full z-30 md:bg-opacity-90`}>
      <div className="max-w-full mx-auto px-5 sm:px-6 pt-5 mx-8">
        <div className="flex items-center justify-between h-20 md:h-30">

          <div className="w-full lg:w-1/3 p-0 m-0">
           
            <Link to="/" className="flex md:block justify-center cursor-pointer" aria-label="Quantle">
              <img className="max-h-20 w-auto" alt="Quantle" src={Logo}></img>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-grow lg:w-1/3">
            <ul className="flex flex-grow justify-center items-center hidden lg:flex">
              {/* <li>
                <Link to="/careers" className="text-xl font-medium	 mx-6 !border-0 !hover:border-0">
                  <span className="hover:text-blue-500">Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-xl font-medium mx-6 !border-0 !hover:border-0">
                  <span className="hover:text-blue-500">Tools</span>
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-xl font-medium	mx-6 !border-0 !hover:border-0">
                  <span className="hover:text-blue-500">Investors</span>
                </Link>
              </li> */}
            </ul>

          </nav>

          <nav className="cursor-pointer hidden lg:flex flex-grow lg:w-1/3">
            <ul className="cursor-pointer flex flex-grow justify-end flex-wrap items-center hidden lg:block">
              <li className="">
                <a href="https://app.quantle.io/" target="_blank" className="drop-shadow-2xl float-right btn font-medium text-black ml-3 bg-blue-500 text-white hover:bg-blue-500 hover:drop-shadow-sm rounded-lg !border-0 !hover:border-0 !normal-case">
                  <span>Go to the app</span>
                  <svg className="w-3 h-3 fill-current text-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
