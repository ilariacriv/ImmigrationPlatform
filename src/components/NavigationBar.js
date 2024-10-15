import React,  { useEffect }  from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
      console.log('Current language:', i18n.language);
    }, [i18n.language]);
  
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
      navigate(`/home`);
    };
    const handleAboutClick = () => {
      navigate(`/about`);
    };
  
    return (
      <nav style={styles.navbar}>
        <div style={leftItems}>
          <button style={styles.button} onClick={handleHomeClick}>{t('navbar.home')}</button>
          <button style={styles.button}>{t('navbar.menu')}</button>
        </div>
        <div style={rightItems}>
          <input type="text" placeholder={t('navbar.placeholder')} style={styles.searchBar} />
          <button style={styles.button}>{t('navbar.search')}</button>
          <select style={styles.button} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="no">Norwegian</option>
          </select>
        <button style={styles.button} onClick={handleAboutClick}>{t('footer.about')}</button>
        </div>
      </nav>
    );
  };
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#800020', // Bordeaux
      color: '#ecf0f1',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    button: {
      backgroundColor: '#a52a2a', // Bordeaux
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease'
    },
    buttonHover: {
      backgroundColor: '#800020' // Bordeaux
    },
    searchBar: {
      padding: '10px',
      width: '200px',
      borderRadius: '4px',
      border: '1px solid #a52a2a' // Bordeaux
    }
  };

  const leftItems = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: '15px' // Add space between items
  };

  const rightItems = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    gap: '15px'
  };

  export default NavigationBar;