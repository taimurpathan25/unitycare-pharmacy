const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Import Routes
const medicinesRoutes = require("./routes/medicinesRoutes");
const tabletsRoutes = require("./routes/tabletsRoutes");
const capsulesRoutes = require("./routes/capsulesRoutes");
const syrupsRoutes = require("./routes/syrupsRoutes");

// Use Routes
app.use("/api/medicines", medicinesRoutes)
app.use("/api/tablets", tabletsRoutes);
app.use("/api/capsules", capsulesRoutes);
app.use("/api/syrups", syrupsRoutes);


// Server Start 
app.listen(port, () => {
  console.log(`✅ API Running at http://localhost:${port}`);
});
