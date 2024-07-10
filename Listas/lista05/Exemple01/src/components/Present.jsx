import React from 'react';

function Present({ title, description }) {
  return (
    <div className="present-container">
        <div className="content-container" >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
      
    </div>
  );
}

export default Present;
