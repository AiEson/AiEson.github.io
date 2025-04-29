import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import awards from '../../data/awards';

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Award className="mr-3" /> Awards & Honors
            </h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="text-2xl font-bold text-purple-600">{award.year}</div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {award.organization}
                      </motion.div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2">{award.name}</h3>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
