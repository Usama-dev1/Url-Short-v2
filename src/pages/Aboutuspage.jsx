import React from "react";
import img1 from "../assets/siteimg/6.png";
import img2 from "../assets/siteimg/3.png";
const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-steal  text-white py-20">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="w-full max-w-[10rem] md:max-w-[20rem] ">
            <img src={img1} alt="" className="w-full h-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Link Shortener
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover how our URL shortener simplifies link management and
            enhances your digital presence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className=" container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl mb-8">
            Our URL shortener is designed to make link sharing and tracking
            effortless. Whether you’re a business looking to track click-through
            rates or an individual wanting to clean up your links, our service
            provides you with all the tools you need.
          </p>
          <p className="text-lg md:text-xl">
            We strive to offer a reliable, user-friendly platform that delivers
            accurate analytics, custom short URLs, and QR code generation. Our
            mission is to streamline your online experience and provide valuable
            insights.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jon Doe</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jhon Doe</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
