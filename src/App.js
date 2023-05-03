import React from "react";
import Game from "./components/Game/Game";
import Result from "./components/Result/Result";
import "./index.css";

const questions = [
  {
    title: "What is the correct command to create a new React project?",
    variants: [
      "npm create-react-app",
      "npm create-react-app myReactApp",
      "npx create-react-app",
      "npx create-react-app myReactApp  ",
    ],
    correct: 3,
  },
  {
    title: "What does myReactApp refer to in the following command?",
    variants: [
      "The directory to create the new app in ",
      "The name you want to use for the new app",
      "The type of app to create",
      "A reference to an existing app",
    ],
    correct: 1,
  },
  {
    title: "What command is used to start the React local development server?",
    variants: [
      "npm run dev", 
      "npm start", 
      "npm build", 
      "npm serve"
    ],
    correct: 1,
  },
  {
    title:"What is the default local host port that a React development server uses?",
    variants: [
      "5000",
      "300",
      "500",
      "3000"],
    correct: 3,
  },
  {
    title: "To develop and run React code, Node.js is required.",
    variants: [
      "False",
      "True"],
    correct: 1,
  },
  {
    title: "Which keyword creates a constant in JavaScript?",
    variants: [
      "let",
      "var",
      "const", 
      "constant"],
    correct: 2,
  },
  {
    title: "A copy of the 'real' DOM that is kept in memory is called what?",
    variants: [
      "Virtual DOM ", 
      "DOM", 
      "React DOM", 
      "Shadow DOM"],
    correct: 0,
  },
  {
    title:
      "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    variants: [
      "key ", 
      "index", 
      "data", 
      "id"],
    correct: 0,
  },
];



function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          question={question}
          onClickVariant={onClickVariant}
          step={step}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
