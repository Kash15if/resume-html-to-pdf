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
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
  console.log(fileNameInput + ".html");

  const resume_dir = "./resume_templates/";
  let resumeHTML = readHtmlFile(resume_dir + fileNameInput + ".html");

  console.log(resume_dir + fileNameInput + ".html");

  await page.setContent(resumeHTML);
  const pdfBuffer = await page.pdf({
    path: "resume-dark-mode.pdf",
    format: "A4",
    printBackground: true,
  });
  
  await browser.close();
  return pdfBuffer;
}

module.exports = generatePDF;
