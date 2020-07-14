const express = require("express");
const connectDB = require ("../config/db");
const path = require("path");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

connectDB();

app.use("/api/auth", require("./routes/users"));
app.use("/api/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serve startes on port - ${PORT}`));

