const express = require("express");
const signupRouter = require("./routes/Signup");
const bodyParses = require("body-parser");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParses.json());

app.use("/user", signupRouter);

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
