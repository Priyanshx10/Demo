import React from 'react';
import Header from '../component/Header';

function ServicePage() {
  return (
    <div className="service-page bg-gray-100 dark:bg-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-20">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Empowering Businesses with Cutting-Edge IT Solutions</h1>
        <p className="text-gray-600 dark:text-gray-200 mt-4 text-center">
          We help businesses of all sizes leverage the power of technology to achieve their goals. From optimizing infrastructure to driving innovation, we're your trusted partner for all things IT.
        </p>
        <button className="btn btn-primary mt-8">Contact Us</button>
      </section>

      {/* Services Section */}
      <section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 md:px-8 lg:px-20">
  <h2>Our Services</h2>
  <div className="service-cards flex flex-wrap justify-center space-y-5 space-x-10">
    {/* Service card 1 */}
    <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-blue-500 mb-4">fa fa-cloud</i>
      <h3>Cloud Solutions</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Move your data and applications to the cloud for scalability, security, and cost-effectiveness.
      </p>
    </div>

    {/* Service card 2 */}
    <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-green-500 mb-4">fa fa-lock</i>
      <h3>Cybersecurity</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Protect your business from cyber threats with comprehensive security solutions and expert guidance.
      </p>
    </div>

    {/* Service card 3 */}
    <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-orange-500 mb-4">fa fa-rocket</i>
      <h3>Network Management</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Ensure efficient and reliable network performance with our expert monitoring and optimization services.
      </p>
    </div>

    <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-purple-500 mb-4">fa fa-cog</i>
      <h3>Custom Development</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Develop custom software solutions tailored to your specific needs and requirements.
      </p>
    </div>

       {/* Service card 5*/}
       <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-green-500 mb-4">fa fa-lock</i>
      <h3>Cybersecurity</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Protect your business from cyber threats with our comprehensive security solutions. We offer vulnerability assessments, penetration testing, intrusion detection and prevention systems, and security awareness training.
      </p>
    </div>

    {/* Service card 6 */}
    <div className="service-card w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 text-center">
      <i className="text-3xl text-orange-500 mb-4">fa fa-rocket</i>
      <h3>Network Management</h3>
      <p className="text-gray-600 dark:text-gray-200">
        Ensure efficient and reliable network performance with our expert monitoring and optimization services. We manage your network infrastructure, troubleshoot issues, and optimize performance for your specific needs.
      </p>
    </div>

  </div>
</section>


      {/* Testimonials Section */}
      <section className="testimonials py-16 px-4 md:px-8 lg:px-20">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-carousel grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonials here (replace with your actual testimonials) */}
          <div className="testimonial flex flex-col items-center p-8 rounded-lg shadow-md bg-white dark:bg-gray-700">
            <p className="text-gray-600 dark:text-gray-200 text-center mb-4">
              "Working with [Your Company Name] has been a game-changer. They helped us migrate to the cloud seamlessly and improve our network security significantly."
            </p>
            <span className="text-gray-500 dark:text-gray-300 text-sm font-bold">- John Doe, CEO of [Client Company]</span>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-20">
        <h2>Ready to Transform Your IT?</h2>
        <p className="text-gray-600 dark:text-gray-200 text-center mt-4 mb-8">
          Contact us today for a free consultation and discover how we can help you achieve your IT goals.
        </p>
        <button className="btn btn-primary">Contact Us</button>
      </section>
    </div>
  );
}

export default ServicePage;
