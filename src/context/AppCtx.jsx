import {createContext, useEffect, useContext, useState} from 'react';


const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
}


export default ({children}) => {

  const [dummyProducts, setDummyProducts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
  fetch('./data-dummy.json')
    .then((response) => response.json())
    .then((data) =>  setDummyProducts(data));
    setToken(localStorage.getItem("token"));

  }, [])

  return (
    <AppContext.Provider value={{dummyProducts, setDummyProducts, token, setToken}}>
      {children}
    </AppContext.Provider>
  )
}