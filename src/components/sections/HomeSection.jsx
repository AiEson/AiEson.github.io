import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, BookOpen } from 'lucide-react';
import profile from '../../data/profile';

// Helper function to parse text with {fig:filepath} format
const parseTextWithFigures = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  // Check if the text contains our custom format
  if (!text.includes('{fig:')) return text;
  
  // Split the text by the figure pattern
  const parts = text.split(/\{fig:([^}]+)\}/);
  
  // If there's only one part, return the original text
  if (parts.length === 1) return text;
  
  // Map through the parts and render images for the figure paths
  return parts.map((part, index) => {
    // Even indices are regular text, odd indices are figure paths
    if (index % 2 === 0) return part;
    
    // For odd indices, render an image with the path
    return (
      <img 
        key={`fig-${index}`}
        src={`${process.env.PUBLIC_URL}${part}`}
        alt="Icon"
        className="inline-block h-4 w-auto mr-1 align-text-bottom"
        onError={(e) => {
          console.error('Figure image failed to load:', part, e);
          e.target.style.display = 'none';
        }}
      />
    );
  });
};

// Helper function to parse markdown links [text](url)
const parseMarkdownLinks = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  // Check if the text contains markdown links
  if (!text.includes('[') || !text.includes('](')) return text;
  
  // Parse the text for markdown links [text](url)
  const parts = [];
  let lastIndex = 0;
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  let match;
  
  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex, match.index)
      });
    }
    
    // Add the link
    parts.push({
      type: 'link',
      content: match[1], // Text inside []
      url: match[2]      // URL inside ()
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.substring(lastIndex)
    });
  }
  
  // Render the parts
  return parts.map((part, index) => {
    if (part.type === 'text') {
      return part.content;
    } else if (part.type === 'link') {
      return (
        <a 
          key={`link-${index}`}
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {part.content}
        </a>
      );
    }
    return null;
  });
};

const HomeSection = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">  
              <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">{profile.name}</h1>
            <div className="flex items-center mb-4">
              <Mail className="mr-2" />
              <span>{profile.email}</span>
            </div>
            <div className="flex space-x-4 mb-8">
              <a href={profile.social.github} className="flex items-center text-blue-600 hover:underline">
                <Github className="mr-1" /> GitHub
              </a>
              <a href={profile.social.googleScholar} className="flex items-center text-blue-600 hover:underline">
                <BookOpen className="mr-1" /> Google Scholar
              </a>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">{edu.period}</p>
                  <p>{parseTextWithFigures(edu.institution)}, {parseMarkdownLinks(edu.degree)}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Research Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.researchInterests.map((interest) => (
                <span key={interest} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                <img 
                  src={`${process.env.PUBLIC_URL}${profile.avatar}`} 
                  alt="Chunshi Wang" 
                  className="w-64 max-w-full h-auto rounded-lg border-4 border-gray-300 shadow-lg"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.target.onerror = null;
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
