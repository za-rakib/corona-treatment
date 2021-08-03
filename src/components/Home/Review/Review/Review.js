import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem, provident beatae ipsa placeat consequuntur.",
    name: " Jhon Stark",
    place: "washington",
    image:''
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem, provident beatae ipsa placeat consequuntur.",
    name: " Jhon Stark",
    place: "washington",
    image:""
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem, provident beatae ipsa placeat consequuntur.",
    name: " Jhon Stark",
    place: "washington",
    image:""
  },
];
const Review = () => {
  return (
    <section className="container-fluid mt-5 mb-5">
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
