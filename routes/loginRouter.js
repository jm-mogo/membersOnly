const { Router } = require("express");

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
    res.render("login");
});

loginRouter.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = loginRouter;
