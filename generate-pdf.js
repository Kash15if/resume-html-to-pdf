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

  // const resume_dir = "./resume_templates/";
  // let htmlContent = readHtmlFile(resume_dir + fileNameInput + ".html");

  let htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Timeline Concept</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
        rel="stylesheet"
      />
  
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.9/css/boxicons.min.css"
      />
  
      <style>
        .partition {
          display: flex;
        }
  
        .partition > .left-body {
          flex: 3;
          min-height: 40vh;
          background-color: blueviolet;
          margin: 5px;
          padding: 15px;
        }
  
        .partition > .right-body {
          flex: 7;
          min-height: 40vh;
          background-color: rgb(83, 226, 43);
          margin: 5px;
          padding: 15px;
        }
  
        .partition > .right-body > section > .section-content {
          padding: 20px;
        }
  
        .top,
        .middle {
          display: flex;
          min-height: 10vh;
          background-color: blanchedalmond;
          margin: 10px;
        }
  
        .middle > .image {
          flex: 3;
          margin: 10px;
        }
  
        .middle > .about {
          flex: 7;
          margin: 10px;
        }
  
        .section-content {
          border-top: 2px solid rgb(0, 75, 160);
          padding: 10px 5px;
        }
  
        .top {
          display: flex;
          padding: 25px;
          justify-content: space-between;
        }
  
        .top > .name {
          flex: 7;
          text-align: left;
        }
  
        .top > .contacts {
          flex: 3;
          text-align: left;
        }
  
        h1 {
          font-size: 34px;
          margin: 0;
          font-weight: bold;
        }
        h2 {
          font-size: 28px;
          margin: 0;
          font-weight: bold;
        }
  
        h3 {
          font-size: 24px;
          margin: 0;
          font-weight: bold;
        }
  
        h4 {
          font-size: 20px;
          margin: 0;
          font-weight: bold;
        }
        h5 {
          font-size: 16px;
          margin: 0;
          font-weight: bold;
        }
  
        .designation {
          font-size: 16px;
        }
  
        .tag-cloud {
          display: inline-block;
          color: white;
          padding: 8px 20px;
          font-family: Arial;
          border-radius: 5px;
          background-color: #2196f3;
          margin-top: 8px;
        }
  
        section {
          margin: 15px 5px;
        }
  
        .projectName {
          font-weight: bold;
        }
  
        /* .projectContent {
        } */
      </style>
    </head>
    <body style="padding: 5px">
      <div class="full-box">
        <div class="top">
          <div class="name">
            <h1>John Doe</h1>
            <p class="designation">Full Stack Developer</p>
          </div>
          <div class="contacts">
            <p>
              <a href="mailto:kash151if@gmail.com">
                <i class="bx bx-envelope"></i> kash151if@gmail.com
              </a>
              <br />
              <a href="https://www.linkedin.com/in/kashif-ahmad-373286164">
                <i class="bx bxl-linkedin"></i> LinkedIn
              </a>
              <br />
              <a href="https://auth.geeksforgeeks.org/user/kash15if/practice">
                <i class="bx bx-code-alt"></i> GeeksForGeeks
              </a>
              <br />
              <a href="https://github.com/Kash15if">
                <i class="bx bxl-github"></i> GitHub </a
              ><br />
            </p>
          </div>
        </div>
  
        <div class="middle">
          <div class="image">
            <img
              src="https://avatars.githubusercontent.com/u/43416961?v=4"
              alt="Photo"
            />
          </div>
          <div class="about">
            <section>
              <h3>About</h3>
              <div class="section-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, esse culpa voluptate perspiciatis ea quod tempore
                provident nostrum similique repellendus deserunt iste rem quo,
                explicabo nemo recusandae magni sed eos! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Fugiat, nisi fuga sapiente
                officia iusto recusandae illum praesentium totam facere deleniti
                soluta voluptate illo et distinctio voluptas ipsa iste tempora
                eum.
              </div>
            </section>
          </div>
        </div>
  
        <div class="partition">
          <div class="left-body">
            <section>
              <h3>Awards</h3>
              <div class="section-content">
                <h4>Enter your award</h4>
                <p>Companys Name/ Location</p>
                <p>2014</p>
  
                <h4>Enter your award</h4>
                <p>Companys Name/ Location</p>
                <p>2014</p>
  
                <!-- More awards -->
              </div>
            </section>
            <section>
              <h3>Skills</h3>
              <div class="section-content">
                <span class="tag-cloud">Ford</span>
                <span class="tag-cloud">Volvo</span>
                <span class="tag-cloud">BMW</span>
                <span class="tag-cloud">Tesla</span>
                <span class="tag-cloud">Nissan</span>
                <span class="tag-cloud">Toyota</span>
                <span class="tag-cloud">Saab</span>
                <span class="tag-cloud">Porsche</span>
                <span class="tag-cloud">VW</span>
                <span class="tag-cloud">Fiat</span>
                <span class="tag-cloud">Honda</span>
              </div>
            </section>
            <section>
              <h3>Projects</h3>
              <div class="section-content">
                <ul>
                  <li>
                    <span class="projectName">Project Name 1</span> :
                    <span class="projectContent"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quod laboriosam reprehenderit molestiae iste assumenda
                      voluptate repudiandae.</span
                    >
                  </li>
                  <li>
                    <span class="projectName">Project Name 1</span> :
                    <span class="projectContent"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quod laboriosam reprehenderit molestiae iste assumenda
                      voluptate repudiandae.</span
                    >
                  </li>
                  <li>
                    <span class="projectName">Project Name 1</span> :
                    <span class="projectContent"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quod laboriosam reprehenderit molestiae iste assumenda
                      voluptate repudiandae.</span
                    >
                  </li>
                  <li>
                    <span class="projectName">Project Name 1</span> :
                    <span class="projectContent"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quod laboriosam reprehenderit molestiae iste assumenda
                      voluptate repudiandae.</span
                    >
                  </li>
                  <li>
                    <span class="projectName">Project Name 1</span> :
                    <span class="projectContent"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quod laboriosam reprehenderit molestiae iste assumenda
                      voluptate repudiandae.</span
                    >
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div class="right-body">
            <section>
              <h3>Experience</h3>
              <div class="section-content">
                <ol
                  class="relative border-l border-gray-200 dark:border-gray-700"
                >
                  <li class="mb-10 ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Application UI v2.0.0
                      <span
                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
                        >Latest</span
                      >
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on January 13th, 2022</time
                    >
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      ><svg
                        class="w-3.5 h-3.5 mr-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
                        />
                        <path
                          d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        />
                      </svg>
                      Download ZIP</a
                    >
                  </li>
                  <li class="mb-10 ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Figma v1.3.0
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on December 7th, 2021</time
                    >
                    <p
                      class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      All of the pages and components are first designed in Figma
                      and we keep a parity between the two versions even as we
                      update the project.
                    </p>
                  </li>
                  <li class="ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Library v1.2.2
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on December 2nd, 2021</time
                    >
                    <p
                      class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>
            </section>
            <section>
              <h3>Education</h3>
              <div class="section-content">
                <ol
                  class="relative border-l border-gray-200 dark:border-gray-700"
                >
                  <li class="mb-10 ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Application UI v2.0.0
                      <span
                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
                        >Latest</span
                      >
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on January 13th, 2022</time
                    >
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      ><svg
                        class="w-3.5 h-3.5 mr-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
                        />
                        <path
                          d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        />
                      </svg>
                      Download ZIP</a
                    >
                  </li>
                  <li class="mb-10 ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Figma v1.3.0
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on December 7th, 2021</time
                    >
                    <p
                      class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      All of the pages and components are first designed in Figma
                      and we keep a parity between the two versions even as we
                      update the project.
                    </p>
                  </li>
                  <li class="ml-6">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                        />
                      </svg>
                    </span>
                    <h3
                      class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Flowbite Library v1.2.2
                    </h3>
                    <time
                      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                      >Released on December 2nd, 2021</time
                    >
                    <p
                      class="text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Get started with dozens of web components and interactive
                      elements built on top of Tailwind CSS.
                    </p>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
    </body>
  </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();
  return pdfBuffer;

}

module.exports = generatePDF;
