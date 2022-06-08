import { TinyLine } from "@ant-design/plots";

const LineChart = () => {
  const data = [
    0, 30, 25, 50, 100, 115, 100, 70, 30, 25, 0
  ];
  const config = {
    width: 150,
    height: 40,
    autoFit: false,
    data,
    smooth: true,
  };
  return <TinyLine {...config} />;
};

export default LineChart;