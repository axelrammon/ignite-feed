import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://github.com/axelrammon.png" 
          />
          <div className={styles.authorInfo}>
            <strong>Axel Rammon</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title='21 de Março as 15:33hs' dateTime='2024-03-21 15:33:50'>Publicado há 1 h</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>{' '}
          </p>
      </div>
    </article>
  );
}