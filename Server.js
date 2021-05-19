const express = require("express");
const app = express();
const cors = require("cors");


app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/temp", (req, res) => {
    const fig = req.params.fig;
    res.render("index", { fig: fig });

})
app.post("/temp/:fig", (req, res) => {
    const { temperature } = req.body.temperature;
    res.render("index", { temperature: temperature });
})

app.listen(3000, () => {
    console.log("Listening....")
})

