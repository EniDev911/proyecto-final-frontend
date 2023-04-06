import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppCtx';

function Details() {

  const {id} = useParams();
  const {setInfo, info, getProduct} = useAppContext();

  useEffect(() => {
    // setInfo(getProduct(id))
  }, [])
    console.log(getProduct(id).then())

  return (
    <>
      {
        info ? <p>
              {info.titulo}
              {info.descripcion}
              {info.imagen1}
              {info.precio}
        </p> 
        : <p>
          CARGANDO 
        </p>
      }
  </>
  )
}

export default Details