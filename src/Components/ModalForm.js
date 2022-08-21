import { Form } from "react-bootstrap";

function weightSubmission(e) { 
(e.target.weight.value)
} 

function ModalForm({closeModal}) {
  return (
    <div className = "modalBackGround"> 
        <div className = "modalContainer" >
        <Form onSubmit = {weightSubmission}>  
        <button className = "x" onClick = {()=> closeModal(false)}></button>
            <Form.Label>Enter Weight: </Form.Label>
            <Form.Control type = "number" name = "weight" />
            <button className= "submitWeight" type = "submit">Submit </button>
         </Form> 
        </div>
    </div>
  )
} 

export default ModalForm