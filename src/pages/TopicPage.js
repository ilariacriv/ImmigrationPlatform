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
      {topic && topic.infobox.map((infoId) => (
        <TopicInfo id={id} topicid={infoId} />
      ))}
    </div>
  );
};

const topicMap = new Map([
  ['visa_documents', { infobox: ['visa', 'temp_res', 'perm_res'] }],
  ['bankid', { infobox: ['what', 'how', 'app'] }],
  ['job_taxes', { infobox: ['tag10', 'tag11', 'tag12'] }],
  ['education', { infobox: ['tag13', 'tag14', 'tag15'] }],
  ['nav', { infobox: ['tag16', 'tag17', 'tag18'] }],
  ['healthcare', { infobox: ['tag19', 'tag20', 'tag21'] }],
  ['bank_account', { infobox: ['tag22', 'tag23', 'tag24'] }],
  ['housing', { infobox: ['tag25', 'tag26', 'tag27'] }],
  ['norwegian_culture', { infobox: ['tag28', 'tag29', 'tag30'] }],
  ['learn_norwegian', { infobox: ['tag31', 'tag32', 'tag33'] }],
  ['family_children', { infobox: ['tag34', 'tag35', 'tag36'] }],
  ['explore_norway', { infobox: ['tag37', 'tag38', 'tag39'] }],
  ['leisure_volunteering', { infobox: ['tag1', 'tag2', 'tag3'] }],
  
]);


export default TopicPage;