const { Router } = require("express");

const registerRouter = Router();

registerRouter.get("/", (req, res) => {
    res.render("register");
});

registerRouter.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = registerRouter;
