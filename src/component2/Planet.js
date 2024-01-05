import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarWarData } from "./redux/StarSclice";

const Planet = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [existingData, setExistingData] = useState([]); // State to store existing data

  const starData = useSelector((state) => state.star.starPlanet);

  const fetchDataWithDelay = () => {
    // Dispatch the fetchStarWarData action to fetch data
    dispatch(fetchStarWarData());
  };
console.log(existingData);
  useEffect(() => {
    if (starData && currentIndex < starData.length) {
      const timeoutId = setTimeout(() => {
        setExistingData((prevData) => [...prevData, starData[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex,starData]);

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetchDataWithDelay();
  // }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <div style={{ width: '70%', marginTop: '10px', marginLeft: "40%" }}><h1>Search for planets</h1></div>
      <div>
        <input
          style={{ width: '20%', height: "20px", marginTop: '10px', marginLeft: "40%" }}
          id="search"
          type="text"
          placeholder="Search"
          onChange={fetchDataWithDelay}
        />
        <button style={{padding:"10px 20px"}} onClick={fetchDataWithDelay}>fetch</button>
      </div>

      {/* Your input and button code here */}

      <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '10px', marginLeft: "13%" }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Population</th>
          </tr>
        </thead>
        <tbody>
          {existingData.map((planet, index) => (
            <tr key={index} style={index % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: 'white' }}>
              <td style={tableCellStyle}>{planet.name}</td>
              <td style={tableCellStyle} title={planet.population}>
                {planet.population}
              </td>
            </tr>
          ))}
          {currentIndex < starData.length && (
            <tr key={currentIndex} style={currentIndex % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: 'white' }}>
              <td style={tableCellStyle}>{starData[currentIndex].name}</td>
              <td style={tableCellStyle} title={starData[currentIndex].population}>
                {starData[currentIndex].population}
              </td>
            </tr>
          )}
          {currentIndex === starData.length && (
            <tr>
              <td colSpan="2" className="error" style={errorStyle}>
                No more planets
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Planet;

// Define or replace these styles with the desired styles
const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

const errorStyle = {
  padding: '10px',
  textAlign: 'center',
  color: 'red',
};
