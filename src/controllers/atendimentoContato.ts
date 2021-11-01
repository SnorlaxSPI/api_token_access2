import express, { json } from "express";
import axios from "axios";
import { Company } from "./accessToken";

const app2 = express();

Company.getParams("process.env.client_Key").then(async (v) => {
  let { accessToken } = v;

  //const urlWaWeb = `https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?contact_id=${process.env.waWeb}`;
  const urlWaWeb = `https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?updatedFrom=2021-09-01 07:18:20&updatedTo=2021-10-01 14:18:29`;

  let messageAttendanceIds: any[] = [];

  await axios
    .get(`${urlWaWeb}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((response) => {
      console.log(response.data);

      response.data.forEach((item: { id: any }) => {
        messageAttendanceIds.push(item.id);
      });

      console.log(messageAttendanceIds);
    })
    .catch(console.error);

  let objReturn = await teste(messageAttendanceIds, accessToken);

  console.log(objReturn);
});

async function teste(messageAttendanceIds: any[], accessToken: string) {
  let obj: { messageId: { id: any }; messages: any[] }[] = [];

  for (const messageAttendanceId of messageAttendanceIds) {
    await axios
      .get(
        `https://api.mktzap.com.br/company/${process.env.company_id}/history/${messageAttendanceId}/message`,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((response) => {
        console.log(messageAttendanceId);
        let obj2 = {
          messageId: messageAttendanceId,
          messages: Array(),
        };
        response.data.forEach((item: { history_id: any; message: any }) => {
          var someEncodedString = JSON.parse(item.message); //Buffer.from(item.message, "utf-8").toString();
          obj2.messages.push(someEncodedString);
        });
        obj.push(obj2);
      })
      .catch(console.error);
  }
  return obj;
}

export { app2 };
