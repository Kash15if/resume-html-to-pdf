const puppeteer = require("puppeteer");
const fs = require("fs");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

function readHtmlFile(filePathInput) {
  try {
    const data = fs.readFileSync(filePathInput, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading the file:", err);
    return null;
  }
}

function getBrowser() {
  if (IS_PRODUCTION) {
    return puppeteer.connect({
      browserWSEndpoint:
        "wss://chrome.browserless.io?token=" + process.env.BROWSERLESS_TOKEN,
    });
  }

  return puppeteer.launch();
}

async function generatePDF(fileNameInput) {

  const filePath = path.join(
    __dirname,
    "./resume_templates/" + fileNameInput + ".html"
  );
  let htmlContent = readHtmlFile(filePath);
  
  const browser = await getBrowser();

  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();
  
  return pdfBuffer;
}

module.exports = generatePDF;
