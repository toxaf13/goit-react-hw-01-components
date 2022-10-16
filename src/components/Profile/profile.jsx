import styles from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => { 
   return (
     <div className={styles.profile}>
       <div className={styles.description}>
         <img className={styles.avatar} src={avatar} alt="User avatar"/>
         <p className={styles.name}>{username}</p>
         <p className={styles.tag}>{tag}</p>
         <p className={styles.location}>{location}</p>
       </div>
       <ul className={styles.stats}>
         {[
            [1, "Followers", stats.followers],
            [2, "Views", stats.views],
            [3, "Likes", stats.likes],
         ].map(([id, text, value]) => (
            <li key={id} className={styles.item}>
               <span className={styles.label}>{text}</span>
               <span className={styles.quantity}>{value}</span>
            </li>
         ))}
      </ul>
     </div>
   );
 };
 