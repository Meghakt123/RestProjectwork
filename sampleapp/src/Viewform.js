import React, { useEffect, useState } from 'react'
import {Button, Table} from 'react-bootstrap'

const baseurl='http://127.0.0.1:8000'
function Viewform() {
  const [first, setfirst] = useState([])
  useEffect(() => {
    fetch(baseurl+'/home/').then(response=>response.json()).then(data=>setfirst(data))  //home is the table view data
    .catch(err=>console.log(err))
  
  }, [])
  
  console.log(first)

  const handleDelete= async(id) => {
      await fetch(`${baseurl}/data_delete/${id}`, {
        method:"DELETE",
        headers: {
          "content-type":"application/json"
      }
    })
    setfirst(first.filter(_list=>_list.id !== id))
  }
  return (
    <div>
         <Table striped>
      <thead>
        <tr>
          <th>SI No</th>
          <th>Subject</th>
          <th>Description</th>
          
        </tr>
      </thead>
      <tbody>
        {first.map((list,index)=>(     //index is for SI No
        <tr>
          <td key={index}>{index}</td>
          <td>{list.subject}</td>
          <td>{list.description}</td>
          <td><Button variant="danger" onClick={()=>handleDelete(list.id)}>Delete</Button></td>
          
        </tr>
        ))}
      </tbody>
    </Table>
  
    </div>
  )
}

export default Viewform