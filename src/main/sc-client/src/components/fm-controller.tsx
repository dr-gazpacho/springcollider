// import { useState } from 'react';
import { Slider } from './controls/slider';
import { Button } from './controls/button';
import { ENDPOINT, SliderVariant } from '../types';


export function FMController() {
    return (
        <div>
                    <Slider variant={SliderVariant.FREQUENCY}/>
      <Slider variant={SliderVariant.VOLUME}/>
      <Button name="create" endpoint={ENDPOINT.CREATETEST}/>
      <Button name="free" endpoint={ENDPOINT.FREE} />
        </div>
    )

}