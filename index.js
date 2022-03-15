require("dotenv").config();

const express = require("express");
const app = express();
const methodOverride = require("method-override");

//MIDDLEWARE
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
    // res.send("Hello world!");
    res.render("home");
});

// 404 Page
app.get("*", (req, res) => {
    // res.status(404).send(`<h1>404 Page</h1>`);
    res.render("error404");
});

app.listen(process.env.PORT, () => {
    console.log("Server is live on PORT=" + process.env.PORT);
});
