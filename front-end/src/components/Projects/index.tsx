import projects from "../../data/projects"

import styles from './Projects.module.scss';
import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import IProject from "../../types/interfaces/IProject";

function Projects(){

    return(
        <section id="projects" className="container-fluid p-4 p-md-5">

            <SectionTitle title="Projetos"/>

            <p className={`mt-1 p-2 p-lg-4 p-xl-5 fs-4 text-center text-white`}>
                Todos os projetos, incluindo bancos de dados <span className={`text-danger`}>MySQL</span> e <span className={`text-danger`}>MongoDB</span>, estão hospedados em um servidor <span className={`text-danger`}>VPS</span> particular, rodando em contêineres <span className={`text-danger`}>Docker</span>. O ambiente foi configurado utilizando um servidor <span className={`text-danger`}>Nginx</span> com proxy reverso e certificado SSL digital. Todos os projetos possuem automações de <span className={`text-danger`}>CI/CD</span> utilizando o <span className={`text-danger`}>GitHub Actions</span> para executar os testes unitários e fazer o deploy dos projetos no servidor.
            </p>

            <div className={`pt-5 px-lg-5 ${styles.projects_container}`}>
                { projects.map((project: IProject, i) => ( 
                    <ProjectCard key={i} project={project} id={i}/> 
                )) }
            </div>

        </section>
    )
}

export default Projects;