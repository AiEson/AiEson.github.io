import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Create a fixed size iframe to contain the ClusterMaps widget
    const iframe = document.createElement('iframe');
    iframe.style.width = '200px';
    iframe.style.height = '200px';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    
    // Store a reference to the DOM node
    const containerNode = mapContainerRef.current;
    
    // Append the iframe to our container div
    if (containerNode) {
      containerNode.innerHTML = '';
      containerNode.appendChild(iframe);

      // Set up the content for the iframe with the ClusterMaps script
      const iframeContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { margin: 0; padding: 0; overflow: hidden; width: 200px; height: 200px; }
            #map-container { width: 200px; height: 200px; }
          </style>
        </head>
        <body>
          <div id="map-container">
            <script type="text/javascript" id="clstr_globe" src="https://clustrmaps.com/globe.js?d=0e6d1QaxPDH1qo5fZqCrL593x0bjGCG6HqQF3plgQP8" onerror="console.error('Failed to load ClusterMaps widget')"></script>
          </div>
        </body>
        </html>
      `;
      
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(iframeContent);
        iframe.contentWindow.document.close();
      }
    }

    return () => {
      // Use the stored reference in the cleanup function
      if (containerNode) {
        containerNode.innerHTML = '';
      }
    };
  }, []);

  return (
    <footer className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        {/* Visitor Map - Contained in a styled div with fixed width & height */}
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
