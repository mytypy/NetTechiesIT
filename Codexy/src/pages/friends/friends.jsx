import styles from './friends.module.css'
import SideBar from "../../utils/sidebar/sidebar"


export default function Friends() {
    return (
        <>
  <div class={styles.wrapper}>
    <SideBar/>

    <div class={styles.container}>
      <div class={styles.friendsList}>
        <h2>Friends</h2>

        <div class={styles.searchBar}>
          <input type="text" placeholder="Search friends..." />
        </div>

        <div class={styles.friend}>
          <div class={styles.friendInfo}>
            <img src="https://via.placeholder.com/48" alt="Friend Avatar" />
            <div class={styles.friendDetails}>
              <span class={styles.friendName}>Alice Johnson</span>
              <span class={styles.friendStatus}>Online</span>
            </div>
          </div>
          <button class={styles.messageBtn}>Message</button>
        </div>

        <div class={styles.friend}>
          <div class={styles.friendInfo}>
            <img src="https://via.placeholder.com/48" alt="Friend Avatar" />
            <div class={styles.friendDetails}>
              <span class={styles.friendName}>Bred Pitt</span>
              <span class={styles.friendStatus}>Online</span>
            </div>
          </div>
          <button class={styles.messageBtn}>Message</button>
        </div>

        <div class={styles.friend}>
          <div class={styles.friendInfo}>
            <img src="https://via.placeholder.com/48" alt="Friend Avatar" />
            <div class={styles.friendDetails}>
              <span class={styles.friendName}>Lady Gaga</span>
              <span class={styles.friendStatus}>Online</span>
            </div>
          </div>
          <button class={styles.messageBtn}>Message</button>
        </div>

      </div>
    </div>
  </div>
        </>
    )
}