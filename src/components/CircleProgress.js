import { Progress } from 'antd';

const CircleProgress = () => {

  return <Progress
    type="circle"
    width={100}
    trailColor="rgb(0 0 0 / 0%)"
    strokeColor={{
      '0%': '#8AFF6C',
      '100%': '#02C751',
    }}
    percent={90}
  />;
};

export default CircleProgress;