const express = require("express");
const router = express.Router();
const syrupsController = require("../controllers/syrupsController");

// GET all syrups
router.get("/", syrupsController.getAllSyrups);
// // GET /api/syrups/:id
// router.get("/:id", syrupsController.getSyrupById);
// // POST /api/syrups
// router.post("/", syrupsController.createSyrup);
// // PUT /api/syrups/:id
// router.put("/:id", syrupsController.updateSyrup);
// // DELETE /api/syrups/:id
// router.delete("/:id", syrupsController.deleteSyrup);
module.exports = router;