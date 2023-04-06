import axios from "axios";

/**
 *
 * @param {string} id > identificador único para buscar en catálogo
 * @returns {Object}  > returns un producto del catálogo
 */

export const getProduct = (id) => {
  const options = {
    method: 'GET',
    url: `https://ecommerce.juanpenailillo.repl.co/productos/8`
  };

  axios.request(options).then(function (response) {
    // console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
    return error.message
  });
};
