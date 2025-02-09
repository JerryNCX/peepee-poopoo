import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Main Page Component
const MainPage = () => (
  <div style={styles.container}>
    <Header />
    <div style={styles.content}>
      <h2>Welcome, System Administrator</h2>
      <div style={styles.navButtons}>
        <Link to="/fees" style={styles.button}>Fees Calculation</Link>
        <Link to="/data" style={styles.button}>Data Management</Link>
      </div>
    </div>
  </div>
);

// Fees Calculation Page
const FeesCalculationPage = () => {
  const [feesData] = useState([
    {
      user: 'SMS',
      fees: 'BSC0000',
      bookingId: 'WTM-Directory',
      to: 'Data Mining Inc.',
      manager: 'Others',
      term: 'Others',
      details: 'Others'
    }
  ]);

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <h2>Fee Calculation Management</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Fees</th>
              <th>Booking ID</th>
              <th>To</th>
              <th>Manager</th>
              <th>Term</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {feesData.map((row, index) => (
              <tr key={index}>
                <td>{row.user}</td>
                <td>{row.fees}</td>
                <td>{row.bookingId}</td>
                <td>{row.to}</td>
                <td>{row.manager}</td>
                <td>{row.term}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Data Management Page
const DataManagementPage = () => {
  const [selectedOption, setSelectedOption] = useState('users');

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <h2>Data Management</h2>
        <div style={styles.toggleContainer}>
          <button 
            style={{...styles.toggleButton, ...(selectedOption === 'users' && styles.activeToggle)}}
            onClick={() => setSelectedOption('users')}
          >
            Users
          </button>
          <button
            style={{...styles.toggleButton, ...(selectedOption === 'drivers' && styles.activeToggle)}}
            onClick={() => setSelectedOption('drivers')}
          >
            Drivers
          </button>
        </div>
        
        {/* Data Table - Similar structure to fees page but would normally show different data */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>{selectedOption === 'users' ? 'John User' : 'Mike Driver'}</td>
              <td>{selectedOption === 'users' ? 'Premium' : 'Verified'}</td>
              <td>Active</td>
              <td>
                <button style={styles.smallButton}>Edit</button>
                <button style={styles.smallButton}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Common Header Component
const Header = () => (
  <div style={styles.header}>
    <h1 style={styles.headerTitle}>Spot & Tow</h1>
    <nav style={styles.nav}>
      <Link to="/" style={styles.navLink}>Home</Link>
      <Link to="/fees" style={styles.navLink}>Fees</Link>
      <Link to="/data" style={styles.navLink}>Data</Link>
    </nav>
  </div>
);

// Style definitions
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderBottom: '1px solid #ddd',
  },
  headerTitle: {
    margin: 0,
    color: '#333',
  },
  nav: {
    marginTop: '10px',
  },
  navLink: {
    marginRight: '15px',
    textDecoration: 'none',
    color: '#007bff',
  },
  content: {
    padding: '20px',
  },
  navButtons: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  toggleContainer: {
    margin: '20px 0',
    display: 'flex',
    gap: '10px',
  },
  toggleButton: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  activeToggle: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  smallButton: {
    padding: '5px 10px',
    margin: '0 2px',
    fontSize: '0.8em',
  }
};

// App Router
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/fees" element={<FeesCalculationPage />} />
      <Route path="/data" element={<DataManagementPage />} />
    </Routes>
  </Router>
);

export default App;