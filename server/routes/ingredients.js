const csv = require('csvtojson');

const csvFilePath = './data/coding-challenge-units-data-ono.csv';

exports.getIngredients = async function getIngredients(req, res) {
    const jsonObj = await csv().fromFile(csvFilePath);
    res.json(jsonObj);
};