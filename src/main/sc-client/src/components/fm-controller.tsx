// import { useState } from 'react';
import { Slider } from './controls/slider';
import { Button } from './controls/button';
import { ENDPOINT, SliderVariant } from '../types/types-and-such';


export function FMController() {
    return (
        <div>
            <Slider variant={SliderVariant.CARRIER}/>
            <Slider variant={SliderVariant.MODULATOR}/>
            <Slider variant={SliderVariant.VOLUME}/>
            <Button name="create" endpoint={ENDPOINT.ON}/>
            <Button name="free" endpoint={ENDPOINT.OFF} />
        </div>
    )

}