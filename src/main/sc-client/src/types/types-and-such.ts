export type SliderConfig = {
    symbol: string,
    value: number,
    endpoint: ENDPOINT,
    httpMethod: HTTPMETHOD,
    min: number,
    max: number,
};

export enum SliderVariant {
    CARRIER = "CARRIER",
    MODULATOR = "MODULATOR",
    LFO = "LFO",
    VOLUME = "VOLUME"
};

export enum HTTPMETHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

export enum ENDPOINT {
    ON = "on",
    OFF = "off",
    VOLUME = "volume",
    FREE = "free",
    CARRIER_FREEQUENCY = "frequency/carrier",
    MODULATOR_FREEQUENCY = "frequency/modulator",
    LFO = "lfo"
};

export type Configuration = {
    method: HTTPMETHOD;
    headers: {
        [key: string]: string
    }
    body?: any;
};