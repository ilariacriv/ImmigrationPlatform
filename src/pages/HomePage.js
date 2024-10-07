import React from 'react';
import TopicBox from '../components/TopicBox';


const HomePage = () => {
    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <h2>
                Welcome to Norway! What would you like to know? 
            </h2>
            <TopicsGrid />
        </div>
    ); 
};



function TopicsGrid() {
    const topics = [
      { image: 'logo1.svg', title: 'Visa and documents', description: 'Information about visa and documents you need to stay in Norway' },
      { image: 'logo2.svg', title: 'BankID', description: 'You need a BankID to access all digital services in Norway. Find out what it is and how to get one' },
      { image: 'logo3.svg', title: 'Job and Taxes', description: 'Information about how to find a job and about how the Tax system works in Norway' },
      { image: 'logo4.svg', title: 'Education', description: 'Information about education' },
      { image: 'logo12.svg', title: 'NAV', description: 'NAV is the welfare benefits provider in Norway. learn more about the benefits here.' },
      { image: 'logo5.svg', title: 'Healthcare', description: 'Information about the healthcare system' },
      { image: 'logo6.svg', title: 'Bank Account', description: 'Information about opening a bank acount and transferring money' },
      { image: 'logo7.svg', title: 'Housing', description: 'Information about housing' },
      { image: 'logo7.svg', title: 'Norwegian Culture', description: 'Information about culture' },
      { image: 'logo8.svg', title: 'Learn Norwegian', description: 'Information about language' },
      { image: 'logo9.svg', title: 'Family and children', description: 'Information about legal matters' },
      { image: 'logo11.svg', title: 'Explore Norway', description: 'Information about traveling in Norway' },
      { image: 'logo12.svg', title: 'Leisure and Volunteering', description: 'Information about recreation' },
    ];
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {topics.map((topic, index) => (
          <div key={index} style={{ flex: '0 1 21%', margin: '10px', maxWidth: '21%' }}>
            <TopicBox 
              image={topic.image} 
              title={topic.title} 
              description={topic.description} 
            />
          </div>
        ))}
      </div>
    );
  }


export default HomePage;