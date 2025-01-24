import { ENDPOINT, HTTPMETHOD, SliderConfig, SliderVariant } from "../types/types-and-such";



export function getSliderConfig(variant: SliderVariant): SliderConfig {
    switch(variant){
        case SliderVariant.CARRIER:
            return {
                symbol: "frequency",
                value: 440,
                endpoint: ENDPOINT.CARRIER,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
            } as SliderConfig
        case SliderVariant.MODULATOR:
            return {
                symbol: "frequency",
                value: 440,
                endpoint: ENDPOINT.MODULATOR,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
            } as SliderConfig
        case SliderVariant.LFO:
            return {
                symbol: "frequency",
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