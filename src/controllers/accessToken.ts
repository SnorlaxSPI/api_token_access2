import dotenv from "dotenv";
import express from "express";
import axios from "axios";

dotenv.config();

const app = express();

//const company_id = 7;
//const clientKey = "8d43589baefb44ecaec31f7a944fc8cf";
const baseURL = `https://api.mktzap.com.br/company/${process.env.company_id}/token?clientKey=${process.env.client_Key}`;

export class Company {
  static async getParams(clientKey: string) {
    const accessToken = (await axios.get(baseURL)).data;

    return accessToken;
  }
}

Company.getParams("process.env.client_Key").then(async (v) => {
  let { accessToken } = v;
  console.log(accessToken);
});

export { app };
