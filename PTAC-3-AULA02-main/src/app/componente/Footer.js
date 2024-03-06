import Image from "next/image"
import styles from "./footer.module.css"
export default function Footer(){
    return(
        <header header className={styles.cabecalho}>
            <Image width={100} height={100} src={"https://ead.ifms.edu.br/theme/moove/pix/default_course.jpg"}/>
            <nav>

                <p>copyright</p>

            </nav>
        </header>
    )
}