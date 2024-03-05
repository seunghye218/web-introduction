const resister = document.getElementById('resister');

console.log(document.body);

resister.addEventListener("click", () => {
  const nameInput = document.getElementById('nameInput');
  const guestName = nameInput.value;
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const count = checkedBoxes.length;
  alert(`${guestName}님, 저와 ${count}개의 취향이 같으시네요!`);
});


