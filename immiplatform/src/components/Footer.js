import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ onAboutClick }) => {
    const { t } = useTranslation();

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
            {t('footer.text')}
                <span 
                   onClick={onAboutClick} 
                   style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                > 
                   {t('footer.about')}
                </span>.
            </p>
        </footer>
    );
};

export default Footer;