import React from 'react';
import TopicBox from '../components/TopicBox';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <h2>
                 {t('homepage.hometext')}
            </h2>
            <TopicsGrid />
        </div>
    ); 
};



function TopicsGrid() {
    const topics = [
      { image: 'logo1.svg', id: 'visa_documents' },
      { image: 'logo2.svg', id: 'bankid' },
      { image: 'logo3.svg', id: 'job_taxes' },
      { image: 'logo4.svg', id: 'education' },
      { image: 'logo12.svg', id: 'nav' },
      { image: 'logo5.svg', id: 'healthcare' },
      { image: 'logo6.svg', id: 'bank_account' },
      { image: 'logo7.svg', id: 'housing' },
      { image: 'logo7.svg', id: 'norwegian_culture' },
      { image: 'logo8.svg', id: 'learn_norwegian' },
      { image: 'logo9.svg', id: 'family_children' },
      { image: 'logo11.svg', id: 'explore_norway' },
      { image: 'logo12.svg', id: 'leisure_volunteering' },
    ];
  
    const { t } = useTranslation();

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {topics.map((topic, index) => (
        <div key={index} style={{ flex: '0 1 21%', margin: '10px', maxWidth: '21%' }}>
        <TopicBox 
          image={topic.image} 
          title={t(`topics.${topic.id}.title`)} 
          description={t(`topics.${topic.id}.description`)} 
        />
        </div>
      ))}
      </div>
    );
  }


export default HomePage;