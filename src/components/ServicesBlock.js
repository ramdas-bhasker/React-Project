import React from 'react'
import {NavLink} from 'react-router-dom'

const ServiceBlock = (props) =>{
    return(
        <>
            <div className="col-lg-2 col-sm-3">
                <div className="choose-card">
                    <NavLink to='/'>
                        <i className={props.ImgSrc}></i>
                        <h3>{props.Title}</h3>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default ServiceBlock;