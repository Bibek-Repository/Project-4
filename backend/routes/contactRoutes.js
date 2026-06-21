const express = require("express");

const router = express.Router();

const {
    createContact,
    getContacts,
    deleteContact
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

module.exports = router;