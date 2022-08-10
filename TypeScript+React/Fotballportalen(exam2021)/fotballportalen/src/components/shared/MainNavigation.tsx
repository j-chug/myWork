import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faFutbol, faTshirt, faHome } from '@fortawesome/free-solid-svg-icons'

const MainNavigation: FC = () => {
    return(
        <>
            <Navbar className="navbar-style" collapseOnSelect  expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
                    <Navbar.Brand className="logo" href="/">
                        <span id="logo-f">Fotball</span><span id="logo-p">Portalen</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item>
                                <Nav.Link className="navlink-style" href="/">Hjem <FontAwesomeIcon icon={faHome}/> </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink-style" href="/predictions">Tippehjørnet <FontAwesomeIcon icon={faFutbol} /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink-style" href="/playerspage">Spillere <FontAwesomeIcon icon={faTshirt} /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink-style" href="/teamspage">Lag <FontAwesomeIcon icon={faFutbol} /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink-style" href="/userpage">Profil<FontAwesomeIcon icon={faUser} /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default MainNavigation;