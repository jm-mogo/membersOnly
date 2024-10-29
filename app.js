const express = require("express");
const app = express();
const path = require("path");
const { PORT } = require("./config");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const indexRouter = require("./routes/indexRouter");

app.set("vews", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
