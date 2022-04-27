import React from "react";
import {Navbar, Nav, NavDropdown, NavLink, Container, Button, Dropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../../logo/logo_5.png' ;
import logo_df2 from "../../img/ic-badge-powered-by_slim-transparent-white-text.svg";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {AccountInfo} from "../../redux/features/values/AccountInfo";

function LoginButton() {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/login');
    };
    return (
        <div >

            <style type="text/css">
                {`
    .btn-flat {
      background-color: #A64800;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
            </style>

            {/*<Button variant="secondary" onClick={routeChange}>Login</Button>*/}
            <Button variant="flat" onClick={routeChange}>Login</Button>
        </div>
    );
}

class HeaderComponent extends React.Component {

    constructor(props: any){ super(props); }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/home">
                    <Navbar bg="dark">
                        <Container>
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src={logo}
                                    width="99"
                                    height="45"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                {/*<Nav className="justify-content-end" style={{ width: "100%" }}>*/}
                    <Nav className="mr-auto">

                        {/*Roadmap info*/}
                        {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                        {/*    <Nav className="ms-auto text-center">*/}
                        {/*        <Dropdown  >*/}
                        {/*            <Dropdown.Toggle as={NavLink}>Info</Dropdown.Toggle>*/}
                        {/*            <Dropdown.Menu variant="dark">*/}
                        {/*                <Dropdown.Item href="/roadmap">Roadmap</Dropdown.Item>*/}
                        {/*            </Dropdown.Menu>*/}
                        {/*        </Dropdown>*/}
                        {/*    </Nav>*/}
                        {/*</Navbar.Collapse>*/}

                        {/*Quick start*/}
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-center">
                                <Dropdown  >
                                    <Dropdown.Toggle as={NavLink}>Quick start</Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">

                                        {/*<Dropdown.Item href="/api">Base API</Dropdown.Item>*/}
                                        {/*<NavDropdown.Divider/>*/}
                                        {/*<Dropdown.Item href="/integration">Integration</Dropdown.Item>*/}
                                        {/*<NavDropdown.Divider/>*/}
                                        {/*<Dropdown.Item href="/tables_sample">Tables sample</Dropdown.Item>*/}
                                        {/*/!*<NavDropdown.Divider/>*!/*/}
                                        {/*/!*<Dropdown.Item href="/info">Information</Dropdown.Item>*!/*/}

                                        <NavDropdown.Item>
                                            <LinkContainer to="/api">
                                                <NavLink><h6 className="coralText">Base API</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/integration">
                                                <NavLink><h6 className="coralText">Integration</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/tables_sample">
                                                <NavLink><h6 className="coralText">Tables sample</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>

                        {/*Examples*/}
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-center">
                                <Dropdown>
                                    <Dropdown.Toggle as={NavLink}>Examples</Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">

                                        {/*<Dropdown.Item href="/tables_create_upload">Add-Upload</Dropdown.Item>*/}
                                        {/*<NavDropdown.Divider/>*/}
                                        {/*<Dropdown.Item href="/tables_download_delete">Download-Delete</Dropdown.Item>*/}

                                        <NavDropdown.Item>
                                            <LinkContainer to="/tables_create_upload">
                                                <NavLink><h6 className="coralText">Add-Upload</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/tables_download_delete">
                                                <NavLink><h6 className="coralText">Download-Delete</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>

                         {/*Main*/}
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-center">
                                <Dropdown>
                                    <Dropdown.Toggle as={NavLink}>Main</Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">

                                        {/*<Dropdown.Item to="/main/wallet">Wallet</Dropdown.Item>*/}
                                        {/*<NavDropdown.Divider/>*/}
                                        {/*<Dropdown.Item to="/main/monitoring">Monitoring</Dropdown.Item>*/}
                                        {/*<NavDropdown.Divider/>*/}

                                        <NavDropdown.Item>
                                            <LinkContainer to="/main/wallet">
                                                <NavLink><h6 className="coralText">Wallet</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>
                                            <LinkContainer to="/main/monitoring">
                                                <NavLink><h6 className="coralText">Monitoring</h6></NavLink>
                                            </LinkContainer>
                                        </NavDropdown.Item>

                                        {/*Sample Redux Counter*/}
                                        {/*<NavDropdown.Divider/>*/}
                                        {/*<Dropdown.Item href="/main/counter">Redux sample: counter</Dropdown.Item>*/}

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>

                {/*Login*/}
                <Navbar.Collapse>
                    <Nav className="justify-content-end p-0" style={{ width: "95%" }}>
                        <AccountInfo></AccountInfo>
                        <h1 className="transparentText">' '</h1>
                        <LoginButton></LoginButton>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}
export default HeaderComponent;
