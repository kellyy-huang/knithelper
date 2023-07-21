import express from "express";

const message = "counter";


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("build"));
app.get("/home", (req, res) => {
    res.json({ message: message });
  });
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });