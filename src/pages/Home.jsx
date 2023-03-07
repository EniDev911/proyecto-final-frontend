import React from 'react'
import Card from '../components/Card'
import { useState } from 'react'

export default () => {
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '80%', margin: '20px auto'}}>
     {arr.map(el => (<Card key={el} />))}
    </div>
  )
}
