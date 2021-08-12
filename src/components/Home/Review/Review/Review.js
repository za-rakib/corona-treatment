import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
const reviews = [
  {
    text: "Recently visited health check up department of XX Hospital for a whole body check up. The entire process from check in to the end was seamless.",
    name: " Jhon Stark",
    place: "washington",
    image:''
  },
  {
    text: "Recently visited health check up department of XX Hospital for a whole body check up. The entire process from check in to the end was seamless.",
    name: " Jhon Stark",
    place: "washington",
    image:""
  },
  {
    text: "Recently visited health check up department of XX Hospital for a whole body check up. The entire process from check in to the end was seamless.",
    name: " Jhon Stark",
    place: "washington",
    image:""
  },
];
const Review = () => {
  return (
    <section id='review' className="container-fluid mt-5 mb-5">
        <h1 className=' text-center mb-5'>What's Our Patients Says</h1>
      <div className="row d-flex justify-content-around">
        {reviews.map(review => (
          <ReviewCard review={review} />
        ))}
      </div>
    </section>
  );
};

export default Review;
