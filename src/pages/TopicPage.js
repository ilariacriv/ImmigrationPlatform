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
      {topic && topic.togglebox.map((infoId) => (
        <TopicInfo id={id} topicid={infoId} togglenum={2}/>
      ))}
    </div>
  );
};

const topicMap = new Map([
  ['visa_documents', { togglebox: ['visa', 'temp_res', 'perm_res'] }],
  ['bankid', { togglebox: ['what', 'how', 'app'] }],
  ['job_taxes', { togglebox: ['tag10', 'tag11', 'tag12'] }],
  ['education', { togglebox: ['tag13', 'tag14', 'tag15'] }],
  ['nav', { togglebox: ['tag16', 'tag17', 'tag18'] }],
  ['healthcare', { togglebox: ['tag19', 'tag20', 'tag21'] }],
  ['bank_account', { togglebox: ['tag22', 'tag23', 'tag24'] }],
  ['housing', { togglebox: ['tag25', 'tag26', 'tag27'] }],
  ['norwegian_culture', { togglebox: ['tag28', 'tag29', 'tag30'] }],
  ['learn_norwegian', { togglebox: ['tag31', 'tag32', 'tag33'] }],
  ['family_children', { togglebox: ['tag34', 'tag35', 'tag36'] }],
  ['explore_norway', { togglebox: ['tag37', 'tag38', 'tag39'] }],
  ['leisure_volunteering', { togglebox: ['tag1', 'tag2', 'tag3'] }],
]);


export default TopicPage;