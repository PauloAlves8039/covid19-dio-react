/**
 * @file: api.js
 * @author: Paulo Alves
 * @description: responsável pela integração com a api do Heroku para retornar informações sobre o COVID-19.
 * @version 1.0.0 (17/08/2020)
 */

const path = 'http://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

/**
 * Responsável por obter dados sobre o COVID-19 de determinado pais.
 * 
 * @function getCountry
 * @param country recebe o nome do pais para retorno de informações.
 */
function getCountry(country){
    return fetch(`${path}/${country}}`, headers)
        .then((response) => response.json());
}

export default {
    getCountry
};