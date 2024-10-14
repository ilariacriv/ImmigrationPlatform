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
        </div>
      </nav>
    );
  };

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff'
    },
    button: {
        backgroundColor: '#555',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
    },
    searchBar: {
        padding: '10px',
        width: '200px'
    }
};

const leftItems = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: '10px' // Add space between items
};

const rightItems = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    gap: '10px'
};

export default NavigationBar;