const questions = [
  {
    category: "question category",
    question: "question?",
    choices: ["answer", "b", "c"],
    answer: "answer"
  },
  {
    category: "question category",
    question: "question?",
    choices: ["answer", "b", "c"],
    answer: "answer"
  },
  {
    category: "question category",
    question: "question?",
    choices: ["answer", "b", "c"],
    answer: "answer"
  },
  {
    category: "question category",
    question: "question?",
    choices: ["answer", "b", "c"],
    answer: "answer"
  },
  {
    category: "question category",
    question: "question?",
    choices: ["answer", "b", "c"],
    answer: "answer"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }
  return "The computer's choice is wrong. The correct answer is: " + question.answer;
}

const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
const result = getResults(question, computerChoice);

console.log(result);
