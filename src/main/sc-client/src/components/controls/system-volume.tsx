import { useState, useEffect } from "react";
import { api, HTTPMETHOD, ENDPOINT } from "../../services/api";

type TestSliderConfiguration = {
    symbol: string;
    volume: number;
}


export const SystemVolume: React.FC = () => {

    const testVolume: TestSliderConfiguration = {
        symbol: `volume`,
        volume: 6
    }

    const [value, setValue] = useState(testVolume);

    console.log(`slider: ${value.volume}`);

    useEffect(() => {
        console.log('here?')
        api(HTTPMETHOD.POST, ENDPOINT.VOLUME, value);
    }, [value.volume]);

    return (
        <div>
            <input
                type="range"
                min={-20} 
                max={6}
                value={value.volume} 
                onChange={(e) => setValue({
                        ...value,
                        volume: Number(e.target.value)
                    }
                )}
            >
            </input>
        </div>
    )
}