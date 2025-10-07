const tablets = require("../medicinesData/tablets.json");
// const { v4: uuidv4 } = require("uuid");

// GET /api/tablets
exports.getAllTablets = (req, res) => {
  res.json(tablets);
};

// // GET /api/tablets/:id
// exports.getTabletById = (req, res) => {
//   const tablet = tablets.find((t) => t.id === req.params.id);
//   if (tablet) {  
//     res.json(tablet);
//   } else {
//     res.status(404).json({ message: "Tablet not found" });
//   }
// };
// // POST /api/tablets
// exports.createTablet = (req, res) => {
//   const newTablet = { id: uuidv4(), ...req.body };
//   tablets.push(newTablet);
//   res.status(201).json(newTablet);
// };   
// // PUT /api/tablets/:id
// exports.updateTablet = (req, res) => {
//   const index = tablets.findIndex((t) => t.id === req.params.id);
//   if (index !== -1) {
//     tablets[index] = { ...tablets[index], ...req.body };
//     res.json(tablets[index]);
//   } else {
//     res.status(404).json({ message: "Tablet not found" });
//   }
// };
// // DELETE /api/tablets/:id
// exports.deleteTablet = (req, res) => {
//   const index = tablets.findIndex((t) => t.id === req.params.id);
//   if (index !== -1) {
//     const deletedTablet = tablets.splice(index, 1);
//     res.json(deletedTablet[0]);
//   } else {
//     res.status(404).json({ message: "Tablet not found" });
//   }
// };

