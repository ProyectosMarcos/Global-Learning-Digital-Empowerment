
const express = require('express')


const app = express()


app.set("view engine", "ejs");

app.get("/", (_req, res) => {
    res.render("index")
})
app.get("*", (_req, res) => {
    res.render("404", { title: "404 NOT FOUND", error: "Sorry, an error has occured, Requested page not found!" })
})

app.use(express.static("public"))



app.listen(3000, () => {
    console.log("El servidor es http://localhost:3000");
})
