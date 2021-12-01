import puppeteer from "puppeteer";
import "../controllers/atendimentoContato";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`${``}`, {
    waitUntil: "networkidle2",
  });

  await page.goto(
    "https://api.mktzap.com.br/company/${process.env.company_id}/historycontact?createdTo=2021-06-17T02:59:06.000Z",
    {
      waitUntil: "networkidle2",
    }
  );

  await page.pdf({ path: "hn.pdf", format: "a4" });

  await browser.close();
})();
