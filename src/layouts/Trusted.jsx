import React from 'react'
import "./Trusted.css";
import Icon from '../component/ui/svg/Icons';
import Analytics from '../features/Analytics';
import useMediaQuery from '../component/MediaQuery';



const brands = [
    { name: "Cross-xy", logo: 'Xy' },
    { name: "Bittorent", logo: "Bt" },
    { name: "Us", logo: "Bt" },
    { name: "Rand", logo: "R" },
    { name: "Bitmax", logo: "Bx" },
    { name: "Target", logo: "Xy" },
    { name: "Modern Crypto", logo: "Bt" },
    { name: "Discord", logo: "Xy" },
    { name: "Up Shot", logo: "R" },
    { name: "Salebin", logo: "Bx" },
    { name: "Kotak", logo: "Xy" },
    { name: "Unzo", logo: "Bt" },
    { name: "Unzo", logo: "Bx" }
];

const Trusted = () => {
    const row1 = brands.slice(0, 4);
    const row2 = brands.slice(4, 9);
    const row3 = brands.slice(9, 13);

    const allRows = [row1, row2, row3];

    const isMobile = useMediaQuery("(min-width: 768px)")


    return (
        <section className='trastedBySection'>
            <div className="container mx-auto px-4 md:px-12 ">
                <div className='brandItemsSection'>
                    <div className='text-center'>
                        <h2 className="text-3xl font-bold mb-4 primaryText">
                            Trusted By More Than 75 Million Users Globally
                        </h2>
                        <p className="secondaryText max-w-2xl mx-auto mb-12">
                            Unique And Powerful Suite Of Software To Run Your Entire Business,
                            Brought To You Transform The Way You Work.
                        </p>
                    </div>
                    <div className='brandItemsBlock'>
                        {allRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`brandItemsContainer grid  ${row.length === 5
                                    ? "grid-cols-2 md:grid-cols-5"
                                    : "grid-cols-2 md:grid-cols-4"
                                    }`}
                            >
                                {row.map((brand, index) => (
                                    <div key={index} className="flex items-center justify-center px-8 brandItems"
                                    >
                                        <Icon name={brand.logo} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='analyticsSection'> 
                    <div className='analyticsBanner'>
                        <div className='detailBlock flex gap-10 flex-col md:flex-row text-center md:text-left'>
                            <div className='detailContent w-full'>
                                <h3 className='text-2xl font-bold mb-4'>Sell | Serve | Automate</h3>
                                <p className='text-xs'>Boost enrolment and manage student lifecycle with our 360° CRM</p>
                            </div>
                            <div className='detailAddress w-full'>
                                <p className='text-xs mb-2'>*Your Business Email Address</p>
                                <div className='mailDetail flex gap-2'>
                                    <div className='inputField'>
                                        <input type="text" placeholder='Email' />
                                    </div>
                                    <button>Try Now</button>
                                </div>
                            </div>
                        </div>
                        <Analytics isMobile={isMobile}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trusted