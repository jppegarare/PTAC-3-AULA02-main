import Image from "next/image"
import styles from "./footer.module.css"
export default function Footer(){
    return(
        <header header className={styles.cabecalho}>
            <Image width={200} height={150} src={"https://ead.ifms.edu.br/theme/moove/pix/default_course.jpg"}/>
        </header>
    )
}