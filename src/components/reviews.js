import React from 'react';

const reviewsData = [
    { author: "User1", rating: 4, comment: "Great product!" },
    { author: "User2", rating: 5, comment: "Awesome item!" },
    // Add more review objects here
  ];
  
  <ReviewsList reviews={reviewsData} />
  
function Review({ author, rating, comment }) {
  return (
    <div className="review">
      <h4>{author}</h4>
      <p>Rating: {rating}/5</p>
      <p>{comment}</p>
    </div>
  );
}

function ReviewsList({ reviews }) {
  return (
    <div className="reviews-list">
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review
          key={index}
          author={review.author}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
}

export default ReviewsList;
