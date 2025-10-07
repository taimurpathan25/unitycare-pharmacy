const capsules = require("../medicinesData/capsules.json");
// const { v4: uuidv4 } = require("uuid");
// GET /api/capsules
exports.getAllCapsules = (req, res) => {
  res.json(capsules);
};

// // GET /api/capsules/:id
// exports.getCapsuleById = (req, res) => {
//   const capsule = capsules.find((c) => c.id === req.params.id);
//   if (capsule) {         
//     res.json(capsule);
//   } else {
//     res.status(404).json({ message: "Capsule not found" });
//   }
// };

// // POST /api/capsules
// exports.createCapsule = (req, res) => {
//   const newCapsule = { id: uuidv4(), ...req.body };
//   capsules.push(newCapsule);
//   res.status(201).json(newCapsule);
// };

// // PUT /api/capsules/:id
// exports.updateCapsule = (req, res) => {
//   const index = capsules.findIndex((c) => c.id === req.params.id);
//   if (index !== -1) {
//     capsules[index] = { ...capsules[index], ...req.body };
//     res.json(capsules[index]);
//   } else {
//     res.status(404).json({ message: "Capsule not found" });
//   }
// };

// // DELETE /api/capsules/:id
// exports.deleteCapsule = (req, res) => {
//   const index = capsules.findIndex((c) => c.id === req.params.id);
//   if (index !== -1) {
//     const deletedCapsule = capsules.splice(index, 1);
//     res.json(deletedCapsule[0]);
//   } else {
//     res.status(404).json({ message: "Capsule not found" });
//   }
// };

