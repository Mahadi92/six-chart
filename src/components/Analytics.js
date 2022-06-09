
import { useState } from "react";
import { createUseStyles } from "react-jss"
import "antd/dist/antd.css";
import MyGraph from "./MyGraph";
import DropdownSelector from "./menu";
import dataSet from "./data";


// Sub Components
// import MyGraph from "./component/graph";
// import DropdownSelector from "./component/menu";
// import dataSet from "./component/data";


function Analytics() {
  const [data, setData] = useState(dataSet.Today);

  const fetchCustomData = (key) => {
    setData(dataSet[key]);
  };

  return (
    <div className="w-full h-96 rounded-lg bg-bg flex flex-col relative text-white pl-4 py-4 transition ease-in-out delay-150">
      <div className="flex justify-between pb-4 pr-4">
        <h1 className="text-white font-semibold text-2xl pl-8">Community Investments</h1>
        <DropdownSelector fetchCustomData={fetchCustomData} />
      </div>
      <MyGraph data={data} />
    </div>
  );
}

export default Analytics;