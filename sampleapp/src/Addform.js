import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'


const baseurl='http://127.0.0.1:8000/'
function Addform() {
    const [first, setfirst] = useState({
        'subject':'',
        'description':''
        })
        const handlechange=(event)=>{
            setfirst({
                ...first,
                [event.target.name]:event.target.value
            })
        }
        const submitform=(e)=>{
            e.preventDefault();
            const Detailsdata=new FormData();
            Detailsdata.append('subject',first.subject)
            Detailsdata.append('description',first.description)
            try{
                axios.post(baseurl+'details_view/',first).then((response)=>{console.log(response.data)})
            }
            catch(error){
                console.log(error)
            }
        }
        useEffect(() => {
          document.title='Details_add'
        
          
        }, [])
        
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" name="subject" value={first.subject} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={first.description} onChange={handlechange} />
      </Form.Group>
      <button type="submit" onClick={submitform}>Submit</button>
    </Form>
  )
}

export default Addform