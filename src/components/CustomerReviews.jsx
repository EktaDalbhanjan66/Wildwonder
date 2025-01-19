import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, date, rating, content, verified }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'fill-blue-900 text-blue-900' : 'fill-none text-blue-900'
              }`}
            />
          ))}
        </div>
        <span className="text-blue-900">{date}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-900 font-bold">{name}</span>
        {verified && (
          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">
            Verified
          </span>
        )}
      </div>
      <p className="text-blue-900">{content}</p>
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'CAM',
      date: '12/18/2024',
      rating: 5,
      content: 'MY NEW FAVORITE! I have been addicted to drinking soda for a while. I love a variety of teas but they don\'t hit the sweet and carbonated spot. After working out a few weeks ago I was in the...',
      verified: false
    },
    {
      name: 'FRAN',
      date: '12/12/2024',
      rating: 5,
      content: 'LOVE WILD WONDER Love these drinks and they are a great alternative to soda and caffeinated drink options out there.',
      verified: true
    },
    {
      name: 'MATT TEBO',
      date: '12/06/2024',
      rating: 4,
      content: 'These were pretty good.',
      verified: true
    },
    {
      name: 'MATT TEBO',
      date: '12/06/2024',
      rating: 4,
      content: 'These were pretty good.',
      verified: true
    },
    {
      name: 'MATT TEBO',
      date: '12/06/2024',
      rating: 4,
      content: 'These were pretty good.',
      verified: true
    },
    {
      name: 'MATT TEBO',
      date: '12/06/2024',
      rating: 4,
      content: 'These were pretty good.',
      verified: true
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
        CUSTOMER REVIEWS
      </h1>
      
      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(averageRating) ? 'fill-blue-900 text-blue-900' : 
                i === Math.floor(averageRating) && averageRating % 1 > 0 ? 'fill-blue-900/50 text-blue-900' : 
                'fill-none text-blue-900'
              }`}
            />
          ))}
        </div>
        <p className="text-blue-900">Based on {reviews.length} reviews</p>
        <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg mt-4 w-full max-w-md">
          WRITE A REVIEW
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;