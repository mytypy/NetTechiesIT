import { useEffect } from 'react'
import { isauth } from '../requests/user/isAuth'
import { useNavigate } from 'react-router'
import { useUser } from './UserContext'
import { refresh } from '../requests/refresh/refresh'


export default function IsAuth({ children }) {
    const { user, setUser } = useUser()
    const navigate = useNavigate()


    useEffect(() => {
        async function request() {
            let { status, resp } = await isauth()

            if (status == 200) {
                setUser(resp.data.response)
                console.log(resp.data.response)
                return
            }

            const refreshResult = await refresh()

            if (refreshResult.status == 400) {
                navigate('/login')
                
            } else {
                ({ status, resp } = await isauth())

                 if (status === 200) {
                    setUser(resp.data.response)
                } else {
                    navigate('/login')
                }
            }
        }   

        request()
    }, [])
    
    if (!user) {
        return <h1 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%'}}>Загрузка</h1>
    }
    return children
}