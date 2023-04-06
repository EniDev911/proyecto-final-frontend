import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppCtx'
import { formatValue } from '../helpers/format';



export default ({id, name, desc, img, price}) => {

  const {increaseCartQuantity} = useAppContext();

  const navigate = useNavigate();
  return (
    <Card style={{ borderRadius: '15px'}} className="shadow-sm h-100 overflow-hidden" 

    onClick={() => {
      navigate("details/"+id)
    }}>
      <Card.Img src={img} className="card-img-top"
        style={{objectFit: 'cover', height:'220px'}}/>
      <Card.Body>
        <h3 className="card-title">{name}</h3>
        <p className='card-text'>{desc}</p> 
      </Card.Body>
      <Card.Footer style={{position: 'relative'}} className="bg-body d-flex justify-content-between align-items-center">
        <div><strong>$ {formatValue(price)}</strong></div>
        <button style ={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          border: 'none',
          padding: '5px 15px',
          background: '#9DC08B',
          borderRadius: '15px 0px',
          transform: 'rotate(-0.27deg)'
        }}
        onClick={() => increaseCartQuantity(id)}
        >
          Añadir al carrito
        </button>
      </Card.Footer>
    </Card>
  )
}
