export function showExample() {
  const triggerInput = document.querySelector('#showExampleTriggerInput');
  const dropdownElem = document.querySelector('#showMethodExample');

  triggerInput.addEventListener('keydown', () => {
    dropdownElem.show();
  });
}
