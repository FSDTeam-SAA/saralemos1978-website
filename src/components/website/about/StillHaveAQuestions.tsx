import React from 'react'

const StillHaveAQuestions = () => {
  return (
     <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-orange-500 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-800">Holmes on Board - </span>
            <span className="text-gray-600">Helping you navigate Asia&apos;s yachting world with confidence.</span>
          </h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Whether you have questions about yacht chartering, brokerage services, or our platform, our team of experts
            is here to help. Get in touch with us today and let us help you find your perfect yacht experience.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get In Touch
            </button>
          </div>

          {/* Decorative element */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              © 2026 Holmes on Board. All rights reserved. | Powered by Lime Pitch
            </p>
          </div>
        </div>
      </section>
  )
        }

export default StillHaveAQuestions