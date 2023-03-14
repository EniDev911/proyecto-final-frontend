import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../components/Card'
import { useProductContext } from '../context/AppCtx'

export default () => {

  const {dummyProducts} = useProductContext();

  return (
    <Container>
    <Row className="my-5">
      {
        dummyProducts.map((p) => {
          return (
        <Col key={p.product_name} xs={10} md={6} lg={4} xl={3} xxl={2} className="mx-auto">
            <Card 
                name={p.product_name}
                desc={p.product_desc}
                img={p.product_img}
                price={p.product_price} />
        </Col>
          )
        })
      }
    </Row>
    </Container>
  )
}
