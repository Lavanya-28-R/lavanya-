
const searchForm = document.querySelector('.form-inline');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = e.target.elements[0].value;
  
});

const addButtons = document.querySelectorAll('button');

addButtons.forEach(button => {
	button.addEventListener('click', addToCart);
});

function addToCart() {
	alert('Product added to cart!');
}
