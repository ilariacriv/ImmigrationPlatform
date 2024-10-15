import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate(`/about`);
    };

    return (
        <footer style={{ 
            textAlign: 'center', 
            padding: '0.2em', 
            background: '#f1f1f1', 
            position: 'relative', 
            left: '0', 
            bottom: '0', 
            width: '100%' 
        }}>
            <p>
            {t('footer.text')}
                <span 
                   onClick={handleAboutClick} 
                   style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                > 
                   {t('footer.about')}
                </span>.
            </p>
        </footer>
    );
};

export default Footer;