const express = require("express");
const app = express();
const port = 3000;

const resumeContent = {
  name: "KASHIF AHMAD",
  contact: "+91 97098 13874 ⋄ Kolkata, India",
  email: "kash151if@gmail.com",
  linkedin: "LinkedInLink",
  github: "GitHubLink",
  about: `As a Full Stack Developer with around 2 years of experience...`, // Include the rest of the content
};

app.get("/resume", async (req, res) => {

  let fileName = req.query.file;
  const pdfBuffer = await generatePDF(fileName); // Call the function to generate PDF
  
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=resume.pdf");
  res.send(pdfBuffer);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Import the generatePDF function from generatePDF.js
const generatePDF = require("./generate-pdf");
