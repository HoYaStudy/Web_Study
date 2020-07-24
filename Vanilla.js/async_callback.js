"use strict";
{
  // Async: Callback ---------------------------------------------------------//
  console.log("Async: Callback");

  class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === "AAA" && password === "1111") ||
          (id === "BBB" && password === "2222")
        ) {
          onSuccess(id);
        } else {
          onError(new Error("Not Found"));
        }
      }, 1000);
    }

    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === "AAA") {
          onSuccess({ name: "AAA", role: "admin" });
        } else {
          onError(new Error("No Access"));
        }
      }, 1000);
    }
  }

  const userStorage = new UserStorage();
  // const id = prompt("Enter you ID: ");
  const id = "AAA";
  // const password = prompt("Enter you password: ");
  const password = "1111";
  userStorage.loginUser(
    id,
    password,
    (user) => {
      userStorage.getRoles(
        user,
        (userWithRole) => {
          console.log(
            `>> Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
        },
        (error) => {
          console.log(error);
        }
      );
    },
    (error) => {
      console.log(error);
    }
  );
}
