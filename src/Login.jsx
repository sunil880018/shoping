import React from 'react'

function Login() {
    return (
        <div className="login-form">
            <form>
                 <h1>Login</h1>
                 <input type="text" placeholder="Username" required /><br/>
                 <input type="password" placeholder="Password" required /><br/>
                 <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login
