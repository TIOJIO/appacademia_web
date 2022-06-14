/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography,Grid ,Box,TextField} from '@material-ui/core';
import {Avatar} from '@material-ui/core';
import Deroul from './Deroul';
import FixedPlugin from '../FixedPlugin/FixedPlugin';
import Sidebar from "components/Sidebar/Sidebar.js";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import routes from "routes.js";

function DemoNavbar(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("blue");
  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };



  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  const getBrand = () => {
    var name;
    routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not


   
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "white"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
       
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
         
          

        
          <Nav navbar>
            <NavItem>
              <Link to="#pablo" className="nav-link">
                <Avatar style={{backgroundColor:'white'}} >
                  <i style={{color:'black'}} className="now-ui-icons media-2_sound-wave" />
                  </Avatar>
                <p>
                  <span className="d-lg-none d-md-block">Stats</span>
                </p>
              </Link>
            </NavItem>
            
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle style={{color:'black'}} caret nav>
                <i style={{color:'black',fontSize:'20px',fontWeight:'bold'}} className="now-ui-icons files_paper" />
               
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{color:'black'}} tag="a">Action</DropdownItem>
                <DropdownItem style={{color:'black'}} tag="a">Another Action</DropdownItem>
                <DropdownItem style={{color:'black'}} tag="a">Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            &nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{display:'flex',height:"50px",justifyContent:'space-evenly'}}> 
                    
                     <div  style={{textAlign:'end',color:'black',display:'flex', flexDirection:'column'}}>
                        <Typography style={{fontWeight:'bold'}}>  GSB Romain </Typography>
                         <Typography color='textSecondary'>  Admin </Typography> 
                       </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <Deroul/>                    
                
             </div>
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default DemoNavbar;
