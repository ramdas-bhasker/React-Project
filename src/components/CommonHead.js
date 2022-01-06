import React from 'react';

const CommonHead = (props) =>{
    return(
        <>
            <div className="scetion-title text-center mb-5">
                <span>{props.title}</span>
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </>
    );
};
export default CommonHead;