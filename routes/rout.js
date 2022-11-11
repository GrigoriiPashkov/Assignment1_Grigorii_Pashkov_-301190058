const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
  });
});
router.get("/aboutMe", (req, res) => {
  res.render("aboutMe", {
    title: "About Me",
  });
});
router.get("/projects", (req, res) => {
  res.render("projects", {
    title: "My Projects",
  });
});
router.get("/services", (req, res) => {
  res.render("services", {
    title: "My Services",
  });
});
router.get("/contacts", (req, res) => {
  res.render("contacts", {
    title: "My Contacts",
  });
});
module.exports = router;
