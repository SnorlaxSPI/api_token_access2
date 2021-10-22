import express from "express";
import axios from "axios";
import { Company } from "./accessToken";

const app2 = express();

const clientKey = "8d43589baefb44ecaec31f7a944fc8cf";

Company.getParams(clientKey).then(async (v) => {
  let { accessToken } = v;

  const urlWaWeb =
    "https://api.mktzap.com.br/company/7/historycontact?contact_id=waweb_1977_5514991775611";
  //"https://api.mktzap.com.br/company/7/historycontact?updatedFrom=2021-09-20 07:18:20&updatedTo=2021-09-27 14:18:29";

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
        `https://api.mktzap.com.br/company/7/history/${messageAttendanceId}/message`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
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
          obj2.messages.push(item.message);
        });
        obj.push(obj2);
      })
      .catch(console.error);
  }
  return obj;
}

export { app2 };
