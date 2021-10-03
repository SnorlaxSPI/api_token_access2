import axios from "axios";
import { json } from "express";
import { app, Company } from "../controllers/accessToken";

//const app = express();
//
//export class Company {
//  static async getParams(clientKey: string) {
//    const accessToken = (
//      await axios.get(
//        `https://api.mktzap.com.br/company/7/token?clientKey=${clientKey}`
//      )
//    ).data;
//
//    return accessToken;
//  }
//}

Company.getParams("8d43589baefb44ecaec31f7a944fc8cf").then(async (v) => {
  let { accessToken } = v;

  //console.log(accessToken);

  const urlComplete =
    //"https://api.mktzap.com.br/company/7/historycontact?updatedFrom=2021-09-20 07:18:20&updatedTo=2021-09-27 14:18:29";
    "https://api.mktzap.com.br/company/7/historycontact?protocol=7-2913805791518";
  //"https://api.mktzap.com.br/company/7/historycontact?contact_id=waweb_1977_5521983789745";

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
      //console.log("status_id:", status_id);
      //console.log("contact_id:", contact_id);

      messages = messages_count;
    })
    .catch(console.error);

  //console.log("messages_count:", messages);
});

export { app };
