import styles from "./SkillCard.module.scss";

interface skillCardProps {
    image: string;
    title: string;
}

function SkillCard({image ,title}: skillCardProps){
    return(
        <div className={`d-flex flex-column rounded bg-dark-gray border border-danger shadow p-2 ${styles.card_container}`}>
            
            <div className={`w-100 h-75 d-flex align-items-center`}>
                <img src={image} alt="" className={`w-100 h-75 object-fit-contain`}/>
            </div>

            <div className={`h-25`}>
                <h5 className={`text-center text-white`}>
                    {title}
                </h5>
            </div>
        </div>
    )
}

export default SkillCard;