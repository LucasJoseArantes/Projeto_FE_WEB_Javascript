import React, { useState } from 'react';
import './Faq.css';
import faqs from '../assets/faqData/faq.json';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="faqSection">
            <h1>Perguntas Frequentes</h1>
            <div className="faqList">
                {faqs.map((faq, index) => (
                    <div key={index} className="faqItem">
                        <div 
                            className="faqQuestion" 
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{index + 1}. {faq.question}</span>
                            <span className={`faqIcon ${activeIndex === index ? 'open' : ''}`}>
                                {activeIndex === index ? '▲' : '▼'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faqAnswer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
