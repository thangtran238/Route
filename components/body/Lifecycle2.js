import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ShowUser from './ShowUser';

export default function Lifecycle2() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    const getUserAPI = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";
    axios.get(getUserAPI).then((res) => {
      setListUser(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <ShowUser listUser={listUser} />
    </div>
  )
}
