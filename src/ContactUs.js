import React from "react";
import CommonHead from "./components/CommonHead";
import InnerBanner from './components/InnerBanner';
import ContactForm from "./components/ContactForm";
const ContactUs = () =>{
    return(
        <>
        <InnerBanner 
                InnerHeader = 'Contact'
                BreadCrumbHome = 'Home'
                BreadCrumbPage = 'Contact Us'
            />

            <section className="service-area bg-light pt-4 pb-5">
                <div className="container">
                    <CommonHead 
                        title='Contact Us'
                        name='Drop Your Message'
                        text="What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt."
                    />
                </div>
                <div className="container">
                    <div className="contact-wrap pt-45">
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ContactUs;