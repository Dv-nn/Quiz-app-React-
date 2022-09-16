import React from 'react';

import './index.scss';

const questions = [
  {
    title: 'Что такое виртуальный DOM?',
    variants: ['это компоненты, которые отображаются в браузере', 'это дерево тегов', 'это дерево узлов, в котором элементы, их атрибуты и содержимое перечислены в виде объектов и свойств'],
    correct: 2,
  },
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
    title: 'Что такое props в компоненте?',
    variants: ['это пустой объект', 'это объект, cвойствами которого являются свойства, переданные компоненту при создании его экземпляра', 'это функции'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'это простой HTML',
      'это функция',
      'это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=''/>
      <h2>Вы отгадали {correct} ответа/ов из {questions.length}</h2>
      <a href="/"><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />) : (<Result correct={correct} />)
      }
      
    </div>
  );
}

export default App;
