const express = require("express");
const router = express.Router();
const capsulesController = require("../controllers/capsulesController");

// GET all capsules
router.get("/", capsulesController.getAllCapsules);
// // GET /api/capsules/:id
// router.get("/:id", capsulesController.getCapsuleById);   
// // POST /api/capsules
// router.post("/", capsulesController.createCapsule);
// // PUT /api/capsules/:id
// router.put("/:id", capsulesController.updateCapsule);
// // DELETE /api/capsules/:id
// router.delete("/:id", capsulesController.deleteCapsule);
module.exports = router;