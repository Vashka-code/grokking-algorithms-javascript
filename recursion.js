let key;

function lookForKey(list) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (key) return "We found a key";

    if (element.type === "box") {
      lookForKey(element.value);
    } else if (element.type === "key") {
      key = element;
    }
  }
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

console.log(lookForKey(bigBox));
