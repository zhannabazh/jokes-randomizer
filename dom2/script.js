console.log("js losded!");
const button = document.querySelector("#btn");
const fact = document.querySelector("#fact");

button.addEventListener("click", async () => {
  button.disabled = true;
  fact.textContent = "думаю...";

  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();

    if (!data.joke) {
      fact.textContent = "не можу знайти вашого жарту";
      button.disabled = false;
      return;
    }

    fact.textContent = `посмійся: ${data.joke}`;
    button.disabled = false;
  } catch (error) {
    fact.textContent = "Server error";
    console.log(error);
    button.disabled = false;
  }
});
