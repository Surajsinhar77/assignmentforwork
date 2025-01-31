import { EarIcon } from "lucide-react";

export default function AdvanceFuture({ data, percentage }) {
    return (
        <div className="">

            {/* Icon & Title Section */}
            <div className="flex items-center mt-4 space-x-4">
                <div className="mr-3 bg-red-400 text-white p-2 rounded-lg flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10">
                    {data.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold sm:text-lg">{data.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-xs">{data.subheading}</p>
                </div>
            </div>

            {/* Progress Bar with Percentage Number */}
            <div className="mt-4 mx-6 sm:mx-4">
                <p className="text-gray-300 text-sm mb-1">Progress</p>
                <div className="relative w-full bg-gray-600 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-violet-600 to-pink-800 h-2 rounded-full"
                        style={{ width: `${data.progress}%` }}
                    />
                    <span className="absolute top-[-20px] right-0 text-white text-xs font-bold">
                        {data.progress}%
                    </span>
                </div>
            </div>

            <div className="mt-1 p-2 ml-6 sm:ml-4">

                {/* Step Indicators */}
                <ul className="mt-4">
                    {data.steps.map((step, index) => (
                        <li key={index} className="flex items-center my-2">
                            <span
                                className={`w-6 h-6 mr-3 rounded-full ${step.completed ? "bg-blue-500" : "bg-gray-500 blur-sm"
                                    }`}
                            />
                            <span className={step.completed ? "text-white" : "text-gray-500"}>
                                {step.label}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="bg-gradient-to-r from-violet-500 to-blue-900 w-full sm:w-[400px] mt-4 rounded-full mr-2 flex text-center">
                    <span className="text-white p-2 w-full sm:w-auto text-sm sm:text-base">
                        {data.textPad}
                    </span>
                    <span className="text-center flex items-center p-2">
                        {data.icon}
                    </span>
                </div>
            </div>

        </div>
    );
}
