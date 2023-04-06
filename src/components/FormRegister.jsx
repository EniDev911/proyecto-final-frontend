import { Fragment, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2";



export default () => {

  const showMessage = (message, status) => {
    MyModal.fire({
      title: message,
      icon: status,
      timer: 2000,
      timerProgressBar: true,
      showCloseButton:false,
      showConfirmButton:false

    })
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const options = {
      method: "POST",
      url: "https://ecommerceplants.fly.dev/usuarios",
      data: {
        email,
        nombre: name,
        password,
        direccion: address,
        telefono: phone
      },
    };

    if (password === password2.value) {
      axios
      .request(options)
      .then(function (res) {
      if(res.status === 200) {
        //handle success here
        showMessage("Usuario creado con exito", "success");
        navigate("/login");
        } 
      })
      .catch(function (error) {
        console.error(error);
      })
    } else {
      showMessage("Contraseña no coinciden", "error")
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
        <Form id="form-login" onSubmit={handleSubmit} className="w-100" autoComplete="off">
          <Form.Group className="mb-3">
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="email"
              type="email"
              onChange={(ev)=> setEmail(ev.target.value)}
              value={email}
              placeholder="Correo electrónico"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={(ev)=> setPassword(ev.target.value)}
              value={password}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="password2"
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(ev) => setPassword2(ev.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Dirección"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="success">
             Registrarse
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
