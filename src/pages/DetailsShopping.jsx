import React, {useEffect} from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppCtx';

export default () => {

  const {id} = useParams();
  const {token} = useAppContext();
  // const {setInfo, info, getProduct} = useAppContext();
  // const token = localStorage.getItem("token");
    const [db, setDb] = useState([]);
    useEffect(() => {
        GetallCompras();
    }, []);
    
    const GetallCompras = async () => {
        
    const endpoint = "https://ecommerce.juanpenailillo.repl.co/compras/";
    const data = await fetch(endpoint, {
                        method: 'GET',
                        headers: {
                          'Authorization': 'Bearer ' + token
                          }
                        });
      const plantas = await data.json()
      setDb(plantas)
    };



  useEffect(() => {
    // setInfo(getProduct(id))
  }, [])
    console.log(getProduct(id).then())

  return (
    <>
      {
     <div className='contenedorCard'>
         {db.map(item =>
           <li key={item.id}>
              <Card
                item={item}
                    />
           </li>
  
         )}
      
      </div>
      }
  </>
  )
}
