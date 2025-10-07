const medicines = require("../medicinesData/medicines.json");
// const { v4: uuidv4 } = require("uuid");
// GET /api/medicines
exports.getAllMedicines = (req, res) => {
  res.json(medicines);
};
