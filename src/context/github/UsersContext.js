import { createContext, useReducer } from "react";
import GithubReducers from "../../reducers/GithubReducers";

const UsersContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const UsersProvider = ({children}) =>{
    // const [users, setUsers] = useState([])
    const initialState = {
        users: []
    }
    const [state, dispatch] = useReducer(GithubReducers, initialState)

    // this fetchUsers function is for testing purposes only
    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            },
        })
        const {items} = await response.json()
        // console.log(data)
        // setUsers(data)
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const handleClear = () => {
        dispatch({
            type: 'CLEAR_USERS',
            payload: state
        })
    }

    return(
        <UsersContext.Provider value={{
            users: state.users,
            searchUsers,
            handleClear       
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext