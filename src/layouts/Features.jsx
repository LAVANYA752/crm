import React from 'react'
import Icon from '../component/ui/svg/Icons';

import './Features.css'

const Features = () => {
  const features = [
    {
      icon: <Icon name='setting'/>,
      title: "Powerful Settings",
      description: "Provide Excellent Customer Service. Answer More Tickets."
    },
    {
      icon: <Icon name='user'/>,
      title: "User Friendly",
      description: "Use Timeline To Plan Projects Right How The Pieces Fit Together."
    },
    {
      icon: <Icon name='platform'/>,
      title: "Integrated Platform",
      description: "Vivamus Massa Eleifend Etiam Neque Odio Feugiat Dolor Est."
    }
  ];

  return (
    <section className='featureSection'>
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-bold mb-4 primaryText titleText text-3xl">Explore Premium Features</h2>
          <p className="max-w-2xl mx-auto descriptionText secondaryText">
            Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By A
            Company With The Long Term Vision To Transform The Way You Work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cardBlock">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cardItem transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;