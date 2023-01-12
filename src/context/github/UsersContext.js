import { createContext, useReducer } from "react";
import GithubReducers from "../../reducers/GithubReducers";

const UsersContext = createContext();



export const UsersProvider = ({children}) =>{
    // const [users, setUsers] = useState([])
    const initialState = {
        users: [],
        user: {},
        repos: []
    }
    const [state, dispatch] = useReducer(GithubReducers, initialState)

    return(
        <UsersContext.Provider value={{
            ...state,
            dispatch,       
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext