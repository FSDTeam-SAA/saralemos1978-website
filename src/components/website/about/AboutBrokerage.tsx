import Image from 'next/image'
import React from 'react'

const AboutBrokerage = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-gray-800">Brokerage </span>
            <span className="text-orange-500">Services</span>
          </h2>

         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                {/* Image Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {/* Large left image */}
            <div className="col-span-2 row-span-2">
              <Image
                src="/about/brokerage.jpg"
                alt="Luxury yacht"
                width={392}
                height={542}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <p className="text-xs text-gray-600 mt-2 text-center">Luxury Charters</p>
            </div>

            {/* Top right images */}
            <div>
               <Image
                src="/about/brokerage2.jpg"
                alt="Luxury yacht"
                width={392}
                height={542}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div>
               <Image
                src="/about/brokerage4.jpg"
                alt="Luxury yacht"
                width={392}
                height={542}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
         

            {/* Bottom right images */}
            <div>
             <Image
                src="/about/brokerage2.jpg"
                alt="Luxury yacht"
                width={392}
                height={542}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            
            <div>
            <Image
                src="/about/brokerage5.jpg"
                alt="Luxury yacht"
                width={392}
                height={542}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Services Content */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Yacht Sales</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Whether you&apos;re looking to buy or sell a yacht, our experienced team will guide you through every step of
                the process. From market analysis to negotiation, we ensure you get the best deal possible.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Comprehensive market analysis</li>
                <li>• Professional yacht valuation</li>
                <li>• Extensive buyer network</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Charter Advisory</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Looking for the perfect yacht to charter for your next adventure? We&apos;ll help you find the ideal vessel
                that meets all your requirements and exceeds your expectations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Personalized yacht recommendations</li>
                <li>• Best available rates</li>
                <li>• 24/7 charter support</li>
              </ul>
            </div>
          </div>

         </div>


          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </section>
  )
}

export default AboutBrokerage