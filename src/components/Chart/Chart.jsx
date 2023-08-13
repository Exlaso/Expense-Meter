import Chartbar from "./ChartBar";
import "./Chart.css";
import Card from "../UI/Card";
const Chart = (props) => {
  const datapointvalue = props.datapoints.map((data) => data.value);
   const totalmax = Math.max(...datapointvalue);

  return (
    <Card className="chart p-5 grid grid-cols-[repeat(10,minmax(0,1fr));] max-md:grid-cols-7 h-auto gap-1">
      {props.datapoints.map((dp) => {
        return (
          <Chartbar
            values={dp}
            maxvalue={totalmax}
            key={dp.label+Math.random()}
          />
        );
      })}
    </Card>
  );
};
export default Chart;
