

const storeToLocalStorage = () => {
  // Use any of the selector function to select the input tag
  const inputElement = document.querySelector('input');

  // take the .value prop and store it in the local storage
  console.log(inputElement.value);

  // Storing
  // window.localStorage
  localStorage.setItem('batch', inputElement.value);


}


// Retrieving value from localStorage
const showInScreen = () => {

  console.log(localStorage.getItem('batch'));

  // set the inner value for H1 tag
  document.querySelector('h1').innerHTML = localStorage.getItem('batch');
}




