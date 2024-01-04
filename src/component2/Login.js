import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStarWarData } from './redux/StarSclice';
import axios from 'axios';

const Login = () => {
  const [logIn, setLogin] = useState({
    Username: '',
    Password: '',
  }
  );
  const starData = useSelector((state) => state.star);
  console.log('data in log in page', starData.starPlanet);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...logIn,
      [name]: value,
    });
  };
  const [people, setPeople] = useState(null)
  const fetchPeople = async () => {
    const response = await axios.get('https://swapi.dev/api/people/')
    const result = response.data
    setPeople(result.results)
    
  }
  console.log('people data', people);
  useEffect(() => {
    fetchPeople()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    const { Username, Password } = logIn;
    if (Username.length < 3 && Password < 3) {
      alert('Enter  valid input')
    }

    // const verifyCredentials=[

    // ]
    const isValid = people?.some(e => {
      return e.name === logIn.Username && e.birth_year === logIn.Password
    })

    if (isValid) {
      navigate('/planet');
    } else {
      console.log('Authentication failed');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Star Wars</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{' '}
          </label>
          <input
            id="username"
            type="text"
            onChange={handleLogin}
            name="Username"
            value={logIn.Username}
          />
        </div>
        <br />
        <div className="flex">
          <label className="label-password" htmlFor="password">
            Password{' '}
          </label>
          <input
            id="password"
            type="password"
            onChange={handleLogin}
            name="Password"
            value={logIn.Password}
          />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
