import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AddtoCartpage() {
    const {id}=useParams()
    console.log(id)
    const [data, setData] = useState('')
     useEffect(()=>{ 
        fetch (`http://localhost:3000/data/${id}`)
        .then((res) => res.json())
        .then((res) =>   setData(res))
        .catch((err) => console.log(err))
    },[])  
    console.log(data)

  return (
    <div>
      <h1> {data.id}</h1>
    </div>
  )
}

export default AddtoCartpage
