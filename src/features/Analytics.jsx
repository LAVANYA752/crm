import React, { useState } from 'react'
import Icon from '../component/ui/svg/Icons';
import User from "./../assets/images/profile.jpg";
import LineChart from './LineChart';
import CircleChart from './CircleChart';
import CategoryList from './CategoryList';
import TaskBarChart from './TaskBarChart';


const icons = [
    { id: 1, icon: 'dashboard' },
    { id: 2, icon: 'wallet' },
    { id: 3, icon: 'swap' },
    { id: 4, icon: 'chart' },
    { id: 5, icon: 'chat' },
    { id: 6, icon: 'file' },
    { id: 7, icon: 'logout' },
];

const Analytics = (isMobile) => {

    const [activeId, setActiveId] = useState(1);

    const handleClick = (id) => {
        setActiveId(id);
    };

    return (
        <div className='analyticsContainer grid'>
            <div className='analyticsDashboard h-full flex gap-5'>
                
                {
                    isMobile && 
            
                    <div className='asideMenu cardView h-full'>
                        {icons.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleClick(item.id)}
                                className={`asideMenuItem ${activeId === item.id && 'active'}`}
                            >
                                <Icon name={item.icon} />
                            </div>
                        ))}
                    </div>
                    }
                <div className='dashbordContent flex flex-col gap-6 w-full'>
                    <div className='dashbordHeader flex justify-between items-center w-full'>
                        <div className='flex gap-5'>
                            <h3 className='text-3xl font-bold primaryText'>Dashboard</h3>
                            {isMobile && 
                            <div className='searchPage flex gap-3 items-center'>
                                <Icon name='search' />
                                <input type='text' placeholder='Search here...' />
                            </div>}
                        </div>
                        {isMobile && 
                        <div class='flex gap-2'>
                            <div className='notificationItem flex items-center justify-center'>
                                <Icon name='notification' />
                            </div>
                            <div className='userProfile flex items-center justify-center'>
                                <img src={User} alt='User Profile' />
                            </div>
                        </div>}
                    </div>
                    <div className='flex gap-6 h-full flex-col md:flex-row'>
                        <div className='LeftAnalyticsPanel flex gap-6 flex-col'>
                            <div className='AnalyticalReportBlockPrimary cardView h-full'>
                                <div className='headerContent flex justify-between gap-3'>
                                    <h4 className='text-xl font-bold primaryText'>CRM Analytical Report</h4>
                                    <div>
                                        <Icon name='menuDot' className='size-6' />
                                    </div>
                                </div>
                                <div className='bodyContent my-6'>
                                    <LineChart />
                                </div>
                            </div>
                            <div className='AnalyticalReportBlockSecondary flex gap-6 h-full w-full'>
                                <div className='cardView w-full h-full'>
                                    <div className='headerContent flex justify-between gap-3'>
                                        <h4 className='text-xl font-bold primaryText'>Tsk Report</h4>
                                        <Icon name='menuDot' className='size-6' />
                                    </div>
                                    <div className='my-6 w-full'>
                                        <TaskBarChart />
                                    </div>

                                </div>
                                {/* <div className='cardView w-full h-full'>
                                    <div className='headerContent flex justify-between gap-3'>
                                        <h4 className='text-xl font-bold primaryText'>Revenue Graph</h4>
                                        <Icon name='menuDot' className='size-6' />
                                    </div>
                                    <div className='my-6 w-full'>
                                        <TaskBarChart />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='rightAnalyticsPanel cardView'>
                            <div className='headerContent flex justify-between gap-3'>
                                <h4 className='text-xl font-bold primaryText'>Daily Activities</h4>
                                <Icon name='menuDot' className='size-6' />
                            </div>
                            <div className='my-6'>
                                <CircleChart />
                            </div>
                            <div>
                                <CategoryList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics