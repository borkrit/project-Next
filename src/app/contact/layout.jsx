import styles from "./style.module.css";

export default function Layout ({children,form,posts}){

    return(
        <section className={styles.contact__wrapper} >
            <div>
                {children}
            </div>
            <div >
                <div className={styles.contact__slots}>
                    {posts}
                </div>
                <div className={styles.contact__slots}>
                    {form}
                </div>
            </div>
        </section>
    )
}