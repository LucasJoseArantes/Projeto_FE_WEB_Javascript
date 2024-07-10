import React from 'react';

function ContentBox(props) {
    let boxContent;

    if (props.icon) {
        boxContent = (
            <div>
                <img src={props.icon} alt={props.title} />
                <h3>{props.title}</h3>
            </div>
        );
    } else {
        boxContent = (
            <h3>{props.title}</h3>
        );
    }

    return (
        <div className="box">
            {boxContent}
        </div>
    );
}

export default ContentBox;