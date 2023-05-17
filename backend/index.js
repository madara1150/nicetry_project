const UersRoute = require('./routes/userRoutes.js')
const PostsRoute = require('./routes/postRoutes.js')
const CommentsRoute = require('./routes/commentRoutes.js')
const DonateRoute = require('./routes/donateRoutes.js')
const ReportRoute = require('./routes/reportRoutes.js')
const WithdrawRoute = require('./routes/withdrawRoutes.js')
const TopupRoute = require('./routes/topupRoutes.js')
const ImageRoute = require('./routes/imageRoutes.js')


const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('static/uploads'));

app.use("/api",
    //http://localhost:5000/posts
    router.use('/users',UersRoute),
    router.use('/posts',PostsRoute),
    router.use('/comments',CommentsRoute),
    router.use('/donate',DonateRoute),
    router.use('/reports',ReportRoute),
    router.use('/withdraws',WithdrawRoute),
    router.use('/topups',TopupRoute),
    router.use('/images',ImageRoute)
);

app.listen(5000, () => {
    console.log(`Server started on port 5000`)
  });
