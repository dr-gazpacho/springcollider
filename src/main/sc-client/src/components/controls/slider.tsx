import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { SliderVariant } from "../../types";
import { getSliderConfig } from "../../utilities/control";

type SliderProps = {
    variant: SliderVariant
}


export function Slider: React.FC<SliderProps> ({ variant }) {

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