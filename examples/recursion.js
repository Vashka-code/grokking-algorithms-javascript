function lookForKey(list) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.type === "key") {
      return element;
    }

    if (element.value) {
      let result = lookForKey(element.value);

      if (result) return result;
    }
  }

  return null;
}

let bigBox = [
  {
    type: "box",
    value: [{}],
  },
  {
    type: "box",
    value: [
      {
        type: "garbagge",
      },
    ],
  },
  {
    type: "box",
    value: [
      {
        type: "key",
      },
    ],
  },
  {
    type: "box",
    value: [
      {
        type: "garbagge",
      },
    ],
  },
  {
    type: "box",
    value: [
      {
        type: "garbagge",
      },
    ],
  },
];

// console.log(lookForKey(bigBox));
