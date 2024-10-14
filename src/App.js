
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TopicPage from './pages/TopicPage';


function Header() {
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>The Immigration Platform</h1>
    </header>
    );
}

/*function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <Header />
      <NavigationBar onHomeClick={() => handlePageChange('home')} />
      {currentPage === 'home' && <HomePage onTopicClick={() => handlePageChange('topic')} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'topic' && <TopicPage />}
      <Footer onAboutClick={() => handlePageChange('about')} />
    </div>
  );
}
*/

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
