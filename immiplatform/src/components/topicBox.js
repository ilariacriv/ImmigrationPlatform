import React from 'react';
import PropTypes from 'prop-types';

const TopicBox = ({ logo, title, description }) => {
    return (
        <div style={styles.container}>
            <img src={logo} alt="logo" style={styles.logo} />
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        textAlign: 'center',
    },
    logo: {
        width: '50px',
        height: '50px',
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
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TopicBox;