function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Creation of elements
const element = document.createElement('div');


element.classList.add('default-div', 'parent');

// eventlistener 

element.addEventListener('click', (e) => {

  console.log('event object from the listener', e);

  element.classList.toggle('parent');
});

const overFunc = (e) => {
  console.log('event object from the listener', e);
  element.classList.toggle('parent');
}

element.addEventListener('mouseover', overFunc, { once: true });

// element.addEventListener('mouseleave', (e) => {

//   console.log('event object from the listener', e);

//   element.classList.toggle('parent');
// });

const btnElement = document.createElement('button');

btnElement.innerText = 'Remove Event Mouse Over';

btnElement.addEventListener('click', () => {

  alert('This will remove the mouse over event on div');

  element.removeEventListener('mouseover', overFunc);
});




document.body.append(element, btnElement);


// Creation of Form with name ( text ), age ( text ), dob ( date ), email ( email )

// We are going to create only with the help of DOM manipulation

const formElement = document.createElement('form');

const createFormInput = (fieldName, type) => {

  const inputLabel = document.createElement('label');
  inputLabel.setAttribute('for', fieldName);
  inputLabel.style.margin = '8px';
  inputLabel.innerText = capitalizeFirstLetter(fieldName);

  const inputElement = document.createElement('input');

  inputElement.setAttribute('type', type);
  inputElement.setAttribute('id', fieldName);
  inputElement.style.margin = '8px';
  inputElement.setAttribute('name', fieldName);
  inputElement.setAttribute('required', true);

  // wrapper div for lable and input
  const wrapDiv = document.createElement('div');

  wrapDiv.append(inputLabel, inputElement);

  formElement.appendChild(wrapDiv);
}

[
  { fieldName: 'name', type: 'text' },
  { fieldName: 'age', type: 'number' },
  { fieldName: 'dob', type: 'date' },
  { fieldName: 'email', type: 'email' },
  { fieldName: '', type: 'submit' },
].forEach((field) => createFormInput(field.fieldName, field.type));

// Form Submit Event
formElement.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the default refresh behaviour for form submission
  alert('Yoour submitting the form');


})



// Event to be executed right after DOM Render/Parseing
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOMContentLoaded event object from the listener', e);
  // alert('Site is loaded successfully');

  document.body.append(formElement);
});