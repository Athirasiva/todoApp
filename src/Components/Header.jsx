import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TodoApp.css'

function Header() {
  return (
    <div className='task-header'>
       <Navbar >
        <Container>
          <Navbar.Brand >Task List</Navbar.Brand>
         
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
