const UersRoute = require('./routes/userRoutes.js')
const PostsRoute = require('./routes/postRoutes.js')
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api",
    //http://localhost:5000/posts
    router.use('/users',UersRoute),
    router.use('/posts',PostsRoute)
);

app.listen(5000, () => {
    console.log(`Server started on port 5000`)
  });
