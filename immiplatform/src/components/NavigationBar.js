import React from 'react';

const NavigationBar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={leftItems}>
                <button style={styles.button}>Home</button>
                <button style={styles.button}>Menu</button>
            </div>
            <div style={rightItems}>
                <input type="text" placeholder="Search..." style={styles.searchBar} />
                <button style={styles.button}>Search</button>
                <button style={styles.button}>Language</button>
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