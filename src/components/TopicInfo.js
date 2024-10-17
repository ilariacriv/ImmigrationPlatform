import React from 'react';
import './TopicInfo.css';
import { useTranslation } from 'react-i18next';
import TopicInfoToggle from './TopicInfoToggle';
import TextList from './TextList';

const TopicInfo = (props) => {
    const { t } = useTranslation(`${props.ns}`);

    const toggles = Array.from({ length: props.togglenum }, (_, index) => (
        <TopicInfoToggle key={index} topicid={props.topicid} num={index+1} ns={props.ns}/>
      ));

    const listKey = `${props.topicid}.list`;
    const hasList = t(listKey, { returnObjects: true, defaultValue: false });
    
    return (
        <div className="topic-info-container">
            <div className="topic-info">
                <div className="title">{t(`${props.topicid}.titletext`)}</div>
                <div className="separator"></div>
                <div className="content">{t(`${props.topicid}.details`)}
                {hasList && <TextList ns={props.ns} path={props.topicid}/>}
                </div>
                
            </div>
            {toggles}
        </div>
    );
};


export default TopicInfo;

