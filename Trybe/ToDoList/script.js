function LimparLista() {
  const tasks = document.getElementsByClassName('task');
  while (tasks.length > 0) {
    tasks[0].parentNode.removeChild(tasks[0]);
  }
}

function createElement(className) {
  const task = document.createElement('li');
  task.className = className;
  return task;
}

function AtualizarLista(array) {
  const list = document.getElementById('lista-tarefas');
  for (let index = 0; index < array.length; index += 1) {
    const task = createElement('task');
    task.textContent = array[index];
    list.appendChild(task);
  }
}

function taskSelect(task) {
  const tasks = document.getElementsByClassName('task');
  tasks[task].style.backgroundColor = 'grey';
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].style.backgroundColor === 'grey' && index !== task) {
      tasks[index].style.backgroundColor = '';
    }
  }
}

function SelecionarElemento() {
  const tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', () => {
      taskSelect(index);
    });
    tasks[index].addEventListener('dblclick', () => {
      if (tasks[index].classList.contains('completed')) {
        tasks[index].classList.remove('completed');
      } else {
        tasks[index].classList.add('completed');
      }
    });
  }
}

const toDoList = [];

function removerElementosFinalizados(array) {
  const tasks = document.getElementsByClassName('task');

  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].classList.contains('completed')) {
      const nome = tasks[index].innerHTML;
      array.splice(array.indexOf(nome), 1);
    }
  }
  LimparLista();
  AtualizarLista(toDoList);
  SelecionarElemento();
}

function CriarElemento() {
  const input = document.querySelector('#texto-tarefa').value;
  toDoList.push(input);
  document.querySelector('#texto-tarefa').value = '';
  LimparLista();
  AtualizarLista(toDoList);
  SelecionarElemento();
}

function RemoverElemento(array) {
  const tasks = document.getElementsByClassName('task');

  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor === 'grey') {
      array.splice(index, 1);
    }
  }
  LimparLista();
  AtualizarLista(toDoList);
  SelecionarElemento();
}

// eslint-disable-next-line max-lines-per-function
window.onload = () => {
  const buttonAdd = document.getElementById('criar-tarefa');
  const buttonClear = document.getElementById('apaga-tudo');
  const buttonClear2 = document.getElementById('remover-finalizados');
  const buttonRemove = document.getElementById('remover-selecionado');

  function buttonCreate() {
    buttonAdd.addEventListener('click', () => { CriarElemento(); });
  }

  function botaoLimpar() {
    buttonClear.addEventListener('click', () => { LimparLista(); });
  }

  function botaoFinalizados() {
    buttonClear2.addEventListener('click', () => { removerElementosFinalizados(toDoList); });
  }

  function botaoRemover() {
    buttonRemove.addEventListener('click', () => { RemoverElemento(toDoList); });
  }

  buttonCreate();
  botaoLimpar();
  botaoFinalizados();
  botaoRemover();
};
