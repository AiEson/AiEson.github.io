import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import news from '../../data/news';

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Newspaper className="mr-3" /> News
            </h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">{item.date}</p>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
