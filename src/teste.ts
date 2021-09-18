import express from 'express';
import axios from 'axios';

const app = express.json();

const getUrl = 'https://api.mktzap.com.br/company/'
const company_id = 7;
const clientkey = '/token?clientKey=8d43589baefb44ecaec31f7a944fc8cf';

//axios
//  .get(`${getUrl}${company_id}${clientkey}`)
//  .then((response) => console.log(response.data))
//  .catch(console.error)

const getUrlProtocol = '/historycontact?protocol=:3385321314709';
const varToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzE5ODQ4ODQsImV4cCI6MTYzMTk4ODQ4NH0.6Pi3Wfp0jGNMiaW5i1fTgXC6r7DG9Q3-YlYALlPDG_g';

axios
  .get(`${getUrl}${company_id}${getUrlProtocol}`, {
    headers: {
      Authorization: 'Bearer ' + varToken,
    }
  })
  .then((response) => console.log(response.data))
  .catch(console.error)
  
