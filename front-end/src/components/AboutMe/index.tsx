

import styles from "./AboutMe.module.scss"
import "./timeline.scss"

import SectionTitle from "../SectionTitle"
import image from "/images/gabriel-picture.jpg"
import { Timeline } from "rsuite"
import { RiGraduationCapFill } from "react-icons/ri";
import { BsSuitcaseLgFill } from "react-icons/bs";



function AboutMe() {

    return (
        <section id="about-me" className={`container-fluid py-5 p-md-5 d-flex flex-column justify-content-evenly align-items-center gap-5`}>

            <SectionTitle title="Sobre Mim" />

            <div className={`row px-5 justify-content-evenly justify-content-xl-center align-items-center`}>

                <div className={`col-12 col-lg-4 py-5 d-flex justify-content-center`}>
                    <div className={`mt-n5 position-relative border-danger rounded ${styles.frame}`}>
                        <img src={image} alt="" className={`position-absolute rounded shadow`} />
                    </div>
                </div>

                <div className={`col-12 col-lg-5 fs-5 text-white `}>
                    <p>
                        Desenvolvedor de Software com 2 anos de experiência, participei de diversos projetos para empresas de diferentes setores. Sou apaixonado por transformar ideias e conceitos em soluções tecnológicas que impactam positivamente empresas e pessoas.
                    </p>
                    <p>
                        Minha flexibilidade e adaptabilidade são fortes ativos, tanto quanto minha capacidade de aprendizado rápido. Essas características se tornam evidentes quando trabalho em equipe, colaborando com colegas para resolver desafios complexos.
                    </p>
                    <p>
                        Minha trajetória profissional iniciou-se em uma filial da Drogaria São Paulo, onde trabalhei por 3 anos. No entanto, o desejo de crescimento me levou à faculdade de tecnologia e a uma reviravolta na minha carreira. Hoje, como desenvolvedor, tenho a oportunidade de aplicar meus conhecimentos em diversos tipos de projetos para empresas de diferentes setores.
                    </p>
                    <p>
                        Estou ansioso para continuar minha evolução como programador, abraçando novos desafios e explorando novas possibilidades no mundo da tecnologia.
                    </p>

                    <a href="Gabriel Marreiros - Curriculo.pdf" download className={`btn btn-danger text-decoration-none mt-4`}>Download CV</a>
                </div>

            </div>

            <div className={`col-11 col-md-6 py-4`}>
                <Timeline align="alternate" className={`w-100 text-white`}>
                    <Timeline.Item dot={<BsSuitcaseLgFill />}>
                        <h3 className={`fs-4 m-0`}>Freelancer</h3>
                        <h4 className={`fs-5 fw-medium m-0`}>Desenvolvedor Full-stack</h4>
                        <p className={`m-0`}>Março 2024 - Até o Momento</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<BsSuitcaseLgFill />}>
                        <h3 className={`fs-4 m-0`}>Class Solutions LTDA</h3>
                        <h4 className={`fs-5 fw-medium m-0`}>Desenvolvedor Frontend</h4>
                        <p className={`m-0`}>Outubro 2022 - Fevereiro 2024</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<RiGraduationCapFill />}>
                        <h3 className={`fs-4 m-0`}>Centro Universitario Internacional UNINTER</h3>
                        <h4 className={`fs-5 fw-medium m-0`}>Inglês</h4>
                        <p className={`m-0`}>Julho 2023 - Até o Momento</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<RiGraduationCapFill />}>
                        <h3 className={`fs-4 m-0`}>Centro Universitario Internacional UNINTER</h3>
                        <h4 className={`fs-5 fw-medium m-0`}>Análise e Desenvolvimento de Sistemas</h4>
                        <p className={`m-0`}>Julho 2022 - Até o Momento</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<BsSuitcaseLgFill />}>
                        <h3 className={`fs-4 m-0`}>Drogaria São Paulo</h3>
                        <h4 className={`fs-5 fw-medium m-0`}>Atendente / Balconista</h4>
                        <p className={`m-0`}>Novembro 2018 - Abril 2022</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<RiGraduationCapFill />}>
                        <h3 className={`fs-4 m-0`}>E. E. Prof° Gualter da Silva</h3>
                        <p className={`m-0`}>Fevereiro 2015 - Dezembro 2017</p>
                    </Timeline.Item>
                </Timeline>

            </div>


        </section>
    )
}

export default AboutMe