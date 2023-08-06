"use client"
import React, { useState } from 'react';
import SH2Text from './text/SH2Text';

const YouWillLearn = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const text = 
  "Triangle Sectioning: Why you should use it and how to determine the size\n" +
  "Application: Learn the difference between point work and dry brushing\n" +
  "Saturation: What are the 3 zones of saturation and why they matter\n" +
  "Tools: How to choose the right brushes and tools for your balayage technique\n" +
  "Application: Learn the difference between point work and dry brushing\n" +
  "Saturation: What are the 3 zones of saturation and why they matter\n" +
  "Tools: How to choose the right brushes and tools for your balayage technique";


  const lines = text.split('\n');
  const initialLineCount = 3; // Number of lines to show initially
  const initialLines = lines.slice(0, initialLineCount).join('<br />');
  const remainingLines = lines.slice(initialLineCount).join('\n');

  const gradientClass = expanded ? '' : 'bg-gradient-to-b from-black to-transparent';
  const buttonStyle = {
    marginTop: '1em',
    display: 'flex',
    alignItems: 'center',
  };

  const lineStyle = {
    flexGrow: 1,
    height: '1px',
    background: 'grey',
    marginLeft: '0.5em',
    marginRight: '0.5em',
  };

  return (
    <div className="pb-4">
      <div className="pt-4 pb-4">
        <SH2Text text="YOU WILL LEARN" color="black" />
      </div>

      <p
        className={`text-${gradientClass}`}
        dangerouslySetInnerHTML={{ __html: initialLines }}
      />

      {!expanded && remainingLines.trim().length > 0 && (
        <div style={buttonStyle}>
          <div style={lineStyle}></div>
          <div style={{ opacity: 0.5, textAlign: 'center' }}>
            <button onClick={toggleExpansion}>Read More</button>
          </div>
          <div style={lineStyle}></div>
        </div>
      )}

      {expanded && (
        <div
          style={{ marginTop: '1em' }}
          dangerouslySetInnerHTML={{ __html: remainingLines }}
        />
      )}
    </div>
  );
};

export default YouWillLearn;





// to do: dynamically pull in you will learn content. 