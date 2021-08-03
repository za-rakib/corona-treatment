import React from "react";
import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  return (
    <div
      className="card review-card col-md-4 ms-2 mb-3 "
      style={{ maxWidth: "24rem" }}
    >
      <div className="card-body ">
        <p className="card-text">{review.text}</p>
      </div>
      <div>
        <div></div>
        <div className=" bg-transparent">
          <h1>{review.name}</h1>
          <p>{review.place}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
