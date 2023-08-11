import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () =>{
        logOut ()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-5">
                           <Link to='/'>Home</Link>
                           <Link >About</Link>
                           <Link >Carrer</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            {user && <h4>{user.email}</h4>}

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;