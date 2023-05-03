import React from 'react'

import styles from './Result.module.css'

function Result({correct, questions}) {
  const procent = Math.round((100*correct)/questions.length) ;
  return (
   
    <div className={styles.result}>
      <h1>React Quiz Results</h1>
      {/* <img src='img/and.png'  alt='chbhb'/> */}
      <h2> Score: {correct} of {questions.length}</h2>
      <h2> {procent}% Correct</h2>
   
     
<a href='/'>
<button>Try Again</button>

</a>
    </div>
  );
}
// Result:
// 6 of 25
// 24%

// You must study much harder!

export default Result;
