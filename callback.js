// callback function is function passed as an argument to the other function
const h1 = document.createElement('h1');

function doOperation(operation) {
  operation();
}


const sum = () => {
  console.log('Sum is being computed');
  console.log('Sum Operation Done');
}

// sum is callback function passed argument( operation )
doOperation(sum);


// Callback Hell

// function doOperationTwo( ((((() => ) => {

// }) => {

// }) => {

// }) => {

// }) {

// }


// Implementation of backward Counting with Callback hell

setTimeout(() => {
  h1.innerText = 1;
  setTimeout(() => {
    h1.innerText = 2;
    setTimeout(() => {
      h1.innerText = 3;
      setTimeout(() => {
        h1.innerText = 4;
        setTimeout(() => {
          h1.innerText = 5;
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



document.addEventListener('DOMContentLoaded', () => {
  h1.innerHTML = 0;
  document.body.append(h1);
})
