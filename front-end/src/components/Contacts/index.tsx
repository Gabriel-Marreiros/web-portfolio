import SectionTitle from "../SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";


function Contacts() {

    return (
        <section id="contacts" className={`container-fluid py-5`}>
            
            <SectionTitle title="Contatos" />

            <div className={`row my-5 justify-content-center fw-lighter`}>
                
                <div className={`col-md-12 col-lg-3 d-flex flex-column align-items-center gap-2 text-white`}>
                    <FaLocationDot size="4.5rem" className={`p-3 border border-4 border-danger rounded-circle`}/>
                    <h4>Localização:</h4>
                    <h5>São Paulo/SP</h5>
                </div>

                <a href="mailto:gabriel.s.marreiros@hotmail.com" target="_blank" className={`col-12 col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center gap-2 text-decoration-none text-white`}>
                    <HiOutlineMail size="4.5rem" className={`p-3 border border-4 border-danger rounded-circle`}/>
                    <h4>E-mail:</h4>
                    <h5>gabriel.s.marreiros@hotmail.com</h5>
                </a>

                <a href="https://wa.me/5511988941113?text=Ol%C3%A1+Gabriel%21" target="_blank" className={`col-12 col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center gap-2 text-decoration-none text-white`}>
                    <FaWhatsapp size="4.5rem" className={`p-3 border border-4 border-danger rounded-circle`}/>
                    <h4>WhatsApp:</h4>
                    <h5>(+55) 11 98894-1113</h5>
                </a>

            </div>
        </section>
    )
}

export default Contacts;