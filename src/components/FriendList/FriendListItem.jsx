import css from './FriendsList.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

