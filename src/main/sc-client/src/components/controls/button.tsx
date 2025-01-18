import { api, HTTPMETHOD, ENDPOINT } from "../../services/api";


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