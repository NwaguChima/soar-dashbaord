"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ent", value: 400 },
  { name: "Invest", value: 300 },
  { name: "Expenses", value: 300 },
  { name: "Others", value: 200 },
];

const COLORS = ["#343C6A", "#396AFF", "#FC7900", "#232323"];

const RADIAN = Math.PI / 180;

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  name: string;
}

const renderCustomizedLabel: React.FC<CustomLabelProps> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const textAnchor = x > cx ? "start" : "end";
  const yOffset = 10;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={textAnchor}
      dominantBaseline="central"
      fontSize={12}
    >
      <tspan x={x + yOffset} y={y - yOffset} textAnchor={textAnchor}>
        {name}
      </tspan>
      <tspan x={x} y={y + yOffset} textAnchor={textAnchor}>
        {(percent * 100).toFixed(0)}%
      </tspan>
    </text>
  );
};

const PieChartItem: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartItem;
