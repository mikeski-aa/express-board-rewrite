var express = require("express");
var router = express.Router();
const queries = require("../db/queries");
const asyncHandler = require("express-async-handler");

// message array
const messages = [
  {
    text: "Hi there!",
    user: "Amado",
    date: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    date: new Date(),
  },
];

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const results = await queries.getAllMessages();
    console.log(results);
    res.render("index", { title: "Message app", messages: results });
  })
);

/* GET users listing. */
router.get("/new", function (req, res, next) {
  res.render("newForm", { title: "Add a new comment." });
});

router.post(
  "/new",
  asyncHandler(async (req, res, next) => {
    const newPost = {
      text: req.body.message,
      user: req.body.name,
      date: new Date(),
    };

    await queries.postMessage(newPost);

    messages.push(newPost);

    res.redirect("/");
  })
);

module.exports = router;
