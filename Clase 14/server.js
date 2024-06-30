
import express from 'express'


const app = express()


app.set("view engine", "ejs");

app.get("/", (_request, response) => {
    response.render("index")
})
app.get("*", (_request, response) => {
    response.status(404).render("404", { title: "404 NOT FOUND", error: "Sorry, an error has occured, Requested page not found!" })
})

app.use(express.static("public"))

const PUERTO = 3000

app.listen(PUERTO, () => {
    console.log(`El servidor es http://localhost:${PUERTO}`);
})
