import React from 'react'
import {useState} from 'react'
//import {useHistory} from 'react-router-dom'
function CreateUser() {
    //const history  = useHistory();
    const [user, setUserData] = useState({
        name:"" , password:""
    });

    const [msg , setMsg] = useState('');

    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        console.log(e);
        setUserData({...user , [name]:value});
    }
    const submitData = async (e) =>{
        e.preventDefault();
        const {name,password} = user;

        const res = await fetch("/register" ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,password
            })
        })
         setMsg("User Created successfully.");
         setUserData({name:"" , password:""});
         window.alert("user created")
         //history.push('/login');
         await res.json();
         
    }
    return (
        <div className="create-user">
            <form method="POST">
               <h1>Create User</h1>
                 <input type="text" placeholder="Username" name="name" value={user.name} onChange={handleInputs} required/><br/>
                 <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputs} required/><br/>
                 <button type="submit" onClick={submitData}>Create</button>
                 <p style={{color:'green',margin:'20px 0px'}}>{msg}</p>
            </form>
        </div>
    )
}

export default CreateUser
