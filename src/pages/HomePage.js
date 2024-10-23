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
      <div className="App" style={styles.app}>
      <h2 style={styles.heading}>
        {t('homepage.hometext')}
      </h2>
      <button 
        onClick={() => navigate('/guidepage')} 
        style={styles.button}
        onMouseOver={(e) => {
        Object.assign(e.target.style, styles.buttonHover);
        }}
        onMouseOut={(e) => {
        Object.assign(e.target.style, styles.buttonNormal);
        }}
      >
        {t('homepage.guidebutton')}
      </button>
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
        <div key={index} style={{ flex: '0 1 21%', margin: '10px', maxWidth: '50%', minWidth: '350px' }}>
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
      padding: '40px', // Increased padding
    },
    app: {
    textAlign: 'center',
    overflowY: 'auto',
    maxHeight: '90vh',
    padding: '20px',
    },
    heading: {
    fontSize: '3em',
    marginBottom: '20px',
    color: '#000000',
    },
    button: {
    backgroundColor: '#800000', /* Bordeaux */
    border: 'none',
    color: 'white',
    padding: '20px 40px', /* Bigger padding */
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '18px', /* Bigger font size */
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.3s ease', /* Transition for all properties */
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', /* Add shadow */
    },
    buttonHover: {
    backgroundColor: '#660000',
    transform: 'scale(1.1)', /* Enlarge button */
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)', /* Increase shadow */
    },
    buttonNormal: {
    backgroundColor: '#800000',
    transform: 'scale(1)', /* Reset size */
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', /* Reset shadow */
    }
  };

export default HomePage;