import React from 'react'
import {useState} from 'react'
function Login() {

    const [user, setUserData] = useState({
        name:"" , password:""
    });


    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUserData({...user , [name]:value});
    }
    const submitData = async (e) =>{
        e.preventDefault();
        const {name,password} = user;

        const res = await fetch("/login" ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,password
            })
        })
         setUserData({name:"" , password:""});
         window.alert("login success");
         await res.json();
         
    }
    return (
        <div className="login-form">
            <form method="POST">
                 <h1>Login</h1>
                 <input type="text" placeholder="Username"  name="name" value={user.name} onChange={handleInputs} required /><br/>
                 <input type="password" placeholder="Password"  name="password" value={user.password} onChange={handleInputs} required /><br/>
                 <button type="submit"  onClick={submitData}>Login</button>
            </form>
        </div>
    )
}
export default Login
