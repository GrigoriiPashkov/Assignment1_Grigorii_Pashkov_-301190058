const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/aboutMe", (req, res) => {
  res.render("aboutMe");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});
router.get("/services", (req, res) => {
  res.render("services");
});
router.get("/contacts", (req, res) => {
  res.render("contacts");
});
module.exports = router;
