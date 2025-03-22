import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import computerPlant from "../assets/Square.png";

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-4 mb-6 shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-4xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex text-center">
        <motion.button
          className="text-green-600 font-medium rounded-sm bg-green-200 pl-4 pr-4 pt-1 pb-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See More Details
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Title Animation */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-green-600 uppercase mb-4 font-bold">OUR SERVICES</p>
        <h2 className="text-2xl font-bold text-6xl pl-8">
          <span className="text-gray-800">What do </span>
          <span className="text-orange-400">we do</span>
          <span className="text-gray-800">?</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Computer image */}
        <div className="lg:w-1/3 flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={computerPlant}
              alt="Eco-friendly Computer"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Right side - Service cards */}
        <div className="lg:w-2/3 space-y-4 gap-8">
          <ServiceCard
            title="GHG Accounting"
            description="We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our systems calculate and help align solutions to be a more carbon neutral system."
          />

          <ServiceCard
            title="Carbon Footprint Analysis"
            description="Analyze and optimize your carbon footprint with our cutting-edge reporting tools, ensuring a greener and more sustainable future."
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          className="rounded-full w-12 h-12 bg-gray-200 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Services;
