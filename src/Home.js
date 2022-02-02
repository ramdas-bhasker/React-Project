import React, { Component } from "react";
import HomeSlider from './components/HomeSlider';
import Testimnonials from './components/Testimonials';
import CommonHead from './components/CommonHead';
import BlogList from "./components/BlogList";
import BlogData from "./components/BlogData";
import HomeServices from "./components/HomeServices";
import HomeServiceData from "./components/HomeServiceData";
import Slider from "react-slick";
import HomeAbout from './components/HomeAbout'

const Home = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <>
        <HomeSlider />
        <HomeAbout />
        <Testimnonials />

    <section className="service-area bg-light pt-4 pb-5">
        <div className="container">
            <CommonHead 
                title='Services'
                name='Veteran Provide Quality Printing Services'
                text='This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Hyderabad.'
            />
            <div className="service-slider pt-45">
            <Slider {...settings}>
                {
                    HomeServiceData.map((value, index) => {
                        return <HomeServices 
                            key={index}
                            imgsrc = {value.imgsrc}
                            imagalt = {value.imgalt}
                            title = {value.title} 
                        />
                    })
                }
                </Slider>
            </div>
        </div>
    </section>
        <div className="blog-area pb-70">
            <div className="container">
                <CommonHead 
                    title='Blogs'
                    name='Our Regular Blog Post'
                    text="What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt."
                />
                <div className="row pt-45">
                    {
                        BlogData.map((value, index) =>{
                            return <BlogList 
                                key={index}
                                imgsrc = {value.imgsrc}
                                imgalt = {value.imgalt}
                                title = {value.title}
                                user = {value.user}
                                date = {value.date}
                            />
                        })
                    }
                </div>
            </div>
        </div>
        </>
    );
};
export default Home;