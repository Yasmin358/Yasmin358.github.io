const submit = document.querySelector('#submit-button');
const emailInput = document.querySelector('#email-input');
const senhaInput = document.querySelector('#password-input');
const form = document.querySelector('#evaluation-form');

submit.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Requisito 18.

const submitForm = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function checkboxChecked() {
  if (checkbox.checked === true) {
    submitForm.removeAttribute('disabled');
  } else {
    submitForm.setAttribute('disabled', 'disabled');
  }
}

checkbox.addEventListener('click', checkboxChecked);

// Requisito 20.

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerText = '500';
const initialCount = parseInt(counter.innerText, 10);

textarea.addEventListener('keyup', () => {
  counter.innerText = initialCount - textarea.value.length;
});

// Requisito 21.

function getName() {
  const name = document.querySelector('.input.name');
  const lastName = document.querySelector('.input.lastname');
  const nameAnswer = document.querySelector('#name-answer');
  nameAnswer.innerText = `Nome: ${name.value} ${lastName.value}`;
  return nameAnswer;
}

function getEmail() {
  const email = document.querySelector('.input.email');
  const emailAnswer = document.querySelector('#email-answer');
  emailAnswer.innerText = `Email: ${email.value}`;
  return emailAnswer;
}

function getHouse() {
  const selectHouse = document.querySelector('#house');
  const houseAnswer = document.querySelector('#house-answer');
  for (let index = 0; index < selectHouse.length; index += 1) {
    if (selectHouse[index].selected === true) {
      houseAnswer.innerText = `Casa: ${selectHouse[index].value}`;
      return houseAnswer;
    }
  }
}

function getFamily() {
  const family = document.querySelectorAll('[name="family"]');
  const familyAnswer = document.querySelector('#family-answer');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      familyAnswer.innerText = `Família: ${family[index].value}`;
      return familyAnswer;
    }
  }
}

function getSubjects() {
  let emptySubjects = '';
  const subjects = document.querySelectorAll('input[type="checkbox"]');
  const subjectsAnswer = document.querySelector('#subjects-answer');
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked === true) {
      emptySubjects += `${subjects[index].value}, `;
    }
  }
  subjectsAnswer.innerHTML = `Matérias: ${emptySubjects.slice(0, -6)}`;

  return subjectsAnswer;
}

function getRate() {
  const rateAnswer = document.querySelector('#rate-answer');
  const rate = document.querySelectorAll('input[type="radio"][name="rate"]');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      rateAnswer.innerText = `Avaliação: ${rate[index].value}`;
      return rateAnswer;
    }
  }
}

function getComments() {
  const commentsAnswer = document.querySelector('#comments-answer');
  if (textarea.value !== '') {
    commentsAnswer.innerText = `Observações: ${textarea.value}`;
    return commentsAnswer;
  }
  commentsAnswer.innerText = 'Observações: ';
  return commentsAnswer;
}

function clearForm() {
  const allElements = form.children;
  const formAnswers = document.querySelector('.form-answers');
  for (let index = 0; index < allElements.length; index += 1) {
    allElements[index].style.display = 'none';
  }
  formAnswers.style.display = 'block';
}

function gatherAllInfo(event) {
  event.preventDefault();
  clearForm();
  getName();
  getEmail();
  getHouse();
  getFamily();
  getSubjects();
  getRate();
  getComments();
}

submitForm.addEventListener('click', gatherAllInfo);
