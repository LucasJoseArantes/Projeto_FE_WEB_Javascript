import React from 'react';
import './Image.css';

const Image = (props) => {
    return (
        <div className='ImageContainer'>
            <img src={props.ImagePath} alt="Image" />
            <p>{props.ImageText}</p>
        </div>
    );
};

export default Image;