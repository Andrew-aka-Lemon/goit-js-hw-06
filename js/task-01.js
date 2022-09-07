const categoriesRef = document.querySelector('#categories');

console.log('Number of categories: ', categoriesRef.children.length);

const liArrayRef = categoriesRef.querySelectorAll('.item');

liArrayRef.forEach(li => {
  console.log('Category:', li.querySelector('h2').textContent);
  console.log('Elements:', li.querySelectorAll('li').length);
});
