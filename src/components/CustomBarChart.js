import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GradientColors = () => {
  return (
    <linearGradient id="barColorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E323FF" stopOpacity={1} />
      <stop offset="95%" stopColor="#7517F8" stopOpacity={1} />
    </linearGradient>
  );
};
const GradientColors2 = () => {
  return (
    <linearGradient id="barColorView2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FFD422" stopOpacity={1} />
      <stop offset="95%" stopColor="#FF7D05" stopOpacity={1} />
    </linearGradient>
  );
};

const CustomBarChart = () => {

  return (
    <div className=" w-full h-96 bg-bg rounded-lg py-8 px-6 custom-bar-chart">
      <div>
        <h2 className="text-white font-semibold text-2xl pl-8 m-0">BTC Minned</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stackOffset="none"
        >
          {/* <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322", borderRadius: "10px" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          /> */}
          <defs>
            <GradientColors />
          </defs>
          <defs>
            <GradientColors2 />
          </defs>
          <Legend verticalAlign="top" align="right" wrapperStyle={{ top: "-30px", color: "#fff", borderRadius: "9999px" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: 'rgba(245, 238, 254, 0.05)' }} />
          <Bar dataKey="pv" stackId="a" barSize={10} fill="url(#barColorView)"
            radius={[10, 10, 10, 10]} />
          <Bar dataKey="uv" stackId="a" barSize={10} fill="url(#barColorView2)" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}
export default CustomBarChart;