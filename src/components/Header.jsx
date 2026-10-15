import styles from './Header.module.css';

export function Header({ brand, description, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.brandGroup}>
        <span className={styles.logo}>GT</span>

        <div className={styles.brandText}>
          <strong>{brand}</strong>
          <span>{description}</span>
        </div>
      </div>

      <nav className={styles.navigation} aria-label="Navegação principal">
        {children}
      </nav>
    </header>
  );
}
