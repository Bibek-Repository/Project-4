const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// GET ALL BLOGS
router.get("/", getBlogs);

// CREATE BLOG
router.post("/", createBlog);

// GET BLOG BY SLUG
router.get("/slug/:slug", getBlogBySlug);

// GET BLOG BY ID
router.get("/:id", getBlogById);

// UPDATE BLOG
router.put("/:id", updateBlog);

// DELETE BLOG
router.delete("/:id", deleteBlog);

module.exports = router;