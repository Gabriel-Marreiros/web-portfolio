import styles from './SectionTitle.module.scss';

interface sectionTitleProps {
    title: string
}

function SectionTitle({title}: sectionTitleProps){
    return(
        <div className='text-center text-white'>
            <h2 className={styles.title}>
                {title}
            </h2>
        </div>
    )
} 

export default SectionTitle;