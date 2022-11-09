const express = require("express");
const router = express.Router();
const Form = require("../models/formModel");

router.route("/contactus/").post((req, res) => {
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;
   const email = req.body.email;
   const newsLetter = req.body.newsLetter;
   const tel = req.body.tel;
   const feedback = req.body.feedback;
   const newForm = new Form({
      firstName,
      lastName,
      email,
      newsLetter,
      tel,
      feedback,
   });
   newForm.save();
   res.redirect("/contactus");
   res.end("you have submitted successfully");
});

module.exports = router;
