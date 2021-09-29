import express, { json, response } from "express";
import "../server";
import axios from "axios";

const app = express();

export class Company {
  static async getParams(clientKey: string) {
    const accessToken = (
      await axios.get(
        `https://api.mktzap.com.br/company/7/token?clientKey=${clientKey}`
      )
    ).data;

    return accessToken;
  }
}

Company.getParams("8d43589baefb44ecaec31f7a944fc8cf").then(async (v) => {
  let { accessToken } = v;
  console.log(accessToken);
});

export { app };
