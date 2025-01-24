import { ENDPOINT, HTTPMETHOD, SliderConfig, SliderVariant } from "../types/types-and-such";



export function getSliderConfig(variant: SliderVariant): SliderConfig {
    switch(variant){
        case SliderVariant.CARRIER:
            return {
                symbol: "carrier",
                value: 220,
                endpoint: ENDPOINT.CARRIER_FREEQUENCY,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
            } as SliderConfig
        case SliderVariant.MODULATOR:
            return {
                symbol: "modulator",
                value: 0,
                endpoint: ENDPOINT.MODULATOR_FREEQUENCY,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
            } as SliderConfig
        case SliderVariant.LFO:
            return {
                symbol: "lfo",
                value: 0,
                endpoint: ENDPOINT.LFO,
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