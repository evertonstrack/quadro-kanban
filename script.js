
const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list__content');

function dragover() {
  const cardBeingDragged = document.querySelector('.dragging');
  this.classList.add('over');
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
}

function dragstart() {
  lists.forEach(list => list.classList.add('highlight'));
  this.classList.add('dragging');
}

function dragend() {
  lists.forEach(list => list.classList.remove('highlight'));
  this.classList.remove('dragging');
}

function drag() {
  console.log('dragging');
}

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

lists.forEach( list => {
  list.addEventListener('dragover', dragover);
  list.addEventListener('dragleave', dragleave);
  list.addEventListener('drop', drop);
});

