import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarWarData, searchData } from "./redux/StarSclice";
import { useEffect } from "react";

const Planet = () => {
//   const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {

    dispatch(fetchStarWarData(e.target.value))
  };



  const starData = useSelector((state) => state.star.starPlanet);
  console.log('selector data in planet ', starData);

  return (
    <div>
      <div style={{ width: '70%', marginTop: '10px',marginLeft:"40%" }}><h1>Search for planets</h1></div>
      <div>
        <input
        style={{ width: '20%',height:"20px", marginTop: '10px',marginLeft:"40%" }}
          id="search"
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>

      <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '10px',marginLeft:"13%" }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Population</th>
          </tr>
        </thead>
        <tbody>
          {starData? (
            starData?.map((planet, index) => (
              <tr key={index} style={index % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: 'white' }}>
                <td style={tableCellStyle}>{planet.name}</td>
                <td style={tableCellStyle} title={planet.population}>
                  {'\u{1F468}'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="error" style={errorStyle}>
                No planet matching the search term
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Planet;

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
