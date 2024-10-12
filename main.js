const form = document.querySelector('.modal-form');
console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();
  const currentFrom = event.currentTarget;
  const fieldValue = currentFrom.elements.user_name.value;
  console.log(fieldValue);
});
