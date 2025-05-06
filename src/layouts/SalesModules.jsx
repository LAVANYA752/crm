import React from "react";
import './SalesModules.css'
import Button from "../component/ui/Button/Button";
import Icon from "../component/ui/svg/Icons";

const modulesData = {
  "In Need": [
    { icon:'sale' , title: "Sales", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'marketing' , title: "Marketing", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'service', title: "Service", description: "Unique and powerful suite sale run your entire business" },
  ],
  "Industry": [
    { icon: 'automotive' , title: "Automotive", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'realEstate' , title: "Real Estate", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'education' , title: "Education", description: "Unique and powerful suite sale run your entire business" },
  ],
  "Solution": [
    { icon: 'service' , title: "Project Management", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'deliveryManagment' , title: "Delivery Management", description: "Unique and powerful suite sale run your entire business" },
    { icon: 'loyaltyManagement' , title: "Loyalty Management", description: "Unique and powerful suite sale run your entire business" },
    {  icon: 'marketing' , title: "Professional Management", description: "Unique and powerful suite sale run your entire business" },
  ],
};

const Column = ({ title, items }) => (
  <div className="salesModuleListBlock">
    <div className='pb-5'>
      <Button color="primary" size="sm" variant="filled" >{title}</Button>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="ListItem">
            <div className="ListItemIcon">
               <Icon name={item.icon} />
            </div>
            <div className="ListItemContent pb-4">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const SalesModules = () => {
  return (
    <section className="salesModuleSection">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-10 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sales Automation Modules</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By A Company With The Long Term Vision To Transform The Way You Work.
            </p>
        </div>
        <div className="salesModuleContent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 salesModuleContentInner">
                {Object.entries(modulesData).map(([key, value]) => (
                <Column key={key} title={key} items={value} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SalesModules;
