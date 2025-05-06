
import Sprite from '../component/ui/svg/Sprite'
import Footer from '../features/Footer'
import Features from '../layouts/Features'
import Home from '../layouts/Home'
import Management from '../layouts/Management'
import SalesModules from '../layouts/SalesModules'
import Performance from '../layouts/Performance'
import TestimonialCarousel from '../layouts/TestimonialCarousel'
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
        <TestimonialCarousel />
        <Performance />
        <Footer />
      </main>
    </>

  )
}

export default Index