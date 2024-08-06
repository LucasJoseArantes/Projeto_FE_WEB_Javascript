import React from 'react';

const Box = ({ id, img, textContent }) => (
    <div key={id} className={img ? "box-with-image" : "box-without-image"}>
        {img && <img src={img} alt="Imagem" />}
        {textContent && <h3>{textContent}</h3>}
    </div>
);

export default Box;
