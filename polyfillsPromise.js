class MyPromise {
  resolvedData;
  rejectedData;

  isRejected = false;
  isResolved = false;

  resolveChain = [];
  rejectChain = [];

  constructor(fn) {
    const resolved = (value) => {
      this.resolvedData = value;
      this.isResolved = true;
      if (this.resolveChain.length) {
        this.resolveChain.reduce(
          (acc, chainFn) => chainFn(acc),
          this.resolvedData
        );
      }
    };

    const rejected = (value) => {
      this.rejectedData = value;
      this.isRejected = true;
      if (this.rejectChain.length) {
        this.rejectChain.reduce(
          (acc, chainFn) => chainFn(acc),
          this.rejectedData
        );
      }
    };

    fn(resolved, rejected);
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce(
        (acc, chainFn) => chainFn(acc),
        this.resolvedData
      );
    }
    // returning for then chaining
    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce(
        (acc, chainFn) => chainFn(acc),
        this.rejectedData
      );
    }
    // returning for then chaining
    return this;
  }
}

MyPromise.myAll = function (value) {
  return new MyPromise((resolve, reject) => {
    let completed = 0;
    let results = [];
    value.forEach((ele, idx) => {
      ele
        .then((result) => {
          completed++;
          results[idx] = result;
          if (completed === value.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

new MyPromise((resolve) => setTimeout(() => resolve(20), 1000))
  .then((data) => {
    return data * 3;
  })
  .then((data) => console.log(data));

new MyPromise((resolve, reject) =>
  setTimeout(() => reject("that's what she said"), 1000)
)
  .catch((data) => {
    return `${data} 😔`;
  })
  .catch((data) => console.log(data));
