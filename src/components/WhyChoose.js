import React from 'react'


const WhyChoose = (props) =>{
    return(
        <>
        <div className="col-lg-3 col-sm-6">
            <div className="choose-card">
                <i className={props.ImgSrc}></i>
                <h3>{props.Title}</h3>
            </div>
        </div>
        </>
    )
};

export default WhyChoose;