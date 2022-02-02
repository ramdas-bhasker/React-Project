import React from "react";
import { NavLink } from "react-router-dom";
import AboutImg from '../images/about.png';

const HomeAbout = () =>{
    return(
        <>
            <div className="about-area pt-3 pb-5">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="about-img">
                                <img src={AboutImg} alt="About Images" />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="about-content">
                                <span>About</span>
                                <h2>Veteran Translation</h2>
                                <p>
                                    Veteran Business Solutions in Abids, Hyderabad is a top player in the category Photocopier Dealers in the Hyderabad. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Hyderabad. Over the
                                    course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base
                                    of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.
                                    In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Hyderabad, this establishment occupies a prominent location in Abids. It is an effortless task in commuting
                                    to this establishment as there are various modes of transport readily available. It is at , Opp to Hyd Distrct Collectrate, which makes it easy for first-time visitors in locating this establishment. It is known to provide
                                    top service in the following categories: Photocopier Dealers.
                                </p>

                                <div className="about-btn">
                                    <NavLink to='/about' className="know-more-btn">Know More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAbout;