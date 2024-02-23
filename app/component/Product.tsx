import React from 'react';
import NewsData from './Product.json';

function Product() {
  return (
    <div className="container mx-auto py-10 border bg-gray-300 p-20 rounded-2xl text-white px-8 shadow-md text-left">
      <div className="jobs-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 border-black">
        {NewsData.map((job, index) => (
          <div key={job.id || index} className="job-card border p-4 rounded-md hover:shadow-md">
            <h2 className="company-name text-lg font-semibold text-gray-700 mb-1">
              {job.name}
            </h2>
            <p className="location text-md text-gray-500 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> {job.description}
            </p>
            <div className="footer flex items-center justify-between">
              <a
                href="#" // Replace with actual application link
                className="apply-button bg-black text-white font-bold py-2 px-4 rounded hover:bg-orange-500"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;