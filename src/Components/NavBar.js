import ModalForm from "./ModalForm"
import { useState } from 'react'
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"

const NavBar = () => {

  const [isModalOpen, setModal] = useState(false)

  return (
    <Navbar expand="lg">
      <Container>
        <Nav>
          <Nav href="newexercise" className="dumbbell" onClick={() => setModal(true)} />
          <div>
            {isModalOpen && <ModalForm closeModal={() => setModal(false)} />}
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar; 
