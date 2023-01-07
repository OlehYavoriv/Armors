import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="row py-4">
          <div className="col-sm-12">
            <div className="about">
              <NavLink to={SHOP_ROUTE}>
                <img src={Logo} alt="Logo" />
              </NavLink>
              <p className="mt-2">
                "Armors" initially positions itself as a company that can offer
                military uniforms, shoes, equipment and accessories available to
                the public. As well as clothes for civilians in such styles as:
                military, casual, street. The main principle was the ability to
                find in one store everything you need for any activity or hobby:
                even military service, even everyday wear and outdoor
                activities.
              </p>

              <div className="social-media">
                <ul className="d-flex justify-content-around">
                  <li>
                    <a href="#Facebook">
                      <BsFacebook className="footer_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#Twitter">
                      <BsTwitter className="footer_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#Linkedin">
                      <BsLinkedin className="footer_icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#YouTube">
                      <BsYoutube className="footer_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h2 className="fs-4">Help Center</h2>
            <ul className="list-unstyled ">
              <li>
                <a className="info_items" href="#how-to-pay">
                  How to Pay
                </a>
              </li>
              <li>
                <a className="info_items" href="#warranty&return">
                  Warranty and return
                </a>
              </li>
              <li>
                <a className="info_items" href="#delivery&payment">
                  Delivery and payment
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h2 className="fs-4">For Buyers</h2>
            <ul className="list-unstyled">
              <li>
                <NavLink className="info_items" to={ABOUT_ROUTE}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="info_items" to={FAQ_ROUTE}>
                  FAQ's
                </NavLink>
              </li>
              <li>
                <NavLink className="info_items" to={CONTACT_ROUTE}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h2 className="fs-4">Security & privacy</h2>
            <ul className="list-unstyled">
              <li>
                <a className="info_items" href="#terms-of-use">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a className="info_items" href="#privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h2 className="fs-4">Payment</h2>
            <p>
              You can pay for your order online with a Visa and MasterCard bank
              card without commission.
            </p>
          </div>
        </div>

        <div className="copyright">
          <hr />
          <div className="row">
            <div className="col-sm-6">
              <p>
                Copyright © 2023. Developed by{" "}
                <a
                  className="info_items"
                  href="https://www.linkedin.com/in/oleh-yavoriv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Oleh Yavoriv
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
