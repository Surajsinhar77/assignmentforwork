import { Earth, EarthIcon, Heart, Sparkles, Star, TrendingUp, WholeWord, WholeWordIcon, Workflow } from "lucide-react";

export const cardData = [
    {
      id: 1,
      title: "Next-Gen Stocks",
      subheading: "Future of AI and Automation",
      bulletPoints: [
        "Predicted 700% growth by 2030",
        "Tech stocks leading the charge",
        "Automation impacting global markets"
      ],
      textPad:"Investment Status: Target  Acquisition",
      icon: <Sparkles className="text-blue-400" />,
      image: "https://images.unsplash.com/photo-1601233743255-1e9a5a29fbf9",
      category: "future", // Added category field to filter by component
    },
    {
      id: 2,
      title: "Top Holding ",
      subheading: "Leaders in Global Finance",
      bulletPoints: [
        "Industry leaders with high growth potential",
        "Holding stocks in emerging markets",
        "Expanding portfolio globally",
      ],
      icon: <Sparkles className="text-blue-400" />,
      number:"+400",
      active: "  yearly growth",
      image: "https://images.unsplash.com/photo-1573497491208-b3f6024690b4",
      category: "holding", // Added category field to filter by component
    },
    {
      id: 3,
      title: "Future ",
      subheading: "Digital Assets and ",
      bulletPoints: [
        "Predicted to revolutionize financial markets",
        "Blockchain to secure global transactions",
        "Crypto adoption increasing worldwide",
      ],
      icon: <Heart className="text-red-400" />,
      image: "https://images.unsplash.com/photo-1601493228594-70930d5c56a7",
      category: "trend", // Added category field to filter by component
    },
    {
      id: 4,
      title: "Future of Crypto",
      subheading: "Digital Assets and Blockchain",
      bulletPoints: [
        "Predicted to revolutionize financial markets",
        "Blockchain to secure global transactions",
        "Crypto adoption increasing worldwide",
      ],
      icon: <Star className="text-yellow-400" />,
      image: "https://images.unsplash.com/photo-1601493228594-70930d5c56a7",
      category: "trend", // Added category field to filter by component
    },
    {
      id: 5,
      title: "Future of Ai",
      subheading: "Digital data and privacy",
      bulletPoints: [
        "Predicted to revolutionize financial markets",
        "Blockchain to secure global transactions",
        "Crypto adoption increasing worldwide",
      ],
      icon: <TrendingUp className="text-green-400" />,
      image: "https://images.unsplash.com/photo-1601493228594-70930d5c56a7",
      category: "trend", // Added category field to filter by component
    },
    {
      id: 6,
      title: "Top Holding ",
      subheading: "Leaders in Global Finance",
      bulletPoints: [
        "Industry leaders with high growth potential",
        "Holding stocks in emerging markets",
        "Expanding portfolio globally",
      ],
      icon: <EarthIcon className="text-green-400" />,
      number:"+300",
      active: "  yearly growth",
      image: "https://images.unsplash.com/photo-1573497491208-b3f6024690b4",
      category: "holding", // Added category field to filter by component
    },
    {
      id: 7,
      title: "Next-Gen Stocks",
      subheading: "Future of AI and Automation",
      bulletPoints: [
        "Predicted 700% growth by 2030",
        "Tech stocks leading the charge",
        "Automation impacting global markets"
      ],
      textPad:"Investment Status Top  Investment",
      icon: <EarthIcon className="text-green-400" />,

      image: "https://images.unsplash.com/photo-1601233743255-1e9a5a29fbf9",
      category: "future", // Added category field to filter by component
    },
    
    {
      id: 9,
      title: "Next-Gen Stocks",
      subheading: "Future of AI and Automation",
      bulletPoints: [
        "Predicted 700% growth by 2030",
        "Tech stocks leading the charge",
        "Automation impacting global markets"
      ],
      percentage:'30%',
      progress: "90",
      badge: "Thrill",
      badges:"Thrill",
      steps: [
        { label: "Planning", completed: true },
        { label: "Research", completed: true },
        { label: "Execution", completed: false },
        { label: "Achievement", completed: false },
      ],
      textPad:"Investment Status: Thrill  Investment",
      icon: <TrendingUp className="text-green-400" />,
      image: "https://images.unsplash.com/photo-1601233743255-1e9a5a29fbf9",
      category: "advance", // Added category field to filter by component
    },
    {
      id: 10,
      title: "Next-Gen Stocks",
      subheading: "Future of AI and Automation",
      bulletPoints: [
        "Predicted 700% growth by 2030",
        "Tech stocks leading the charge",
        "Automation impacting global markets"
      ],
      percentage:'60%',
      progress: "40",
      badge: "Thrill",
      badges:"Thrill",
      steps: [
        { label: "Planning", completed: true },
        { label: "Research", completed: true },
        { label: "Execution", completed: false },
        { label: "Achievement", completed: false },
      ],
      textPad:"Investment Status: Thrill  Investment",
      icon: <Sparkles className="text-green-400" />,
      image: "https://images.unsplash.com/photo-1601233743255-1e9a5a29fbf9",
      category: "advance", // Added category field to filter by component
    },
  ];

