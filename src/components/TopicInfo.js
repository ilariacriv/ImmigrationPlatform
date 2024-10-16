import React from 'react';
import './TopicInfo.css';
import { useTranslation } from 'react-i18next';
import TopicInfoToggle from './TopicInfoToggle';

const TopicInfo = (props) => {
    const { t } = useTranslation(`${props.ns}`);

    const toggles = Array.from({ length: props.togglenum }, (_, index) => (
        <TopicInfoToggle key={index} topicid={props.topicid} num={index+1} ns={props.ns}/>
      ));

    return (
        <div className="topic-info-container">
        <div className="topic-info">
            <div className="title">{t(`${props.topicid}.titletext`)}</div>
            <div className="separator"></div>
            <div className="content">{t(`${props.topicid}.details`)} </div>
        </div>
        {toggles}
        </div>
    );
};


export default TopicInfo;

