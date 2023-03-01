import React from 'react';
import style from './Footer.module.scss';
import inst from '../../assets/img/icons/insta.png';
import { GiRunningShoe } from 'react-icons/gi';

function Footer() {
   return (
      <div className={style.wrapper}>
         <div className={style.content}>
            <div className={style.left}>
               TOP_KROCK
               <GiRunningShoe className={style.logo}></GiRunningShoe>
            </div>
            <div className={style.center}>
               Контактні дані
               <p>top_krock@gmail.com</p>
            </div>
            <div className={style.right}>
               {' '}
               Наш інстаграм
               <a
                  href="https://www.instagram.com/top_krock/"
                  target="_blank"
               >
                  {' '}
                  <img
                     src={inst}
                     alt=""
                  />
               </a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
