function handleShowExample() {
  const showExampleInput = document.querySelector('#showExampleTriggerInput');
  const showExampleDropdown = document.querySelector('#showMethodExample');

  showExampleInput.addEventListener('keydown', () => {
    showExampleDropdown.show();
  })
}
