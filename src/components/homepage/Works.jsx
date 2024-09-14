import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/tunirwabhitkar/Travel-Management-System.git"
            img={ibgroup}
            alt="IBGroup vietnam website mockup"
            name="Travel & Tourism Management System"
            type="Software Engineering • System Integration"
            year="2024"
            tools="Java • JDBC • SQL"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://tunirwabhitkar.github.io/Digital-Resume/index.html"
            img={memento}
            alt="memento landing page mockup"
            name="Web Resume"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/tunirwabhitkar/Analyzing-selling-price-of-used-cars.git"
            img={acc}
            alt="real business accountant project mockup"
            name="Analyzing Selling Price of Cars"
            type="Data Analysis"
            year="2023"
            tools="Python • Pandas • Matplotlib • Seaborn • Numpy"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/tunirwabhitkar/ServerlessImageProcessing.git"
            img={daddy}
            alt="godaddy clone page mockup"
            name="Serverless Image Processing"
            type="Cloud"
            year="2023"
            tools="Python • AWS Lambda • AWS S3 • AWS APIGateway"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://github.com/tunirwabhitkar/Talk-A-Tive.git"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="Talk-A-Tive"
            type="Full Stack Development"
            year="2023"
            tools="React.JS • Node.Js • MongoDB • Express.Js"
          />
         
        </div>
      </div>
    </section>
  );
}
