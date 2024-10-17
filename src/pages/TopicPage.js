import React from 'react';
import { useParams } from 'react-router-dom';
import TopicIntro from '../components/TopicIntro';
import TopicInfo from '../components/TopicInfo';


const TopicPage = () => {
  const { id } = useParams();

  const topic = topicMap.get(id);

  return (
    <div style={{ padding: '20px' }}>
      <TopicIntro id={id} />
      {topic && topic.infobox.map((info) => (
        <TopicInfo ns={id} topicid={info.infoboxID} togglenum={info.togglenum} />
      ))}
    </div>
  );
};

const topicMap = new Map([
  ['visa_documents', { infobox: [{infoboxID: 'visa'}, {infoboxID: 'temp_res'}, {infoboxID: 'perm_res'}] }],
  ['bankid', { infobox: [{infoboxID: 'what'}, {infoboxID: 'how'}, {infoboxID: 'app'}] }],
  ['job_taxes', { infobox: [{infoboxID: 'tag10'}, {infoboxID: 'tag11'}, {infoboxID: 'tag12'}] }],
  ['education', { infobox: [{infoboxID: 'tag13'}, {infoboxID: 'tag14'}, {infoboxID: 'tag15'}] }],
  ['nav', { infobox: [{infoboxID: 'tag16'}, {infoboxID: 'tag17'}, {infoboxID: 'tag18'}] }],
  ['healthcare', { infobox: [{infoboxID: 'tag19'}, {infoboxID: 'tag20'}, {infoboxID: 'tag21'}] }],
  ['bank_account', { infobox: [{infoboxID: 'tag22'}, {infoboxID: 'tag23'}, {infoboxID: 'tag24'}] }],
  ['housing', { infobox: [{infoboxID: 'tag25'}, {infoboxID: 'tag26'}, {infoboxID: 'tag27'}] }],
  ['norwegian_culture', { infobox: [{infoboxID: 'tag28'}, {infoboxID: 'tag29'}, {infoboxID: 'tag30'}] }],
  ['learn_norwegian', { infobox: [{infoboxID: 'tag31'}, {infoboxID: 'tag32'}, {infoboxID: 'tag33'}] }],
  ['family_children', { infobox: [{infoboxID: 'tag34'}, {infoboxID: 'tag35'}, {infoboxID: 'tag36'}] }],
  ['explore_norway', { infobox: [{infoboxID: 'tag37'}, {infoboxID: 'tag38'}, {infoboxID: 'tag39'}] }],
  ['leisure_volunteering', { infobox: [{infoboxID: 'tag1'}, {infoboxID: 'tag2'}, {infoboxID: 'tag3'}] }],
]);


export default TopicPage;