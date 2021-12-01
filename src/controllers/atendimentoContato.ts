import express, { json } from "express";
import axios from "axios";
import { Company } from "./accessToken";
import {Pdf4} from '../pdf/Pdf4'
const { PDF } = require("../pdf/pdf2");

const app2 = express();

const pdfCreate = new Pdf4();

Company.getParams("process.env.client_Key").then(async (v) => {
  let { accessToken } = v;

  //const urlWaWeb = `https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?contact_id=${process.env.waWeb}`;
  //const urlWaWeb = `https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?updatedFrom=2021-06-16 00:01:20&updatedTo=2021-06-17 23:59:29`;
  const urlWaWeb = `https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?createdTo=2021-06-17T02:59:06.000Z`;

  let messages: any[] = [];

  await axios
    .get(`${urlWaWeb}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      console.log(response.data);

      response.data.forEach((item: { id: any; name: any; contact_id: any }) => {
        let message = {
          message_id: item.id,
          name: item.name,
          contact_id: item.contact_id,
        };

        messages.push(message);
      });

      console.log(messages);
    })
    .catch(console.error);

  let objReturn = await teste({ messages, accessToken });

  pdfCreate.createPdf(objReturn);
});

async function teste({
  messages,
  accessToken,
}: {
  messages: any[];
  accessToken: string;
}) {
  let resultMessages: { messageId: { id: any }; messages: any[] }[] = [];

  for (const message of messages) {
    await axios
      .get(
        `https://api.mktzap.com.br/company/${process.env.company_id}/history/${message.message_id}/message`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((response) => {
        console.log(message);

        let messageObject = {
          messageId: message.message_id,
          name: message.name,
          contactId: message.contact_id,
          messages: Array(),
        };
        response.data.forEach((item: { history_id: any; message: any }) => {
          var someEncodedString = JSON.parse(item.message); //Buffer.from(item.message, "utf-8").toString();
          messageObject.messages.push(someEncodedString);
        });
        resultMessages.push(messageObject);
      })
      .catch(console.error);
  }
  return resultMessages;
}

export { app2 };
