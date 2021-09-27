import express, { response } from "express";
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

  const urlComplete =
    "https://api.mktzap.com.br/company/7/historycontact?updatedFrom=2021-04-29 09:18:20&updatedTo=2021-04-29 11:18:29";

  let messages;

  await axios
    .get(`${urlComplete}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      let { status_id, messages_count, contact_id } = response.data[0];

      console.log(response.data);
      console.log("status_id:", status_id);
      console.log("contact_id:", contact_id);

      messages = messages_count;
    })
    .catch(console.error);

  console.log("messages_count:", messages);
});

export { app };