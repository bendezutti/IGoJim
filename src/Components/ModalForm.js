import { Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap'; 

function handlerSubmission(e) { 
alert(e.target.weight.value)
}

function ModalForm({closeModal}) {
  return (
    <div className = "modalBackGround"> 
        <div className = "modalContainer" >
        <Form onSubmit = {handlerSubmission}>  
        <button className = "x" onClick = {()=> closeModal(false)}></button>
            <Form.Label>Enter Weight: </Form.Label>
            <Form.Control
              type = "text"  
              name = "weight"
             />
             <button className= "Submit" type = "submit">Submit </button>
         </Form> 
        </div>
    </div>
  )
}
export default ModalForm