import express from "express";
import diaryRouter from "./routes/diares";
import usersRouter from "./routes/users";
import petsRouter from "./routes/pets";

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json
const PORT = 3000;

app.get("/ping", (_req, res) => {
  // le puse el guión bajo al req para decirle a typescript que ignore el hecho de que no uso esa variable req.
  console.log("Someone pinged here!!!");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
