
import './App.css';
import NavigationBar from './components/NavigationBar';
import TopicBox from './components/TopicBox';
import React from 'react';


function Header() {
  return (
    <header>
      <h1>Header with logo</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />
      <NavigationBar />
      <input 
        type="text" 
        placeholder="Welcome to Norway! What would you like to know?" 
        style={{ margin: '20px', padding: '10px', width: '80%', fontSize: '20px' }} 
      />
      <TopicsGrid 
        image="logo.svg" 
      />
    </div> 
  );
}

function TopicsGrid() {
  const topics = [
    { image: 'logo1.svg', title: 'Visa and documents', description: 'Information about visa and documents' },
    { image: 'logo2.svg', title: 'Housing', description: 'Information about housing' },
    { image: 'logo3.svg', title: 'Jobs', description: 'Information about jobs' },
    { image: 'logo4.svg', title: 'Education', description: 'Information about education' },
    { image: 'logo5.svg', title: 'Healthcare', description: 'Information about healthcare' },
    { image: 'logo6.svg', title: 'Transportation', description: 'Information about transportation' },
    { image: 'logo7.svg', title: 'Culture', description: 'Information about culture' },
    { image: 'logo8.svg', title: 'Language', description: 'Information about language' },
    { image: 'logo9.svg', title: 'Legal', description: 'Information about legal matters' },
    { image: 'logo10.svg', title: 'Finance', description: 'Information about finance' },
    { image: 'logo11.svg', title: 'Shopping', description: 'Information about shopping' },
    { image: 'logo12.svg', title: 'Recreation', description: 'Information about recreation' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {topics.map((topic, index) => (
        <div key={index} style={{ flex: '1 0 21%', margin: '10px', maxWidth: '30%' }}>
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


export default App;
