import express from "express";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("build"));
app.get("/home", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });