
import React, {useState} from 'react'

const ContactForm = () => {
   const [userData, userDataFunc] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
   });

   let userName, value;
   const getUserData = (event) =>{
        userName = event.target.name;
        value = event.target.value;
        userDataFunc({ ...userData, [userName]: value })
   };


   const postData= async (e)=>{
    e.preventDefault();

    const {name, email, phone, subject, message} = userData;
    
    if(name && email && phone && subject && message){
        
    const res = await fetch('https://veteran-76025-default-rtdb.firebaseio.com/veteranForm.json', {

        method : "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            message
        }),
    });
    if(res){
        userDataFunc({
            name:"",
            email:"",
            phone:"",
            subject:"",
            message:"",
       });
       alert('Thank You')
    };
    }else{
        alert('Please fill the data')
    }
   }
    return (
        <div>
            <div className="contact-wrap-form">
                <form id="contactForm" method="POST">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" name="name" value={userData.name} id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" onChange={getUserData} />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="email" name="email" value={userData.email} id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" onChange={getUserData} />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" name="phone" value={userData.phone} id="phone" required data-error="Please enter your number" className="form-control" placeholder="Your Phone" onChange={getUserData} />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" name="subject" value={userData.subject} id="subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" onChange={getUserData} />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" value={userData.message} className="form-control" id="message" cols="30" rows="8"  data-error="Write your message" placeholder="Your Message" onChange={getUserData} ></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 text-center">
                            <button type="submit" onClick={postData} className="default-btn page-btn text-center">
                                Send Message
                            </button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
