import React from 'react';
import { useTranslation } from 'react-i18next';
import './TopicResources.css';
import { FaArrowAltCircleRight  } from 'react-icons/fa'; 

const TopicResources = (props) => {
    const { t } = useTranslation(props.ns);

    const listKey = `resources.list`;
    const hasList = t(listKey, { returnObjects: true, defaultValue: false });

    return (
        <div>
            <div className="topic-res-container">
                <div className="topic-res">
                    <div className="title">{t(`resources.titletext`)}</div>
                    <div className="content">
                        <ul>
                            {hasList && hasList.map((item, index) => (
                                <li key={index} style={{ marginBottom: '10px' }}>
                                    <strong>{item.name}</strong>: {item.description}
                                    {item.link && (
                                        <div>
                                            <button 
                                                onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')} 
                                                className="button"
                                            >
                                                {item.buttontext} <FaArrowAltCircleRight /> {/* Use the imported icon */}
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicResources;