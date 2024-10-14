import React from 'react';
import TopicBox from '../components/TopicBox';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaPassport, FaUniversity, FaBriefcase, FaHospital, FaHome, FaMapMarkedAlt, FaHiking, FaMoneyCheckAlt, FaHandsHelping, FaIdCard } from 'react-icons/fa';
import { MdGTranslate,MdFamilyRestroom  } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleTopicClick = (topicId) => {
    navigate(`/topics/${topicId}`);
  };

    return (
      <div className="App" style={{ textAlign: 'center', overflowY: 'auto', maxHeight: '90vh' }}>
      <h2 style={{ fontSize: '2em' }}>
         {t('homepage.hometext')}
      </h2>
      <TopicsGrid onTopicClick={handleTopicClick}/>
      </div>
    ); 
};



function TopicsGrid({ onTopicClick }) {
    const topics = [
      { icon: <FaPassport />, id: 'visa_documents' },
      { icon: <FaIdCard />, id: 'bankid' }, // Updated to use FaIdCard for digital identity
      { icon: <FaBriefcase />, id: 'job_taxes' },
      { icon: <FaUniversity />, id: 'education' },
      { icon: <FaHandsHelping />, id: 'nav' },
      { icon: <FaHospital />, id: 'healthcare' },
      { icon: <FaMoneyCheckAlt />, id: 'bank_account' },
      { icon: <FaHome />, id: 'housing' },
      { icon: <FaHiking />, id: 'norwegian_culture' },
      { icon: <MdGTranslate />, id: 'learn_norwegian' },
      { icon: <MdFamilyRestroom  />, id: 'family_children' },
      { icon: <FaMapMarkedAlt />, id: 'explore_norway' },
      { icon: <IoMdFootball />, id: 'leisure_volunteering' },
    ];
  
    const { t } = useTranslation();

    return (
      <div style={styles.grid}>
      {topics.map((topic, index) => (
        <div key={index} style={{ flex: '0 1 21%', margin: '10px', maxWidth: '50%' }}>
        <TopicBox 
          id={topic.id}
          icon={topic.icon} 
          title={t(`topics.${topic.id}.title`)} 
          description={t(`topics.${topic.id}.description`)} 
          onClick={() => onTopicClick(topic.id)}
        />
        </div>
      ))}
      </div>
    );
  }

  const styles = {
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px',
    },
  };

export default HomePage;