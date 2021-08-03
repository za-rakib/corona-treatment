import React from "react";
import "./BlogCard.css";
const BlogCard = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div
        className="card border-0 mb-3 p-3"
        style={{ maxWidth: "20rem" }}
      >
        <div className="d-flex mt-4 px-3">
          <img className="blog-img" src={blog.image} alt="" />
          <div className='ms-4 mt-2'>
            <h5>{blog.name}</h5>
            <p>29 may 2021</p>
          </div>
        </div>
        <div className="card-body text-secondary">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text"> {blog.text} </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
