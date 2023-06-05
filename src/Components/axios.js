import React, { useState, useEffect } from "react";
import { fetchTrainings } from "./action";
import './axios.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

require('bootstrap');

 
function Api() {     
  
    
    const [post, setPost] = useState([]);     
    
    const [displayShow, setDisplayShow] = useState(false)    
    const handleNotshow = () => setDisplayShow(false);
    const handleshow = () => setDisplayShow(true)

    const [rowNo, setRowNo] = useState([])       

     

    useEffect(() => {
        async function getDetail(){
            const response = await fetchTrainings();
        setPost(response);
        }
        getDetail();
        
    }, []);

    if (!post) return null;   
    return (

      <div className="App">
        <button onClick={handleshow}>open</button>
         <table className="table table-hover table-dark"> 
<thead>
  <tr>
    <th scope="col">id</th>
    <th scope="col">Name</th>
    <th scope="col">username</th>
    <th scope="col">email</th>
    <th scope="col">street</th>
    <th scope="col">suite</th>
    <th scope="col">city</th>
    <th scope="col">zipcode</th>
  </tr>
</thead>
      
              <tbody>       
           {
            post.map((p)=>{
             return (
               
               <tr onClick={()=>handleshow(p.id)} key={p.id}>                
               <td>{p.id}</td>
               <td>{p.name}</td>
               <td>{p.username}</td>
               <td>{p.email}</td>        
               <td>{p.address.street}</td> 
               <td>{p.address.suite}</td>
               <td>{p.address.city}</td>
               <td>{p.address.zipcode}</td>    
               </tr>
                                                
             ) 
            })
            
           }
           </tbody>
          </table>
          
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      
        {post.map((info) => {
          return (
      <Modal show={displayShow}  onHide={handleNotshow} animation={false} >
      <Modal.Header closeButton>        
          <Modal.Title key={info.id}>{info.name}</Modal.Title>          
        </Modal.Header>

        <Modal.Body>
          <label> username</label>
          <input defaultValue={info.username}></input><br/>
          <label> email</label>
          <input defaultValue={info.email}></input><br/>
          <label> street</label>
          <input defaultValue={info.address.street}></input><br/>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNotshow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNotshow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          )
        })
      }
          </div>
  


           </div>
    )
          }  
             
                                                                                               
export default Api;