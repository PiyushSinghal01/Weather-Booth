const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath))

const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

const img = path.join(__dirname, '../public/images/bg1.jpg');

app.set("views", template_path);
app.set('view engine', 'hbs');

hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render('index', {img1 : img});
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req,res) =>{
    res.render('weather');
})

app.get("*", (req, res) =>{
    res.render('404error', {errorMsg : "OOPS! Page doesn't found"});
})

app.listen(port, () => {
    console.log("listining to the port " + port);
})