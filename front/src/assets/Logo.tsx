// Logo.tsx
import React from 'react';

const Logo: React.FC = () => (
    <svg width="100" height="100" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
        .paw { fill: #555; }
        .text { font-family: Arial, sans-serif; font-size: 48px; fill: #333; }
      `}
        </style>
        <circle className="paw" cx="60" cy="80" r="20" />
        <circle className="paw" cx="30" cy="50" r="10" />
        <circle className="paw" cx="60" cy="35" r="10" />
        <circle className="paw" cx="90" cy="50" r="10" />
        <circle className="paw" cx="75" cy="95" r="10" />
        <text x="120" y="90" className="text">Zoo</text>
    </svg>
);

export default Logo;
