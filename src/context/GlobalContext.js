import { createContext, useReducer } from 'react'
import ContextReducer from './ContextReducer'
import axios from 'axios'

const initialState = {
    user_ip: '',
    ip_address: 'loading...',

    isp: 'loading...',
    timezone: 'loading...',
    city: 'loading...',
    location: [0, 0]
}

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ContextReducer, initialState)

    const findIP = async (ip) => {
        try {
            const result = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_KEY}&ipAddress=${ip}`)

            dispatch({
                type: 'FIND',
                payload: result.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR'
            })
        }
    }

    const getUserIP = async () => {
        try {
            const result = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_KEY}`)

            dispatch({
                type: 'FIND',
                payload: result.data
            })
        } catch (err) {
            dispatch({type: 'ERROR'})
        }
    }

    return (
        <GlobalContext.Provider value={ { state, findIP, getUserIP } }>
            { children }
        </GlobalContext.Provider>
    )
}