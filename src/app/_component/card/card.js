import AdvanceFuture from "../Advance";
import Future from "../Future";
import Holding from "../Holding";
import Trend from "../Trend";

export default function Card(props) {

  console.log(props.title)
  console.log(props.subheading)
  console.log(props.bulletPoints)
  console.log(props.icon)
  console.log(props.image)
  console.log(props.active)
  console.log(props.progress)

  return (
    <div className=" relative flex flex-col justify-center w-[80%] h-auto bg-purple-900 rounded-lg shadow-lg p-4 my-4">

{/* Percentage Badge - Only when AdvanceFuture is active */}
{props.activeComponent === "advance" && (
  <div className="absolute top-4 right-8 bg-neutral-900 opacity-80 text-white p-3 rounded-md text-sm font-semibold mt-4 flex items-center space-x-4">
    {/* Circle Progress Bar with smaller size */}
    <div className="relative w-12 h-12">
      <svg
        className="absolute top-0 left-0 transform -rotate-90"
        width="100%" height="100%" viewBox="0 0 36 36"
      >
        <path
          className="text-gray-400"
          fill="none"
          strokeWidth="3"
          stroke="currentColor"
          d="M18 2.0845A15.9155 15.9155 0 0 1 33.9155 18.0000A15.9155 15.9155 0 0 1 18 33.9155A15.9155 15.9155 0 0 1 2.0845 18.0000A15.9155 15.9155 0 0 1 18 2.0845"
        />
        <path
          className="text-violet-500"
          fill="none"
          strokeWidth="3"
          stroke="currentColor"
          strokeDasharray={`${props.percentage}, 100`}
          d="M18 2.0845A15.9155 15.9155 0 0 1 33.9155 18.0000A15.9155 15.9155 0 0 1 18 33.9155A15.9155 15.9155 0 0 1 2.0845 18.0000A15.9155 15.9155 0 0 1 18 2.0845"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-sm font-bold">{props.percentage}</span>
      </div>
    </div>

    {/* Badges Section - Horizontally aligned */}
    <div className="flex flex-col items-center ">
      {/* First Badge */}
      <span className="text-white text-md font-bold ">
        {props.badge}
      </span>
      {/* Second Badge */}
      <span className="text-gray-400 text-xs ">
        {props.badges}
      </span>
    </div>
  </div>
)}





      <img
        src="https://images.unsplash.com/photo-1737079026600-18f07b9dd0a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
        alt="Card Image"
        className="w-full h-[500px] object-cover rounded-lg"
      />

      {/* Render the selected component dynamically */}
      {props.activeComponent === "trend" && <Trend data={props} />}
      {props.activeComponent === "holding" && <Holding data={props} />}
      {props.activeComponent === "future" && <Future data={props} />}
      {props.activeComponent === "advance" && <AdvanceFuture data={props} />}
    </div>
  );
}



