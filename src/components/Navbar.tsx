import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container className="me-auto">
                <Nav>
                    <Nav.Link to='/' as={NavLink} className="h3">
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink} className="h3">
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink} className="h3">
                        About
                    </Nav.Link>
                </Nav>
                <Button 
                    style={{position:'relative', width:'4rem', height:'4rem'}} 
                    variant='outline-success'
                    className='rounded-right'
                >
                    <img className="img-fluid"  src="data:image/png;base64,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"></img>
                    <div 
                        className="d-flex justify-content-center align-items-center rounded-circle bg-warning"
                        style={{
                            position:'absolute',
                            width:'2rem',
                            height:'2rem',
                            bottom:0,
                            right:0,
                            transform:'translate(35%,25%)',
                            color:'#000000',
                            fontSize:'1.3rem'
                        }}
                    >
                        n
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}