import express from "express";
import userRouter from "./routers/users.js";
import vinhoRouter from "./routers/vinho.js";
import compraRouter from "./routers/compra.js";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json()) //le o json e grava o objeto no req.body

app.use("/user", userRouter);
app.use("/vinho", vinhoRouter);
app.use("/compra", compraRouter);

app.listen(3000, () => {
  console.log("o server ai http://localhost:3000");
});
