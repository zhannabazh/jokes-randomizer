// console.log("1. Початок (Замовив каву)");

// setTimeout(() => {
//   console.log("2. Асинхронна дія (Кава готова!)");
// }, 0); // Ставимо 0 мілісекунд!

// console.log("3. Кінець (Гортаю стрічку інстаграму)");

// const myPromise = new Promise((resolve, reject) => {
//   // Імітуємо випадковість (50/50)
//   const isSuccess = Math.random() > 0.5;

//   console.log("...Виконується операція...");

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("✅ Успіх! Дані отримано.");
//     } else {
//       reject("❌ Помилка! Щось пішло не так.");
//     }
//   }, 1500);
// });

// // Використання:
// myPromise
//   .then((data) => console.log(data)) // Спрацює, якщо був resolve
//   .catch((err) => console.error(err)) // Спрацює, якщо був reject
//   .finally(() => console.log("🏁 Операція завершена (успішно чи ні)"));

// const coffeeOrder = new Promise((resolve, reject) => {
//   const isMachineWorking = Math.random() > 0.5; // Шанс 50%

//   setTimeout(() => {
//     if (isMachineWorking) {
//       resolve("☕ Ваша кава готова!");
//     } else {
//       reject("❌ Кавомашина зламалася...");
//     }
//   }, 1000);
// });

// // ОБРОБКА
// coffeeOrder
//   .then((message) => {
//     // Виконується ТІЛЬКИ при resolve
//     console.log("Успіх:", message);
//   })
//   .catch((error) => {
//     // Виконується ТІЛЬКИ при reject
//     console.error("Помилка:", error);
//   });

// coffeeOrder
//   .then((message) => {
//     return message + " (випито)";
//   })
//   .then((updatedMessage) => {
//     console.log(updatedMessage); // Що тут виведеться?
//   })
//   .catch((err) => console.log(err));

// NEW PART --> async / await
// const makeCoffee = () => {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     setTimeout(() => {
//       success ? resolve("☕ Кава готова") : reject("❌ Машина зламалась");
//     }, 1000);
//   });
// };

// async function handleBreakfast() {
//   console.log("Починаю готувати сніданок...");

//   try {
//     // AWAIT каже: "Зупинись тут і почекай, поки кава приготується"
//     const message = await makeCoffee();

//     // Цей рядок НЕ виконається, поки не прийде результат від await
//     console.log("Результат:", message + " (випито)");
//   } catch (error) {
//     // Якщо у makeCoffee стався reject, ми миттєво падаємо сюди
//     console.log("Ой! ", error);
//   } finally {
//     console.log("Йду на роботу.");
//   }
// }

// handleBreakfast();

// //two awaits
// const makeCoffee = () =>
//   new Promise((res, rej) => {
//     setTimeout(
//       () =>
//         Math.random() < 0.3 ? res("☕ Кава") : rej("Кавомашина зламалася"),
//       1000
//     );
//   });

// const makeToast = () =>
//   new Promise((res) => {
//     setTimeout(() => res("🍞 Тост"), 1000);
//   });

// async function fullBreakfast() {
//   try {
//     console.log("--- Сніданок почався ---");

//     const coffee = await makeCoffee(); // Крок 1
//     console.log(coffee + " готовий!");

//     const toast = await makeToast(); // Крок 2 (тільки після Кроку 1)
//     console.log(toast + " готовий!");

//     console.log("--- Сніданок успішний! ---");
//   } catch (error) {
//     console.log("🚨 Сніданок перервано: " + error);
//   } finally {
//     console.log("Прибираю на кухні.");
//   }
// }

// fullBreakfast();

//fetch
// async function getTodos() {
//   try {
//     console.log("Запит пішов...");

//     // 1. Робимо запит
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     );

//     // 2. Перевіряємо статус (чи не 404 або 500)
//     if (!response.ok) {
//       throw new Error(`Помилка сервера: ${response.status}`);
//     }

//     // 3. Перетворюємо "сиру" відповідь у JSON (теж асинхронно!)
//     const data = await response.json();

//     console.log("Дані отримано:", data);

//     // 4. Маніпуляція (згадуємо map/forEach)
//     data.forEach((todo) => {
//       console.log(
//         `Завдання: ${todo.title} | Статус: ${todo.completed ? "✅" : "⏳"}`
//       );
//     });
//   } catch (error) {
//     console.error("Щось пішло не так:", error.message);
//   }
// }

// getTodos();

//JS + API
// async function getUsersAndFilter() {
//   try {
//     console.log("request just went...");

//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users?_limit=10"
//     );

//     if (!response.ok) {
//       throw new Error("loading error ", response.status);
//     }

//     const data = await response.json();

//     // console.log("data have been got", data);

//     const usersWithOddIds = data.filter((u) => u.id % 2 === 0);
//     // console.log("data have been updated (odd ids): ", usersWithOddIds);

//     const result = usersWithOddIds.map(
//       (u) => `Користувач ${u.name} працює в компанії ${u.company.name}`
//     );
//     console.log(result);
//   } catch (error) {
//     console.log("there something went wrong: ", error.message);
//   }
// }

// getUsersAndFilter();

//loading state
// async function fetchDataWithStatus() {
//   // 1. Вмикаємо режим завантаження
//   let isLoading = true;
//   console.log("Статус: Loading...");

//   try {
//     // 2. Імітуємо затримку мережі (2 секунди)
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );

//     // 3. Отримуємо дані
//     const data = await response.json();

//     // 4. Вимикаємо завантаження
//     isLoading = false;
//     console.log("Статус: Done!");
//     console.log("Дані:", data.title);
//   } catch (error) {
//     isLoading = false;
//     console.log("Статус: Error!", error.message);
//   }
// }

// fetchDataWithStatus();

//error state
async function smartRequest() {
  // Початковий стан
  let isLoading = false;
  let error = null;
  let data = null;

  try {
    // 1. Починаємо завантаження
    isLoading = true;
    error = null; // Скидаємо минулу помилку перед новим запитом
    console.log("⏳ Завантаження даних...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );

    if (!response.ok) {
      throw new Error(`Сервер відповів: ${response.status}`);
    }

    data = await response.json();
    console.log("✅ Успіх:", data);
  } catch (err) {
    // 2. Обробляємо помилку
    error = err.message;
    console.log("⚠️ Повідомлення для користувача:", error);
  } finally {
    // 3. Вимикаємо завантаження в будь-якому випадку
    isLoading = false;
    console.log("🏁 Процес завершено. Статус завантаження:", isLoading);
  }
}

smartRequest();
