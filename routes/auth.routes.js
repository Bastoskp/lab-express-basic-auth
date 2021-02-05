const { Router } = require("express");
const router = new Router();

router.get("/singup", (req, res) => {
  res.render("auth/singup");
});

router.post("/singup", (req, res, next) => [
  console.log("The form data:", req.body),
]);

module.exports = router;
