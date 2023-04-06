import { Fragment, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppCtx";
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2";


export default () => {
  const MyModal = withReactContent(Swal);
  
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

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setToken } = useAppContext();



  const sendForm = (ev) => {
    ev.preventDefault();

    const options = {
      method: "POST",
      url: "https://ecommerceplants.fly.dev/login",
      data: {
        email,
        password
      },
    };

    axios
      .request(options)
      .then(function (res) {

      if(res.status === 200) {
        //handle success here
        localStorage.setItem("token", JSON.stringify(res.data));
        setToken(localStorage.getItem("token"));
        showMessage("Autenticación exitosa", "success");
        navigate("/");
      } else if(res.status === 401) {
        showMessage("Email o contraseña incorrecta", "error");
      }
      })
      .catch(function (error) {
        console.error(error);
        showMessage("Email o contraseña incorrecta", "error");
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
        <Form id="form-login" onSubmit={sendForm} className="w-100" autoComplete="off">
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
