const puppeteer = require("puppeteer");

async function generatePDF(resumeContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML content for the resume
  const resumeHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kashif Ahmad - Resume</title>
    <link rel="stylesheet" href="styles.css" />
    <script
      src="https://kit.fontawesome.com/a076d05399.js"
      crossorigin="anonymous"
    ></script>

    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }

      header {
        background-color: #007bff;
        color: #fff;
        text-align: center;
        padding: 20px 0;
      }

      header h1 {
        margin: 0;
        font-size: 2.5rem;
      }

      address {
        font-size: 1rem;
      }

      .about,
      .work,
      .education,
      .skills,
      .projects {
        padding: 20px;
        /* margin: 20px 0; */
        background-color: #fff;
        border-top: 2px solid black;
        /* box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); */
      }

      h2 {
        margin-top: 0;
      }

      .job {
        margin: 20px 0;
      }

      .dates {
        font-weight: bold;
      }

      .company {
        color: #007bff;
      }

      ul {
        list-style: disc;
        padding-left: 20px;
      }

      .tech-stack {
        font-style: italic;
        color: #888;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }

      table,
      th,
      td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }

      th {
        background-color: #f5f5f5;
      }

      ul {
        list-style: none;
        padding: 0;
      }

      ul li {
        margin-bottom: 10px;
      }

      ul li a {
        text-decoration: none;
        color: #007bff;
      }

      ul li a:hover {
        text-decoration: underline;
      }

      .fa-external-link-alt {
        font-size: 0.8rem;
        margin-left: 5px;
      }

      /* Add more CSS rules for styling */
    </style>
  </head>
  <body>
    <header>
      <h1>Kashif Ahmad</h1>
      <address>
        <p>+91 97098 13874 &emsp; &emsp; Kolkata, India</p>
        <p>
          <a href="mailto:kash151if@gmail.com">kash151if@gmail.com</a> |
          <a href="https://www.linkedin.com/in/kashif-ahmad-373286164"
            >LinkedIn</a
          >
          |
          <a href="https://auth.geeksforgeeks.org/user/kash15if/practice"
            >GeeksForGeeks</a
          >
          |
          <a href="https://github.com/Kash15if">GitHub</a>
        </p>
      </address>
    </header>
    <section class="about">
      <h2>About Me</h2>
      <p>
        As a Full Stack Developer with around 2 years of experience in the FMCG
        sector, I bring a unique combination of technical expertise and industry
        knowledge to the table. With a strong tech stack that includes React.js,
        Node.js, MongoDB, PostgreSQL, and Java, I am passionate about
        problem-solving and have built several cool projects to solve real-world
        issues.
      </p>
    </section>
    <section class="work">
      <h2>Work Experience</h2>
      <div class="job">
        <h3>Software Developer</h3>
        <p class="dates">Jul 2022 - Present</p>
        <p class="company">Greenwave Solutions Pvt. Ltd., Kolkata, India</p>
        <ul>
          <li>Led an internal employee service portal...</li>
          <!-- ... More list items ... -->
        </ul>
        <p class="tech-stack">
          Tech stack in use: React.js, Node.js, Redux, Java, JSF, SQL, Docker,
          jwt, bcrypt.
        </p>
      </div>
      <!-- ... More job entries ... -->
    </section>
    <section class="education">
      <h2>Education</h2>
      <p>
        <strong>B. Tech. in Computer Science</strong>, University of Calcutta,
        June 2021
      </p>
    </section>
    <section class="skills">
      <h2>Skills</h2>
      <table>
        <tr>
          <td>Programming Languages</td>
          <td>JavaScript, Java, HTML, CSS</td>
        </tr>
        <!-- ... More skill rows ... -->
      </table>
    </section>
    <section class="projects">
      <h2>Personal Projects</h2>
      <ul>
        <li>
          <strong>Custom Components</strong> -
          <a href="https://custom-components-orpin.vercel.app/"
            ><i class="fas fa-external-link-alt"></i
          ></a>
          A collection of custom React components...
        </li>
        <!-- ... More project items ... -->
      </ul>
    </section>
  </body>
</html>
`;

  await page.setContent(resumeHTML);
  const pdfBuffer = await page.pdf({
    path: "resume-dark-mode.pdf",
    format: "A4",
  });

  await browser.close();

  return pdfBuffer;
}

module.exports = generatePDF;
