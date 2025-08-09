"use client";
import React, { useState, useMemo } from "react";

type DataSet = {
  label: string;
  color: string;
  values: number[];
};
const data: DataSet[] = [
  {
    label: "Team A",
    color: "oklch(0.696 0.17 162.48)",
    values: [90, 60, 80, 60, 50, 65],
  },
];

const axes: string[] = [
  "Frontend",
  "Backend",
  "UX/UI",
  "Tester",
  "Cloud",
  "IA",
];
const maxValue = 100;
const angleStep = (Math.PI * 2) / axes.length;
const SpiderChart = () => {
  const [activeDataSet, setActiveDataSet] = useState<DataSet | null>(null);

  const getPolygonPoints = (values: number[], scale = 1): string => {
    return values
      .map((value, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = (value / maxValue) * scale * 150;
        return `${radius * Math.cos(angle)},${radius * Math.sin(angle)}`;
      })
      .join(" ");
  };

  const gridPolygons = useMemo(() => {
    return [0.2, 0.4, 0.6, 0.8, 1].map((scale) =>
      getPolygonPoints(new Array(axes.length).fill(maxValue), scale)
    );
  }, [axes.length]);

  const handleMouseEnter = (dataset: DataSet) => {
    setActiveDataSet(dataset);
  };

  const handleMouseLeave = () => {
    setActiveDataSet(null);
  };

  return (
    <div className="w-full h-full p-5 mx-auto flex items-center justify-center bg-transparent rounded-xl shadow-lg">
      <div className="relative h-full w-full aspect-square max-w-2xl mx-auto">
        <svg
          viewBox="-200 -200 400 400"
          className="w-full h-full transform -rotate-90"
        >
          {/* Grid */}
          {gridPolygons.map((points, i) => (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="0.5"
              className="transform rotate-90"
            />
          ))}

          {/* Axes */}
          {axes.map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={150 * Math.cos(i * angleStep)}
              y2={150 * Math.sin(i * angleStep)}
              stroke="#cbd5e1"
              strokeWidth="0.5"
            />
          ))}

          {/* Data Polygons */}
          {data.map((dataset, idx) => (
            <g key={idx}>
              <polygon
                points={getPolygonPoints(dataset.values)}
                fill={dataset.color}
                fillOpacity={activeDataSet === dataset ? "0.6" : "0.2"}
                stroke={dataset.color}
                strokeWidth="2"
                className="transform rotate-90 transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(dataset)}
                onMouseLeave={handleMouseLeave}
              />
            </g>
          ))}
        </svg>

        {/* Axis Labels */}
        {axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const radius = 170;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-sm text-white/60 font-medium text-pretty max-w-10"
              style={{
                left: `${50 + (x / 400) * 100}%`,
                top: `${50 + (y / 400) * 100}%`,
              }}
            >
              {axis}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpiderChart;
