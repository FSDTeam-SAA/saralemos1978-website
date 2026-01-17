import React from 'react'

const HowLimePitch = () => {
  return (
    <section
  className="py-16 px-4 sm:px-6 lg:px-8 from-orange-50 to-white object-cover"
  style={{ backgroundImage: 'url("/about/limepitch.png")' }}
>
        <div className="container  mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="text-gray-800">How Lime Pitch </span>
              <span className="text-orange-500">Powers Holmes on Board</span>
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Our advanced platform streamlines yacht brokerage and charter management
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Smart Matching</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                AI-powered yacht matching that connects clients with perfect vessels for their needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Transparent Pricing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clear, competitive pricing without hidden fees or surprise charges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Easy Booking</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Simplified booking process with instant confirmations and secure payments.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-orange-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Expert Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                24/7 support from industry experts to ensure smooth charter experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowLimePitch