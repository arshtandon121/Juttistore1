import React from 'react'
import './Email.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {

   const formRef = useRef();
      const send = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
          'service_jwhqy8q',   
          'template_eattmle', 
          formRef.current, 
          'zaUrkPpVqHh5y8DRr'
          )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        
        });
      }
        

  return (<div>
    <div className='top'>
        <div className="hading">Email For Contact</div>
    </div>

    <div className="bottom">
      <form ref={formRef} onSubmit={send}   >
       <input type="text"  placeholder='Name' name='user_name'/>
       <input type="text"  placeholder='Email' name='user_email'/>
       <textarea rows="5" name='user_message'>message</textarea>
      <button>Submit</button>
      </form>
    </div>
    
    </div>
  )
}

export default Email