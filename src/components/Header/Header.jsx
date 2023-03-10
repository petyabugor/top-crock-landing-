import React from 'react';
import { GiRunningShoe } from 'react-icons/gi';
import './_header.scss';
import insta from '../../assets/img/logo-insta.png';

function Header() {
   return (
      <div className="header">
         <div className="header__container">
            <div className="header__logo">
               <GiRunningShoe className="header__logo-img"></GiRunningShoe>

               <div className="header__title">
                  <h2>TOP-KROCK</h2>
               </div>
            </div>
            <div className="header__insta">
               <a
                  href="https://www.instagram.com/top_krock/"
                  target="_blank"
               >
                  {' '}
                  <img
                     src={insta}
                     alt=""
                  />
               </a>
            </div>
         </div>
      </div>
   );
}

export default Header;
