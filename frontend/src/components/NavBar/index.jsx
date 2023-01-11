import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import Logo from "../../assets/images/Logo.png";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token')
  };

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <NavLink to={SHOP_ROUTE}>
            <Image className="logo" src={Logo} alt="Armors" />
          </NavLink>
          <Navbar.Toggle
            className="burger-menu_btn btn_cl"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            className="importance navbar_menu"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto">
              <NavLink className="navbar_item" to={ABOUT_ROUTE}>
                About Us
              </NavLink>
              <NavLink className="navbar_item" to={CONTACT_ROUTE}>
                Contacts
              </NavLink>
              <NavLink className="navbar_item" to={FAQ_ROUTE}>
                FAQ
              </NavLink>
            </Nav>
            {user.isAuth ? (
              <Nav className="ml-auto">
                <Button
                  className="navbar_btn btn_cl"
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  <RiAdminFill className="icons" /> Admin
                </Button>
                <Button className="navbar_btn btn_cl" onClick={() => logOut()}>
                  <FiLogOut className="icons" />
                  LogOut
                </Button>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Button
                  className="navbar_btn btn_cl"
                  onClick={() => navigate(LOGIN_ROUTE)}
                >
                  <FaUser className="icons" /> LogIn
                </Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
