const num0 = new Promise((resolve, reject) =>
  setTimeout(() => reject(10), 1000)
);
const num1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(20), 2000)
);
const num2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(30), 3000)
);
const num3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(40), 4000)
);

Promise.all([22,num0, num1, num2, num3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error("err" + err));

Promise.race([num0, num1, num2, num3]).then((data) => {
  console.log("race " + data);
});

Promise.allSettled([num0, num1, num2, num3]).then((data) => {
  console.log("all" + data);
});
