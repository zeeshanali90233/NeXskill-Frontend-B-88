// Promise
const weatherData = new Promise((resolve, reject) => {
  if (5 == 5) {
    // Success: Fulfilled
    resolve();
  } else {
    // Error: Rejected
    reject();
  }
});
console.log(weatherData);

const userAge = 25;

const confirmAgeEligibility = new Promise((resolve, reject) => {
  if (userAge >= 18) {
    resolve("Yes he is eligible");
  } else {
    reject("He/She is not eligible due to underaghe");
  }
});

// console.log(confirmAgeEligibility);

// Then, Catch
confirmAgeEligibility
  .then((data) => {
    console.log("We");
  })
  .then((data) => {
    console.log("Can");
  })
  .then((data) => {
    console.log("Chain");
  })
  .catch((error) => {
    console.log(error);
  });

// In Future , a piece of code excecutes
// Once
setTimeout(() => {
  const divRef = document.querySelector(".header");
  divRef.innerHTML = "I am changed please don't touch me.";
}, 10000);

// Set Interval
let i = 5;
const intervalRef = setInterval(() => {
  i += 5;
  console.log(i);
  if (i == 15) {
    clearInterval(intervalRef);
  }
}, 5000);

// promise: resolve, reject, then,catch
// Set Timeout: once in future
// Set Interval: in future
// Dom Event Listeners:

const btnRef = document.querySelector(".btn");
console.log(btnRef);

btnRef.addEventListener("click", () => {
  alert("I am Clicked");
});

