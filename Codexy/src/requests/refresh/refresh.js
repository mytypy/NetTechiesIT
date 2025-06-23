import axios from "axios";


export async function refresh() {
    try {
        const request = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {}, {withCredentials: true})
        return {status: 200, resp: request}
    } catch (error) {
        return {status: 400, resp: error}
    }
}