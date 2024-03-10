const appRoot = document.querySelector('#app');

if (appRoot) {
  appRoot.innerHTML = '<h1>Hanoi</h1>';
} else {
  throw new Error('App root not found. Please define a div with id="app" in your HTML file.');
}
