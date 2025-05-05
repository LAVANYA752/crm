import React from 'react'

import './Home.css'

import Navbar from '../features/Navbar'

import Button from '../component/ui/Button/Button'

import Icon from '../component/ui/svg/Icons'

import Award from './../assets/images/award.png'

import Banner from './../assets/images/hero_img.png'


const Home = () => {
  return (
    <section className='homeSectionContainer w-full relative'>
      <div className='container mx-auto px-4 md:px-12 homeSectionWrapper '>
        <header>
          <Navbar />
        </header>
        <section className='heroSection'>
          <div className='heroContentContainer'>
            <div className="heroContentWrapper">
              <h1 className="primaryText titleText">
                The CRM Platform Your Whole Business Will Love
              </h1>
              <p className="descriptionText secondaryText">
                Provide Excellent Customer Service. Answer More Tickets All-In-One Primarily Software.
              </p>
              <div className="flex gap-2 flex-col lg:flex-row">
                <Button size="lg" >Get Started</Button>
                <Button size="lg" variant="outline">How It Works</Button>
              </div>
            </div>  

            {/* Awards Section */}
            <div className='awardSection'>
              <div className='awardSectionWrapper'>
                <div className='leftPosition'>
                   <Icon name={'leaf'}/>
                </div>
                <div className="flex items-center gap-6 justify-center px-8">
                  <figure className='awardImage'>
                    <img src={Award} alt='Award Img'/>
                  </figure>
                  <div className='divider'></div>
                  <div className='flex flex-col items-center gap-1'>
                    <h3 className="text-xl font-bold primaryText">5 Star Awards</h3>
                    <p className="text-sm secondaryText">For Customer Services</p>
                    <div className="flex gap-1 mt-1">
                      {Array(5).fill(null).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div> 
                <div className='rightPosition'><Icon name={'leaf'}/></div>
              </div>
            </div>
           
           
          </div>
          <div className='heroImageContainer'>
               <div className='heroImageWrapper flex card-animation'>
                  {/* <div className='flex flex-col w-full'>
                    <img src={BannerImageOne} alt='BannerImageOne' className='img1'/>
                    <img src={BannerImageThree} alt='BannerImageThree' className='img2'/>
                  </div>
                  <div className='flex flex-col w-full'>
                    <img src={BannerImageTwo} alt='BannerImageTwo' className='img3'/> 
                    <img src={BannerImageFour} alt='BannerImageFour' className='img4'/>
                  </div> */}
                   <img src={Banner} alt='BannerImageFive'/>


               </div>
          </div>
        </section>
      </div>

    </section>
  )
}

export default Home