const express = require('express');
const dotenv = require('dotenv');
const chats = require('./staticData/data');
const connectDB = require('./config/mongodb');
const userRoutes =  require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use('/api/user',userRoutes);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// Error Handling for invalid API req
app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 8000

app.listen(PORT, console.log(`Server started on port ${PORT}`));
