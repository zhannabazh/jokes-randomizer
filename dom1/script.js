const form = document.querySelector("#form");
const input = document.querySelector("#nameInput");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = input.value.trim();

  if (name === "") {
    result.textContent = "Введи ім*я";
    return;
  }

  result.textContent = "Думаю...";

  try {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();

    if (!data.age) {
      result.textContent = "Не можу вгадати(";
      return;
    }

    result.textContent = `Ім*я ${name} - приблизний вік: ${data.age}`;
  } catch (error) {
    result.textContent = "Помилка сервера";
  }
});
