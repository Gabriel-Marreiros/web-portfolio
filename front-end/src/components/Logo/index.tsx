import styles from "./Logo.module.scss";

function Logo(){

    return(
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
            <div className={`fw-bold fs-5`}><span className={`text-danger`}>G</span>abriel <span className={`text-danger`}>M</span>arreiros</div>
            <div className={styles.subtitle}><span className={`text-danger`}>&lt;</span> Software Developer <span className={`text-danger`}>/&gt;</span></div>
        </div>
        
    )
}

export default Logo