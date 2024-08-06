import React from 'react';
import ApresentacaoSecao from './ApresentacaoSecao';
import Boxes from './Boxes';

const Section01 = ({ title, subtitle, boxContent }) => {

    return (
        <section className='main-section'>
            <ApresentacaoSecao title={title} subtitle={subtitle} />
            <Boxes boxContent={boxContent} />
        </section>
    );
};

export default Section01;