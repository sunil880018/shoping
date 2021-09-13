import React from 'react'
import {useState,useEffect} from 'react'
function AllUsers() {

    const [user , getUser] = useState([{}]);
  
    const getData = async() =>{
         try{
             const res = await fetch('/getUsers' , {
                 method:"GET",
                 headers:{
                     Accept:"application/json",
                     "Content-Type":"application/json"
                 },
                 credentials:"include"
             })
            const data = await res.json();
            getUser(data);
         }catch(err){
            console.log(err);
         }
    }

    useEffect(() => {
        getData();
    })
    
    const [name , setName] = useState('');
    const deleteUser = (myname) =>{
         setName(myname);
         console.log(name);
    }

    const deletemyUser = async (e) =>{
        const res = await fetch("/delete" ,{
           method:"DELETE",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
               name
           })
       })
       console.log(name);
       await res.json();
    }
    useEffect(()=>{
        deletemyUser();
    });
    return (
        <div className="all-user">
          <h2>All Users</h2>
            <table>
               <tr><th>Username</th></tr>
                {
                 user.map((data,ind,arr) =>{
                return ( <tr  key={ind}><td>{data["name"]} <button className="delete-user"  onClick={() => deleteUser(data["name"])}>Delete</button></td></tr>)
                 })
                }
            </table>
        </div>
    )
}

export default AllUsers
