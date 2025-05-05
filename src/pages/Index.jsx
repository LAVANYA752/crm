
import Sprite from '../component/ui/svg/sprite'
import Footer from '../features/Footer'
import Features from '../layouts/Features'
import Home from '../layouts/Home'
import Management from '../layouts/Management'
import SalesModules from '../layouts/Salesmodules'
// import TestimonialCarousel from '../layouts/TestimonialCarousel'
import Trusted from '../layouts/Trusted'


const Index = () => {
  return (
    <>
      <Sprite />
      <main className='mainContainer'>
        <Home />
        <Features />
        <Management />
        <Trusted />
        <SalesModules />
        {/* <TestimonialCarousel /> */}
        <Footer />
      </main>
    </>

  )
}

export default Index