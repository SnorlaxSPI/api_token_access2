import express from 'express';
import axios from 'axios';

const app = express();

export class Company {
  static async getParams (company:number, clientKey:string) {
    const response = (await (axios.get(`https://api.mktzap.com.br/company/${company}/token?clientKey=${clientKey}`))).data;
    console.log('Token de acesso:', response);
  }
}
Company.getParams(7, '8d43589baefb44ecaec31f7a944fc8cf');

export class History {
    static async getHistory() {     
      const api = new History((await (axios.get('https://api.mktzap.com.br/company/7/historycontact?updatedFrom=2021-04-29 09:18:20&updatedTo=2021-04-29 11:18:29'))).data);
    }
    company_id : string;
    //contact_id : string;
    
    constructor( company_id:string ) {
      this.company_id = company_id;
      //this.contact_id = contact_id;
    }
}
History.getHistory().then(v => { console.log(v) });

app.listen(3333, () => {
  console.log('🚀🚀 Server Started!!')
});
