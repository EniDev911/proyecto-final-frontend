import { Fragment, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppCtx";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setToken, token} = useAppContext();

  const sendForm = (ev) => {
    // CREDIENCIALES:
    //   prueba@admin.com"
    //   123456
    ev.preventDefault();

    
    const options = {
      method: "POST",
      url: "https://ecommerce.juanpenailillo.repl.co/login",
      data: {
        email,
        password
      },
    };

    axios
      .request(options)
      .then(function (res) {
        localStorage.setItem("token", JSON.stringify(res.data));
        setToken(localStorage.getItem("token"));
        console.log("mi token es " + token);
        navigate("/");
      })
      .catch(function (error) {
        console.error(error);
      });

      setEmail("");
      setPassword("");
  };

  return (
    <Card
      className="shadow"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <Card.Header className="border-0 py-4">
        <h3
          className="text-center text-uppercase"
          style={{ color: "var(--secondary-color)" }}
        >
          Inicio de sesión
        </h3>
      </Card.Header>
      <Card.Body>
        <Form id="form-login" onSubmit={sendForm} className="w-100">
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Correo electrónico"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="password"
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Iniciar sesión
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
