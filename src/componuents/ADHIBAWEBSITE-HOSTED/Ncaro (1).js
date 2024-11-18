import React from "react";
import './Ncaro.css'
import Service2 from "./check";
import { useState } from "react";












export default function NysCaro() {


    const shoot = () => {
        alert(" your message has received!");
      }
    

      const [email, setEmail] = useState('');
      const [isValidEmail, setIsValidEmail] = useState(true);
    
      const validateEmail = (input) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
      };
    
      const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
      };


    return (
        <>

<div className="desktop-form ">
            <section className="Formbodymain">
                <h1 className="container formheading ">
                    <span className="form2heading text-white">. </span>
                    <div class="message">
                    <div class="word1 ">Need support!</div>
                        {/* white text */}
                        <div class="word2">Have an idea?</div>
                        {/* \\blue text */}
                        
                    </div>

                </h1>
               
                <h3 className="container text-white">Drop us About It</h3>
                <section className="formsection ">

                    <form action=""  id="mainform">
                        <div class="container form-group ">



                            <div className="container col-12 d-flex ">
                                <div className="col-lg-6 col-md-6  col-sm-6 col-xs-6 inleft">
                                    <div class="controls">
                                        <input type="text" id="name" class="floatLabel" name="name" placeholder="Name*" required />
                                    </div>


                                    <div class="controls ">
                                      
                                       
   
      <input
      class="floatLabel"
      id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValidEmail ? 'initial' : '' }}
        placeholder="Email*"
        required 
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Invalid email address</p>}
  
                                    </div>

                                    <div class="controls ">
                                        <input type="tel" id="text" class="floatLabel" name="phone" placeholder="Company Name*" required />

                                    </div>

                                    <div class="controls ">
                                        <input type="text" id="country" class="floatLabel" name="country" placeholder="Website*" required />

                                    </div>

                                    <div class="controls ">
                                        <input type="number" id="street-number" class="floatLabel" name="street-number" placeholder="Mobile Number*" required />

                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-6  col-sm-12 col-xs-12 inright">
                                    <div className="">
                                    <Service2/>
                                    </div>
                                    <p className='sertext'>Drop Your Comments*</p>
                                    <div class="controls ">
                                        <textarea name="comments" class="floatLabel" id="comments" placeholder="Type.  .  .  .  ."></textarea>
                                        <div className="formbut ">
                                            <button type="submit"  class=" sumform" onClick={shoot} >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>



                    </form>


                </section>
            </section>  

            </div>


<div className="mobile-form">

<p className="col-12 formheading ">
                    <span className="form2heading text-white">. </span>
                    <div class="message col-sm-12 col-xs-12 ">
                    <div class="word1 ">Need support!</div>
                        {/* white text */}
                        <div class="word2">Have an idea?</div>
                        {/* \\blue text */}
                        
                    </div>

                </p>
                <h3 className=" text-white">Drop us About It</h3>



                <form action="" method="post" id="mainform">
                        <div class="container ">



                            <div className=" ">
                                <div className=" inleft">
                                    <div class="controls">
                                        <input type="text" id="name" class="floatLabel" name="name" placeholder="Name*" required />
                                    </div>


                                    <div class="controls ">
                                        <input type="text" id="email" class="floatLabel" name="email" placeholder="Email*" required />

                                    </div>

                                    <div class="controls ">
                                        <input type="tel" id="text" class="floatLabel" name="phone" placeholder="Company Name*" required />

                                    </div>

                                    <div class="controls ">
                                        <input type="text" id="country" class="floatLabel" name="country" placeholder="Website*" required />

                                    </div>

                                    <div class="controls ">
                                        <input type="number" id="street-number" class="floatLabel" name="street-number" placeholder="Mobile Number*" required />

                                    </div>
                                </div>
                               
                                    
                                    <Service2/>
                                   
                                    <p className='sertext'>Drop Your Comments*</p>
                                 
                                        <textarea name="comments" class="floatLabel" id="comments" placeholder="Type.  .  .  .  ."></textarea>
                                        <div className="formbut ">
                                            <button type="submit" value="Submit" class=" sumform" >Submit</button>
                                        </div>
                                   
                               
                            </div>




                        </div>



                    </form>


</div>





        





        </>
    )
}

