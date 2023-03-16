import { Fragment } from "react"
import { Button, Form, Card } from "react-bootstrap"

export default () => {

  const sendForm = (ev) => {
    ev.preventDefault();
  }


  return (
    <Card className="shadow" style={{backgroundColor: "var(--primary-color)"}}>
      <Card.Header className="border-0 py-4">
        <h3 className="text-center text-uppercase" style={{color: "var(--secondary-color)"}}>Inicio de sesión</h3>
      </Card.Header>
      <Card.Body>
      <Form id="form-login" method="post" action="/" onSubmit={sendForm} className="w-100">
        <Form.Group className="mb-3">
          <Form.Control name="email" type="email" placeholder="Correo electrónico" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control name="password" type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button type="submit" variant="success">Iniciar sesión</Button>
      </Form>
      </Card.Body>
    </Card>
  )
}