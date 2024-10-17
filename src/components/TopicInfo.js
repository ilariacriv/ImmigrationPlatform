import React from 'react';
import './TopicInfo.css';
import { useTranslation } from 'react-i18next';
import TopicInfoToggle from './TopicInfoToggle';
import TextList from './TextList';

const TopicInfo = (props) => {
    const { t } = useTranslation(`${props.ns}`);


    const listKey = `${props.topicid}.list`;
    const hasList = t(listKey, { returnObjects: true, defaultValue: false });

    const togglesKey = `${props.topicid}.toggles`;
    const hasToggles = t(togglesKey, { returnObjects: true, defaultValue: [] });

    if (!Array.isArray(hasToggles)) {
        console.error(`Expected an array for ${togglesKey}, but got:`, hasToggles);
        return null;
    }

    const toggles = hasToggles.map((toggle, index) => (
        <TopicInfoToggle key={`${props.topicid}-toggle-${index}`} path={props.topicid} ns={props.ns} toggle={toggle}/>
    ));
    
    return (
        <div className="topic-info-container">
            <div className="topic-info">
                <div className="title">{t(`${props.topicid}.titletext`)}</div>
                <div className="separator"></div>
                <div className="content">{t(`${props.topicid}.details`)}
                {hasList && <TextList ns={props.ns} path={props.topicid}/>}
                </div>
                
            </div>
        {hasToggles && toggles}
        </div>
    );
};


export default TopicInfo;

