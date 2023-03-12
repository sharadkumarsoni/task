const User = require("../models/user");

exports.createUser = (req, res) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileRegex = /^\d{10}$/;
  
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).send("Invalid email address");
  }

  if (!mobileRegex.test(req.body.mobile)) {
    return res.status(400).send("Invalid mobile number");
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile
  });

  user
    .save()
    .then(() => {
      res.redirect("/task");
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Error adding user");
    });
};
