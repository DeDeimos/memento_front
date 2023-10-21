import styles from "./index.module.scss";
import photo from "../../../assets/vanik.jpg"

const Explore = () => {
    return(
        <div className={styles.explore}>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
            <div className={styles.exploreItem}>
                <img src={photo}/>
            </div>
        </div>
    )
}

export {Explore};