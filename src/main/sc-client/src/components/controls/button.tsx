import { api} from "../../services/api";
import {HTTPMETHOD, ENDPOINT } from "../../types"


type ButtonProps = {
    name: string,
    endpoint: ENDPOINT
}

export const Button: React.FC<ButtonProps> = ({
    name,
    endpoint
}) => {
    return (
        <input value={name} type='button' onClick={() => api(HTTPMETHOD.GET, endpoint)}></input>
    )
}