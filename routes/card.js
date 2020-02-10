const { Router } = require("express");
const Course = require("../models/Course");
const Card = require("../models/Card");

const router = Router();

router.get("/", (req, res) => {
  res.render("card", {
    title: "card"
  });
});

router.post("/add", async (req, res) => {
  const id = req.body.id;
  const courses = await Course.read();
  const boughtСourse = courses.find(course => course.id === id);
  Card.saveCourse(boughtСourse);
  res.redirect("/card");
});
module.exports = router;
