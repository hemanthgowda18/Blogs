const Blog = require("../models/Blogs");
const postBlog = async (req, res) => {
  try {
    let user = req.user;
    const newBlog = await Blog.create({
      title: req.body.title,
      snippet: req.body.snippet,
      description: req.body.description,
      image: req.body.image,
      author: user._id,
    });
    res.status(201).json({
      status: "Success",
      data: {
        newBlog,
      },
    });
  } catch (error) {
    res.status(201).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  postBlog,
//   getBlogs,
//   getBlog,
//   updateBlog,
//   deleteBlog,
};
