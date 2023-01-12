import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alerts/AlertsContext';
import UsersContext from '../../context/github/UsersContext';
import { searchUsers } from '../../context/github/UsersAction';

const UsersSearch = () => {

    const [text, setText] = useState('');

    const { users, dispatch } = useContext(UsersContext); 
    const { setAlert } = useContext(AlertContext)

    const handleText = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('please enter something', 'error')
        }else{
            // @-todo search users
            const users = await searchUsers(text)
            setText('')
            dispatch({
                type: 'GET_USERS',
                payload: users
            })
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                    <input onChange={handleText} className='w-full pr-40 bg-gray-200 input input-lg text-black' type='text' placeholder='Search Users' value={text}/>
                    <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>     
                    </div>        
                </div>   
            </form>    
        </div>
        {users.length > 0 &&  (
            <div>
                <button onClick={()=> dispatch({
            type: 'CLEAR_USERS'
        })} className='btn btn-ghost btn-lg' >Clear</button>
            </div>
        )}
    </div>
  )
}

export default UsersSearch
