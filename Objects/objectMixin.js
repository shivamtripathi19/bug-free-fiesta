let frontEnd = function (obj) {
  let isKnown_FrontEnd = false;
  return Object.assign({}, obj, {
    techStack_FrontEnd() {
      isKnown_FrontEnd = true;
    },
    Status_FrontEnd() {
      return isKnown_FrontEnd;
    },
  });
};

let backEnd = function (obj) {
  let isKnown_Backend = false;
  return Object.assign({}, obj, {
    techStack_Backend() {
      isKnown_Backend = true;
    },
    Status_Backend() {
      return isKnown_Backend;
    },
  });
};

let fullStack = frontEnd(backEnd({}));
console.dir(fullStack);
