import React, { useState, useEffect } from 'react'
import "./App.css"

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries details:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Country List</h1>

      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th className='table-header'>Name</th>
              <th>Alpha Code</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(country => (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.alpha3Code}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td className='flag'>
                  <img src={country.flag} alt={'Flag'} style={{ width: '100px', height: '60px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App