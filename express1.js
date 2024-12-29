const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("hello t his is the home page ");
});

app.get("/about", (req, res) => {
  var data =
    "<div style='color:red; text-align:center' > hello ghanshyam prajapati</div> <div style='text-align:center;'><table border='1' color:red;><thead><th>sr</th><th>name</th><th>phone</th></thead><tbody><td>1</td><td>ghanshyam</td><td>9669607710</td></tbody></table></div><span>hello ghanshyam</span>";

  res.send(data);
});
app.listen(4201);
