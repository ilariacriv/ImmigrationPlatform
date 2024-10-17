import React, { useState } from 'react';


const TopicInfoToggle = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            onClick={toggleBox} 
            style={{ 
                backgroundColor: 'white',
                padding: '10px', 
                cursor: 'pointer', 
                borderRadius: '5px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                transition: 'background-color 0.3s ease',
                margin: '10px', // Added outside margin
                width: '80%', // Added width
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
            <h2 style={{ margin: '0 0 10px 0' }}>{props.toggle.showtext}</h2>
            {isOpen && (
                <div>
                    {Array.isArray(props.toggle.details) && (
                         props.toggle.details.map((item, index) => (
                            <p style={{ margin: '0 0 10px 0' }}>{item}</p>
                        ))
                    )}
                    
                    {Array.isArray(props.toggle.list) && (
                        <ul>
                            {props.toggle.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    
                    {Array.isArray(props.toggle.finalDetails) && (
                         props.toggle.finalDetails.map((item, index) => (
                            <p style={{ margin: '0 0 10px 0' }}>{item}</p>
                        ))
                    )}
                </div>
            )}
        </div>
    );

    
};

export default TopicInfoToggle;