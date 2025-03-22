import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import heroImage from "../assets/Rectangle.png";

const Hero = () => {
  return (
    <section className="pt-10 pb-4 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-4 py-1 bg-gray-800 text-white rounded-full mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
           ✨ Let's save our environment
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Optimize your eco reporting with
          </motion.h1>
          <motion.div
            className="bg-orange-400 text-white lg:text-6xl md:text-3xl font-bold px-4 py-2 rounded-full inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            CARBON CRUNCH
          </motion.div>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            100% Accurate Carbon Calculations. Trusted by Industry Leaders.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <motion.button
              className="py-2 px-4 bg-white border border-green-500 text-green-500 rounded-lg hover:bg-green-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Free Calculator
            </motion.button>
            <motion.button
              className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image with Parallax Effect */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            whileHover={{ scale: 1.05 }} // Slight zoom on hover
          >
            <motion.img
              src={heroImage}
              alt="Green Earth"
              className="rounded-lg object-cover shadow-lg"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
