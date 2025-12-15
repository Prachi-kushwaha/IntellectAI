import React from 'react'
// import ShopifyMcp from '@/shopify_mcp'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UseCases from '@/components/UseCases'
import HowItWorks from '@/components/Howtowork'
import Footer from '@/components/Footer'

const Home = () => {
  return (
        <div className='bg-gray-950 min-h-screen text-white'>
             <Navbar/>
             <main className='pt-20'>
                <Hero/>
                <HowItWorks/>
                <UseCases/>
             </main>

             <Footer/>
        </div>

  )
}

export default Home