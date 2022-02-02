import React from 'react'

const InfrastructureBlock = (props) =>{
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="service-card">
                    <img src={props.ImgSrc} alt="{props.ImgAlt}" />
                    <div className="service-content">
                        <h5>{props.Title}</h5>
                        <h6>{props.SubTitle}</h6>
                        <p>{props.Text}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default InfrastructureBlock;