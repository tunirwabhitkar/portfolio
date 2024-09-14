import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "System Integration",
    "Problem Solving",
    "Data Analysis",
    "Debugging",
    "Software Developer",
  ];

  const toolBoxItems = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Linux",
    "Python",
    "AWS",
    "TailwindCSS",
    "ReactJS",
    "VS Code",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all aspects of software development and system integration, specializing in creating advanced and efficient solutions. My goal is to deliver impactful and innovative digital experiences through my expertise in programming, networking, and continuous improvement.

"
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
