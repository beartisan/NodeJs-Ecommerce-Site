//required modules

const express = require("express");
const path = require("path");

//set up express
const app =express();
const port = process.env.PORT || "8808";

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup public folder
app.use(express.static(path.join(__dirname, "public")));

var links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Shop",
        path: "/shop"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Cart",
        path: "/cart"
    }

];


//test
// app.get("/", (req, res) => {
//     res.status(200).send("Success test");
// });
//test the Express app
app.get("/", (request, response) => {
    response.render("index", { title: "Home", menu: links });
});



app.get("/shop", (request, response) => {
    response.render("shop", {title: "Shop", menu: links });
});

app.get("/about", (request, response) => {
    response.render("about", {title: "About", menu: links });
});

app.get("/cart", (request, response) => {
    response.render("cart", {title: "Cart", menu: links });
});



app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});