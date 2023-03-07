import React from 'react'
import {Card} from 'react-bootstrap'

export default () => {
  return (
    <Card style={{width: '300px', borderRadius: '15px'}}>
      <Card.Body>

      </Card.Body>
      <Card.Footer style={{position: 'relative'}} className="bg-body d-flex justify-content-between align-items-center">
        <div>$9.999</div>
        <div style ={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          padding: '5px 15px',
          background: '#9DC08B',
          borderRadius: '15px 0px',
          transform: 'rotate(-0.27deg)'
        }}>
          Añadir al carrito
        </div>
      </Card.Footer>
    </Card>
  )
}
