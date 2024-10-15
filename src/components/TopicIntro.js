import React from 'react';
import { useTranslation } from 'react-i18next';

const TopicIntro = (props) => {
    const { t } = useTranslation(`${props.id}`);

    return (
        <div className="topic-intro" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3em' }}>{t('pagetitle')}</h1>
            <p style={{ fontSize: '1.2em' }}>{t('pagedescription')}</p>
        </div>
    );
};

export default TopicIntro;