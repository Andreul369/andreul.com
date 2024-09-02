'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div className="absolute bottom-0 left-0 h-full w-full">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%" stopColor={'var(--red-500)'} />
                <stop offset="25%" stopColor={'var(--red-500)'} />
                <stop offset="50%" stopColor={'var(--blue-500)'} />
                <stop offset="75%" stopColor={'var(--cyan-500)'} />
                <stop offset="100%" stopColor={'var(--violet-500)'} />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="50%"
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: 'easeOut' }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>
        <text
          x="50%"
          y="100%"
          textAnchor="middle"
          dominantBaseline="text-after-edge"
          strokeWidth="0.3"
          dy="0.3em"
          className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800  "
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>

        <motion.text
          x="50%"
          y="100%"
          textAnchor="middle"
          dominantBaseline="text-after-edge"
          strokeWidth="0.3"
          dy="0.3em"
          className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1000,
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
          }}
        >
          {text}
        </motion.text>

        {/* asta are hover effectul, lumineaza literele cu culoare */}
        <text
          x="50%"
          y="100%"
          textAnchor="middle"
          dominantBaseline="text-after-edge"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          dy="0.3em"
          mask="url(#textMask)"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
