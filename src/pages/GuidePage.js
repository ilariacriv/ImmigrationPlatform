import React from 'react';
import { useTranslation } from 'react-i18next';
import TopicIntro from '../components/TopicIntro';

const GuidePage = () => {
    const { t } = useTranslation('guide');

    return (
        <div style={{ padding: '20px' }}>
           <TopicIntro id='guide' />
        </div>
    );
};

export default GuidePage;