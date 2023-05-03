import React from "react";
import styles from "./Game.module.css";

function Game({ step, question, onClickVariant, questions }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div>
      <div className={styles.progress}>
        <div style={{ width: `${percentage}%`}} className={styles.inner}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
