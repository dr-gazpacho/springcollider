import '../App.css'
// import { useState } from 'react';
import { Slider } from './controls/slider';
import { Button } from './controls/button';
 
// import { Link } from 'react-router-dom';
import { ENDPOINT, SliderVariant } from '../types';


function App() {

  return (
    <>
      <Slider variant={SliderVariant.FREQUENCY}/>
      <Slider variant={SliderVariant.VOLUME}/>
      <Button name="create" endpoint={ENDPOINT.CREATETEST}/>
      <Button name="free" endpoint={ENDPOINT.FREE} />
      {/* <Link to='/cake'>Visit /cake</Link> */}
    </>
  )
}

export default App


