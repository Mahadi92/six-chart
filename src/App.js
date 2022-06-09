import "./styles/global.css";
import Analytics from "./components/Analytics";
import { IoMdArrowDropup } from "react-icons/io"
import CircleProgress from "./components/CircleProgress";
import LineChart from "./components/LineChart";
import CustomBarChart from "./components/CustomBarChart";

function App() {
  return (
    <div className="container m-auto">
      {/* <Analytics /> */}


      <div className="flex items-center justify-center flex-wrap gap-5 py-10">
        {/* ----------------- First Card ----------------- */}
        <div className="w-72 bg-bg-primary rounded-lg py-4 px-6 text-white">
          <span className="tracking-wider text-gray-300">Total earning</span>
          <div className="flex space-x-1">
            <h2 className="font-bold text-3xl text-white py-1 m-0">$12,875</h2>
            <div className="text-electricGreen flex items-end">
              <IoMdArrowDropup size="20px" />
              <span>10%</span>
            </div>
          </div>
          <span className="text-xs text-gray-400 tracking-wide	r">Compared to $21,490 last year</span>

        </div>

        {/* ----------------- Second Card ----------------- */}
        <div className="w-72 bg-bg-primary rounded-lg py-4 px-6 text-white">
          <span className="tracking-wider text-gray-300">Total BTC Mined</span>
          <div className="flex space-x-1">
            <h2 className="font-bold text-3xl text-white py-1 m-0">0.82875</h2>
            <div className="text-electricGreen flex items-end">
              <IoMdArrowDropup size="20px" />
              <span>10%</span>
            </div>
          </div>
          <span className="text-xs text-gray-400 tracking-wide	r">Compared to $21,490 last year</span>
        </div>

        {/* ----------------- Third Card ----------------- */}
        <div className="w-72 bg-bg-primary rounded-lg py-4 px-3 text-white">
          <div className="flex justify-between">
            <p className="m-0 font-semibold tracking-wide">Live Hash Rate</p>
            <span className="text-gray-500">98%</span>
          </div>
          <div className="flex items-end pt-2">
            <h4 className="-mb-1 -mr-1 text-white text-xl font-thin">4.9PH</h4>
            <div>
              <LineChart />
            </div>
            <span className="-mb-1 -ml-1.5">0</span>
          </div>
        </div>


        {/* ----------------- Fourth Card ----------------- */}
        <div className="w-72 bg-bg-primary rounded-lg py-4 px-6 text-white flex items-center space-x-4">
          <div>
            <CircleProgress />
          </div>
          <div className="flex flex-col text-xl font-thin">
            <span>9,999</span>
            <span>NFTs Sold</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Analytics />
      </div>

      <div className="py-10">
        <CustomBarChart />
      </div>

    </div>
  );
}

export default App;
