import puppeteer from "puppeteer";
import "../controllers/atendimentoContato";
import { app2 } from "../controllers/atendimentoContato";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`${``}`, {
    waitUntil: "networkidle2",
  });

  await page.goto("https://www.newway.com.br", {
    waitUntil: "networkidle2",
  });

  await page.pdf({ path: "hn.pdf", format: "a4" });

  await browser.close();
})();
