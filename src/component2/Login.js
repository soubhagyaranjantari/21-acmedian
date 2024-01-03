import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { fetchData } from '../Sclice';
const Login = () => {
  // const userName=["Luke Skywalker",'Watto']
  // const password=['19BBY','unknown']
  const [logIn,setLogin]=useState({
    Username:"",
    Password:""
  })
  const dispatch=useDispatch()
const navigate = useNavigate()
  const handleLogin=(e)=>{
    const {name,value}=e.target
    setLogin({
      ...logIn,[name]:value
    })
  }
  const handleSubmit=()=>{
    if ((logIn.Username ==='Luke Skywalker' && logIn.Password=="19BBy")  || (logIn.Username==="Watto" && logIn.Password==="unknown")) {
      navigate('/planet')
      dispatch(fetchData())
      setLogin({})
    }
    else{
      console.log('Authentication failed');
    }
  }
  return (
    <div className='flex-container'>
         <h1>Star Wars</h1>
      <div className="flex">
        <label className='label-login' htmlFor="username">Name </label>
        <input id="username" type="text" onChange={handleLogin} name='Username' value={logIn.Username} />
      </div>
      <br/>
      <div className="flex">
        <label className='label-password' htmlFor="password">Password </label>
        <input id="password" type="password" onChange={handleLogin} name='Password' value={logIn.Password}/>
      </div>
      <br/>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login;