function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  function zoomIn(event) {
    event.target.style.fontSize = '40px';
  }

  function zoomOut(event) {
    event.target.style.fontSize = '20px';
  }

  function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');
  
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const days = decemberDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.classList.add('day');
      dayListItem.innerText = days;
      if (index - 1 === 24 || index - 1 === 25 || index - 1 === 31) {
        dayListItem.classList.add('holiday');
      }

      if (index - 1 === 4 || index - 1 === 11 || index - 1 === 18 || index - 1 === 25) {
        dayListItem.classList.add('friday');
      }
  
      daysList.appendChild(dayListItem);
      dayListItem.addEventListener('mouseenter', zoomIn);
      dayListItem.addEventListener('mouseleave', zoomOut);
    };
  };

  createDaysOfTheMonth();

  function holidayColors() {
    let holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        const element = holidays[index];
        if (element.style.backgroundColor === 'red') {
            element.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            element.style.backgroundColor = 'red';
        }
    }
  }

  function createHoliday(string) {
    const holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    holidayButton.innerText = string;
    document.getElementsByClassName('buttons-container')[0].appendChild(holidayButton);
    holidayButton.addEventListener('click', holidayColors)
  }

  createHoliday('Feriados');

  function fridayText() {
    let fridays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridays.length; index += 1) {
        const element = fridays[index];
        if (element.innerText === 'SEXTOU!') {
            element.innerText = ((parseInt(element.previousElementSibling.innerText)) + 1).toString();
        } else {
            element.innerText = 'SEXTOU!';
        }

    }
  }

  function createFriday(string) {
    const fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = string;
    document.getElementsByClassName('buttons-container')[0].appendChild(fridayButton);
    fridayButton.addEventListener('click', fridayText);
  }

  createFriday('Sexta-feira');

  function addColor(color) {
    let element = document.createElement('div');
    element.style.backgroundColor = color;
    element.style.width = '10px';
    element.style.height = '10px';
    element.style.display = 'block';
    element.style.verticalAlign = 'middle';
    document.querySelector('.my-tasks').appendChild(element);
  }

  function selectTask(event) {
    if (event.target.classList.value === 'task selected') {
        event.target.classList.remove('selected');
    } else {
        event.target.classList.add('selected');
    }
  }

  function addTask() {
    let element = document.createElement('span');
    element.innerHTML = document.getElementById('task-input').value;
    addColor('red');
    element.classList.add('task');
    document.querySelector('.my-tasks').appendChild(element);
    element.addEventListener('click', selectTask);
  }

  document.getElementById('btn-add').addEventListener('click', addTask);