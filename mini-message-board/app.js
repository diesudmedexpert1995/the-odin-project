import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js"


const __dirname = import.meta.dirname
const app = express();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send(err)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server running - listen on ${PORT}`)
})