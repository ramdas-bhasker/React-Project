import React from "react";
import CommonHead from "./components/CommonHead";
import ServicesData from "./components/ServicesData"
import ServiceBlock from "./components/ServicesBlock"
import InnerBanner from './components/InnerBanner';

const Services = () =>{
    return(
        <>
        <InnerBanner 
                InnerHeader = 'Services'
                BreadCrumbHome = 'Home'
                BreadCrumbPage = 'Services'
            />
            <section className="service-area bg-light pt-4 pb-5">
                <div className="container">
                    <CommonHead 
                        title='Services'
                        name='Veteran Provide Quality Printing Services'
                        text="What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt."
                    />
                    <div className="row pt-45">
                        {
                            ServicesData.map((value, index)=>{
                                return (<ServiceBlock 
                                    key={index}
                                    ImgSrc = {value.ImgSrc}
                                    Title = {value.Title}
                                />
                                )
                            })
                        }
                    </div>
                    </div>
            </section>
        </>
    );
};

export default Services;
