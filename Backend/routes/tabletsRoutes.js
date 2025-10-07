const express = require("express");
const router = express.Router();
const tabletsController = require("../controllers/tabletsController");

// GET all tablets
router.get("/", tabletsController.getAllTablets);
// // GET /api/tablets/:id
// router.get("/:id", tabletsController.getTabletById);    
// // POST /api/tablets
// router.post("/", tabletsController.createTablet);
// // PUT /api/tablets/:id
// router.put("/:id", tabletsController.updateTablet);
// // DELETE /api/tablets/:id
// router.delete("/:id", tabletsController.deleteTablet);  

module.exports = router;