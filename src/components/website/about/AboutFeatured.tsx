import React from 'react'

const AboutFeatured = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-800">Featured </span>
            <span className="text-orange-500">Yacht Listings</span>
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Browse our curated selection of premium yachts available for charter or purchase in Southeast Asia.
          </p>

          {/* Yacht Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Yacht 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/about/featured.jpg" alt="Northsea 51 Boat" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Northsea 51 Boat</h3>
                <div className="text-xs text-gray-600 space-y-1 mb-4">
                  <p>Length: 51 ft</p>
                  <p>Type: Luxury Cruiser</p>
                  <p>Guests: 8</p>
                </div>
                <p className="text-orange-500 font-semibold text-sm">$450/day</p>
              </div>
            </div>

            {/* Yacht 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/about/featured2.jpg" alt="Pacific Dreams" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Pacific Dreams</h3>
                <div className="text-xs text-gray-600 space-y-1 mb-4">
                  <p>Length: 65 ft</p>
                  <p>Type: Motor Yacht</p>
                  <p>Guests: 12</p>
                </div>
                <p className="text-orange-500 font-semibold text-sm">$750/day</p>
              </div>
            </div>

            {/* Yacht 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/about/featured3.jpg" alt="Ocean Serenity" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Ocean Serenity</h3>
                <div className="text-xs text-gray-600 space-y-1 mb-4">
                  <p>Length: 48 ft</p>
                  <p>Type: Sailing Yacht</p>
                  <p>Guests: 6</p>
                </div>
                <p className="text-orange-500 font-semibold text-sm">$380/day</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              See More Listings
            </button>
          </div>
        </div>
      </section>
  )
}

export default AboutFeatured