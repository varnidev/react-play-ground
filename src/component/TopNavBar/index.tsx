import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Index =()=>{
    return <Navbar  bg="dark" variant='dark' expand="lg">
    <Container fluid  className="justify-content-center">
      <Navbar.Brand as={Link} to='/' >React Play Ground</Navbar.Brand>
    </Container>
  </Navbar>
}

export default Index;