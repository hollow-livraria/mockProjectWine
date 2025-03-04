import express from "express";
import userRouter from "./routers/users.js";
import vinhoRouter from "./routers/vinho.js";
import compraRouter from "./routers/compra.js";
import itemsCompraRouter from "./routers/itemsCompra.js";

const app = express();

app.use("/user", userRouter);
app.use("/vinho", vinhoRouter);
app.use("/compra", compraRouter);
app.use("/items", itemsCompraRouter);

app.listen(3000, () => {
  console.log("o server ai http://localhost:3000");
});
