import React from 'react';
import TestImg1 from '../images/testimonail-1.png';
import TestShape from '../images/bg-shape1.png';
import { Carousel } from "react-bootstrap";
import CommonHead from './CommonHead';

const Testimnonials = () =>{
    return(
        <>
    <div className="testimonial-area pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <div className="testimonial-content">
                        <CommonHead 
                            title = 'Testimonial'
                            name = 'People Says Veteran Translation'
                            text = "What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt."
                        />
                        <Carousel>
                            <Carousel.Item>
                            <div className="testimonail-item">
                                <h3>John Smith</h3>
                                <p>
                                    What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt with of as he this.
                                </p>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="testimonail-item">
                                <h3>John Doe</h3>
                                <p>
                                    What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt with of as he this.
                                </p>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="testimonail-item">
                                <h3>Evanaa</h3>
                                <p>
                                    What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt with of as he this.
                                </p>
                            </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="testimonial-img">
                        <div className="testimonial-bg-shape">
                            <img src={TestShape} alt="Testimonial Images" />
                        </div>
                        <div className="testominail-man">
                            <img src={TestImg1} alt="Testimonial Shape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Testimnonials;