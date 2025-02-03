'use client';
import { useState } from "react";
import { Star, TrendingUp, Sparkles, Heart } from "lucide-react";
import Future from "./_component/Future";
import Holding from "./_component/Holding";
import Trend from "./_component/Trend";
import Card from "./_component/card/card";
import { cardData } from "../../data";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("trend");

  // Filter card data based on active component
  const filteredCardData = cardData.filter(card => card.category === activeComponent);

  return (
    <div className="bg-gradient-to-t from-violet-900 to-[#34033d] min-h-screen flex flex-col items-center">
      
      {/* Marquee Banner Section */}
      <div className="lg:w-[60%]%  w-full rounded-md bg-neutral-600 opacity-50 py-2 overflow-hidden mt-8">
        <div className="banner-content whitespace-nowrap animate-marquee">
          <span className="mx-4 text-xl text-black">🔥 Limited Time Offer - Get 50% Off on All Products! 🔥</span>
          <span className="mx-4 text-xl text-black">🎉 New Arrivals - Check Out Our Latest Collection! 🎉</span>
          <span className="mx-4 text-xl text-black">🚚 Free Shipping on Orders Over $50! 🚚</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center w-full mt-20 px-4 sm:px-8 md:px-16">
        <span className="flex flex-col items-center justify-center w-full py-2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center">Love Market Exchange</h1>
        </span>

        <span className="flex flex-col items-center justify-center w-full py-4">
          <div className="flex items-center">
            <Star className="mr-2 text-yellow-500" />
            <h2 className="font-light text-white">First Anniversary Special Report</h2>
            <Star className="ml-2 text-yellow-500" />
          </div>
        </span>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center justify-center w-full py-4">
        <span className="flex flex-col items-center justify-center w-full py-2">
          <div className="flex flex-wrap justify-center space-x-4 gap-4">
            <button
              onClick={() => setActiveComponent("trend")}
              className={`px-6 py-3 rounded-lg flex items-center ${
                activeComponent === "trend"
                  ? "text-violet-700 bg-white"
                  : "text-white bg-violet-500 hover:text-violet-700 hover:bg-white"
              }`}
              aria-label="View Trends"
            >
              <TrendingUp className="mr-2" />
              Trends
            </button>

            <button
              onClick={() => setActiveComponent("holding")}
              className={`px-6 py-3 rounded-lg flex items-center ${
                activeComponent === "holding"
                  ? "text-violet-700 bg-white"
                  : "text-white bg-violet-500 hover:text-violet-700 hover:bg-white"
              }`}
              aria-label="View Holdings"
            >
              <Sparkles className="mr-2" />
              Holding
            </button>

            <button
              onClick={() => setActiveComponent("future")}
              className={`px-6 py-3 rounded-lg flex items-center ${
                activeComponent === "future"
                  ? "text-violet-700 bg-white"
                  : "text-white bg-violet-500 hover:text-violet-700 hover:bg-white"
              }`}
              aria-label="View Future"
            >
              <Star className="mr-2" />
              Future
            </button>

            <button
              onClick={() => setActiveComponent("advance")}
              className={`px-6 py-3 rounded-lg flex items-center ${
                activeComponent === "advance"
                  ? "text-violet-700 bg-white"
                  : "text-white bg-violet-500 hover:text-violet-700 hover:bg-white"
              }`}
              aria-label="View Advanced Future"
            >
              <Heart className="mr-2" />
              Advanced Future
            </button>
          </div>
        </span>
      </div>

      {/* Dynamic Card Component */}
      <div className="flex flex-wrap justify-center w-full px-4 sm:px-8 md:px-16">
        {filteredCardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            subheading={card.subheading}
            bulletPoints={card.bulletPoints}
            icon={card.icon}
            image={card.image}
            active={card.active}
            number={card.number}
            textPad={card.textPad}
            steps={card.steps}
            progress={card.progress}
            badge={card.badge}
            badges={card.badges}
            percentage={card.percentage}
            activeComponent={activeComponent}
          />
        ))}
      </div>

      {/* Marquee Banner Section at the Bottom */}
      <div className="w-full sticky bottom-0 rounded-sm bg-neutral-500 opacity-50 py-2 overflow-hidden mt-8">
        <div className="banner-content whitespace-nowrap animate-marquee">
          <span className="mx-4 text-xl text-black">🔥 Limited Time Offer - Get 50% Off on All Products! 🔥</span>
          <span className="mx-4 text-xl text-black">🎉 New Arrivals - Check Out Our Latest Collection! 🎉</span>
          <span className="mx-4 text-xl text-black">🚚 Free Shipping on Orders Over $50! 🚚</span>
        </div>
      </div>
    </div>
  );
}
