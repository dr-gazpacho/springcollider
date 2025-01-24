import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { SliderVariant } from "../../types/types-and-such";
import { getSliderConfig } from "../../utilities/control-util";

type SliderProps = {
    variant: SliderVariant
}


export function Slider({ variant }: SliderProps) {

    const sliderConfig = getSliderConfig(variant)

    const [sliderValue, setSliderValue] = useState(sliderConfig);

    console.log(`slider: ${sliderValue.value}`);

    useEffect(() => {
        api(
            sliderConfig.httpMethod,
            sliderConfig.endpoint,
            sliderValue
        );
    }, [sliderValue.value]);

    return (
        <div>
            <input
                type="range"
                min={sliderConfig.min} 
                max={sliderConfig.max}
                value={sliderValue.value} 
                onChange={(e) => setSliderValue({
                        ...sliderValue,
                        value: Number(e.target.value)
                    }
                )}
            >
            </input>
        </div>
    )
}