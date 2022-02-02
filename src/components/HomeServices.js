import React from "react";
import { NavLink } from "react-router-dom";


const HomeServices = (props) =>{
   
    return(
        <>
            <div className="service-card">
                <NavLink to=''>
                    <img src={props.imgsrc} alt={props.imgalt} />
                </NavLink>
                <div className="service-content">
                    <NavLink to=''>
                        <h3>{props.title}</h3>
                    </NavLink>
                    <NavLink to='' className="more-btn">
                        <i className='bx bx-chevron-right'></i>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
export default HomeServices;