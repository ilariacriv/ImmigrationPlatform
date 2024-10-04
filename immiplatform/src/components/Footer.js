import React from 'react';

const Footer = () => {
    return (
        <footer style={{ 
            textAlign: 'center', 
            padding: '0.2em', 
            background: '#f1f1f1', 
            position: 'fixed', 
            left: '0', 
            bottom: '0', 
            width: '100%' 
        }}>
            <p>
                This website is privately developed as part of a PhD project. This is not an official website. We cannot guarantee that the content is correct.
            </p>
        </footer>
    );
};

export default Footer;