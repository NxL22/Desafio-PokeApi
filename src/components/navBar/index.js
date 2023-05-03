import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navBarra.css'

export default () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active ms-3 text-decoration-none" : "desactivada ms-3 text-decoration-none")
    return (
        <>
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand>Pokemones</Navbar.Brand>
                    <Nav className='ms-auto'>
                        <NavLink className={setActiveClass} to="/">Home</NavLink>
                        <Nav.Item className="mx-3"></Nav.Item>
                        <NavLink className={setActiveClass} to="/pokemones">Pokemones</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}  


