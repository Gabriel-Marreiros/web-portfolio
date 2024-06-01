import styles from "./Home.module.scss";
import { Typewriter } from "react-simple-typewriter";

function Home(){

    const tecnologies: Array<string> = ["Desenvolvedor Frontend React & Angular", "Desenvolvedor Backend Java & Spring Boot", "Desenvolvedor Backend Node.js & Express.js",]

    return(
        <section id="home" className={`container-fluid ${styles.home_container}`}>

            <div className={`row h-100 align-items-center justify-content-center pb-5`}>

                <div className={`col-12 col-lg-6  d-flex flex-column align-items-center text-white`}>
                    <h2 className={`m-0 ${styles.title}`}>
                        Gabriel <span className={`text-danger`}>Marreiros</span>
                    </h2>
                    
                    <div className={`d-flex align-items-center justify-content-center gap-2 fs-1 ${styles.sub_title}`}>
                        <h2 className={`fs-2`}>Desenvolvedor Full Stack</h2>
                    </div>
                    
                    <h3 className={`text-center fw-normal fs-4 p-3`}>
                        <Typewriter 
                            words={tecnologies}
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                            loop={true}
                            cursor={true}
                            cursorBlinking={true} 
                            cursorColor="var(--bs-red)" 
                        />
                    </h3>

                    <div className={`p-3`}>
                        <a href="Gabriel Marreiros - Curriculo.pdf" download className={`btn btn-danger text-decoration-none mx-2`}>Download CV</a>
                        <a href="#projects" className={`btn btn-outline-danger text-decoration-none mx-2`}>Projetos</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Home;