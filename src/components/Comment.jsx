import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/axelrammon.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Axel Rammon</strong>
              <time title='21 de Março as 15:33hs' dateTime='2024-03-21 15:33:50'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, Parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}