import { Heart } from "lucide-react";

export default function Holding({data}) {
  return (
    <div className="mt-4 flex flex-col ">
      {/* <span className="flex"> */}
        {/* <Heart className="mr-2 text-red-900 bg-red-300 rounded-md" /> */}
        <span className="mb-2">
            {data.icon}
        </span>
        <div>
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="text-gray-400 ">{data.subheading}</p>
          <span className="flex items-center gap-1">
            <p className="text-green-500 ">

            {data.number}
            </p>
            {data.active}
          </span>
        </div>
      {/* </span> */}
    </div>
  );
}
