import React from 'react';
import './Crm.css'
import image1 from "./../assets/images/crm_1.svg";
import image2 from "./../assets/images/crm_2.svg";
import image3 from "./../assets/images/crm_3.svg";
import image4 from "./../assets/images/crm_4.svg";
import image5 from "./../assets/images/crm_5.svg";
import image6 from "./../assets/images/crm_6.svg";
import image7 from "./../assets/images/crm_7.svg";

const crmIcons = [
  { icon: image1 },
  { icon: image2 },
  { icon: image3 },
  { icon: image4 },
  { icon: image5 },
  { icon: image6 },
  { icon: image7 },
];

const CRMSection = () => {
  return (
    <section className="w-full py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ways A Project Management Tool Can Help Your Team
          </h2>
          <p className="text-gray-600 mb-6">
            Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By A Company With The Long Term Vision To Transform The Way You Work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div>
              <h4 className="flex items-center gap-2 font-semibold mb-2">
                
                CRM Security
              </h4>
              <p className="text-gray-500 text-sm">Cards And Make More Sales While Chatting</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-semibold mb-2">
                
                Marketing Hub
              </h4>
              <p className="text-gray-500 text-sm">Show Off Your Goods In Elegant Product Cards And Mak.</p>
            </div>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md">Get Started</button>
        </div>

        {/* Right Graphic */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative  z-10 crmCircle w-[320px] h-[320px]">
            {/* Circular icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {crmIcons.map((item, index) => {
                  const angle = (360 / crmIcons.length) * index;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 120;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);

                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-center absolute crmCircleIcon`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`
                      }}
                    >
                      <img src={item.icon} alt='crm_image' className='w-20 h-20'/>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center CRM Circle */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-100 w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg">
              CRM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMSection;
