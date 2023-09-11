const puppeteer = require("puppeteer");
const fs = require("fs");

function readHtmlFile(filePathInput) {

  console.log(filePathInput)
  try {
    const data = fs.readFileSync(filePathInput, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading the file:", err);
    return null;
  }
}

async function generatePDF(fileNameInput) {

  const resume_dir = "./resume_templates/";
  let htmlContent = readHtmlFile(resume_dir + fileNameInput + ".html");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();
  return pdfBuffer;

}

module.exports = generatePDF;
