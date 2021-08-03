import React from "react";
import dock1 from "../../../../image/doc (2).jpg";
import dock2 from "../../../../image/doc (7).jpg";
import dock3 from "../../../../image/doc.jpg";
import BlogCard from "../BlogCard/BlogCard";
import './Blog.css'
const blogs = [
  {
    image: dock1,
    name: "Dr. JOHN ",
    title: "Our race against COVID-19",
    text: "In a region already facing malnutrition and violence, Maryam and her team knew that an outbreak of COVID-19 could be devastating. They were determined they wouldn't let it happen. Maryam shares the story..",
  },
  {
    image: dock2,
    name: "Dr. SHAMSUDDIN",
    title: "Where the Light Enters",
    text: "As communities around the world continue to struggle against the pandemic, Dr Khairil Musa looks back to 2020, and his time working in a COVID-19 treatment centre during Yemen’s first wave.",
  },
  {
    image: dock3,
    name: "Dr.Anka",
    title: " Rohingya helped guideline .",
    text: "With COVID-19 hitting the Rohingya refugee community hard, Elko Brummelman and his team knew they needed a new strategy in Malaysia. They wanted expert advice, and they knew just who to ask.",
  },
];
const Blog = () => {
  return (
    <section className="container-fluid blog-container pb-5">
      <div className="text-center text-white pt-5">
        <h4>OUR BLOG</h4>
        <h1 className='mb-5 mt-4'>From Our Blog News</h1>
      </div>
      <div className="row blog-card">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
