import jsPDF from "jspdf";

var fs = require("fs");

const pdf = {
  async createPdf(messages: any) {
    console.log(messages);

    var doc = new jsPDF();

    let spce = 10;
    for (const message of messages) {
      doc.text(message.messageId.toString(), 10, spce);
      spce += 10;
      doc.text(message.name, 10, spce);
      spce += 10;
      doc.text(message.contactId, 10, spce);

      for (const m of message.messages) {
        spce += 10;
        doc.text(m, 10, spce);
      }
    }

    doc.save("myjsonfile.pdf");
  },
};

exports.PDF = pdf;
