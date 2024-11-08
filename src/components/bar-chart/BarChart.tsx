"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", dp: 400, wd: 240 },
  { name: "Sun", dp: 300, wd: 140 },
  { name: "Mon", dp: 200, wd: 480 },
  { name: "Tue", dp: 278, wd: 390 },
  { name: "Wed", dp: 189, wd: 480 },
  { name: "Thu", dp: 239, wd: 380 },
  { name: "Fri", dp: 349, wd: 430 },
];

const BarChartItem: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: -5,
        }}
        barSize={15}
        barGap={4}
        barCategoryGap="20%"
      >
        <CartesianGrid
          vertical={false}
          horizontal={true}
          strokeDasharray="3 3"
        />
        <XAxis axisLine={false} dataKey="name" color="#718EBF" />
        <YAxis
          axisLine={false}
          domain={[0, 500]}
          ticks={[0, 100, 200, 300, 400, 500]}
          color="#718EBF"
        />
        <Tooltip />
        <Bar dataKey="dp" fill="#396AFF" radius={[10, 10, 0, 0]} />
        <Bar dataKey="wd" fill="#232323" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartItem;
