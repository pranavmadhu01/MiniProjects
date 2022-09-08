const express = require("express");
const cors = require("cors");

const app = express();

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lettersSmall = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const lettersCap = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.get("/api/passgenerate", (req, res) => {
  const intermediate = [];
  let pass = "";
  let passLength = 8;
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  for (var i = 0; i < passLength; i++) {
    intermediate.push(getRandomItem(numbers));
    intermediate.push(getRandomItem(lettersSmall));
    intermediate.push(getRandomItem(lettersCap));
    intermediate.push(getRandomItem(specialChar));
  }
  for (var i = 0; i < passLength; i++) {
    pass += getRandomItem(intermediate);
  }
  res.status(200).json({
    success: "true",
    result: pass,
  });
});
