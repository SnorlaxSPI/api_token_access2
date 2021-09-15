import express, { response } from 'express';
import axios from 'axios';

const app = express();

class Api {
  static async getParams (clientKey:string) {
    const response = await (await (axios.get(`https://api.mktzap.com.br/company/7/token?clientKey=${clientKey}`))).data;
    console.log('Token de acesso:', response);
  }
}
Api.getParams('8d43589baefb44ecaec31f7a944fc8cf')

app.listen(3333, () => {
  console.log('🚀🚀 Server Started')
});

