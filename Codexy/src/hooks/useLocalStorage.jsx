import { useState, useEffect } from "react";


export default function useLocalStoarge(key, initialValue) {
    const [ value, setValue ] = useState(() => {
        const localdata = localStorage.getItem(key)

        if (localdata) {
            return JSON.parse(localdata)
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}