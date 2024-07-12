const {
  getListing,
  deleteListing,
  updateListing,
  createListing,
  test,
  getListings,
} = require("../handlers/listing");
const upload = require("../multer");
const express = require("express");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.post("/create", upload.array("photos", 7), createListing);
router.delete("/delete/:id", checkLogin, deleteListing);
router.post("/update/:id", checkLogin, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);
router.post("/test", checkLogin, upload.single("file"), test);

module.exports = router;
