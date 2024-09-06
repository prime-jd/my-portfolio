import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectFour, projectOne, projectThree, projectTwo, projectFive} from '../assets'
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Class Monitoring System"
            des="A monitoring system to manage class activities by engagement both students and teachers in real-time."
            src={projectOne}
            github = "https://github.com/prime-jd/cms"
            link = ""
          />
          <ProjectsCard
            title="E-commerce Website"
            des="A e-commerce site where users can signup and authenticate 
            itself and can buy products or add to cart."
            src={projectTwo}
            github = "https://github.com/prime-jd/e-commerce-site"
            link = ""
          />
          <ProjectsCard
            title="Mega Blog Site"
            des="A blog site in which user can authenticate and can post its blog and text over it."
            src={projectThree}
            github = "https://github.com/prime-jd/blogSite"
            link = "https://react-js-tawny.vercel.app"
          />
          <ProjectsCard
            title="Amazon Prime Clone"
            des=" An amazon prime clone which provides functionalities of prime clone in which user can watch movies and others."
            src={projectFour}
            github= "https://github.com/prime-jd/amazon-clone"
            link = ""
          />
           <ProjectsCard
            title="Social Media Website (JDconnect)"
            des="A full-fledged Social Media site where user can create profile , post and interact with other users."
            src={projectFive}
            github="https://github.com/prime-jd/JdConnect"
            link=""
          />
          { /*<ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
