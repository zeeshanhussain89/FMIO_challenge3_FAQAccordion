const questions = document.querySelectorAll('.question');
const questionsArr = [];

function init() {
  // questions.forEach((question) => {
  //   const questionObj = { id: question.getAttribute('id'), state: 'collapsed' };
  //   questionsArr.push(questionObj);
  //   question.addEventListener('click', toggleState);
  // });

   questionsArr = questions.map((question) => {
    const questionObj = { id: question.getAttribute('id'), state: 'collapsed' };
    question.addEventListener('click', toggleState);
     return questionObj;
  });
  
  //   console.log(questionsArr);
}

function toggleState(e) {
  const questionDiv = e.target.parentElement;
  const question = questionsArr.filter(
    (q) => q.id === questionDiv.getAttribute('id')
  );
  console.log(question[0]);
  const imgBtn = questionDiv.querySelector('img');

  if (question[0].state === 'collapsed') {
    imgBtn.setAttribute('src', 'assets/images/icon-minus.svg');
    question[0].state = 'expanded';
    const answer = document.getElementById(`answer${question[0].id[8]}`);
    answer.classList.remove('hide');
  } else {
    imgBtn.setAttribute('src', 'assets/images/icon-plus.svg');
    question[0].state = 'collapsed';
    const answer = document.getElementById(`answer${question[0].id[8]}`);
    answer.classList.add('hide');
  }
}

init();
