import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useAppContext } from "../context/AppCtx";
import {useNavigate} from "react-router-dom";

export default () => {
 
  return (
    <> 
    <Container className="mt-5">
    <Row className="my-5 py-5">
      <h3>Detalles del productos:</h3>
      <Col>
        Mis compras
      </Col>
    </Row>
    </Container>
    </>
  );
};
