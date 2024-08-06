import React from 'react';
import Box from './Box';

const createBoxes = (boxContent) => {
    return boxContent.map((box) => (
        <Box key={box.id} img={box.img} textContent={box.textContent}  />
        
    ));
}

const Boxes = ({boxContent}) => {
    const boxes = createBoxes(boxContent); 

    return (
        <div className='box-container'>
            {boxes}
        </div>
    );
};

export default Boxes;