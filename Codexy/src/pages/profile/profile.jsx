import styles from './profile.module.css'
import { useUser } from '../../contexts/UserContext'
import Data from './profileData'
import SideBar from '../../utils/sidebar/sidebar'


export default function Profile(other={}) {
    const { user } = useUser();
    
  return (
    <>
    <div className={styles.wrapper}>
        <SideBar />

    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img src="/man.jpeg" alt="Avatar" className={styles.avatar} />
        <div className={styles.userInfo}>
          <h2>{user?.name}</h2>

          <div className={styles.infoList}>
          {Object.entries(user).map(([key, value]) => {
              if (key === 'name' || key === 'id') return null;  // пропускаем name
              return (
                      <div key={key} className={styles.infoItem}>
                        <i className={Data[key]}></i>
                            {value}
                      </div>
                      );
            })}
          </div>
          {user.id !== other.id ? '': 
            <div className={styles.profileActions}>
              <button className={`${styles.btn} ${styles.message}`}>Сообщение</button>
              <button className={`${styles.btn} ${styles.follow}`}>Добавить в друзья</button>
            </div>
          }

        </div>
      </div>

      <div className={styles.posts}>
        
        <div className={styles.post}>
          <h3>Just finished a new design!</h3>
          <p>Check out my latest work on Behance. Really proud of how this one turned out ✨</p>
        </div>

        <div className={styles.post}>
          <h3>Morning Routine</h3>
          <p>Started journaling again. Feels good to take 10 minutes just for myself every morning.</p>
        </div>

      </div>
    </div>
  </div>
        </>
    )
}