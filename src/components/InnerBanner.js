import React from "react";
import {NavLink} from 'react-router-dom'

const InnerBanner = (props) =>{
    return(
        <>
            <div className="inner-banner inner-bg1">
                <div className="container">
                    <div className="inner-title">
                        <h3>{props.InnerHeader}</h3>
                        <ul>
                            <li>
                                <NavLink to='/'>{props.BreadCrumbHome}</NavLink>
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                            </li>
                            <li>{props.BreadCrumbPage}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InnerBanner;

