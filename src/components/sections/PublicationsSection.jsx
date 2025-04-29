import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, FileText, Code, Link, BookMarked, Copy, X } from 'lucide-react';
import publications from '../../data/publications';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const PublicationsSection = () => {
  const [expandedPublications, setExpandedPublications] = useState([]);
  const [bibtexModal, setBibtexModal] = useState({ show: false, content: '', title: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  const togglePublication = (index) => {
    setExpandedPublications(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  
  // 显示BibTeX弹窗
  const showBibtexModal = (bibtex, title) => {
    setBibtexModal({
      show: true,
      content: bibtex,
      title: title
    });
  };
  
  // 关闭BibTeX弹窗
  const closeBibtexModal = () => {
    setBibtexModal({
      show: false,
      content: '',
      title: ''
    });
    setCopySuccess(false);
  };
  
  // 复制BibTeX到剪贴板
  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtexModal.content);
      setCopySuccess(true);
      
      // 3秒后重置复制成功状态
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  // 解析文本中的Markdown样式标记、LaTeX公式和超链接
  const parseMarkdown = (text, supportLatex = false) => {
    if (!text) return '';
    
    // 处理加粗文本 (**text**) 和超链接 ([text](url))
    let parts = [];
    let lastIndex = 0;
    
    // 第一步：处理加粗文本和超链接
    const combinedRegex = /(?:\*\*(.*?)\*\*)|(?:\[(.*?)\]\((.*?)\))/g;
    let match;
    
    while ((match = combinedRegex.exec(text)) !== null) {
      // 添加匹配前的普通文本
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.substring(lastIndex, match.index)
        });
      }
      
      // 判断是加粗文本还是超链接
      if (match[1] !== undefined) {
        // 加粗文本
        parts.push({
          type: 'bold',
          content: match[1] // 提取**之间的内容
        });
      } else if (match[2] !== undefined && match[3] !== undefined) {
        // 超链接
        parts.push({
          type: 'link',
          content: match[2], // 提取[]之间的文本
          url: match[3]      // 提取()之间的URL
        });
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // 添加剩余的普通文本
    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex)
      });
    }
    
    // 第二步：如果支持LaTeX，处理每个部分中的LaTeX表达式
    if (supportLatex) {
      const processedParts = [];
      const latexRegex = /\$(.*?)\$/g;
      
      // 处理每个部分中的LaTeX
      for (const part of parts) {
        if (part.type === 'text') {
          const textContent = part.content;
          let textParts = [];
          let textLastIndex = 0;
          let latexMatch;
          
          // 在文本中查找LaTeX表达式
          while ((latexMatch = latexRegex.exec(textContent)) !== null) {
            // 添加LaTeX前的普通文本
            if (latexMatch.index > textLastIndex) {
              textParts.push({
                type: 'text',
                content: textContent.substring(textLastIndex, latexMatch.index)
              });
            }
            
            // 添加LaTeX表达式
            textParts.push({
              type: 'latex',
              content: latexMatch[1] // 提取$之间的内容
            });
            
            textLastIndex = latexMatch.index + latexMatch[0].length;
          }
          
          // 添加剩余的普通文本
          if (textLastIndex < textContent.length) {
            textParts.push({
              type: 'text',
              content: textContent.substring(textLastIndex)
            });
          }
          
          // 将解析后的文本部分添加到处理后的部分中
          processedParts.push(...textParts);
        } else {
          // 直接添加非文本部分（如加粗文本）
          processedParts.push(part);
        }
      }
      
      parts = processedParts;
    }
    
    // 将解析后的部分渲染为React元素
    return (
      <>
        {parts.map((part, index) => {
          if (part.type === 'bold') {
            return <strong key={index} className="text-blue-700">{part.content}</strong>;
          } else if (part.type === 'latex') {
            return <InlineMath key={index} math={part.content} />;
          } else if (part.type === 'link') {
            return <a key={index} href={part.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{part.content}</a>;
          } else {
            return <span key={index}>{part.content}</span>;
          }
        })}
      </>
    );
  };

  return (
    <section id="publications" className="py-20 relative">
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
              <BookOpen className="mr-3" /> Publications
            </h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => togglePublication(index)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{pub.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{parseMarkdown(pub.authors)}</p>
                      <p className="text-gray-500 text-sm">{pub.journal}</p>
                    </div>
                    {expandedPublications.includes(index) ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>

                  {expandedPublications.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-medium mb-2">Abstract</h4>
                        <p className="text-gray-600 mb-4">{parseMarkdown(pub.abstract, true)}</p>
                        
                        <div className="flex space-x-4">
                          {pub.links.paper && (
                            <a
                              href={pub.links.paper}
                              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="mr-1" size={16} /> Paper
                            </a>
                          )}
                          {pub.links.code && (
                            <a
                              href={pub.links.code}
                              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Code className="mr-1" size={16} /> Code
                            </a>
                          )}
                          {pub.links.project && (
                            <a
                              href={pub.links.project}
                              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Link className="mr-1" size={16} /> Project
                            </a>
                          )}
                          <button
                            onClick={() => showBibtexModal(pub.bibtex, pub.title)}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <BookMarked className="mr-1" size={16} /> BibTeX
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* BibTeX Modal with AnimatePresence for exit animations */}
      <AnimatePresence>        
      {bibtexModal.show && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={(e) => {
            // 只在点击背景时关闭，点击弹窗内容时不关闭
            if (e.target === e.currentTarget) {
              closeBibtexModal();
            }
          }}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl"
            onClick={e => e.stopPropagation()} // 防止点击弹窗时触发背景点击事件
          >
            <div className="flex items-center justify-between p-4 border-b">
              <motion.h3 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold truncate"
              >
                BibTeX: {bibtexModal.title}
              </motion.h3>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={closeBibtexModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={20} />
              </motion.button>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4"
            >
              <pre className="bg-gray-100 rounded p-3 text-sm font-mono whitespace-pre-wrap overflow-auto max-h-96">
                {bibtexModal.content}
              </pre>
            </motion.div>
            <div className="flex justify-end p-4 border-t">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyBibtex}
                className={`flex items-center px-4 py-2 rounded-md ${copySuccess ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              >
                {copySuccess ? (
                  <>
                    <span className="mr-2">已复制</span> ✓
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" /> 复制BibTeX
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
};

export default PublicationsSection;
