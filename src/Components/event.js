import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button, Row } from "react-bootstrap";
import axios from "axios";

const Mode = () => {
    const [post, setPost] = useState([]);
    const [Modalinfo, setModalinfo] = useState ([]);
    const [showModal, setshowModal] = useState (false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    const getDetail = async () => {
try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return setPost(data.data);
} catch(e) {
    console.log(e);
}
    }


    React.useEffect(() => {
        getDetail();
    }, []);
   

const columns = [
    { datafield: "id", text:"Id"},
    { datafield: "name", text: "name" },
    { datafield: "username", text: "username"},
    { datafield: "email", text: "email"},
    { datafield: "street", text: "street"},
    { datafield: "suite", text: "suite"},
    { datafield: "city", text:"city"},
    { datafield: "zipcode", text:"zipcode"}

]


const rowEvents = {
    onclick: (e, Row) => {
        console.log(Row);
    },
}
    
    
    return (
        
        <div className="App">
            <h1>Api data</h1>
            <BootstrapTable
                keyField="name"
                data={post}
                rowEvents={rowEvents}  
                columns={columns}
                pagination={paginationFactory()}
            />
                
                    </div>
          
      
               
        
        
                 
        
                  
      

    )
}  

export default Mode;