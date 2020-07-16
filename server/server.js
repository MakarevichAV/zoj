const express = require("express");
const cors = require('cors');
const connectDB = require ("../config/db");
const path = require("path");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(cors());
connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

const PORT = 8080;

app.listen(PORT, () => console.log(`Serve startes on port - ${PORT}`));

