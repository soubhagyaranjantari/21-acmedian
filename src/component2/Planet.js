import { useState,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../Sclice";
const Planet = () => {
  const [search,setSearch]=useState('')
  const data=useSelector(state=>state.star)
  const dispatch=useDispatch()
  const handleSearch=(e)=>{
    setSearch(e.target.value.toLowerCase())
    dispatch(searchData(search))
  }
  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input id="search" type="text" placeholder="a" onChange={handleSearch}/>
      </div>
      {/*
        * Replace the section below with the results of the search
        */}
      <section>
        <header>
          <div className="col">Name</div>
          <div className="col">Population</div>
        </header>
        <div>
          {
            data?.map((ele,ind)=>{
              return(
              <div key={ind}>
                <div className="col">ele.results.name</div>
                <div title={ele.results.population} className="col">{'\u{1F468}\u{1F468}\u{1F468}\u{1F468}\u{1F468}'}</div>
              </div>
              )
            })
          }
        </div>
      </section>
      <br/>
      <div className="error">No planet matching search term</div>
    </div>
  )
}

export default Planet;