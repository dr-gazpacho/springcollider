import { ENDPOINT, HTTPMETHOD, SliderConfig, SliderVariant } from "../types/types-and-such";



export function getSliderConfig(variant: SliderVariant): SliderConfig {
    switch(variant){
        case SliderVariant.CARRIER:
            return {
                //TO DO - rename this symbol... ultimately it needs to refer to the variable name in SC
                //One FM voice could just run off ratios, another could allow for full mixing of two waves/forms
                symbol: "carrier",
                value: 220,
                endpoint: ENDPOINT.CARRIER_FREEQUENCY,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
            } as SliderConfig
        case SliderVariant.CARRIER_RATIO:
            return {
                symbol: "carrier",
                value: 1,
                endpoint: ENDPOINT.CARRIER_RATIO,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 10
            } as SliderConfig
        case SliderVariant.MODULATOR_RATIO:
            return {
                symbol: "carrier",
                value: 1,
                endpoint: ENDPOINT.MODULATOR_RATIO,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 10
            } as SliderConfig
        case SliderVariant.VOLUME:
            return {
                symbol: "volume",
                value: 6,
                endpoint: ENDPOINT.VOLUME,
                httpMethod: HTTPMETHOD.POST,
                min: -40,
                max: 6
            } as SliderConfig
        default:
            return {
                symbol: "volume",
                value: 6,
                min: -40,
                max: 6
            } as SliderConfig
    }

};