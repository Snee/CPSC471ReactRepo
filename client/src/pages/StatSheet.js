import React, {useState, useEffect} from 'react';
import axios from 'axios';

const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  };
  
  const headerStyles = {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '16px',
  };
  
  const cellStyles = {
    padding: '16px',
    borderBottom: '1px solid #ddd',
  };

  export const User = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/api/getPlayerStats');
            setTableData(response.data);
            console.log(response.data);
        };

        fetchData();
    }, )


  return (
    <div>
    <h1>Data Table</h1>
    <table style={tableStyles}>
      <thead>
        <tr>
          <th style={headerStyles}>GameID</th>
          <th style={headerStyles}>Minutes Played</th>
          <th style={headerStyles}>Points</th>
          <th style={headerStyles}>Assists</th>
          <th style={headerStyles}>Rebounds</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={cellStyles}>{row.GameID}</td>
            <td style={cellStyles}>{row.MinsPlayed}</td>
            <td style={cellStyles}>{row.Points}</td>
            <td style={cellStyles}>{row.NumofAssists}</td>
            <td style={cellStyles}>{row.NumofRebounds}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}  