
const parent = document.querySelector('.parent');

const child = document.querySelector('.child');

const grandchild = document.querySelector('.grandchild');


// Bubbling --> event propagation from innermost child to outermost parent
// parent.addEventListener('click', (e) => {
//   console.log('Parent Clicked', e);
// });

// child.addEventListener('click', (e) => {
//   console.log('Child Clicked', e);
// });

// grandchild.addEventListener('click', (e) => {
//   console.log('Grandchild Clicked', e);
// });


// Capturing --> event propagation from outermost parent to innermost child
grandchild.addEventListener('click', (e) => {
  console.log('Grandchild Clicked', e);
}, { capture: true });

child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child Clicked', e);
}, { capture: true });

parent.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('Parent Clicked', e);
}, { capture: true });


