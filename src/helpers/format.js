/**
 * 
 * @param {number} value un valor númerico para formatear 
 * @returns {string} el valor con formato de moneda, procesado por una regexp 
 */
export function formatValue(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}