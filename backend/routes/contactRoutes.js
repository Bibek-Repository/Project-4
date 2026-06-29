const express = require("express");

const router = express.Router();

const {
    createContact,
    getContacts,
    deleteContact,
    markAsViewed

} = require(
    "../controllers/contactController"
);

const {
    protect
} = require(
    "../middleware/authMiddleware"
);

router.post("/", createContact);

router.get(
    "/",
    protect,
    getContacts
);

router.delete(
    "/:id",
    protect,
    deleteContact
);
router.patch(
  "/:id/view",
  protect,
  markAsViewed
);

module.exports = router;