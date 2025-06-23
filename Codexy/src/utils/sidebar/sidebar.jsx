import styles from './sidebar.module.css'
import Widgets from "../widgets/widgets"


export default function SideBar() {
    return (
        <>
        <aside className={styles.sidebar}>
            <h2>Codexy</h2>
            <Widgets />
        </aside>
        </>
    )
}