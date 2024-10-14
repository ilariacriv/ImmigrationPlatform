import React from 'react';
import PropTypes from 'prop-types';

const TopicBox = (props) =>{
    return (
        <div style={styles.container} onClick={() => props.onClick(props.id)}>
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
        padding: '16px',
        margin: '10px',
        maxWidth: '350px',
        minWidth: '150px',
        minHeight: '250px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    topicBoxHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
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