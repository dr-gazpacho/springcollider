import { useState } from 'react'
import '../App.css'
 
import { Link } from 'react-router-dom';
import { api, METHOD, RESOURCE } from '../services/api';


function App() {

  const testRequest = api(METHOD.GET, RESOURCE.TEST, null);
  console.log(testRequest);

  return (
    <>
      <Link to='/cake'>Visit /cake</Link>
    </>
  )
}

export default App


