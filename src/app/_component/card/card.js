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

    return (
      <div className="flex flex-col justify-center w-[80%] h-auto bg-purple-900 rounded-lg shadow-lg p-4 my-4">
        <img
          src="https://images.unsplash.com/photo-1737079026600-18f07b9dd0a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
          alt="Card Image"
          className="w-full h-[500px] object-cover rounded-lg"
        />
  
        {/* Render the selected component dynamically */}
        {props.activeComponent === "trend" && <Trend data={props}  />}
        {props.activeComponent === "holding" && <Holding  data={props} />}
        {props.activeComponent === "future" && <Future data={props} />}
      </div>
    );
  }
  


