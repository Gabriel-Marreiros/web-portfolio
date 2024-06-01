import Logo from "../Logo";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";

function Navbar(){

    return(
        <NavBar 
            collapseOnSelect 
            expand="lg" 
            sticky="top" 
            bg="black" 
            data-bs-theme="dark"
            as="header"
            className={`shadow`}>

            <Container as="nav">

                <NavBar.Brand href="#" className={`text-decoration-none`}> 
                    <Logo /> 
                </NavBar.Brand>

                <NavBar.Toggle aria-controls="responsive-navbar-nav" />

                <NavBar.Collapse id="responsive-navbar-nav" className={`justify-content-end`} >
                    <Nav id="navbar" className="nav py-3 py-md-0 gap-1 align-items-end">
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#home">Início</Nav.Link>
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#about-me" >Sobre Mim</Nav.Link>
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#skills" >Conhecimentos</Nav.Link>
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#projects" >Projetos</Nav.Link>
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#certifications" >Certificados</Nav.Link>
                        <Nav.Link className={`fs-5 text-decoration-none`} href="#contacts" >Contatos</Nav.Link>
                        <Nav.Link href="https://github.com/Gabriel-Marreiros" target="_blank" className={`fs-3`}><FaGithubSquare /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/gabrielsousamarreiros/" target="_blank" className={`fs-3`}><FaLinkedin /></Nav.Link>
                    </Nav>
                </NavBar.Collapse>

            </Container>
        </NavBar>
    )
}

export default Navbar