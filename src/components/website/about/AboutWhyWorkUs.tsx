import { ChevronRight } from 'lucide-react'
import React from 'react'

const AboutWhyWorkUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="text-gray-800">WHY WORK </span>
              <span className="text-orange-500">WITH HOLMES ON BOARD</span>
            </h2>
          </div>

          <div className="grid grid-cols-5 gap-8">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-3">1</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Industry Expertise</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                15+ years in the Southeast Asian yacht industry with deep knowledge and connections.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>

            {/* Reason 2 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-3">2</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Personalized Service</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every client receives tailored attention and expert guidance for their unique needs.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>

            {/* Reason 3 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-3">3</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Trusted Network</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Extensive connections with yacht owners, charter companies, and industry leaders.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-3">4</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Market Knowledge</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Up-to-date market insights and pricing data to ensure competitive deals.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>

            {/* Reason 5 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-3">5</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Customer Focused</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your satisfaction is our priority, from initial consultation to final transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutWhyWorkUs