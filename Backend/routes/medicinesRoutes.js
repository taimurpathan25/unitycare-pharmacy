const express = require("express");
const router = express.Router();
const medicinesController = require("../controllers/medicinesController");  
// GET all medicines
router.get("/", medicinesController.getAllMedicines);
// // GET /api/medicines/:id    
// router.get("/:id", medicinesController.getMedicineById);
// // POST /api/medicines
// router.post("/", medicinesController.createMedicine);
// // PUT /api/medicines/:id
// router.put("/:id", medicinesController.updateMedicine);
// // DELETE /api/medicines/:id
// router.delete("/:id", medicinesController.deleteMedicine);
module.exports = router;
