import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import exp from "../../../public/images/exp.jpg";
import manulife from "../../../public/images/manulife.jpg";
import ford from "../../../public/images/ford.jpg";
import energymeter from "../../../public/images/Smart-meters.jpg";
import medbleze from "../../../public/images/medbleze.jpg";
import RecentProjects from "../RecentProjects/RecentProjects";

const projects = [
  {
    name: "Manulife",
    year: "Mar2022",
    align: "up",
    image: manulife,
    link: "#",
    desc: "Manulife is a leading global insurance and financial services provider. This project involved the development and enhancement of a customer-facing web application for managing insurance policies, claims, and account details. The platform aimed to provide users with a seamless digital experience for accessing policy information, making premium payments, and tracking claim status.",
  },
  {
    name: "Ford",
    year: "Mar2022",
    align: "left",
    image: ford,
    link: "#",
    desc: "Ford is a globally renowned automobile manufacturer. The project involved building and maintaining a digital platform to manage vehicle information, service history, user profiles, and dealership interactions. The goal was to enhance the customer experience through a modern, intuitive web interface for vehicle-related services.",
  },
  {
    name: "Smart Meters",
    year: "Mar2022",
    align: "right",
    image: energymeter,
    link: "#",
    desc: "This project focused on building a web-based platform for managing smart energy meters used by utility companies to monitor electricity consumption in real-time. The system allowed users to view consumption data, billing history, and usage analytics, and enabled utility providers to manage meter configurations and alerts efficiently.",
  },
  {
    name: "Health Care",
    year: "Mar2022",
    align: "down",
    image: medbleze,
    link: "#",
    desc: "At Medblaze, our mission is to harness the power of technology to enhance the quality of healthcare services and improve the lives of patients and providers alike. We believe that every individual deserves access to efficient, personalized, and compassionate healthcare, and we're committed to making that a reality.",
  },
];

function ProjectsMain() {
  return (
    <div className="max-w-[1200px] mx-auto px-4" id="projects">
      <ProjectsText />
      <div className="flex p-2  rounded-[20px] gap-4 justify-center mx-auto sm:mt-4 md:mt-12 sm:flex-wrap md:flex-nowrap">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              link={item.link}
              desc={item.desc}
              name={item.name}
              image={item.image}
              year={item.year}
              align={item.align}
            />
          );
        })}
      </div>
      <RecentProjects/>
    </div>
  );
}

export default ProjectsMain;
