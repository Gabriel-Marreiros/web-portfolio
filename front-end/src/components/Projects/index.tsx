import projects from "../../data/projects"

import styles from './Projects.module.scss';
import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import IProject from "../../types/interfaces/IProject";

function Projects(){

    return(
        <section id="projects" className="container-fluid p-4 p-md-5">

            <SectionTitle title="Projetos"/>

            <div className={`pt-5 px-lg-5 ${styles.projects_container}`}>
                { projects.map((project: IProject, i) => ( 
                    <ProjectCard key={i} project={project} id={i}/> 
                )) }
            </div>

        </section>
    )
}

export default Projects;