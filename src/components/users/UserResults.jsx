import React, { useContext } from 'react'
import UsersContext from '../../context/github/UsersContext'
import UserItem from './UserItem'

const UserResults = () => {
    const { users } = useContext(UsersContext)

    // useEffect(() =>{
    //     fetchUsers()
    // })

    
  return (
    <div>
      <UserItem users={users} />
    </div>
  )
}

export default UserResults
