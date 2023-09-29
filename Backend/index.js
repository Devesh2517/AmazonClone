const connectToMongob = require("./db")
const expr = require("express")
connectToMongob()

const cors = require("cors")
const app = expr()
app.use(expr.json())
app.use(cors())
app.use("/Routes/Product",require("./Routes/Product"))
app.use("/Routes/Auth",require("./Routes/Auth"))
app.listen(5000,()=>{
    console.log("amazonclone http://localhost:3000")
})

