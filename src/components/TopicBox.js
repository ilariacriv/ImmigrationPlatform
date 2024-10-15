import PropTypes from 'prop-types';
import React, { useState } from 'react';


const TopicBox = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ ...styles.container, ...(isHovered ? styles.topicBoxHover : {}) }}
            onClick={() => props.onClick(props.id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.icon}>{props.icon}</div>
            <h2 style={styles.title}>{props.title}</h2>
            <p style={styles.description}>{props.description}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px', // increased padding
        margin: '10px',
        minWidth: '30%', // increased minWidth
        minHeight: '250px', // increased minHeight
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.2s',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // more transparent background
    },
    topicBoxHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        backgroundColor:  '#f1f1f1', // more transparent light bordeaux color
    },
    icon: {
        fontSize: '5em',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.5em',
        margin: '10px 0',
    },
    description: {
        fontSize: '1em',
        color: '#666',
    },
};

TopicBox.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired, // Add icon prop type
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TopicBox;