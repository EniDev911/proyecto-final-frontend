import {createContext, useEffect, useContext, useState} from 'react';
import axios from "axios";

import { formatValue } from '../helpers/format';

const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
}


export default ({children}) => {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState();
  const [info, setInfo] = useState({});



  /**
   *
   * @param {string} id > identificador único para buscar en catálogo
   * @returns {Object}  > returns un producto del catálogo
   */
  const getProduct = (id) => {
    const options = {
      method: 'GET',
      url: 'https://ecommerceplants.fly.dev/productos/' +id
    };

    const product = axios.request(options).then(function (response) {
      console.log(response.data[0]);
      response.data[0]
    }).catch(function (error) {
      console.error(error);
      return error.message
    });

    return product;
  };

  /**
   *
   * @param {string} id > identificador único para buscar en el carrito
   */
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      // si el item no se encuentra en el carrito
      if (currItems.find((item) => item.id === id) || null) {
        // creamos un nuevo carrito para incluir el nuevo item con su propiedad quantity en 1
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            // al item encontrado se le incrementa en 1 su propiedad quantity
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  /**
   *
   * @param id  > identificador único para buscar en el carrito
   */
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      // si el item encontrado, tiene su propiedad quantity en 1
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        // aplicamos un filter sin el item actual
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const totalCart = (items) => {
    const total = items.reduce((total, cartItem) => {
      const item = getProduct(cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
    return formatValue(total);
  };


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://ecommerceplants.fly.dev/productos'
    };

    axios.request(options).then(function (response) {
      setProducts(response.data) 
    }).catch(function (error) {
      console.error(error);
    });

    setToken(
      localStorage.getItem("token") 
        ? localStorage.getItem("token") 
        : "" )
      
  }, [token])

  return (
    <AppContext.Provider value={{
        products, 
        setProducts, 
        token, 
        setToken,
        getProduct,
        setInfo,
        info,
        decreaseCartQuantity,
        increaseCartQuantity,
        cartItems,
        totalCart
        }}>
      {children}
    </AppContext.Provider>
  )
}