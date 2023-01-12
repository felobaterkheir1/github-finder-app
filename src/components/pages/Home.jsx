import React from 'react'
import Alert from '../layout/Alert'
import UserResults from '../users/UserResults'
import UsersSearch from '../users/UsersSearch'

const Home = () => {
  return (
    <div>
      <Alert />
      <UsersSearch />
      <UserResults />
    </div>
  )
}

export default Home
