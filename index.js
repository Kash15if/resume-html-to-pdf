const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


// Import the generatePDF function from generatePDF.js
const generatePDF = require("./generate-pdf");

const resumeContent = {
  name: "KASHIF AHMAD",
  contact: "+91 97098 13874 ⋄ Kolkata, India",
  email: "kash151if@gmail.com",
  linkedin: "LinkedInLink",
  github: "GitHubLink",
  about: `As a Full Stack Developer with around 2 years of experience...`, // Include the rest of the content
};


app.get("/test", (req, res)=>{
  res.send("tested");
})


app.get("/resume", async (req, res) => {

  let fileNameInput = req.query.file;

  try {
    const pdfBuffer = await generatePDF(fileNameInput); // Call the function to generate PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=converted.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error converting HTML to PDF:", error);
    res.status(500).send("Error converting HTML to PDF");
  }

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

