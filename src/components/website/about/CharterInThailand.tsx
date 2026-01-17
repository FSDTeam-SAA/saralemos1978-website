import React from 'react'

const CharterInThailand = () => {
  return (
         <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-orange-500">Charter</span> in <span className="text-gray-800">Thailand</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Thailand is one of the most stunning and sought-after yacht charter destinations in Southeast Asia. With
                its crystal-clear waters, pristine islands, and vibrant culture, it&apos;s the perfect place for an
                unforgettable yachting experience.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                From the famous Phuket region to the hidden gems of the Andaman Sea, we offer a wide range of yachts
                suitable for every kind of charter experience. Whether you&apos;re looking for a romantic getaway, a family
                adventure, or a corporate retreat, Thailand has it all. Our local expertise ensures you&apos;ll have the best
                charter experience possible, with insider knowledge of the best anchorages, restaurants, and
                attractions.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Explore Thailand Charters
              </button>
            </div>

            <div className="flex-shrink-0 w-96 h-80">
              <img
                src="/thailand-phuket-aerial-view.jpg"
                alt="Thailand charter view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default CharterInThailand