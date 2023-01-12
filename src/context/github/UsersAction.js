import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

// this Function for searching users
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    })

    // SEARCH USERS USING AXIOS:
    const response = await github.get(`/search/users?${params}`);
    return response.data.items

    // SEARCH USERS USING FETCH API:
    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //     headers: {
    //         Authorization: `token ${GITHUB_TOKEN}`
    //     },
    // })
    // const {items} = await response.json()
    // // console.log(data)
    // // setUsers(data)
    // return items
}


export const getUserAndRepo = async (login) => {

    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return {user: user.data, repos: repos.data}
}



// // Get Single User
// export const getUser = async (login) => {

//     // GET SINGLE USER USING AXIOS:
//     const response = await github.get(`/users/${login}`)
    
//     // GET SINGLE USER USING FETCH API:
//     // const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     //     headers: {
//     //         Authorization: `token ${GITHUB_TOKEN}`
//     //     },
//     // })

//     if(response.status === 404){
//         window.location = '/notfound'
//     }else{
//         // const data = await response.json()
//         // console.log(data)
//         // setUsers(data)
//         // return data
//         return response.data
//     }
    
// }


// // get repos
// export const getRepos = async (login) => {

//     // GETTING USER REPO USING AXIOS:
//     const response = await github.get(`/users/${login}/repos`)


//     // GET USER REPO USING FETCH API:
//     // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     //     headers: {
//     //         Authorization: `token ${GITHUB_TOKEN}`
//     //     },
//     // })

//     if(response.status === 404){
//         window.location = '/notfound'
//     }else{
//         return response.data
//         // const data = await response.json()
//         // console.log(data)
//         // setUsers(data)
//         // return data
//     }
    
// }