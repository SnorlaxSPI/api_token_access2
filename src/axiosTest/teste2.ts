import express, { json, response } from 'express';
import axios from 'axios';

const app = express();

export default app.get('/', async (request, response) => {
  try {
    const { data } = await axios ('https://api.mktzap.com.br/company/7/token?clientKey=8d43589baefb44ecaec31f7a944fc8cf')
    return response.json(data);  
  } catch (error) {
    console.log(error)
  }
})


//app.get('/users', async (request, response) => {
//  try {
//    const { data } = await axios('https://api.mktzap.com.br/company/7/historycontact?updatedFrom=2021-04-29 09:18:20&updatedTo=2021-04-29 11:18:29')
//    return response.json(data);
//  } catch (error) {
//    console.log(error);
//  }
//})


//axios
//  .get(`${urlComplete}`, {
//  headers: {
//      Authorization: 'Bearer ' + (response.json(response))
//    }
//  })
//  .then((response) => console.log(response.data))
//  .catch(console.error)
//  
//


  app.listen(3333, () => {
    console.log('🚀🚀 Server Started!!')
  });