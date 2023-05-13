const UersRoute = require('./routes/userRoutes.js')
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api",
    //http://localhost:5000/api/users
 router.use(UersRoute)
);

app.listen(5000, () => {
    console.log(`Server started on port 5000`)
  });
