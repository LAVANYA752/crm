import React from "react";
import './Performance.css'

const Performance = () => {

    return (
    <section className="performanceSection relative">
        <div className="container mx-auto px-4 md:px-12 h-full">
            <div className="flex gap-4 items-center flex-col md:flex-row h-full">
                <div className="w-full">
                    <div className="md:w-[80%]">
                        <h2 className="text-2xl font-bold mb-4 primaryText text-center md:text-left">How It Works</h2>
                        <p className="mb-8 secondaryText text-center md:text-left">
                            Unique and powerful suite of software to run your business, brought to you by vision to you work.
                        </p>

                        <div className='flex gap-4 flex-col'>
                            <div className="flex items-start gap-2 flex-col">
                                <div className='flex gap-4 items-center'>
                                    <div className="listBlock">01</div>
                                    <h3 className="font-semibold">Download Our App</h3>
                                </div>
                                <div className='pl-8'>
                                    <p className="text-gray-600">CentraHub CRM automatically logs in any reactions made by your leads, prospects.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 flex-col">
                                <div className='flex gap-4 items-center'>
                                    <div className="listBlock">02</div>
                                    <h3 className="font-semibold">List Your Company Detail</h3>
                                </div>
                                <div className='pl-8'>
                                    <p className="text-gray-600">Customers making it easier for your sales team members audience they make contact.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 flex-col">
                                <div className='flex gap-4 items-center'>
                                    <div className="listBlock">03</div>
                                    <h3 className="font-semibold">Enjoy Your Business</h3>
                                </div>
                                <div className='pl-8'>
                                    <p className="text-gray-600">Customers, making it easier for your sales team members audience before make contact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rightContainerParent">
                    <div className="flex flex-col items-center rightContainer relative">
                        <h2 className="text-2xl font-bold mb-4 primaryText text-center md:text-left">The Perfect CRM Software: Boost Your Field Sales Team’s Efficiency</h2>
                        <p className="mb-4 text-center md:text-left LinkText">
                        Depending on the Sales Approaches Standardize a Marketing Process
                        </p>
                        <p className="mb-8 secondaryText text-center md:text-left">
                        Unique and powerful suite of software to run your entire business, brought to you by a company.
                        </p>
                    </div>
                    <div className="backgroundImg"></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Performance