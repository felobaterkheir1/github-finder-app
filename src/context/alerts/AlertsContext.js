import AlertReducers from "../../reducers/AlertsReducers";

const { createContext, useReducer } = require("react");


const AlertContext = createContext();

export const AlertProvider = ({children}) => {

    const initState = null

    const [state, dispatch] = useReducer(AlertReducers, initState)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000 )
    }
    return(
        <AlertContext.Provider value={{
            alert: state,
            setAlert,
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;