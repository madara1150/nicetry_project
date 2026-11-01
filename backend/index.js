require("dotenv").config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set");
}

const cors = require("cors");
const express = require("express");
const { errorHandler } = require("./lib/http");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/donate", require("./routes/donateRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/withdraws", require("./routes/withdrawRoutes"));
app.use("/api/topups", require("./routes/topupRoutes"));
app.use("/api/images", require("./routes/imageRoutes"));
app.use("/api/likes", require("./routes/likeRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
