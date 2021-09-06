const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let text = "Express JS";
  response.send(`${text}`);
});

app.listen(3001);
module.exports = app;
