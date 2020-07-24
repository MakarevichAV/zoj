const express = require("express");
const cors = require('cors');
const connectDB = require("../config/db");
const path = require("path");
const app = express();
const multer = require('multer');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(cors());
connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/foodDairy", require("./routes/foodDairy"));

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src')
  },
  filename: function (req, file, cb) {
    cb(null, 'user-photo.jpg')
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});

const PORT = 8080;

app.listen(PORT, () => console.log(`Serve startes on port - ${PORT}`));