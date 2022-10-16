import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>Попробовать снова</a>
    </div>
  );
}

function Game({ obj, question, handlerClick }) {

  let per = 0
  per = Math.round((question) * 100 / questions.length)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${per}%` }} className="progress__inner"></div>
      </div>
      <h1>{obj.title}</h1>
      <ul>
        {obj.variants.map((res, index) =>
          <li onClick={() => handlerClick(index)} key={index}>{res}</li>
        )}
      </ul>
    </>
  );
}

function App() {
  const [question, setquestion] = useState(0);
  const [correct, setcorrect] = useState(0);
  function handlerClick(index) {
    setquestion(question + 1)
    if (questions[question].correct == index) {
      setcorrect(correct + 1)

    }

  }
  return (
    <div className="App">
      {
        question !== questions.length ?
          <Game obj={questions[question]} question={question} handlerClick={handlerClick} /> :
          <Result correct={correct} />
      }

    </div>
  );
}

export default App;
