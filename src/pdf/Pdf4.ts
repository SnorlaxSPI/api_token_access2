import pdf from "pdfkit";
import fs from 'fs';
import { ConvertDateHour } from "../axiosTest/utils/ConvertDateHour";

class Pdf4 {
  async createPdf(messages: any) {
    const convert = new ConvertDateHour();

    for (const message of messages) {
      
      const doc = new pdf();
      doc.fontSize(13)
      doc.moveDown();
      doc.text(`Id: ${message.messageId.toString()}`)
      doc.text(`Nome: ${message.name}`)
      doc.text(`Telefone: ${message.contactId}`);
      doc.text(`Protocolo: ${message.protocol}`)
      doc.text(`Iniciou o contato em ${convert.dateDate(message.firstMessageAt)} às ${convert.dateHour(message.firstMessageAt)}`)
      doc.moveDown();
      doc.moveDown();
      for(const m of message.messages) {
        doc.moveDown();
        doc.text(`${convert.dateAll(m.createdAt)}: ${m.message}`);
      }
      doc.pipe(fs.createWriteStream(`${message.messageId}.pdf`));
      doc.end();
    }
    //doc.pipe(fs.createWriteStream("file.pdf"));
    //doc.end();
  }
}

export {Pdf4}

