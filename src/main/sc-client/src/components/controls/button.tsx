import { api} from "../../services/api";
import {HTTPMETHOD, ENDPOINT } from "../../types/types-and-such";


type ButtonProps = {
    name: string,
    endpoint: ENDPOINT
}

export function Button({ name, endpoint }: ButtonProps) {
    return (
        <input value={name} type='button' onClick={() => api(HTTPMETHOD.GET, endpoint)}></input>
    )
}