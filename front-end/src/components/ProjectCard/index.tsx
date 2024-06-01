import styles from './ProjectCard.module.scss';
import { useState } from 'react';
import ProjectCardDetails from './ProjectCardDetails';
import IProject from '../../types/interfaces/IProject';

interface projectCardProps {
    project: IProject;
    id: number;
}

function ProjectCard({project, id}: projectCardProps) {
    
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    
    const handleCloseDetails = () => {
        setOpenDetails(false); 
    };
    
    const handleOpenDetails = () => {
        setOpenDetails(true)
    };

    return (

        <div className={`w-100 border border-dark rounded p-3 shadow bg-dark-gray ${styles.card_container}`}>

            <div className={`h-75 text-center`}>
                <img src={project.coverImage} alt="Imagem do projeto" className={`w-100 h-100 object-fit-cover rounded ${styles.cover_image}`}/>
            </div>

            <div className={`h-25 d-flex gap-5 align-items-center justify-content-between mt-2`}>
                <h4 className={`text-center text-white`}>{project.title}</h4>
                <button onClick={handleOpenDetails} className={`btn btn-danger`}>
                    Detalhes
                </button>
            </div>

            {openDetails && <ProjectCardDetails key={id} id={id} project={project} openDetails={openDetails} handleCloseDetails={handleCloseDetails}/>}

        </div>
    )
}

export default ProjectCard;
