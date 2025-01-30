import { Heart } from "lucide-react";


// const futureData =[
//     {
//         id: 1,
//         title: "Next-Gen Stocks",
//         description: "Predicted 700% growth by 2030 with AI and automation leading the way.",
//         icon: <TrendingUp className="text-green-400" />,
//         image: "https://images.unsplash.com/photo-1601233743255-1e9a5a29fbf9"
//       },
      
// ]

export default function Future({data}) {
  return (
    <div className="mt-4 flex flex-col ">
      <span className="">
        {/* <Heart className="mr-2 text-red-900 bg-red-300 rounded-md" /> */}
        <span className="mb-2">
            {data.icon}
        </span>
        <div >
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="text-gray-400 text-foreground font-light">{data.subheading}</p>
         
        </div>
        
      </span>
      <span className="bg-gray-600  w-full p-2 mt-2 rounded-sm">
            {data.textPad}
          </span>
    </div>
  );
}
