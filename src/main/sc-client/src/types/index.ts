export type SliderConfig = {
    symbol: string,
    value: number,
    endpoint: ENDPOINT,
    httpMethod: HTTPMETHOD,
    min: number,
    max: number,
};

export enum SliderVariant {
    FREQUENCY = "FREQUENCY",
    MODULATOR = "MODULATOR",
    VOLUME = "VOLUME"
};

export enum HTTPMETHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

export enum ENDPOINT {
    VOLUME = "volume",
    FREQ = "frequency",
    CREATETEST = "createTest",
    FREE = "free"
};

export type Configuration = {
    method: HTTPMETHOD;
    headers: {
        [key: string]: string
    }
    body?: any;
};