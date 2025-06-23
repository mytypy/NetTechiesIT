import axios from "axios";


export async function isauth() {
    try {
        const request = await axios.get('http://127.0.0.1:8000/api/user/user/', {withCredentials: true})
        return {status: 200, resp: request}
    } catch (error) {
        return {status: 401, resp: error}
    }
}