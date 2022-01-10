const obj = {
  mode: "production",
  host:8800,
  config: {
    bundle: {
      splitChunks: true,
      splitVendor: true,
      entry: [],
    },

    testMode: {
      env: "production",
      unit: true,
      integration: true,
    },
    xyz: 123,
  },
};

let override = {
  mode: "development",
  config: {
    bundle: {
      splitChunks: false,
      splitVendor: false,
      entry: [1, 2, 3],
    },

    testMode: {
      env: "development",
      integration: true,
    },
    devServer: {
      port: 9000,
    },
  },
};

function deepMerge(obj, input) {
  let result = Array.isArray(input) ? [...obj] : {...obj};
  for (let key in input) {
    if (obj[key] === undefined || typeof obj[key] !== "object") {
      result[key] = input[key];
    }

    if (typeof obj[key] === "object" && typeof input[key] !== "object") {
      result[key] = input[key];
    }

    if (typeof obj[key] === "object" && typeof input[key] === "object") {
      result[key] = deepMerge(obj[key], input[key]);
    }
  }

  return result;
}

const testTarget = {
    one: "one",
    two: ["one", "two"],
    three: {
        one: "one",
        two: ["one", "two"],
        three: {
            one: "one",
            two: "two",
            three: "three"
        }
    }
};
const testSource = {
    one: 1,
    two: [1, 1.5, 2],
    three: {
        one: 1,
        two: [1],
        three: {
            one: 1,
            two: 2,
            three: 3
        },
        four: 4
    },
    four: 4,
    five: [1, 2, 3, 4, 5]
};

console.log(deepMerge(obj,override))