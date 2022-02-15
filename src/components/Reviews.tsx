import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export interface Review {
  text: string;
  image: string;
  name: string;
  location: string;
}
export interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  const [activeReview, setActiveReview] = useState(1);

  const handleNextReview = () => {
    if (activeReview >= reviews.length - 1) {
      setActiveReview(0);
    } else {
      setActiveReview(prevReview => prevReview + 1);
    }
  };

  const handlePrevReview = () => {
    if (activeReview <= 0) {
      setActiveReview(reviews.length - 1);
    } else {
      setActiveReview(prevReview => prevReview - 1);
    }
  };
  return (
    <section className="pb-24">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <h2 className="text-center lg:text-left text-2xl lg:text-4xl leading-normal font-semibold mb-6 lg:mb-12">
            Words from our customers
          </h2>
          <div className="space-x-4 text-2xl">
            <button
              className="bg-white border-gray-900 border rounded-full p-2"
              onClick={handlePrevReview}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className="bg-white rounded-full p-2 border-gray-900 border"
              onClick={handleNextReview}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            const { text, name, location, image } = review;
            return (
              <article
                key={index}
                className={`border border-gray-300 shadow-xl rounded px-8 py-6 flex flex-col justify-between h-80 lg:h-72 transform transition-transform duration-200 ease-in-out${
                  activeReview === index ? 'bg-white scale-105' : null
                }`}
              >
                <p
                  className={`leading-relaxed tracking-wide ${
                    activeReview === index ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  "{text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="tracking-wider">
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p className="text-gray-500">{location}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
