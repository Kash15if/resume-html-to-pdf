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
          background-color: #ffffff;
          color: #3d3b3b;
        }
  
        header {
          background-color: #bcd7f5;
          color: #003ba6;
          text-align: center;
          padding: 20px 0;
        }
  
        header address a {
          text-decoration: none;
          color: #2ea2d7;
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
          padding: 10px 20px 0 20px;
          /* margin: 20px 0; */
          /* background-color: #2df0cc; */
          /* box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); */
        }
  
        h2 {
          margin-top: 0;
        }
  
        .job {
          margin: 0 0 2rem 0;
        }
  
        .dates {
          font-weight: bold;
        }
  
        .company {
          color: #5f7082;
          margin-top: 0;
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
          margin-bottom: 10px;
        }
  
        table,
        th,
        td {
          /* border: 1px solid #ddd; */
          padding: 5px;
          text-align: left;
        }
  
        th {
          background-color: #f5f5f5;
        }
  
        /* ul {
          padding: 0;
        } */
  
        ul li {
          margin-bottom: 5px;
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
  
        .innerDivForBorder {
          border-top: 2px solid black;
        }
  
        h4 {
          margin-top: 1rem;
        }
  
        /* Add more CSS rules for styling */
      </style>
    </head>
    <body>
      <header>
        <h1>Kashif Ahmad</h1>
        <address>
          <p>+91 97098 13874, &emsp; Kolkata, India</p>
          <p>
            <a href="mailto:kash151if@gmail.com">kash151if@gmail.com</a> |
            <a href="https://www.linkedin.com/in/kash15if"
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
        <div class="innerDivForBorder">
          <p>
            As a Full Stack Developer with around 2 years of experience in the
            FMCG sector, I bring a unique combination of technical expertise and
            industry knowledge to the table. With a strong tech stack that
            includes React.js, Node.js, MongoDB, PostgreSQL, and Java, I am
            passionate about problem-solving and have built several cool projects
            to solve real-world issues.
          </p>
        </div>
      </section>
      <section class="work">
        <h2>Work Experience</h2>
        <div class="innerDivForBorder">
          <div class="job">
            <h4>Software Developer ( Jul 2022 - Present )</h4>
            <p class="company">Greenwave Solutions Pvt. Ltd., Kolkata, India</p>
            <ul>
              <li>
                Led an internal employee service portal for company employees,
                featuring leave management, claims processing, notifications, and
                access to salary slips. All senstive values are encypted
              </li>
              <li>
                Led the development and redevelopment of multiple modules in the
                Digital Logbooks and Workflow, which is the product of our
                company.
              </li>
              <li>
                Dockerized multiple monolithic applications and microservices to
                simplify their deployment, enhance customizability, and enable
                easy deploymen
              </li>
              <li>
                Implemented a user authentication and security module that
                eliminated 100 percent paper logbook usage and enabled sequential
                workflow of multiple jobs in the industry.
              </li>
              <li>
                Configured encrypted database credentials inside the property
                files using node.js API
              </li>
              <li>
                Developed a Java application for multiple clients to transfer data
                between PostgreSQL, MS SQL, MySQL, OracleDB and MongoDB databases.
                The application was integrated with a scheduler to automate the
                data transfer process at regular intervals.
              </li>
            </ul>
            <p class="tech-stack">
              Tech stack in use: React.js, Node.js, Redux, Java, Spring Boot, JSF,
              SQL, PotgreSQL, Docker, jwt, bcrypt.
            </p>
          </div>
          <div class="job">
            <h4>Assiociate Software Developer ( June 2022 - Present )</h4>
            <p class="company">Greenwave Solutions Pvt. Ltd., Kolkata, India</p>
            <ul>
              <li>
                Led the transformation of a large JSF monolith to microservices
                using React and Spring Boot and implemented real-time data
                visualization with web socket integration.
              </li>
              <li>
                Utilized JavaScript’s event loop concept to optimize page load
                time. and by breaking down each component of the page into
                separate responsibilities, page load time was reduced by around 50
                percent (up to 90 percent for larger datasets).
              </li>
              <li>
                Created robust APIs in Node.js for end-to-end data transfer and
                client-facing REST APIs for seamless interaction with the
                products.
              </li>
              <li>
                Developed the backend for a PTC Thingworx platform for a client.
              </li>
            </ul>
            <p class="tech-stack">
              Tech stack used: React.js, Node.js, Redux, Graphql, TypeScript,
              JavaScript, MsSQL, PostgreSQL , MongoDB, MySQL Socket.IO, Java,
              Chart.js, Express.js, JSF, HTML, CSS, Mui
            </p>
          </div>
          <div class="job">
            <h3>Software Intern ( April 2021 - June 2021 )</h3>
            <p class="company">Greenwave Solutions Pvt. Ltd., Kolkata, India</p>
            <ul>
              <li>Worked as an SQL and Thingworx developer .</li>
              <li>
                Improved reporting rates by developing dashboard and reporting
                system on PTC Thingworx
              </li>
            </ul>
            <p class="tech-stack">
              Tech stack used: JavaScript, SQL, PTC Thingworx, React.js.
            </p>
          </div>
          <!-- ... More job entries ... -->
        </div>
      </section>
      <section class="education">
        <h2>Education</h2>
        <div class="innerDivForBorder">
          <p>
            <strong>B. Tech. in Computer Science</strong>, University of Calcutta,
            ( June 2021 )
          </p>
        </div>
      </section>
      <section class="skills">
        <h2>Skills</h2>
        <div class="innerDivForBorder">
          <table>
            <tr>
              <td>Programming Languages</td>
              <td>JavaScript, Java, HTML, CSS</td>
            </tr>
  
            <tr>
              <td>Frameworks and Libraries</td>
              <td>
                Node.js, React.js, Spring Boot, Express.js, JSF-Primefaces,
                PrimefaceReact, Bootstrap, Mui, Chart.js, React.native, Vue.js,
                Socket.IO
              </td>
            </tr>
  
            <tr>
              <td>Database</td>
              <td>MySQL, MS SQL, PostgreSQL, PL/PGSQL, MongoDB, Firebase</td>
            </tr>
  
            <tr>
              <td>Other Technologies</td>
              <td>Docker, Git, GitHub, SVN, PTC Thingworx</td>
            </tr>
  
            <!-- ... More skill rows ... -->
          </table>
        </div>
      </section>
      <section class="projects">
        <h2>Personal Projects</h2>
        <div class="innerDivForBorder">
          <ul>
            <li>
              <strong>Custom Components</strong> -
              <a href="https://custom-components-orpin.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A set of custom React components, including dynamic tables,
              responsive carousels, pop-ups, and more, designed for easy
              customization and use. Further expansion will include features like
              diagrams and organization charts.
            </li>
  
            <li>
              <strong>Meal Booking System (Online food order)</strong> -
              <a href="https://meal-booking-system.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              An advanced web app for meal booking in hostels/offices with
              user-friendly features including meal tracking, billing, and a
              dashboard. Admins manage meals, expenses, generate bills/reports,
              and mail bills with ease. Efficient for users and admins, with Excel
              data downloads.
            </li>
  
            <li>
              <strong>Online Exam Portal</strong> -
              <a href="https://github.com/Kash15if/react-flat-expense-record"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              An online exam portal for convenient exams. Admins add questions via
              Excel, and the platform tracks user behavior for insights and
              integrity along with time.
            </li>
  
            <li>
              <strong>Flat Expense Records (Split App)</strong> -
              <a href="https://study-planner-phi.vercel.app/dashboard"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A React-based expense tracker with Firebase backend, similar to
              Split app. It features dark and light mode options, allowing users
              to manage expenses, track multiple users, and generate insightful
              reports.
            </li>
  
            <li>
              <strong>Study Planner</strong> -
              <a href="https://react-grocery-list-firebase.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A React-based expense tracker with Firebase backend, similar to
              Split app. It features dark and light mode options, allowing users
              to manage expenses, track multiple users, and generate insightful
              reports.
            </li>
  
            <li>
              <strong>Snake and Ladder</strong> -
              <a href="https://vue-snake-ladder.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A Full Stack real time muiltiplayer snake and ladder game built
              using HTML, CSS and Vue.js for Front End and Firebase Firestore for
              realtime database.
            </li>
  
            <li>
              <strong>Covid-19 tracker</strong> -
              <a href="https://covid19status.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A responsive web-app made in Vue.js with HTML, CSS, Bootstrap as
              front-end, used library such as Map-box GL, Chart.js also used
              Covid19India and covid19 API for real-time data
            </li>
            <li>
              <strong>All Projects</strong> -
              <a href="https://myprojects.vercel.app/"
                ><i class="fas fa-external-link-alt"></i
              ></a>
              A responsive web-app made in Vue.js with HTML, CSS, Bootstrap as
              front-end, used library such as Map-box GL, Chart.js also used
              Covid19India and covid19 API for real-time data
            </li>
  
            <!-- ... More project items ... -->
          </ul>
        </div>
      </section>
    </body>
  </html>
  `;

  await page.setContent(resumeHTML);
  const pdfBuffer = await page.pdf({
    path: "resume-dark-mode.pdf",
    format: "A4",
    // printBackground: true,
    margin: {
      top: "20px",
    },
  });

  await browser.close();

  return pdfBuffer;
}

module.exports = generatePDF;
