"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jul",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Oct",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function LineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis axisLine={false} dataKey="name" />
        <YAxis axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
