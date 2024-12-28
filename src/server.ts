import express from "express";
import router from "./routes";

const app = express();

app.use("/", router);

app.listen(8089, () => {
  console.log("Server is running on port 8089!");
});
