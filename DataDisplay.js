import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JsonDataDisplay = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8008/numbers');
      setJsonData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>JSON Data Display</h1>
      <ul>
        {jsonData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonDataDisplay;
