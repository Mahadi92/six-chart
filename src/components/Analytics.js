
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

const useStyles = createUseStyles(() => ({
  container: {
    color: '#fff',
    padding: '1rem',
    transition: '0.3s ease-in-out',
    width: '1200px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
}));

function Analytics() {
  const classes = useStyles()
  const [data, setData] = useState(dataSet.Today);

  const fetchCustomData = (key) => {
    setData(dataSet[key]);
  };

  return (
    <div className={classes.container}>
      <h1>Analytics</h1>
      <DropdownSelector fetchCustomData={fetchCustomData} />
      <MyGraph data={data} />
    </div>
  );
}

export default Analytics;