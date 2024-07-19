var express = require("express");
var router = express.Router();

// message array
const messages = [
  {
    text: "Hi there!",
    user: "Amado",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message app", messages: messages });
});

/* GET users listing. */
router.get("/new", function (req, res, next) {
  res.render("newForm", { title: "Add a new comment." });
});

router.post("/new", function (req, res, next) {
  const newPost = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  };

  messages.push(newPost);

  res.redirect("/");
});

module.exports = router;
