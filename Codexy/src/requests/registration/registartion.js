import axios from "axios";


export async function registration(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/registration/', data)
        return {status: 201, resp: response}
    } catch (error) {
        return {status: 0, resp: error}
    }
}