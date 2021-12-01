import pdf from "pdfkit";
import fs from 'fs';

class Pdf4 {
  async createPdf(messages: any) {

    for (const message of messages) {
      const doc = new pdf();
      doc.fontSize(13)
      doc.moveDown();
      doc.text(message.messageId.toString())
      doc.text(message.name)
      doc.text(message.contactId);
      doc.moveDown();
      for(const m of message.messages) {
        doc.moveDown();
        doc.text(m);
      }
      doc.pipe(fs.createWriteStream(`${message.messageId}.pdf`));
      doc.end();
    }
    //doc.pipe(fs.createWriteStream("file.pdf"));
    //doc.end();
  }
}

export {Pdf4}

