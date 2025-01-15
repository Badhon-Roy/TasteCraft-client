import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-32">
      <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />

      {/* Testimonial Section */}
      <div className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review._id} className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Testimonial Details */}
            <p className="mb-4 text-sm text-gray-700">{review?.details}</p>
            <hr className="my-4 border-gray-300" />
            
            {/* Author Information */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold">{review?.name}</h3>
                <p className="text-xs text-gray-500">{review?.role}</p>
              </div>
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
                  alt="profile"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
