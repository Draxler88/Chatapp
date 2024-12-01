import React from "react"
import User from "./User";
import AddUser from "./addUser";
import axios from "axios"
import { useState, useEffect } from "react";
const Users = () => {

    const [ data, setData]  = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:4000/chatapp/users").then(response => {
        setData(response.data)
      })
    },[])

    return(
        <div className="relative col-span-2 bg-green-100 shadow-lg p-4 rounded-lg ">
            {data.map((user) => (
                 <User id={user._id} key={user._id} name={`${user.firstName} ${user.lastName}`} image={user.image} />
                ))}
                <AddUser />
      </div>
    )
}

export default Users;