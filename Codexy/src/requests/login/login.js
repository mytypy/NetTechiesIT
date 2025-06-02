import axios from "axios";


export async function login(data) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', data);
      return {status: 200, resp: response}
    } catch (error) {
    return {status: 400, resp: error}
    }
  }