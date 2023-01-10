import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const UserItem = ({ users }) => {
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <div className='card shadow-md compact side bg-base-100' key={user.id}>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className='avatar'>
                        <div className='rounded-full shadow w-14 h-14'>
                            <img src={user.avatar_url} alt='Profile' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
          <h2 className='card-title'>{user.login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/users/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
        </div>
      ))}
    </div>
  )
}

UserItem.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserItem
