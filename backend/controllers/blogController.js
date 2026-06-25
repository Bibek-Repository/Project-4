const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {

    const slug =
      req.body.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    const blog = await Blog.create({
      ...req.body,
      slug
    });

    res.status(201).json(blog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        .sort({ createdAt: -1 });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = 
            await Blog.findById(req.params.id);

            if(!blog) {

                return res.status(404).json({
                    message: "Blog not found",
                });
            }
            res.json(blog);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }

};

const updateBlog = async (req, res) => {

  try {

    const blog =
      await Blog.findById(
        req.params.id
      );

    if (!blog) {

      return res.status(404).json({
        message: "Blog not found"
      });

    }

    const slug =
      req.body.title
        ?.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    const updatedBlog =
      await Blog.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          slug
        },
        {
          new: true
        }
      );

    res.json(updatedBlog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const deleteBlog = async (req, res) => {
    try{
        const blog =
            await Blog.findById(req.params.id);

        if (!blog) {

            return res.status(404).json({
                message: "Blog not found",
            });
        }

        await blog.deleteOne();

        res.json({
            message: "Blog deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    
};

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};