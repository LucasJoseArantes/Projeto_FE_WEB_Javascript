import React from 'react';

function RoundButton(props) {
    return (
        <button className='round-button'
        >
            {props.name}
        </button>
    );
};

export default RoundButton;
