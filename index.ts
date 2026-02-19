import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Socket demo" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
