import style from "./friendList.module.css";

export const FriendList = ({friends})=>{
   const friendListRender = friends.map((friend)=>{
      return(
         <li key={friend.id} className={style.item}>
            <span className={friend.isOnline ?style.active :style.inactive}>
            </span>
            <img className={style.avatar} src={friend.avatar} alt='User avatar' width='48' />
            <p className={style.name} >{friend.name}</p>
         </li>
      );
   });
   return (<ul>{friendListRender}</ul>)


}