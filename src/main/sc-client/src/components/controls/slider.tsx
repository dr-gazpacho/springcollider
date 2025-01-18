import { useState, useEffect } from "react";
import { api, HTTPMETHOD, ENDPOINT } from "../../services/api";

type TestSliderConfiguration = {
    symbol: string;
    freqValue: number;
}


export const Slider: React.FC = () => {

    const testSliderConfig: TestSliderConfiguration = {
        symbol: `test`,
        freqValue: 220
    }

    const [value, setValue] = useState(testSliderConfig);

    console.log(`slider: ${value.freqValue}`);

    useEffect(() => {
        console.log('here?')
        api(HTTPMETHOD.POST, ENDPOINT.FREQ, value);
    }, [value.freqValue]);

    return (
        <div>
            <input
                type="range"
                min={220} 
                max={440}
                value={value.freqValue} 
                onChange={(e) => setValue({
                        ...value,
                        freqValue: Number(e.target.value)
                    }
                )}
            >
            </input>
        </div>
    )
}