let question = [
  {
    que: "ceo of tesla",
    ansOpt: [
      {
        ansText: "elon musk",
        isCorrect: true,
      },
      {
        ansText: "steve jobs",
        isCorrect: false,
      },
    ],
  },
  {
    que: "capita of paris",
    ansOpt: [
      {
        ansText: "london",
        isCorrect: false,
      },
      {
        ansText: "france",
        isCorrect: true,
      },
    ],
  },
  {
    que: "no of books in harry potter",
    ansOpt: [
      {
        ansText: "5",
        isCorrect: false,
      },
      {
        ansText: "7",
        isCorrect: true,
      },
    ],
  },
];

console.log(Array.from(question[0].ansOpt.map((a) => console.log(a.ansText))));
