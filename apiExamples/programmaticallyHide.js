export function hideExample() {
  const btn = document.querySelector('#hideExampleBtn');
  const dropdown = document.querySelector('#hideExample');

  btn.addEventListener('click', () => {
    dropdown.hide();
  });
}
