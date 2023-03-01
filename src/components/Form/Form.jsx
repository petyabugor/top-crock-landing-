import React, { forwardRef, useState } from 'react';
import './Form.css';
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup/Popup';

function Form({},ref) {
   const [open, setOpen] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs
         .sendForm('service_75533w2', 'template_8glnqw6', form.current, 'gAqzhKJ8jYQwbtnP0')
         .then(
            (result) => {
               setOpen(true);

               console.log(result.text);
              
            },
            (error) => {
               console.log(error.text);
            },
         );
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (!event.path.includes(form.current)) {
            setOpen(false);
         }
      };
      document.body.addEventListener('click', handleClickOutside);
      return () => {
         document.body.removeEventListener('click', handleClickOutside);
      };
   }, []);

   const [disable, setDisable] = useState(true);

   function handleChange(event) {
      setDisable(event.target.value === '');
   }
   return (
      <>
         <div ref={ref} className="login-wrapper">
            <div className="login-box">
               <h2>ЗАЛИШІТЬ ЗАЯВКУ</h2>
               <p>та отримайте консультацію</p>
               <form
                  ref={form}
                  onSubmit={sendEmail}
               >
                  <div className="user-box">
                     <input
                        onChange={handleChange}
                        type="text"
                        minLength={3}
                        name="user_name"
                        placeholder="Ваше ім'я"
                     />
                  </div>
                  <div className="user-box">
                     <input
                        onChange={handleChange}
                        minLength={9}
                        type="tel"
                        name="user_phone"
                        placeholder="Контактний телефон"
                     />
                  </div>

                  <button
                     disabled={disable}
                     className="login-button"
                     type="submit"
                     value="Send"
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Оформити замовлення
                  </button>
               </form>
               {open && <Popup />}
            </div>
         </div>
      </>
   );
}

export default forwardRef(Form) ;
