import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import AddMovie from './AddMovie';

const Filter = (props) => {
    const [rating, setRating] = useState(0)
    
    const handleRating = (rate) => {
        setRating(rate)
    }
    props.handleRate(rating)
return (
    <Navbar  bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontFamily: 'Oswald' ,fontSize:"50px",color:"red"}}>TUNFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            
          </Nav>
          <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>props.handleFilter(e.target.value)}
        />


        <Rating onClick={handleRating} initialValue={rating}/>


        

        </Form>
        {//<AddMovie></AddMovie>
        }
        </Navbar.Collapse>
        
      </Container>
     
  </Navbar>


)
}

export default Filter



