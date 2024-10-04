
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


function Header() {
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>The Immigration Platform</h1>
    </header>
    );
}

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <Header />
      <NavigationBar onHomeClick={() => handlePageChange('home')} />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      <Footer onAboutClick={() => handlePageChange('about')} />
    </div>
  );
}


export default App;
