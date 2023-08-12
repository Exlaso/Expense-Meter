import "./ChartBar.css";
const Chartbar = (props) => {
  let barfillheight = "0%";

  if (props.maxvalue > 0) {
    barfillheight =
      Math.round((props.values.value / props.maxvalue) * 100) + "%";
  }

  return (
    <div className="py-2 flex justify-center flex-col items-center gap-2">
      <div className="h-full w-5 bg-gray-300 flex justify-end items-end rounded-full overflow-hidden min-h-[10vh]"  >
        <div
          className="chart-bar__fill"
          style={{ height: barfillheight }}
        ></div>   
      </div>
      <div className="text-sm">{props.values.label}</div>
    </div>
  );
};
export default Chartbar;
