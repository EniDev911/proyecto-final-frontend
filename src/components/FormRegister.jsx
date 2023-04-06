import { Fragment, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default () => {

  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();

    const form = document.getElementById("form-login");

    const options = {
      method: "POST",
      url: "https://ecommerce.juanpenailillo.repl.co/usuarios",
      data: {
        email: form.email.value,
        password: form.password.value,
      },
    };

    if (form.password.value === form.password2.value) {
      axios
      .request(options)
      .then(function (res) {
        console.log(res.data);
        navigate("/")
      })
      .catch(function (error) {
        console.error(error);
      })
    } else {
      alert("Contraseña no coinciden")
    }
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
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="off"
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
            <Form.Check type="checkbox" name="condicion" label="Acepto terminos y condiciones" />
          </Form.Group>
          <Button type="submit" variant="success">
            Registrarse
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
