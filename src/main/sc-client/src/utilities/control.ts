import { ENDPOINT, HTTPMETHOD, SliderConfig, SliderVariant } from "../types"



export function getSliderConfig(variant: SliderVariant): SliderConfig {
    switch(variant){
        case SliderVariant.FREQUENCY:
            return {
                symbol: "frequency",
                value: 440,
                endpoint: ENDPOINT.FREQ,
                httpMethod: HTTPMETHOD.POST,
                min: 0,
                max: 880
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

}