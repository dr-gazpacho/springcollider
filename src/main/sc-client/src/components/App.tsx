import '../App.css'
import { useState } from 'react';
import { Slider } from './controls/slider';
 
import { Link } from 'react-router-dom';
import { api, HTTPMETHOD, ENDPOINT } from '../services/api';


function App() {

  const testRequest = api(HTTPMETHOD.GET, ENDPOINT.TEST, null);
  console.log(testRequest);

  return (
    <>
      <Slider/>
      <Link to='/cake'>Visit /cake</Link>
    </>
  )
}

export default App


