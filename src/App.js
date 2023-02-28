import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Gallery from './gallery';



   
const apikey ="10a8819164b71223493a1784a7e8da65";
const App = () => {
  
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div className='main'>
    <div className='headings'>
    <h2>SnapShot <sub >Get Your Fav Snap👻.</sub></h2>
   </div>
   <input type="text" id='search' value={search} onChange={changeHandler} placeholder='Search...'></input><span onClick={submitHandler}>🔍</span>
   <div className='buttons'>
    <button className='btn btn-warning' >Mountains</button>
    <button className='btn btn-warning'>Beaches</button>
    <button className='btn btn-warning'>Birds</button>
    <button className='btn btn-warning'>Food</button>
   </div>
  
   
    
      < Gallery  data={data}/>
   
   </div>

  );}

  
export default App;
