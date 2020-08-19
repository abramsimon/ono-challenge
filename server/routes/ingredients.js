const csv = require("csvtojson");

const csvFilePath = "./data/coding-challenge-units-data-ono.csv";

let ingredients;

async function init() {
  ingredients = await csv().fromFile(csvFilePath);
}

exports.getIngredients = async function getIngredients(req, res) {
  res.json(ingredients);
};

exports.putVote = function putVote(req, res) {
  // todo: add the vote to the ingredients

  res.json({ message: "got it" });
};

init();
