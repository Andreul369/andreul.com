'use client';

import React, { useEffect, useRef, useState } from 'react';

// Custom throttle function
const throttle = (func, limit) => {
  let lastRan;
  return function (...args) {
    const now = Date.now();
    if (!lastRan || now - lastRan >= limit) {
      func(...args);
      lastRan = now;
    }
  };
};

const HoverEffectText = () => {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      setMouse({ x, y });

      // Update CSS variables for the flashlight effect
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const throttledMouseMove = throttle(onMouseMove, 10);

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full"
      data-spotlight
      ref={containerRef}
      style={{ overflow: 'hidden' }}
    >
      <div className="absolute inset-0" />

      <h1 className="relative z-20 text-[20vw] text-white">{`<andreul/>`}</h1>

      {/* Flashlight effect */}
      <div
        className="absolute"
        style={{
          transform: `translate3d(calc(var(--mouse-x, 0) - 35rem), calc(var(--mouse-y, 0) - 35rem), 0)`,
          position: 'absolute',
          filter: 'blur(100px)',
          width: '70rem',
          height: '70rem',
          aspectRatio: '1 / 1',
          borderRadius: '100%',
          transition: 'opacity 1s cubic-bezier(.165,.84,.44,1)',
          pointerEvents: 'none', // Prevent interference with mouse events
          background:
            'radial-gradient(circle at center, hsla(0, 0%, 100%, .2), hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, 0))',
        }}
      />
    </div>
  );
};

export default HoverEffectText;
