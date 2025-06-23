import axios from "axios";


export async function login(data) {
    try {
      await axios.post('http://127.0.0.1:8000/api/token/', data, {withCredentials: true});
      const response = await axios.get('http://127.0.0.1:8000/api/user/user/', {withCredentials: true})

      return {status: 200, resp: response}
    } catch (error) {
    return {status: 400}
    }
  }