"use strict";
{
  // Async: Promise ----------------------------------------------------------//
  console.log("Async: Promise");

  // Producer
  const promise = new Promise((resolve, reject) => {
    console.log(">> promise");
    setTimeout(() => {
      // resolve('RESOLVE')
      reject(new Error("REJECT: No Network"));
    }, 1000);
  });

  // Consumer
  promise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(">> FINALLY");
    });

  // Promise Chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then((num) => console.log(`>> ${num}`));

  // Error Handling
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve("HEN"), 1000);
    });
  const getEgg = (hen) =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          // resolve(`${hen} => EGG`),
          reject(new Error(`${hen} => EGG`)),
        1000
      );
    });
  const getCook = (egg) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => COOK`), 1000);
    });

  getHen()
    .then(getEgg)
    .catch((error) => {
      return "BREAD";
    })
    .then(getCook)
    .then((cook) => console.log(`>> ${cook}`));

  // Callback => Promise
  class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === "CCC" && password === "3333") ||
            (id === "DDD" && password === "4444")
          ) {
            resolve(id);
          } else {
            reject(new Error("Not Found"));
          }
        }, 1000);
      });
    }

    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === "CCC") {
            resolve({ name: "CCC", role: "admin" });
          } else {
            reject(new Error("No Access"));
          }
        }, 1000);
      });
    }
  }

  const userStorage = new UserStorage();
  const id = prompt("Enter you ID: ");
  // const id = "CCC";
  const password = prompt("Enter you password: ");
  // const password = "3333";
  userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) =>
      console.log(`>> Hello ${user.name}, you have a ${user.role} role`)
    );
}
