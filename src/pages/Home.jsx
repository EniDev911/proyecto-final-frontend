import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../components/Card'
import BgHeroRb from '../components/Hero';
import { useAppContext } from '../context/AppCtx'
import HeroImg from "../assets/images/hero.jpg";

export default () => {

  const {products} = useAppContext();

  return (
   <> 
    <BgHeroRb title="GARDEN SHOP" image={HeroImg}/>
    <Container>
    <Row className="my-5 py-5">
      {
        products.map((p) => {
          return (
        <Col key={p.titulo} xs={10} md={6} lg={4} xl={3} xxl={2} className="mx-auto my-4">
            <Card 
                id={p.id}
                name={p.titulo}
                desc={p.descripcion}
                img={p.imagen1}
                price={p.precio} />
        </Col>
          )
        })
      }
    </Row>
    </Container>
    </>
  )
}
