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
    };
  };

  createDaysOfTheMonth();

  function holidayColors() {
    let holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        const element = holidays[index];
        element.style.backgroundColor = 'red';
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