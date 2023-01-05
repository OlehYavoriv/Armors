import React from "react";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { login, registration } from "../../http/userAPI";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <section className="bg">
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: "100vh" }}
      >
        <Card className="form_box p-5">
          <h2 className="m-auto">
            {isLogin ? "Authorization" : "Registration"}
          </h2>
          <Form className="d-flex flex-column">
            <Form.Control
              className="mt-3 input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              className="mt-3 input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ? (
                <div>
                  Don't Have account?{" "}
                  <NavLink className="text_yellow" to={REGISTRATION_ROUTE}>
                    Sign Up!
                  </NavLink>
                </div>
              ) : (
                <div>
                  Already Have account?{" "}
                  <NavLink className="text_yellow" to={LOGIN_ROUTE}>
                    Login!
                  </NavLink>
                </div>
              )}
              <Button className="btn_cl auth_btn" onClick={click}>
                {isLogin ? "LogIn" : "SignUp"}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </section>
  );
});

export default Auth;
