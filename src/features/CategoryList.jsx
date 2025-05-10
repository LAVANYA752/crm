import React from "react";
import Icon from "../component/ui/svg/Icons";

const categories = [
  {
    iconBg: "bg-indigo-500",
    icon: "game", 
    title: "Entertainment",
    percentage: 40,
  },
  {
    iconBg: "bg-pink-400",
    icon: "send",
    title: "Travel",
    percentage: 35,
  },
  {
    iconBg: "bg-cyan-400",
    icon: "bag",
    title: "Shopping",
    percentage: 25,
  },
];

export default function CategoryList() {
  return (
    <div className="">
      {categories.map((category, idx) => (
        <div key={idx} className="flex items-center justify-between mb-6 last:mb-0">
          <div className="flex items-center">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${category.iconBg}`}>
               <Icon name={category.icon} className="size-6" />
            </div>
            <div className="ml-4">
              <div className="text-gray-400 text-sm">{category.title}</div>
              <div className="text-black text-xl font-semibold">{category.percentage}%</div>
            </div>
          </div>
            <Icon name='download' className="size-6"/>
        </div>
      ))}
    </div>
  );
}
