Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = [];
    values.forEach((value, idx) => {
      value
        .then((result) => {
          completed++;
          results[idx] = result;
          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const num2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(30), 3000)
);
const num3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(40), 4000)
);

Promise.myAll([num2, num3]).then((data) => {
  console.log(data);
});
