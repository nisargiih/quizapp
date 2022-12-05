import { useState } from 'react';
import './App.css';
import Result from './Result';
export default function QueAns(ans, rightans) {
  const [QueNo, setQueNo] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinised, setIsFinished] = useState(false)

  function isTrue(ans) {
    if (ans) {
      setScore(score + 1)
    } else {
      if (score === 0) {
        setScore(0)
      }
    }
    console.log()
    if (questions.length - 1 > QueNo) {
      setQueNo(QueNo + 1)
    } else {
      setIsFinished(true)
    }
  }
  return (

    <div className='container'>

      {isFinised ?
        <Result data={{ score: score, questions: questions.length }} /> :
        <>
          <p>Your Score is : {score}</p>
          <p>Que : {questions[QueNo].questionText}</p>
          {questions[QueNo].answerOptions.map((item) => (
            <>
              <button className='btn' onClick={() => isTrue(item.isCorrect)}>{item.answerText}</button>
            </>
          ))}
          <p> {QueNo + 1}/{questions.length}</p>
        </>
      }
    </div>
  )
}

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];