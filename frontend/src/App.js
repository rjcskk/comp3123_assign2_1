import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/empdb')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>>
    </div>
  );
}

export default App;
