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
  ['visa_documents', { infobox: [{infoboxID: 'visa', togglenum: 2}, {infoboxID: 'temp_res', togglenum: 3}, {infoboxID: 'perm_res', togglenum: 0}] }],
  ['bankid', { infobox: [{infoboxID: 'what', togglenum: 2}, {infoboxID: 'how', togglenum: 2}, {infoboxID: 'app', togglenum: 2}] }],
  ['job_taxes', { infobox: [{infoboxID: 'tag10', togglenum: 2}, {infoboxID: 'tag11', togglenum: 2}, {infoboxID: 'tag12', togglenum: 2}] }],
  ['education', { infobox: [{infoboxID: 'tag13', togglenum: 2}, {infoboxID: 'tag14', togglenum: 2}, {infoboxID: 'tag15', togglenum: 2}] }],
  ['nav', { infobox: [{infoboxID: 'tag16', togglenum: 2}, {infoboxID: 'tag17', togglenum: 2}, {infoboxID: 'tag18', togglenum: 2}] }],
  ['healthcare', { infobox: [{infoboxID: 'tag19', togglenum: 2}, {infoboxID: 'tag20', togglenum: 2}, {infoboxID: 'tag21', togglenum: 2}] }],
  ['bank_account', { infobox: [{infoboxID: 'tag22', togglenum: 2}, {infoboxID: 'tag23', togglenum: 2}, {infoboxID: 'tag24', togglenum: 2}] }],
  ['housing', { infobox: [{infoboxID: 'tag25', togglenum: 2}, {infoboxID: 'tag26', togglenum: 2}, {infoboxID: 'tag27', togglenum: 2}] }],
  ['norwegian_culture', { infobox: [{infoboxID: 'tag28', togglenum: 2}, {infoboxID: 'tag29', togglenum: 2}, {infoboxID: 'tag30', togglenum: 2}] }],
  ['learn_norwegian', { infobox: [{infoboxID: 'tag31', togglenum: 2}, {infoboxID: 'tag32', togglenum: 2}, {infoboxID: 'tag33', togglenum: 2}] }],
  ['family_children', { infobox: [{infoboxID: 'tag34', togglenum: 2}, {infoboxID: 'tag35', togglenum: 2}, {infoboxID: 'tag36', togglenum: 2}] }],
  ['explore_norway', { infobox: [{infoboxID: 'tag37', togglenum: 2}, {infoboxID: 'tag38', togglenum: 2}, {infoboxID: 'tag39', togglenum: 2}] }],
  ['leisure_volunteering', { infobox: [{infoboxID: 'tag1', togglenum: 2}, {infoboxID: 'tag2', togglenum: 2}, {infoboxID: 'tag3', togglenum: 2}] }],
]);


export default TopicPage;