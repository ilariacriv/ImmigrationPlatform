import React from 'react';
import './TopicInfo.css';
import { useTranslation } from 'react-i18next';
import TopicInfoToggle from './TopicInfoToggle';

const TopicInfo = (props) => {
    const { t } = useTranslation(`${props.id}`);


    return (
        <div className="topic-info-container">
        <div className="topic-info">
            <div className="title">{t(`${props.topicid}.showtext`)}</div>
            <div className="separator"></div>
            <div className="content">{t('pagedescription')} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque ex in justo dapibus pharetra. Sed ultricies mi diam, non porttitor mauris mattis in. Etiam non odio posuere, sollicitudin diam ac, tincidunt arcu. Cras ut maximus quam, et pharetra orci. In bibendum eros eget scelerisque pharetra. Fusce consequat turpis ac felis interdum congue at at neque. Nam consectetur ligula in lorem vehicula, quis viverra ex sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempor maximus viverra. Cras congue nulla quam. Suspendisse nibh nibh, placerat eget consequat et, pellentesque non ipsum. Duis venenatis velit vitae libero accumsan sollicitudin. Morbi vehicula lectus sed rhoncus pellentesque. Aliquam congue luctus viverra. In ultrices vitae dui ac feugiat. Phasellus erat odio, hendrerit eu semper vitae, commodo scelerisque magna. </div>
        </div>
        <TopicInfoToggle topicid={props.topicid}/>
        </div>
    );
};


export default TopicInfo;

