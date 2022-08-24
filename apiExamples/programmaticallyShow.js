export function showExample(elem) {
  const triggerInput = document.querySelector('#showExampleTriggerInput')
  triggerInput.addEventListener('keydown', () => {
    elem.show();
  })
}
