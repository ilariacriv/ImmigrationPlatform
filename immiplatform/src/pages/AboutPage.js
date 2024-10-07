import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <div style={{ padding: '20px' }}>
            <h1>{t('about.title')}</h1>
            <p>
            {t('about.content')} <a href="mailto:">XX</a> </p>
            <p>
            {t('about.contributors')} 
            </p>
        </div>
    );
};

export default AboutPage;