import React from 'react';
import { useTranslation } from 'react-i18next';

const TopicIntro = (props) => {
    const { t } = useTranslation(`${props.id}`);

    return (
        <div className="topic-intro">
            <h1>{t('pagetitle')}</h1>
            <p>{t('pagedescription')}</p>
        </div>
    );
};

export default TopicIntro;