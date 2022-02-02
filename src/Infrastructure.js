import React from "react";  
import InfrastructureData from './components/InfrastructureData';
import InfrastructureBlock from './components/InfrastructureBlock';
import CommonHead from './components/CommonHead';
import InnerBanner from './components/InnerBanner';

const Infrastructure = () =>{
    return (
        <>
            <InnerBanner 
                InnerHeader = 'Infrastructure'
                BreadCrumbHome = 'Home'
                BreadCrumbPage = 'Infrastructure'
            />
            <section className="service-area pt-100 pb-70">
                <div className="container">
                    <CommonHead 
                        title='Infrastructure'
                        name='Veteran Provide Good Quality Printing Services'
                        text=" What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt.
                        Trusted Company
                        Budget Oriented
                        Fast Service
                        "
                    />
                    <div className="row pt-45">
                        {
                            InfrastructureData.map((value, index) =>{
                                return(
                                    <InfrastructureBlock
                                        key={index}
                                        ImgSrc = {value.ImgSrc}
                                        Title = {value.Title}
                                        SubTitle = {value.SubTitle}
                                        Text = {value.Text}
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
export default Infrastructure;