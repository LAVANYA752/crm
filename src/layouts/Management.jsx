import React from 'react'
import image from "./../assets/images/management.png";
import './Management.css'


const Management = () => {
    return (
        <section className='managementSection'>
            <div className='container mx-auto px-4 md:px-12'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0'>
                    <div className='w-full flex items-center'>
                        <figure className='managementImage'>
                           <img src={image} alt='Management Image' className='h-full'/>
                        </figure>
                    </div>
                    <div className="w-full flex items-center managementContent">
                        <div className="md:pl-10">
                            <h2 className="text-2xl font-bold mb-4 primaryText text-center md:text-left">Allocate Leads And Simplify Lead Management</h2>
                            <p className="mb-8 secondaryText text-center md:text-left">
                                Unique And Powerful Suite Of Software To Run Your Entire Business, Brought To You By A Company With The Long Term Vision To Transform The Way You Work.
                            </p>
                             <div className='flex gap-4 flex-col'>
                                <div className="flex items-start gap-2 flex-col">
                                    <div className='flex gap-4 items-center'>
                                        <div className="dotBlock"></div>
                                        <h3 className="font-semibold">Lead Generation</h3>
                                    </div>
                                    <div className='pl-8'>
                                        <p className="text-gray-600">Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 flex-col">
                                    <div className='flex gap-4 items-center'>
                                        <div className="dotBlock"></div>
                                        <h3 className="font-semibold">Team Email</h3>
                                    </div>
                                    <div className='pl-8'>
                                        <p className="text-gray-600">Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Management