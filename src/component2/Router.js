import { Route, Routes } from 'react-router-dom'
import Login from './Login';
import Planet from './Planet';
const AllRouter =()=>{
return(
    <>
    <Routes>
        <Route path='/' element={ <Login />}/>
        <Route path='/planet' element={<Planet/>}/>
    </Routes>
    </>
)
}
export default AllRouter;