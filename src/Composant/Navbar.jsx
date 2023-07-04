import React from "react";
import { Navbar,Icon,NavItem } from "react-materialize";
import { NavLink } from "react-router-dom";
import '../App.css';



function Header (){
    return(
                <Navbar className="nav" 
                    alignLinks="right"
                    brand={<a className="brand-logo" href="#"><img className="logo" src="logocompassion.png" alt="" /></a>}
                    centerChildren
                    id="mobile-nav"
                    menuIcon={<Icon className="mm">menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                     {/* <NavItem className="ab" to="/Ze"  href="">
                         
                    </NavItem>  */}
                    <NavLink to="/" className="ab">Home</NavLink>
                   <NavLink to="/Zk" className="ab">Kinshasa</NavLink>
                   <NavLink to="/Zp" className="ab">Province</NavLink>
                   
                   <NavLink to="/Za" className="ab">Afrique</NavLink>
                   <NavLink to="/Ze" className="ab">Europe</NavLink>
                   <NavLink to="/General" className="ab">Géneral</NavLink>
                   <NavLink to="/Contact" className="ab conta ">Contact</NavLink>

                    {/* <NavItem className="ab" to="/Ze"  href="">
                        Zone-Afrique
                    </NavItem> */}

                    {/* <NavItem className="ab" to="/Ze"  href="">
                        Zone-Europe
                    </NavItem> */}

                    {/* <NavItem className="ab" to="/Ze"  href="">
                        Zone-Province
                    </NavItem> */}

                    {/* <NavItem className="ab" to="/Ze"  href="">
                        Tout
                    </NavItem>

                    <NavItem className="a" to="/"  href="">
                        Contact
                    </NavItem> */}
                    
        </Navbar>
    )
} export default Header
