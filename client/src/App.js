import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/items');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch items');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monolithic App Demo</h1>
        <p>React Frontend + Express API + PostgreSQL Database</p>
        
        <button 
          onClick={fetchItems} 
          disabled={loading}
          className="fetch-button"
        >
          {loading ? 'Loading...' : 'Fetch Items from Database'}
        </button>
        
        {error && <p className="error">Error: {error}</p>}
        
        {items.length > 0 && (
          <div className="items-container">
            <h2>Items from Database:</h2>
            <ul className="items-list">
              {items.map(item => (
                <li key={item.id} className="item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <small>Created: {new Date(item.created_at).toLocaleString()}</small>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
