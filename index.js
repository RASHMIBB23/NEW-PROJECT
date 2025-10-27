let express = require("express");
let app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home page ApI" });
});
app.get("/news", (req, res) => {
  res.send({ status: 1, msg: "News Page API" });
});
app.get("/news/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("News Details API" + currentId);
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    status: 1,
    msg: "Login to the api",
    bodyData: req.body,
    queryData: req.query,
  });
});
app.listen("8000");
