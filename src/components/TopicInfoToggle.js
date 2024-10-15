import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const TopicInfoToggle = (props) => {
    const { t } = useTranslation(`${props.id}`);
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            onClick={toggleBox} 
            style={{ 
                border: '1px solid black', 
                padding: '10px', 
                cursor: 'pointer', 
                borderRadius: '5px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                transition: 'background-color 0.3s ease',
                margin: '10px' // Added outside margin
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
            <h2 style={{ margin: '0 0 10px 0' }}>{t(`${props.topicid}.showtext`)}</h2>
            {isOpen && <p style={{ margin: '0' }}>{t(`${props.topicid}.details`)}</p>}
        </div>
    );
};

export default TopicInfoToggle;