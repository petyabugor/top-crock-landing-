import React from 'react';
import tick from '../../assets/img/icons/tick.png';
import './Popup.css';

function Popup() {
   return (
      <div className="popup-wrapper">
         <div className="popup">
            <img
               src={tick}
               alt=""
            />
            <h2>Дякуємо за замовлення</h2>
            <p>Найближчим часом ми зв'яжемося з вами для підтвердження замовлення</p>
            <h2>Гарного дня!</h2>
         </div>
      </div>
   );
}

export default Popup;
