// Get references to HTML elements
const modelContainer = document.querySelector('#model-container');
const menuItems = document.querySelectorAll('#menu li');

// Set the initial active model
let activeModel = 'machine1.obj';

// Load the active model
loadModel(activeModel);

// Add event listeners to the menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all menu items
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    // Add the active class to the clicked menu item
    item.classList.add('active');
    // Load the selected model
    activeModel = item.getAttribute('data-model');
    loadModel(activeModel);
  });
});

// Function to load a 3D model
function loadModel(model) {
  // Remove any existing model
  modelContainer.innerHTML = '';
  // Create the model entity
  const modelEl = document.createElement('a-entity');
  modelEl.setAttribute('obj-model', `obj: models/${model}`);
  modelEl.setAttribute('scale', '0.5 0.5 0.5');
  // Add the model entity to the container
  modelContainer.appendChild(modelEl);
}
