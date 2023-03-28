import { Fragment, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";


export default () => {

  const handleSubmit = () => {
    ev.preventDefault();

    const [password, setPassword] = useState();

    const form = document.getElementById("form-login");

    const options = {
      method: "POST",
      url: "https://ecommerce.juanpenailillo.repl.co/login",
      data: {
        email: form.email.value,
        password: form.password.value,
      },
    };

    axios
      .request(options)
      .then(function (res) {
        let token = localStorage.getItem("token")
          ? localStorage.getItem("token")
          : localStorage.setItem("token", JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.error(error);
      });
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
          Registro
        </h3>
      </Card.Header>
      <Card.Body>
        <Form id="form-login" onSubmit={handleSubmit} className="w-100">
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Nombre completo"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="password2"
              type="password"
              placeholder="Confirmar contraseña"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button type="submit" variant="success">
            Registrarse
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
