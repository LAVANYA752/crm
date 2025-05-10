import React, { useEffect, useRef, useState } from 'react'
import image from "./../assets/images/management.png";
import './Management.css'
import {
    Bar,
    Line,
    Pie
} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import Icon from '../component/ui/svg/Icons';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);


const icons = [
    { id: 1, icon: 'add' },
    { id: 2, icon: 'calendar' },
    { id: 3, icon: 'tick' },
    { id: 4, icon: 'tool' },
];


const Management = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const ctx = chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(0,194,255,0.5)');
        gradient.addColorStop(1, 'rgba(0,194,255,0)');

        chart.data.datasets[0].backgroundColor = gradient;
        chart.update();
    }, []);


    const barData = [
        { label: "Lead", value: 80, color: "#00CFE8" },
        { label: "Qualification", value: 45, color: "#F5B74F" },
        { label: "Validation", value: 90, color: "#7367F0" },
        { label: "Supply", value: 60, color: "#EA5455" },
    ];

    const lineData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Number of Leads',
            data: [30, 15, 40, 60, 50, 10, 5],
            fill: true,
            backgroundColor: (ctx) => {
                const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, 'rgba(0,194,255,0.6)');
                gradient.addColorStop(1, 'rgba(255,255,255,0)');
                return gradient;
            },
            borderColor: '#00C2FF',
            pointBorderColor: '#00C2FF',
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBorderWidth: 2,
            tension: 0.4,

        }]
    };

    const pieData = {
        labels: ['A', 'B'],
        datasets: [{
            data: [30, 70],
            backgroundColor: (context) => {
                const { chart, dataIndex } = context;
                const ctx = chart.ctx;

                if (dataIndex === 0) {
                    return '#A770F0';
                } else if (dataIndex === 1) {
                      const gradient = ctx.createLinearGradient(0, 0, 200, 200);
                      gradient.addColorStop(0, 'rgb(0,194,255)');
                      gradient.addColorStop(.7, 'rgb(164, 229, 248)');
                      gradient.addColorStop(.9, 'rgb(0,194,255)');

                    // const gradient = ctx.createLinearGradient(0, 0, 200, 200);

                    // // 0% to 70% — Dark Blue
                    // gradient.addColorStop(0, 'rgb(0,194,255)');
                    // gradient.addColorStop(0.7, 'rgb(0,194,255)');

                    // // 70% to 90% — Light Blue
                    // gradient.addColorStop(0.7, 'rgb(164,229,248)');
                    // gradient.addColorStop(0.9, 'rgb(164,229,248)');

                    // // 90% to 100% — Dark Blue
                    // gradient.addColorStop(0.9, 'rgb(0,194,255)');
                    // gradient.addColorStop(1, 'rgb(0,194,255)');
                    return gradient;
                }
            },

            // backgroundColor: ['#A770F0', '#00C2FF'],
            borderWidth: 3
        }]
    };

    const [animatedValues, setAnimatedValues] = useState(
        barData.map(() => 0)
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValues(barData.map(item => item.value));
        }, 300);
        return () => clearTimeout(timer);
    }, []);


    const [activeId, setActiveId] = useState(3);

    const handleClick = (id) => {
        setActiveId(id);
    };

    return (
        <section className='managementSection'>
            <div className='container mx-auto px-4 md:px-12'>
                <div className='w-full  flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0'>
                    <div className='w-full flex items-center'>
                        <div className='managementAnalytics w-full'>
                            <div className='analyticsBlock cardBlock'>
                                <h3 className="text-md font-semibold mb-3">Sale Analytics</h3>
                                <div className='flex flex-col gap-3'>
                                    {barData.map((item, index) => (
                                        <div key={item.label} className="progressRow flex gap-3 items-center">
                                            <span className="label w-[4rem]">{item.label}</span>
                                            <div className="progressBar">
                                                <div
                                                    className="progressFill"
                                                    style={{
                                                        backgroundColor: item.color,
                                                        width: `${animatedValues[index]}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="percent">{item.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='leadeDataBlock justify-between items-center'>
                                <div className='lineChartBlock cardBlock'>
                                    <h3 className="text-md font-semibold mb-3">Number of leads</h3>
                                    <div className='responsiveChart relative'>
                                        <h2 className='text-lg textBlock'>85 <span className='text-xs'> this week</span></h2>
                                        <Line data={lineData} options={{
                                            responsive: true,
                                            plugins: {
                                                legend: { display: false },
                                            },
                                            scales: {
                                                x: {
                                                    grid: { display: false },
                                                    border: { display: false },
                                                    ticks: { display: false }
                                                },
                                                y: {
                                                    grid: { display: false },
                                                    border: { display: false },
                                                    ticks: { display: false }
                                                },
                                            },
                                        }} />
                                    </div>
                                </div>
                                <div className='pieChartBlock cardBlock'>
                                    <Pie data={pieData} options={{
                                        responsive: true, plugins: { legend: { display: false } }
                                    }} />
                                </div>
                            </div>
                            <div className='taskManagerBlock cardBlock flex gap-4 items-center justify-between'>
                                <h3 className="text-md font-semibold">Task Assigned to me</h3>
                                <div className='flex items-center gap-3 managementTool'>
                                    {icons.map((item) => (
                                        <figure
                                            key={item.id}
                                            onClick={() => handleClick(item.id)}
                                            className={`managementToolIcon ${activeId === item.id && 'active'}`}
                                        >
                                            <Icon name={item.icon} />
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>
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