const cors = require("cors");
const express = require("express");

const { getIngredients, putVote } = require("./routes/ingredients");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.options("*", cors());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "hello ono!",
  });
});
router.get("/ingredients", getIngredients);
router.put("/ingredients/:name/vote", putVote);

app.use("/api", router);

app.listen(port);
