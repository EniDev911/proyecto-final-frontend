import {createContext, useEffect, useContext, useState} from 'react';


const AppContext = createContext({});

export const useProductContext = () => {
  return useContext(AppContext);
}

export default ({children}) => {

  const [dummyProducts, setDummyProducts] = useState([]);

  useEffect(() => {
  fetch('./data-dummy.json')
    .then((response) => response.json())
    .then((data) =>  setDummyProducts(data));
  }, [])

  return (
    <AppContext.Provider value={{dummyProducts, setDummyProducts}}>
      {children}
    </AppContext.Provider>
  )
}