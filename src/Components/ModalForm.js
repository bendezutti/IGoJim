import { Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap'; 

function handlerSubmission(e) { 
alert(e.target.weight.value)
}

function ModalForm({closeModal}) {
  return (
    <div className = "modalBackGround"> 
       <button onClick = {()=> closeModal(false)}></button>
        <div className = "modalContainer" >
        <Form onSubmit = {handlerSubmission}> 
            <Form.Label>Enter Weight: </Form.Label>
            <Form.Control
              type = "text"  
              name = "weight"
             />
             <button variant = "primary" type = "submit">Submit </button>
         </Form> 
        </div>
    </div>
  )
}
export default ModalForm