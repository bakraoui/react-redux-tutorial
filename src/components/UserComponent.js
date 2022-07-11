import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../state management/users/userActions'

export const UserComponent = ({users, fetchUsers}) => {

    useEffect(() => {
        fetchUsers()
    }, []);

  return (
    <div>
        <h2>List of Users</h2>
        {users.users.map(user => {
            return ( 
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            )
           
        })}
    </div>
  )
}

const mapStateToProps = (state) => ({
    users : state.user
})

const mapDispatchToProps = dispatch =>({
    fetchUsers : () => dispatch(fetchUsers())   
})

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)