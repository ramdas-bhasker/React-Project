import React from 'react';
import Testimnonials from './components/Testimonials';
import InnerBanner from './components/InnerBanner';
import AboutImg from  './images/veteran-about.jpg'
import WhyChooseData from './components/WhyChooseData'
import CommonHead from './components/CommonHead';
import WhyChoose from './components/WhyChoose'

const AboutUs = () =>{
    return(
        <>
            <InnerBanner 
                InnerHeader = 'About Us'
                BreadCrumbHome = 'Home'
                BreadCrumbPage = 'About Us'
            />
            <div className="about-are pb-70">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 pl-0">
                            <img src={AboutImg} alt="About Us" className='img-fluid'/>
                        </div>

                        <div className="col-lg-7">
                            <div className="about-content pt-5 ml-0">
                                <span>About Us</span>
                                <h2>We Are Leading Our Agency for 20 Years</h2>
                                <p>
                                    Veteran Business Solutions in Abids, Hyderabad is a top player in the category Photocopier Dealers in the Hyderabad. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Hyderabad. The belief
                                    that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.
                                    <br/> This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-are pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Our Goals</h4>
                            <p>
                                To provide quality Prints and finished products and solution to our esteemed client in given time, we all aware the quality comes at a price, our customer knows this better. We cater to our customer needs with personalized service to make them our repeated
                                clients. We need an opportunity to make you feel the difference.
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h4>Our Mission</h4>
                                <p>
                                    As an experienced printer we understand our customer needs to best of our knowledge and give quality with value added prints to their current and future print requirements. Our experienced staff under stand the criticality and customer need for the print
                                    in terms of print quality, print finishing, and delivery time, what we provide to our clients is confidence in us by our services.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-area pb-70">
            <div className="container">
                <CommonHead 
                    title='Why Choose Us'
                    name='Veteran is a Trusted Printing Service'
                    text=" What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt.
                    Trusted Company
                    Budget Oriented
                    Fast Service
                    "
                />
                <div className="row pt-45">
                   {
                       WhyChooseData.map((value, index)=>{
                        return(
                            <WhyChoose
                                key={index}
                                ImgSrc={value.ImgSrc}
                                Title={value.Title}
                            />
                        )
                       })                  
                    }
                </div>
            </div>
        </div>
        <Testimnonials />
        </>
    );
};
export default AboutUs;