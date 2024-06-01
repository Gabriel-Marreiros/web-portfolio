import certificates from "../../data/certificates";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTitle";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./Certifications.module.scss";

function Certifications(){

    return(
        <section id="certifications" className={`container-fluid py-5 p-md-5`}>

            <SectionTitle title="Certificados" />

            <div className={`row`}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={`col-12 col-md-11 col-xl-6 h-25 mt-5 ${styles.mySwiper}`}>

                        {certificates.map(({image, link}, i) => (
                            <SwiperSlide key={i} className={`w-100 text-center pb-4 pb-md-0`}>
                                <a href={link} target="_blank">
                                    <img src={image} alt="" className={`rounded w-75 object-fit-contain`} />
                                </a>
                            </SwiperSlide>
                        ))}
                    
                </Swiper>
            </div>

            
        </section>
    )
}

export default Certifications;