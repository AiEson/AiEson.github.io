import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // 直接插入 ClusterMaps 的 globe.js 脚本
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clstr_globe';
    script.src = 'https://clustrmaps.com/globe.js?d=0e6d1QaxPDH1qo5fZqCrL593x0bjGCG6HqQF3plgQP8';
    script.onerror = () => {
      console.error('Failed to load ClusterMaps widget');
    };
    const containerNode = mapContainerRef.current;
    if (containerNode) {
      containerNode.innerHTML = '';
      containerNode.appendChild(script);
    }
    return () => {
      if (containerNode) {
        containerNode.innerHTML = '';
      }
    };
  }, []);

  return (
    <footer className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        {/* Visitor Map - 直接插入脚本 */}
        <div className="flex justify-center mb-6">
          <div 
            ref={mapContainerRef}
            style={{ 
              width: '200px', 
              height: '200px', 
              margin: '0 auto'
            }}
          ></div>
        </div>
        <p>
          © {new Date().getFullYear()} Chunshi Wang. All rights reserved.
          <span className="mx-2">|</span>
          <a href="mailto:c.s.wang@foxmail.com" className="text-blue-600 hover:underline">
            Contact
          </a>
          <span className="mx-2">|</span>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
