const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

let messages = [];

app.post("/send", (req, res) => {
  let msg = req.body.message;
  console.log("User:", msg);

  messages.push(msg);
  res.send("Bot reply: " + msg);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});