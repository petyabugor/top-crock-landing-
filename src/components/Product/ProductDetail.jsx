import React, { useEffect, useRef, useState } from 'react';
import Swipper2 from '../Swipper2/Swipper2';
import style from './Product.module.scss';
import Timer from '../Timer/Timer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import size from '../../assets/img/size.png';
import Forma from '../Form/Form';
import Video from '../Video/Video';
import inst from '../../assets/img/icons/insta.png';

function ProductDetail() {
   const characteristic = ['Китай', 'Шкіра', 'Весна, літо', 'Q3547'];

   useEffect(() => {
      window.scrollTo(0, 0);
      Aos.init({ duration: 3000 });
   }, []);

   const ref = useRef(null);
   const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <>
         <div className={style.wrapper}>
            <div className={style.content}>
               <div className={style.video_wrap}>
                  <div className={style.title_feature}>
                     {' '}
                     Топова модель <br /> <b>Adidas Ozelia Originals Black Purple</b>
                  </div>
                  <div className={style.price2}>
                     <del>
                        <span className={style.amount}>2750 грн</span>
                     </del>
                     <ins>
                        <span className={style.amount2}>
                           2400
                           <b>грн</b>{' '}
                        </span>
                     </ins>
                  </div>
                  <h4 className={style.timer_title}>До кінця акціїї залишилось</h4>
                  <Timer />
                  <Swipper2 />
                  <h4 className={style.title_feature}>Яскраве доповнення Вашого образу</h4>
               </div>
               <div className={style.top}>
                  <div className={style.left}>
                     <Video />
                  </div>
                  <div className={style.right}>
                     <div className={style.title}>Adidas Ozelia Originals Black Purple</div>
                     <div className={style.price2}>
                        <del>
                           <span className={style.amount}>2750 грн</span>
                        </del>
                        <ins>
                           <span className={style.amount2}>
                              2400
                              <b>грн</b>{' '}
                           </span>
                        </ins>
                     </div>
                     {/* <h3 className={style.price}>
                        {item.price} <b>грн </b>{' '}
                     </h3> */}
                     <h4 className={style.timer_title}>До кінця акціїї залишилось</h4>
                     <Timer />

                     <button
                        onClick={handleClick}
                        className={style.login_button}
                        type="submit"
                        value="Send"
                     >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Замовити зі знижкою
                     </button>

                     <div className={style.feature}>
                        <h4 className={style.feature_title}>Характеристики</h4>
                        <div className={style.feature_wrapper}>
                           <div className={style.feature_text}>
                              <p>Виробник</p>
                              <p>Матеріл</p>
                              <p>Сезон</p>
                              <p>Артикул</p>
                           </div>
                           <div className={style.feature_text2}>
                              {characteristic.map((val, i) => (
                                 <p key={i}>{val}</p>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={style.bottom}>
                  <div className={style.description_wrapper}>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className={style.description_item}
                     >
                        <h3 className={style.description_title}> Доставка</h3>
                        <p className={style.description_text}>
                           Швидка доставка 1-3 дні <br /> Доставка замовлень оформлених до 15:00
                           складають 1-3 дні <br />
                           Відправка замовлень кожен день!
                        </p>
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={style.description_item}
                     >
                        <h3 className={style.description_title}>Оплата</h3>
                        <p className={style.description_text}>
                           Оплата при отриманні / післяоплата (можлива при мінімальній передоплаті у
                           розмірі 150 грн).
                        </p>
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className={style.description_item}
                     >
                        <h3 className={style.description_title}>Гарантія</h3>
                        <p className={style.description_text}>
                           Відповідно до - Закону України "Про захист прав споживачів" обмін та
                           повернення можливе протягом 14 календарних днів з моменту отримання
                           товару.
                        </p>
                     </div>
                  </div>
                  <div
                     data-aos="zoom-in"
                     data-aos-duration="3000"
                     className={style.size_image}
                  >
                     {' '}
                     Як правильно підібрати розмір
                     <img
                        src={size}
                        alt="Розмір"
                     />
                  </div>
                  <h4 className={style.timer_title}>До кінця акціїї залишилось</h4>
                  <Timer />
                  <Forma ref={ref} />
                  <div className={style.title_insta}>
                     {' '}
                     Інші Топові моделі <br /> в нашому Instagram
                  </div>
                  <div className={style.arrow_down}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div>
                     {' '}
                     <p className={style.insta_text}> top_krock</p>
                     <a
                        href="https://www.instagram.com/top_krock/"
                        target="_blank"
                     >
                        <div className={style.inst}>
                           <img
                              src={inst}
                              alt="insta"
                           />
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default ProductDetail;
