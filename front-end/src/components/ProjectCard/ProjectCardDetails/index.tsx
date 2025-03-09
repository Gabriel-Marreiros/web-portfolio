import React from 'react';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IoClose } from "react-icons/io5";
import { FaReact, FaAngular, FaSass, FaBootstrap, FaJava, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiSpring, SiExpress, SiMysql, SiJest, SiTypescript, SiJunit5, SiFlyway, SiMongodb, SiTailwindcss, SiJenkins, SiGrafana, SiPrometheus, SiApachekafka } from "react-icons/si";
import IProject from '../../../types/interfaces/IProject';
import styles from './ProjectCardDetails.module.scss';
import { IconType } from 'react-icons';

const TechnologiesIconsMap: Record<string, IconType> = {
    "React": FaReact,
    "Angular": FaAngular,
    "Typescript": SiTypescript,
    "Sass": FaSass,
    "Bootstrap": FaBootstrap,
    "Tailwind": SiTailwindcss,
    "Java": FaJava,
    "Spring": SiSpring,
    "Flyway": SiFlyway,
    "JUnit": SiJunit5,
    "NodeJS": FaNodeJs,
    "Express": SiExpress,
    "MySQL": SiMysql,
    "Jest": SiJest,  
    "Docker": FaDocker,
    "Kafka": SiApachekafka,
    "MongoDB": SiMongodb,
    "Jenkins": SiJenkins,
    "Grafana": SiGrafana,
    "Prometheus": SiPrometheus
}

interface projectCardDetailsProps {
    project: IProject;
    openDetails: boolean;
    handleCloseDetails: () => void;
    id: number;
}

function ProjectCardDetails({project, openDetails, handleCloseDetails, id}: projectCardDetailsProps) {

    return (
        <Modal show={openDetails}
            // onHide={handleCloseDetails}
            dialogClassName={styles.dialog}
            centered
            key={id}>

            <div className={`bg-light-black rounded px-3 py-5 px-md-3 py-md-4 shadow border border-dark`}>

                <button onClick={handleCloseDetails} className={`position-absolute btn btn-danger top-0 end-0 m-1 m-md-3`}>
                    <IoClose/>
                </button>
                

                <div className={`row d-flex align-items-center justify-content-center `}>
                    
                    {/* Container do Video */}
                    <div className={`col-md-6 text-center `}>
                        <video src={project.demonstrationVideo}
                            className={`object-fit-cover rounded border border-dark shadow`}
                            width={`92%`}
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            preload='auto'>
                        </video>
                    </div>

                    {/* Container das informações */}
                    <div className={`col-md-6 d-flex flex-column align-items-center justify-content-evenly gap-4 gap-md-5 text-white p-4`}>
                        <h3>{project.title}</h3>
                        
                        <p className={`text-center fs-6`}>{project.description}</p>

                        <div>
                            <span className={`fs-6 strong`}>Tecnologias utilizadas: </span> 

                            {project.usedTechnologies.map((technology: string, i) => (
                                <OverlayTrigger key={i} placement='top' overlay={<Tooltip>{technology}</Tooltip>}>
                                    <span className={`mx-1 fs-4`}>
                                        {React.createElement(TechnologiesIconsMap[technology])}
                                    </span>
                                </OverlayTrigger>
                            ))}
                        </div>

                        <div className={`d-flex align-items-center justify-content-center gap-3`}>
                            {project.projectSite && <a href={project.projectSite} target='_blank' className={`btn btn-danger text-decoration-none fst-normal`}>Acessar Projeto</a>}
                            {project.repository && <a href={project.repository} target='_blank' className={`btn btn-danger text-decoration-none fst-normal`}>Acessar Repositório</a>}
                        </div>
                    </div>

                </div>
            </div>           

        </Modal>


    )
}

export default ProjectCardDetails;
