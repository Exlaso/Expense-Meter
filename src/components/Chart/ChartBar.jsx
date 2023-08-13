import { useEffect, useState } from "react";
import "./ChartBar.css";
const Chartbar = (props) => {
const [BarHeight, setBarHeight] = useState('0%')
 
useEffect(() => {
  if (parseInt(props.maxvalue) >= 0) {
    setBarHeight(Math.round((props.values.value / props.maxvalue) * 100) + "%") 
  }else{
    setBarHeight(0 + "%") 

  }
  return () => {
    console.log('unmount');
  }
}, [props.values.value,props.maxvalue])

 
  console.log(props.values.label+" Height:  ",BarHeight);

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 duration-300">
      <div className="h-full w-5 bg-gray-300 flex justify-end items-end rounded-full overflow-hidden min-h-[10vh] duration-300"  >
        <div
          className="w-full duration-300 bg-orange-700"
          style={{ height: BarHeight }}
        ></div>   
      </div>
      <div className="text-sm">{props.values.label}</div>
    </div>
  );
};
export default Chartbar;
