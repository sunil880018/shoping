import React from 'react'
import {Link} from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function Users() {
    
    return (
        <div className="user">
            <div className="myuser">
                <h2> <CheckCircleIcon/> Select an Option</h2>
                <div className="users"><Link to="/allusers/">All User</Link></div>
                <div  className="create-user"><Link to="/createuser/">Create User</Link></div>
            </div>
        </div>
    )
}

export default Users
