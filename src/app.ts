import express, { response } from 'express';
import axios from 'axios';

const app = express();

class Company {
  static async getParams () {
    const company_id = 7;
    const clientKey = '8d43589baefb44ecaec31f7a944fc8cf';
    const response = await (await (axios.get(`https://api.mktzap.com.br/company/${company_id}/token?clientKey=${clientKey}`))).data;
    console.log('Token de acesso:', response);
  }
}
Company.getParams();

app.listen(3333, () => {
  console.log('🚀🚀 Server Started!!')
});
