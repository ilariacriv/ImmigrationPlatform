
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TopicPage from './pages/TopicPage';
import { useTranslation } from 'react-i18next';


function Header() {
  const { t } = useTranslation();
  return (
    <header className="banner">
      <img src="norwayfjord.jpg" alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1> {t('homepage.websitetitle')}</h1>
        <p>{t('homepage.websitedescription')}</p>
      </div>
    </header>
    );
}


const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <NavigationBar />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/topics/:id" element={<TopicPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;