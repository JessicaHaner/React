import styles from './UserCard.module.css';

const UserCard = ({
  name,
  age,
  profession,
  avatarUrl,
  isMentor = false,
  children,
}) => {
  return (
    <article className={styles.card}>
      <img
        src={avatarUrl}
        alt={`Foto de ${name}`}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>{name}</h2>
          {isMentor && <span className="mentor">Mentor</span>}
        </div>
        <p className={styles.profession}>{profession}</p>
        <p className={styles.age}>{age} anos</p>
        {children}
      </div>
    </article>
  );
};

export default UserCard;
