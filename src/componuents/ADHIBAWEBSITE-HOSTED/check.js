import React, { useState } from 'react';
import './check.css'



const Service2 = () => {


  const shoot = () => {
    alert(" your message has received!");
}


const [email, setEmail] = useState('');
const [isValidEmail, setIsValidEmail] = useState(true);

const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
};

const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
};

const [salesOptionsVisible, setSalesOptionsVisible] = useState(false);
const [servicesOptionsVisible, setServicesOptionsVisible] = useState(false);

const toggleSalesOptions = () => {
    setServicesOptionsVisible(false);
    setSalesOptionsVisible((prev) => !prev);
};


const toggleServicesOptions = () => {
    setSalesOptionsVisible(false);
    setServicesOptionsVisible((prev) => !prev);
};

  return (
    <>
    <p className='sertext'>Enquiry for*</p>
      <div className='mainsase'>
        <div className='salservicebtn'>

          <p className=' sertext' onClick={toggleSalesOptions}> <input type="radio" id="html" name="fav_language" value="HTML" className='me-2' /></p>
          <p className=' sertext '>Sales</p>
          <p onClick={toggleServicesOptions} className='sertext'> <input type="radio" id="html" name="fav_language" value="HTML " className='me-2 ms-3' /></p>
          <p className=' sertext '>Service</p>


        </div>


        {salesOptionsVisible && (
          <form className='sertext'>
                 <p className=' sertext '>Sales :</p>
            <input type="radio" id="html" name="fav_language" value="HTML" className='me-2' />
            <label for="html" className='me-2'>Dealer</label>
            <input type="radio" id="css" name="fav_language" value="CSS"  className='me-2'/>
            <label for="css" className='me-2'>Customer</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"  className='me-2'/>
            <label for="javascript" className='me-2'>System Integrator</label>
          </form>

        )}






        {servicesOptionsVisible && (
          <form className='sertext'>
                   <p className=' sertext '>Service :</p>
            <input type="radio" id="html" name="fav_language" value="HTML" className='me-2' />
            <label for="html" className='me-2'>Technical Support</label>
            <input type="radio" id="css" name="fav_language" value="CSS"  className='me-2'/>
            <label for="css" className='me-2'>Installation</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" className='me-2' />
            <label for="javascript" className='me-2'>Solution</label>
          </form>
        )}

      </div>






    </>
  );
};

export default Service2;