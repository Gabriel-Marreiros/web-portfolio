import SectionTitle from "../SectionTitle";
import SkillCard from "./SkillCard";

import skills from "../../data/skills";

function Skills(){

    return(
        <section id="skills" className={`container-fluid px-4 py-5 p-md-5 d-flex flex-column gap-5`}>
            
            <SectionTitle title="Conhecimentos" />

            <div className={`row align-items-center justify-content-center gap-5 border border-dark rounded shadow p-3 pb-5 p-md-5 bg-light-black`}>

                <div className={`col-xl-5 py-4 ps-md-5 text-white text-align-end`}>
                    <h3 className={`fs-1 text-center text-md-start`}>Skills e <span className={`text-danger`}>Tecnologias</span></h3>
                    <p className={`fs-4 py- text-center text-md-start`}>Aqui estão as tecnologias e frameworks que possuo habilidades e conhecimentos.</p>
                </div>

                <div className={`row align-items-center row-gap-3 col-xl-6`}>
                    {skills.map(({title, image}, i)=>(
                        <div key={i} className={`col-6 col-sm-4 col-md-3 col-lg-2 col-xl-4 col-xxl-2`}>
                            <SkillCard image={image} title={title} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;