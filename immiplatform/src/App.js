
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import React from 'react';
import HomePage from './pages/HomePage';


function Header() {
  return (
    <header>
      <h1>Header with logo</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
    <NavigationBar />
      <HomePage />
      <Footer />
    </div>
  );
}


export default App;
