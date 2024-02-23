import React from 'react';
import NewsData from './NewsCard.json';

function NewsCard() {
  return (
    <div className="bg-orange-600 text-white px-8 py-12 shadow-md text-left">
      <div className="jobs-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {NewsData.map((job, index) => (
          <div key={job.title || index} className="job-card border p-4 rounded-md hover:shadow-md text-white">
            <h2 className="company-name text-lg font-semibold text-white mb-1">
              {job.title}
            </h2>
            <p className="location text-md text-white mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> {job.description}
            </p>
            <div className="footer flex items-center justify-between">
              <a
                href="#" // Replace with actual application link
                className="apply-button bg-black text-white font-bold py-2 px-4 rounded hover:bg-yellow-500"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;