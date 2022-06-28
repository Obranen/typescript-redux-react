import React, {FC, useEffect} from 'react'
import {useSelectorHook} from '../../hooks/useSelectorHook';
import {fetchUsers} from '../../store/actions/userAction';
import {useDispatchHook} from '../../hooks/useDispatchHook';

const UserList: FC = () => {
    const {users, loading, error} = useSelectorHook(state => state.userReducer)
    const {fetchUsers} = useDispatchHook()

    useEffect(() => {
      fetchUsers()
    }, [])

    if (loading) {
      return <h1>Идёт загрузка...</h1>
    }
    if (error) {
      return <h1>{error}</h1>
    }
    return (
      <>
        {users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </>
    )
  }

export default UserList