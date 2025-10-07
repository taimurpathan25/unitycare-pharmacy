const syrups = require("../medicinesData/syrups.json");
// const { v4: uuidv4 } = require("uuid");
// GET /api/syrups
exports.getAllSyrups = (req, res) => {
  res.json(syrups);
};

// // GET /api/syrups/:id
// exports.getSyrupById = (req, res) => {
//   const syrup = syrups.find((s) => s.id === req.params.id);
//   if (syrup) {   
//     res.json(syrup);
//   } else {
//     res.status(404).json({ message: "Syrup not found" });
//   }
// };
// // POST /api/syrups
// exports.createSyrup = (req, res) => {
//   const newSyrup = { id: uuidv4(), ...req.body };
//   syrups.push(newSyrup);
//   res.status(201).json(newSyrup);
// };   
// // PUT /api/syrups/:id
// exports.updateSyrup = (req, res) => {
//   const index = syrups.findIndex((s) => s.id === req.params.id);
//   if (index !== -1) {
//     syrups[index] = { ...syrups[index], ...req.body };
//     res.json(syrups[index]);
//   } else {
//     res.status(404).json({ message: "Syrup not found" });
//   }
// };
// // DELETE /api/syrups/:id
// exports.deleteSyrup = (req, res) => {
//   const index = syrups.findIndex((s) => s.id === req.params.id);
//   if (index !== -1) {
//     const deletedSyrup = syrups.splice(index, 1);
//     res.json(deletedSyrup[0]);
//   } else {
//     res.status(404).json({ message: "Syrup not found" });
//   }
// };


