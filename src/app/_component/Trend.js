import { Dot, Heart } from "lucide-react";

export default function Trend({ data }) {
  return (
    <div className="mt-4 flex flex-col ">
      <span className="flex ">
        <span className="mr-2 bg-red-400  text-red-500 rounded-md w-8 h-8 flex items-center justify-center">
          {data.icon}
        </span>


        <div>
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="text-gray-200 font-light">{data.subheading}</p>
          {/* Render bullet points */}
          <ul className="mt-2 text-white">
            {data.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center ">
                {/* <Dot className="text-green-500 border w-4 h-4"/> */}
                <span className="bg-green-500 w-2 h-2 mr-2 rounded-full" />

                {point}
              </li>
            ))}
          </ul>
        </div>
      </span>
    </div>
  );
}
